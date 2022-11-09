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

import { h, ComponentChildren, JSX } from 'preact'
import { baseProps } from './base'
import styles from './input.css'
import { Box, Row } from './container'
import { LayoutProps, PaddingProps } from './layout'
import { useCallback } from 'preact/hooks'
import { Space } from './space'

export type ButtonProps = LayoutProps & {
  children: ComponentChildren
  onClick: () => void
  enabled?: boolean
  contentPadding?: PaddingProps
  buttonStyleClass?: string
}

export function Button({
  children,
  onClick,
  enabled = true,
  contentPadding = { all: '16px' },
  buttonStyleClass = styles.button,
  ...rest
}: ButtonProps): JSX.Element {
  const handleClick = useCallback(
    function (event: JSX.TargetedEvent<HTMLButtonElement>): void {
      onClick()
    },
    [onClick],
  )

  return (
    <button {...baseProps(rest, buttonStyleClass)} onClick={handleClick} disabled={!enabled}>
      <Box fitParent={true}>
        <Row padding={contentPadding} alignment='center'>
          {children}
        </Row>
      </Box>
    </button>
  )
}

export type InputProps = LayoutProps & {
  value: string
  onValueChange: (value: string) => void
  placeholder?: string
  outlined?: boolean
  contentPadding?: PaddingProps
}

export function Input({ value, onValueChange, placeholder, outlined = true, ...rest }: InputProps): JSX.Element {
  const handleInput = useCallback(
    function (event: JSX.TargetedEvent<HTMLInputElement>): void {
      onValueChange(event.currentTarget.value)
    },
    [onValueChange],
  )

  const classes = outlined ? styles.outlinedInput : styles.basicInput

  return (
    <input type='text' value={value} {...baseProps(rest, classes)} onInput={handleInput} placeholder={placeholder} />
  )
}

export type RadioProps = LayoutProps & {
  checked: boolean
  onClick: () => void
  checkIcon?: (checked: boolean) => ComponentChildren
  checkText?: (checked: boolean) => ComponentChildren
}

export function RadioInput({
  checked,
  onClick: onValueChange,
  checkIcon,
  checkText,
  ...rest
}: RadioProps): JSX.Element {
  const handleInput = useCallback(
    function (event: JSX.TargetedEvent<HTMLInputElement>): void {
      onValueChange()
    },
    [onValueChange],
  )

  return (
    <label {...baseProps(rest, styles.radioInput)}>
      <input type='radio' checked={checked} onClick={handleInput} />
      <Row alignment='fill'>
        {checkIcon ? checkIcon(checked) : undefined}
        <Space size='8px' />
        {checkText ? checkText(checked) : undefined}
      </Row>
    </label>
  )
}
