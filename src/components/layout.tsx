
export type PaddingProps =
    | {
        top: string
        bottom: string
        start: string
        end: string
    }
    | {
        horizontal: string
        vertical: string
    }
    | {
        all: string
    }

export type BoxAlignProps = 'topStart' | 'topEnd' | 'topCenter' | 'bottomStart' | 'bottomEnd' | 'bottomCenter'
export type AlignProps = 'start' | 'end' | 'center' | 'fill' | BoxAlignProps

export type LayoutProps = {
    padding?: PaddingProps,
    alignment?: AlignProps,
    height?: string,
    width?: string
}
