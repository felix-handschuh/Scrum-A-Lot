/** @jsx figma.widget.h */

export {}

import { summaryOfVote, UserVote, VotingOptions, WidgetUser } from './voting'

declare global {
  interface Array<T> {
    groupBy<K>(fn: (v: T) => K, to?: Map<K, T[]>): Map<K, T[]>
    random(): T
  }
}

Array.prototype.groupBy = function (fn, to) {
  const map = to ?? new Map<string, any[]>()

  return this.reduce((m, value) => {
    const key = fn(value)
    return m.set(key, (m.get(key) ?? []).concat([value]))
  }, map)
}

Array.prototype.random = function () {
  return this[Math.floor(Math.random() * this.length)]
}

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

export type VotingResultProps = {
  votingOptions: VotingOptions
  storyName: string
  storyDescription: string
  votings: UserVote[]
}

export function VotingResultScreen({ votingOptions, storyName, storyDescription, votings }: VotingResultProps) {
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
      <AutoLayout direction='vertical' width='fill-parent' spacing={8}>
        <VotingResult votings={votings} votingOptions={votingOptions} />
      </AutoLayout>
      <Spacer size={40} />
      <VotingInfo votings={votings} votingOptions={votingOptions} />
    </AutoLayout>
  )
}

function VotingInfo({ votingOptions, votings }: { votingOptions: VotingOptions; votings: UserVote[] }) {
  const totalVotes = votings.length
  const avgVotes = (() => {
    switch (votingOptions.kind) {
      case 'numeric':
        return (
          'ø ' +
          (
            Array.from(votings.groupBy((u) => u.votedFor).values())
              .map((votes) => Number(votes[0].votedFor) * votes.length)
              .reduce((avg, w) => {
                return avg + w
              }, 0) / totalVotes
          ).toFixed(1) +
          ' Points'
        )
      case 'categorical':
        return undefined
    }
  })()

  return (
    <AutoLayout direction='horizontal' horizontalAlignItems='center' width='fill-parent' cornerRadius={8}>
      <AutoLayout
        direction='horizontal'
        verticalAlignItems='center'
        width='hug-contents'
        height={34}
        fill='#ECFDF3'
        cornerRadius={8}
        padding={{ vertical: 8, horizontal: 16 }}
      >
        <Text fontSize={12} fontWeight={400} fill='#054F31'>
          {`${totalVotes} ${totalVotes == 1 ? 'Vote' : 'Votes'}`}
        </Text>
        {avgVotes ? (
          <AutoLayout direction='horizontal' verticalAlignItems='center' width='hug-contents'>
            <Spacer size={10} />
            <Frame height={18} width={1} fill='#D1FADF' />
            <Spacer size={10} />
            <Text fontSize={12} fontWeight={400} fill='#054F31'>
              {avgVotes}
            </Text>
          </AutoLayout>
        ) : undefined}
      </AutoLayout>
    </AutoLayout>
  )
}

function VotingResult({ votingOptions, votings }: { votingOptions: VotingOptions; votings: UserVote[] }) {
  const totalVotes = votings.length
  const voteResults = votings.groupBy((u) => u.votedFor, new Map(votingOptions.options.map((o) => [o, []])))

  return Array.from(voteResults.entries()).map(([option, userVotes]) => {
    return (
      <AutoLayout
        key={`${option}`}
        direction='vertical'
        verticalAlignItems='center'
        width={288}
        height={'hug-contents'}
        spacing={8}
      >
        <AutoLayout verticalAlignItems='end' spacing={0} width={'fill-parent'}>
          <Text fontSize={14} fontWeight={600} fill='#101828'>
            {summaryOfVote(option)}
          </Text>
          <Frame height={1} width={'fill-parent'} />
          {AvatarSection(userVotes)}
        </AutoLayout>
        <Bar votes={userVotes.length} totalVotes={totalVotes} length={288} />
        <Text fontSize={12} fontWeight={400} fill='#101828' width='fill-parent' horizontalAlignText='right'>
          {userVotes.length} {userVotes.length == 1 ? 'Vote' : 'Votes'}
        </Text>
      </AutoLayout>
    )
  })
}

interface BarProps {
  votes: number
  totalVotes: number
  length: number
}

const Bar = ({ votes, totalVotes, length }: BarProps) => (
  <Frame width={length} height={8} cornerRadius={8}>
    <Rectangle width={length} height={8} fill='#F9FAFB' />
    {totalVotes > 0 ? (
      <Rectangle width={(votes / totalVotes) * length} height={8} cornerRadius={8} fill='#717BBC' />
    ) : null}
  </Frame>
)

const maxAvatarsPerLine = 6

function AvatarSection(users: WidgetUser[]) {
  const rows: WidgetUser[][] = []

  for (let i = 0; i < users.length; i += maxAvatarsPerLine) {
    rows.push(users.slice(i, i + maxAvatarsPerLine))
  }

  return (
    <AutoLayout direction='vertical' spacing={8}>
      {rows.map((r, index) => (
        <AutoLayout
          key={`row_${index}`}
          direction='horizontal'
          horizontalAlignItems='end'
          spacing={8}
          width={'fill-parent'}
        >
          {r.map((u) => (
            <Avatar key={`avatar_${u}`} photoUrl={u.userPhotoUrl} opacity={1.0} />
          ))}
        </AutoLayout>
      ))}
    </AutoLayout>
  )
}

export type SpacerProps = {
  size: number
}

export function Spacer({ size }: SpacerProps) {
  return <Frame width={size} height={size} />
}

export type AvatarProps = {
  photoUrl: string
  opacity: number
  key?: string
}

export function Avatar({ photoUrl, opacity, key }: AvatarProps) {
  return (
    <Image key={key} width={24} height={24} src={photoUrl} cornerRadius={24} opacity={opacity} />
    // <AutoLayout width={24} height={24} opacity={opacity} fill={color} cornerRadius={24}>
    //     <Text verticalAlignText='center' horizontalAlignText='center' width='fill-parent' lineHeight={24} fontSize={12} fontWeight={400} fill={'#FFFFFF'}>{name[0].toUpperCase()}</Text>
    // </AutoLayout>
  )
}

export type ButtonProps = {
  text: string
  onClick: () => void
}

export function Button({ text, onClick }: ButtonProps) {
  return (
    <AutoLayout
      width='fill-parent'
      height={44}
      cornerRadius={8}
      fill='#C8CCE5'
      onClick={() => {
        return new Promise<void>(onClick)
      }}
    >
      <Text
        verticalAlignText='center'
        horizontalAlignText='center'
        width='fill-parent'
        lineHeight={44}
        fontSize={14}
        fontWeight={600}
        fill='#000E52'
      >
        {text}
      </Text>
    </AutoLayout>
  )
}
