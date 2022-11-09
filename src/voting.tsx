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
  options: ['0', '1', '2', '3', '5', '8', '13', '21'],
}
export const FibonacciHalf: VotingOptions = {
  kind: 'numeric',
  options: ['0', '0.5', '1', '2', '3', '5', '8', '13', '21'],
}
export const TShirtSizes: VotingOptions = {
  kind: 'categorical',
  options: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
}
export const Square: VotingOptions = {
  kind: 'numeric',
  options: ['0', '1', '2', '4', '8', '16', '32', '64'],
}
export const Awesome: VotingOptions = {
  kind: 'categorical',
  options: ['☕️', '🛁', '🛌', '💸', '🐌', '🍻', '💩'],
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
