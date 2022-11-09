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

import { h, JSX } from 'preact'
import { baseProps } from './base'
import styles from './text.css'
import { LayoutProps } from './layout'

export type TextProps = LayoutProps & {
  children: string
  textStyleClass?: string
}

export function Text({ children, textStyleClass = styles.text, ...rest }: TextProps): JSX.Element {
  return <span {...baseProps(rest, textStyleClass)}>{children}</span>
}

export function Body2({ children, textStyleClass = styles.body2, ...rest }: TextProps): JSX.Element {
  return (
    <Text textStyleClass={textStyleClass} {...rest}>
      {children}
    </Text>
  )
}

export function Caption({ children, textStyleClass = styles.caption, ...rest }: TextProps): JSX.Element {
  return (
    <Text textStyleClass={textStyleClass} {...rest}>
      {children}
    </Text>
  )
}
