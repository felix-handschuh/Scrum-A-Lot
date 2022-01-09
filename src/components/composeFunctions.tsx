import { AlignProps, LayoutProps, PaddingProps } from "./layout"
import containerStyles from './container.css'
import { ColorProps } from "./color"

export function composeClasses(...classes: (string | undefined)[]): string {
    return classes.filter(c => c !== undefined).join(" ")
}

export function alignClass(alignment: AlignProps | undefined): string {
    switch (alignment) {
        case 'center': return containerStyles.alignCenter
        case 'fill': return containerStyles.alignFill
        case 'end': return containerStyles.alignEnd
        case 'start': return containerStyles.alignStart
        case 'topStart': return containerStyles.alignTopStart
        case 'topCenter': return containerStyles.alignTopCenter
        case 'topEnd': return containerStyles.alignTopEnd
        case 'bottomStart': return containerStyles.alignBottomStart
        case 'bottomCenter': return containerStyles.alignBottomCenter
        case 'bottomEnd': return containerStyles.alignBottomEnd
        default: return containerStyles.alignStart
    }
}

export function composeProperties(...props: [string, any | undefined][]): string {
    return props.filter(([p, v]) => v !== undefined).map(([p, v]) => `--${p}: ${v};`).join(" ")
}

export function composePaddingAsProperties(padding: PaddingProps | undefined): string {
    if (padding === undefined) {
        return composeProperties(
            ['padding-top', '0'],
            ['padding-bottom', '0'],
            ['padding-start', '0'],
            ['padding-end', '0']
        )
    }

    if ('top' in padding) {
        return composeProperties(
            ['padding-top', padding.top],
            ['padding-bottom', padding.bottom],
            ['padding-start', padding.start],
            ['padding-end', padding.end]
        )
    } else if ('horizontal' in padding) {
        return composeProperties(
            ['padding-top', padding.vertical],
            ['padding-bottom', padding.vertical],
            ['padding-start', padding.horizontal],
            ['padding-end', padding.horizontal]
        )
    } else {
        return composeProperties(
            ['padding-top', padding.all],
            ['padding-bottom', padding.all],
            ['padding-start', padding.all],
            ['padding-end', padding.all]
        )
    }
}

export function composeSizeAsProperties(width?: string, height?: string): string {
    return composeProperties(
        ['height', height ?? 'unset'],
        ['width', width ?? 'unset']
    )
}

export function composeColorAsProperties(color?: ColorProps): string {
    if (color === undefined) {
        return ''
    }

    return composeProperties(
        ['content-color', color.content],
        ['background-color', color.background]
    )
}
