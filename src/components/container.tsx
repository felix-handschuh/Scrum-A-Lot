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

import { h, ComponentChildren, JSX, Fragment } from 'preact'
import styles from './container.css'
import { LayoutProps } from './layout'
import { additionalProps, baseProps } from './base'
import { ColorProps } from './color'

export type ColumnProps = LayoutProps &
  ColorProps & {
    children: ComponentChildren
    spacedBy?: string
  }

export function Column({ children, spacedBy = '0px', ...rest }: ColumnProps): JSX.Element {
  return (
    <div {...additionalProps(baseProps(rest, styles.column), ['spaced-by', spacedBy])}>
      <Fragment>{children}</Fragment>
    </div>
  )
}

export type RowProps = LayoutProps &
  ColorProps & {
    children: ComponentChildren
    spacedBy?: string
  }

export function Row({ children, spacedBy = '0px', ...rest }: RowProps): JSX.Element {
  return (
    <div {...additionalProps(baseProps(rest, styles.row), ['spaced-by', spacedBy])}>
      <Fragment>{children}</Fragment>
    </div>
  )
}

export type BoxProps = LayoutProps &
  ColorProps & {
    children?: ComponentChildren
    fitParent?: boolean
  }

export function Box({ children, fitParent, ...rest }: BoxProps): JSX.Element {
  return (
    <div {...baseProps(rest, styles.box, fitParent ? styles.fitParent : undefined)}>
      {children ? <Fragment>{children}</Fragment> : undefined}
    </div>
  )
}
