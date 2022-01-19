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

import { h, JSX, ComponentChild } from 'preact'
import { baseProps } from './base'
import styles from './icons.css'
import { LayoutProps } from './layout'

function createSvgIcon(d: string): JSX.Element {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' className={styles.icon} viewBox='0 0 20 20' fill='currentColor'>
      <path fill-rule='evenodd' d={d} clip-rule='evenodd' />
    </svg>
  )
}

export function SolidCheck(): JSX.Element {
  return createSvgIcon(
    // svg icon data is originally licenced under the MIT License by Refactoring UI Inc (https://github.com/tailwindlabs/heroicons)
    'M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z',
  )
}

export function OutlinedCircle(): JSX.Element {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' className={styles.icon} viewBox='0 0 20 20' fill='none'>
      <circle cx='10' cy='10' r='8' stroke='currentColor' strokeWidth='2' />
    </svg>
  )
}

export type IconProps = LayoutProps & {
  children: ComponentChild
  tint?: string
}

export function Icon({ children, tint = 'currentColor', ...rest }: IconProps): JSX.Element {
  return <div {...baseProps({ ...rest, content: tint })}>{children}</div>
}
