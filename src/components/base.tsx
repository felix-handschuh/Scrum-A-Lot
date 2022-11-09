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

import {
  alignClass,
  composeClasses,
  composeColorAsProperties,
  composePaddingAsProperties,
  composeProperties,
  composeSizeAsProperties,
} from './composeFunctions'
import { LayoutProps } from './layout'

import '!./base.css'
import { ColorProps } from './color'

export function baseProps(
  { alignment, padding, height, width, content, background }: LayoutProps & ColorProps,
  ...classes: (string | undefined)[]
): { class: string; style: string } {
  return {
    class: composeClasses('padding', 'color', 'size', alignClass(alignment), ...classes),
    style:
      composePaddingAsProperties(padding) +
      composeSizeAsProperties(width, height) +
      composeColorAsProperties({ content, background }),
  }
}

export function additionalProps(
  base: { class: string; style: string },
  ...props: [string, any | undefined][]
): { class: string; style: string } {
  return {
    class: base.class,
    style: base.style + ' ' + composeProperties(...props),
  }
}
