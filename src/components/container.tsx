/** @jsx h */

import { h, ComponentChildren, JSX, Fragment } from "preact"
import styles from './container.css'
import { LayoutProps, PaddingProps } from "./layout"
import { additionalProps, baseProps } from "./base"
import { ColorProps } from "./color"

export type ColumnProps = LayoutProps & ColorProps & {
    children: ComponentChildren,
    spacedBy?: string
}

export function Column({
    children,
    spacedBy = "0px",
    ...rest
}: ColumnProps): JSX.Element {
    return (
        <div {...additionalProps(baseProps(rest, styles.column), ['spaced-by', spacedBy])}>
            <Fragment>
                {children}
            </Fragment>
        </div>
    )
}

export type RowProps = LayoutProps & ColorProps & {
    children: ComponentChildren,
    spacedBy?: string
}

export function Row({
    children,
    spacedBy = "0px",
    ...rest
}: RowProps): JSX.Element {
    return (
        <div {...additionalProps(baseProps(rest, styles.row), ['spaced-by', spacedBy])}>
            <Fragment>
                {children}
            </Fragment>
        </div>
    )
}

export type BoxProps = LayoutProps & ColorProps & {
    children?: ComponentChildren,
    fitParent?: boolean
}

export function Box({
    children,
    fitParent,
    ...rest
}: BoxProps): JSX.Element {
    return (
        <div {...baseProps(rest, styles.box, fitParent ? styles.fitParent : undefined)}>
            {children ? <Fragment>{children}</Fragment> : undefined}
        </div>
    )
}