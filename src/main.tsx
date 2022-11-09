// Copyright (C) 2022 Felix Handschuh, Tobias Schwerdtfeger
//
// This file is part of Scrum-A-Lot.
//
// Scrum-A-Lot is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Scrum-A-Lot is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Scrum-A-Lot.  If not, see <http://www.gnu.org/licenses/>.

/** @jsx figma.widget.h */

import { once, showUI } from '@create-figma-plugin/utilities'
import { WidgetLogo } from './logo'
import {
  VotingOptions,
  UserVote,
  SetVotingEvent,
  SetVoteEvent,
  VotingData,
  InitVotingData,
  summaryOfVote,
  WidgetUser,
} from './voting'
import { Avatar, Button, Spacer, VotingResultScreen } from './votingWidget'

const { widget } = figma
const {
  // Components
  AutoLayout,
  Frame,
  Text,
  Rectangle,
  Image,
  SVG,
  Ellipse,

  // Hooks
  useSyncedState,
  useSyncedMap,
  usePropertyMenu,
  useEffect,
  useWidgetId,

  // Functions
  register,
  waitForTask,
} = widget

export default function () {
  widget.register(Scrumalot)
}

const emotionalTexts = [
  'Great choice!',
  'Dy-na-mite.',
  'The only possible choice tbh.',
  'Excellent choice, citizen.',
  '💪🔥',
  'Sweet decision making, worker.',
]

type UiState =
  | {
      votingState: 'NotStarted'
    }
  | {
      votingState: 'InProgress'
      votingOptions: VotingOptions
      storyName: string
      storyDescription: string
      activeWidgetUsers: WidgetUser[]
    }
  | {
      votingState: 'Revealed'
      votingOptions: VotingOptions
      storyName: string
      storyDescription: string
    }

const defaultUiState: UiState = {
  votingState: 'NotStarted',
}

function Scrumalot() {
  const [uiState, setUiState] = useSyncedState<UiState>('votingState', defaultUiState)

  const voteMap = useSyncedMap<UserVote>('userVote')

  useEffect(() => {
    if (uiState.votingState == 'Revealed') {
      figma.closePlugin()
    }
  })

  const itemReveal: WidgetPropertyMenuItem = {
    itemType: 'action',
    tooltip: 'Reveal',
    propertyName: 'reveal',
  }
  const itemReset: WidgetPropertyMenuItem = {
    itemType: 'action',
    tooltip: 'Reset',
    propertyName: 'reset',
  }

  const item = (() => {
    switch (uiState.votingState) {
      case 'InProgress':
        return [itemReset, itemReveal]
      case 'Revealed':
        return [itemReset]
      default:
        return []
    }
  })()

  usePropertyMenu(item, ({ propertyName }) => {
    switch (propertyName) {
      case 'reveal':
        if (uiState.votingState == 'InProgress') {
          setUiState({
            votingState: 'Revealed',
            votingOptions: uiState.votingOptions,
            storyName: uiState.storyName,
            storyDescription: uiState.storyDescription,
          })
        }
        break
      case 'reset':
        setUiState(defaultUiState)
        voteMap.keys().forEach((k) => voteMap.delete(k))
        break
    }
  })
  return (
    <AutoLayout
      direction='vertical'
      verticalAlignItems='center'
      fill='#FFFFFF'
      width={320}
      cornerRadius={8}
      effect={{
        type: 'drop-shadow',
        color: { r: 0, g: 0, b: 0, a: 0.2 },
        offset: { x: 0, y: 2 },
        blur: 3,
        spread: 2,
      }}
      padding={{ vertical: 16, horizontal: 16 }}
    >
      {(() => {
        switch (uiState.votingState) {
          case 'NotStarted':
            return (
              <WelcomeScreen
                onClickStart={() => {
                  showUI<InitVotingData>({ width: 240, height: 400 }, { name: 'INIT_VOTING_DATA' })
                  once<SetVotingEvent>('SET_VOTING', (options, storyName, storyDescription) => {
                    if (uiState.votingState == 'NotStarted') {
                      setUiState({
                        votingState: 'InProgress',
                        votingOptions: options,
                        storyName: storyName,
                        storyDescription: storyDescription,
                        activeWidgetUsers: figma.activeUsers.map((u) => {
                          return { userId: u.sessionId, userPhotoUrl: u.photoUrl ?? '' }
                        }),
                      })
                    }
                    figma.closePlugin()
                  })
                }}
              />
            )
          case 'InProgress':
            return (
              <VoteInProgress
                {...uiState}
                votedUserIds={voteMap.values().map((u) => u.userId)}
                onClickVote={() => {
                  showUI<VotingData>(
                    { width: 240, height: 436 },
                    {
                      name: 'VOTING_DATA',
                      votingOptions: uiState.votingOptions,
                      storyDescription: uiState.storyDescription,
                      storyName: uiState.storyName,
                      votedFor: voteMap.get(figma.currentUser!.sessionId.toString())?.votedFor,
                    },
                  )
                  once<SetVoteEvent>('SET_VOTE', (votedFor) => {
                    if (uiState.votingState == 'InProgress') {
                      const currentUser = figma.currentUser!
                      voteMap.set(currentUser.sessionId.toString(), {
                        userId: currentUser.sessionId,
                        userPhotoUrl: currentUser.photoUrl!,
                        votedFor: votedFor,
                      })
                      figma.notify(`${summaryOfVote(votedFor)} it is. ${emotionalTexts.random()}`)
                    }
                    figma.closePlugin()
                  })
                }}
              />
            )
          case 'Revealed':
            return (
              <VotingResultScreen
                votings={voteMap.values()}
                votingOptions={uiState.votingOptions}
                storyName={uiState.storyName}
                storyDescription={uiState.storyDescription}
              />
            )
          default:
            return undefined
        }
      })()}
    </AutoLayout>
  )
}

type WelcomeScreenProps = {
  onClickStart: () => void
}

function WelcomeScreen({ onClickStart }: WelcomeScreenProps) {
  return (
    <AutoLayout direction='vertical' horizontalAlignItems='center' width='fill-parent'>
      <AutoLayout direction='horizontal' width='hug-contents' verticalAlignItems='center'>
        <WidgetLogo />
        <Spacer size={4} />
        <Text fontSize={18} fontWeight={600} horizontalAlignText='center' fill='#000000'>
          Scrum-A-Lot
        </Text>
      </AutoLayout>

      <Spacer size={4} />
      <Text fontSize={14} fontWeight={400} horizontalAlignText='center' fill='#667085'>
        Start with creating a story and let your
      </Text>
      <Text fontSize={14} fontWeight={400} horizontalAlignText='center' fill='#667085'>
        team estimate the effort.
      </Text>
      <Spacer size={24} />
      <Button text={'Create Story'} onClick={onClickStart} />
    </AutoLayout>
  )
}

const maxAvatarsPerLine = 6

type VoteInProgressScreenProps = {
  storyName: string
  storyDescription: string
  activeWidgetUsers: WidgetUser[]
  votedUserIds: number[]
  onClickVote: () => void
}

function VoteInProgress({
  storyName,
  storyDescription,
  activeWidgetUsers,
  votedUserIds,
  onClickVote,
}: VoteInProgressScreenProps) {
  type UserWithAvatar = {
    photoUrl: string
    hasVoted: boolean
  }

  const rows: UserWithAvatar[][] = []

  const activeUsers: UserWithAvatar[] = activeWidgetUsers.map((u) => {
    return {
      photoUrl: u.userPhotoUrl ?? '',
      hasVoted: votedUserIds.find((id) => id == u.userId) ? true : false,
    }
  })
  for (let i = 0; i < activeUsers.length; i += maxAvatarsPerLine) {
    rows.push(activeUsers.slice(i, i + maxAvatarsPerLine))
  }

  return (
    <AutoLayout direction='vertical' width='fill-parent'>
      <Text fontSize={14} fontWeight={500} fill='#101828'>
        {storyName}
      </Text>
      <Spacer size={4} />
      <Text fontSize={12} fontWeight={400} fill='#101828'>
        {storyDescription}
      </Text>
      <Spacer size={40} />
      <AutoLayout direction='vertical' horizontalAlignItems='start' width='fill-parent' spacing={8}>
        {rows.map((r, index) => (
          <AutoLayout
            key={`row_${index}`}
            direction='horizontal'
            horizontalAlignItems='start'
            spacing={8}
            width='fill-parent'
          >
            {r.map((u) => (
              <Avatar key={`avatar_${u}`} photoUrl={u.photoUrl} opacity={u.hasVoted ? 1.0 : 0.3} />
            ))}
          </AutoLayout>
        ))}
      </AutoLayout>
      <Spacer size={40} />
      <Text fontSize={12} fontWeight={400} fill='#101828'>{`${votedUserIds.length} ${
        votedUserIds.length == 1 ? 'Vote' : 'Votes'
      }`}</Text>
      <Spacer size={8} />
      <Button text={'Vote'} onClick={onClickVote} />
    </AutoLayout>
  )
}
