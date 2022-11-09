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

/** @jsx h */

import { h, render, JSX } from 'preact'
import { emit } from '@create-figma-plugin/utilities'
import { useCallback, useState } from 'preact/hooks'

import { Button, Input, RadioInput, RadioProps } from './components/input'

import { Box, Column } from './components/container'
import { Space } from './components/space'
import { Icon, OutlinedCircle, SolidCheck } from './components/icons'
import { Body2, Caption } from './components/text'
import {
  Fibonacci,
  FibonacciHalf,
  InitVotingData,
  SetVoteEvent,
  SetVotingEvent,
  Square,
  summaryOfVote,
  summaryOfVotingOptions,
  TShirtSizes,
  Awesome,
  VotingData,
} from './voting'

function InitVotePlugin() {
  const votingOptionsList = [Fibonacci, FibonacciHalf, TShirtSizes, Square, Awesome]

  const [storyName, setStoryName] = useState('')
  const [storyDescription, setStoryDescription] = useState('')
  const [votingChoice, setVotingChoice] = useState(0)
  const handleOnStart = useCallback(() => {
    emit<SetVotingEvent>(
      'SET_VOTING',
      votingOptionsList[votingChoice],
      storyName.trim() != '' ? storyName : 'No Title',
      storyDescription,
    )
  }, [storyName, storyDescription, votingChoice])
  return (
    <Box fitParent={true}>
      <Column padding={{ all: '16px' }} alignment='fill'>
        <Input
          value={storyName}
          onValueChange={setStoryName}
          outlined={false}
          placeholder='A story needs a name...'
          alignment='fill'
        />
        <Space size='12px' />
        <Input
          value={storyDescription}
          onValueChange={setStoryDescription}
          outlined={true}
          placeholder='Description'
          alignment='fill'
        />
        <Space size='32px' />
        <Divider />
        <Space size='32px' />
        <Column spacedBy='8px' alignment='fill'>
          {votingOptionsList.map((opt, index) => {
            return (
              <SCRadioInput
                key={`${opt}_${index}`}
                text={summaryOfVotingOptions(opt)}
                checked={votingChoice == index}
                onClick={() => {
                  setVotingChoice(index)
                }}
              />
            )
          })}
        </Column>
        <Space size='24px' fillGap={true} />
        <Button alignment='fill' onClick={handleOnStart} enabled={true}>
          Start
        </Button>
      </Column>
    </Box>
  )
}

function VotePlugin({ votingOptions, storyName, storyDescription, votedFor }: VotingData) {
  const [vote, setVote] = useState(votedFor ? votingOptions.options.indexOf(votedFor) : -1)
  const handleOnSubmit = useCallback(() => {
    emit<SetVoteEvent>('SET_VOTE', votingOptions.options[vote])
  }, [votingOptions, vote])
  return (
    <Box fitParent={true}>
      <Column padding={{ all: '16px' }} alignment='fill'>
        <Body2>{storyName}</Body2>
        <Space size='4px' />
        <Caption>{storyDescription}</Caption>
        <Space size='16px' />
        <Divider />
        <Space size='16px' />
        <Column spacedBy='8px' alignment='fill'>
          {votingOptions.options.map((opt, index) => {
            return (
              <SCRadioInput
                key={`${opt}_${index}`}
                text={summaryOfVote(opt)}
                checked={vote == index}
                onClick={() => {
                  setVote(index)
                }}
              />
            )
          })}
        </Column>
        <Space size='24px' fillGap={true} />
        <Button alignment='fill' onClick={handleOnSubmit} enabled={vote != -1}>
          Submit
        </Button>
      </Column>
    </Box>
  )
}

function Divider() {
  return <Box height='1px' background='#E4E7EC' alignment='fill' />
}

function SCRadioInput({
  text,
  checked,
  onClick,
  checkIcon = (checked) => {
    return <Icon tint={checked ? '#4E5BA6' : '#E4E7EC'}>{checked ? <SolidCheck /> : <OutlinedCircle />}</Icon>
  },
  checkText = () => {
    return <Caption alignment='center'>{text}</Caption>
  },
  ...rest
}: { text: string } & RadioProps): JSX.Element {
  return <RadioInput checked={checked} onClick={onClick} checkIcon={checkIcon} checkText={checkText} {...rest} />
}

export default function (rootNode: HTMLElement, data: InitVotingData | VotingData) {
  switch (data.name) {
    case 'INIT_VOTING_DATA':
      render(<InitVotePlugin />, rootNode)
      break
    case 'VOTING_DATA':
      render(<VotePlugin {...data} />, rootNode)
      break
  }
}
