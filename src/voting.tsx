/** @jsx */

import { EventHandler } from '@create-figma-plugin/utilities'

export type VotingState = 'NotStarted' | 'InProgress' | 'Revealed'

export interface SetVotingEvent extends EventHandler {
  name: 'SET_VOTING'
  handler: (options: VotingOptions, storyName: string, storyDescription: string) => void
}

export interface SetVoteEvent extends EventHandler {
  name: 'SET_VOTE'
  handler: (votedFor: string) => void
}

export interface InitVotingData extends Record<string, unknown> {
  name: 'INIT_VOTING_DATA'
}

export interface VotingData extends Record<string, unknown> {
  name: 'VOTING_DATA'
  votingOptions: VotingOptions
  storyName: string
  storyDescription: string
  votedFor?: string
}

export type VotingOptions =
  | {
      kind: 'numeric'
      options: string[]
    }
  | {
      kind: 'categorical'
      options: string[]
    }

export const Fibonacci: VotingOptions = {
  kind: 'numeric',
  options: ['0', '1', '2', '3', '5', '8', '13', '21', '34', '55', '89', '144'],
}
export const FibonacciHalf: VotingOptions = {
  kind: 'numeric',
  options: ['0', '0.5', '1', '2', '3', '5', '8', '13', '21', '34', '55', '89', '144'],
}
export const TShirtSizes: VotingOptions = {
  kind: 'categorical',
  options: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
}
export const Square: VotingOptions = {
  kind: 'numeric',
  options: ['0', '1', '2', '4', '8', '16', '32', '64', '128', '256'],
}

export function summaryOfVotingOptions(s: VotingOptions): string {
  return s.options.join(', ')
}

export function summaryOfVote(option: string): string {
  if (!isNaN(Number(option))) {
    return `${option} ${option == '1' ? 'Point' : 'Points'}`
  } else {
    return option
  }
}

export interface WidgetUser {
  userId: number
  userPhotoUrl: string
}

export interface UserVote extends WidgetUser {
  votedFor: string
}
