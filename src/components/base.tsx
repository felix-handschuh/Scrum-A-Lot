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
