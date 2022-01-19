/** @jsx h */

import { h, JSX } from 'preact'

export type SpaceProps = { size: string; fillGap?: boolean }

export function Space({ size, fillGap = false }: SpaceProps): JSX.Element {
  return <div style={`width: ${size}; height: ${size}; flex-grow: ${fillGap ? '1' : 'unset'}`} />
}
