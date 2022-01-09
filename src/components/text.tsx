/** @jsx h */

import { h, ComponentChildren, JSX } from "preact"
import { baseProps } from "./base"
import styles from './text.css'
import { LayoutProps, PaddingProps } from "./layout"

export type TextProps = LayoutProps & {
    children: string,
    textStyleClass?: string
}

export function Text({
    children,
    textStyleClass = styles.text,
    ...rest
}: TextProps): JSX.Element {
    return (
        <span {...baseProps(rest, textStyleClass)} >
            {children}
        </span>
    )
}

export function Body2({
    children,
    textStyleClass = styles.body2,
    ...rest
}: TextProps): JSX.Element {
    return <Text textStyleClass={textStyleClass} {...rest}>{children}</Text>
}

export function Caption({
    children,
    textStyleClass = styles.caption,
    ...rest
}: TextProps): JSX.Element {
    return <Text textStyleClass={textStyleClass} {...rest}>{children}</Text>
}