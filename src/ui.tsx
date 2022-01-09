/** @jsx h */

import { h, render, ComponentChildren, JSX, Fragment } from "preact"
import { emit } from '@create-figma-plugin/utilities'
import { useCallback, useState } from 'preact/hooks'

import {
  Button, Input, RadioInput, RadioProps
} from './components/input'

import '!./styles.css'
import { Box, Column } from './components/container'
import { Space } from './components/space'
import { Icon, OutlinedCircle, SolidCheck } from './components/icons'
import { Body2, Caption } from './components/text'
import { Fibonacci, FibonacciHalf, InitVotingData, SetVoteEvent, SetVotingEvent, Square, summaryOfVote, summaryOfVotingOptions, TShirtSizes, VotingData } from "./voting"

function InitVotePlugin() {
  const votingOptionsList = [
    Fibonacci,
    FibonacciHalf,
    TShirtSizes,
    Square
  ]

  const [storyName, setStoryName] = useState('')
  const [storyDescription, setStoryDescription] = useState('')
  const [votingChoice, setVotingChoice] = useState(0)
  const handleOnStart = useCallback(
    () => {
      emit<SetVotingEvent>('SET_VOTING', votingOptionsList[votingChoice], storyName, storyDescription)
    },
    [storyName, storyDescription, votingChoice]
  )
  return (
    <Box fitParent={true}>
      <Column padding={{ all: '16px' }} alignment="fill">
        <Input value={storyName} onValueChange={setStoryName} outlined={false} placeholder='A story needs a name...' alignment='fill' />
        <Space size='12px' />
        <Input value={storyDescription} onValueChange={setStoryDescription} outlined={true} placeholder='Description' alignment='fill' />
        <Space size='32px' />
        <Divider/>
        <Space size='32px' />
        <Column spacedBy='8px' alignment='fill'>
          {
            votingOptionsList.map((opt, index) => {
              return <SCRadioInput text={summaryOfVotingOptions(opt)} checked={votingChoice == index} onClick={() => { setVotingChoice(index) }} />
            })
          }
        </Column>
        <Space size='24px' fillGap={true} />
        <Button alignment='fill' onClick={handleOnStart} enabled={storyName.length > 2 && storyDescription.length > 2}>Start</Button>
      </Column>
    </Box>
  )
}

function VotePlugin({
  votingOptions,
  storyName,
  storyDescription,
  votedFor
}: VotingData) {
  const [vote, setVote] = useState(votedFor ? votingOptions.options.indexOf(votedFor) : -1)
  const handleOnSubmit = useCallback(
    () => {
      emit<SetVoteEvent>('SET_VOTE', votingOptions.options[vote])
    },
    [votingOptions, vote]
  )
  return (
    <Box fitParent={true}>
      <Column padding={{ all: '16px' }} alignment="fill">
        <Body2>{storyName}</Body2>
        <Space size='4px' />
        <Caption>{storyDescription}</Caption>
        <Space size='16px' />
        <Divider/>
        <Space size='16px' />
        <Column spacedBy='8px' alignment='fill'>
          {
            votingOptions.options.map((opt, index) => {
              return <SCRadioInput text={summaryOfVote(opt)} checked={vote == index} onClick={() => { setVote(index) }} />
            })
          }
        </Column>
        <Space size='24px' fillGap={true} />
        <Button alignment='fill' onClick={handleOnSubmit}>Submit</Button>
      </Column>
    </Box>
  )
}

function Divider() {
  return <Box height="1px" background="#E4E7EC" alignment="fill" />
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
  return (
    <RadioInput
      checked={checked}
      onClick={onClick}
      checkIcon={checkIcon}
      checkText={checkText}
      {...rest}
    />
  )
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
