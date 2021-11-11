/** @jsx figma.widget.h */

import { once, showUI } from '@create-figma-plugin/utilities'

const { widget } = figma
const { AutoLayout, Text, useSyncedState, usePropertyMenu, Rectangle } = widget

export default function () {
    widget.register(Notepad)
}

function Notepad() {
    const [userStartedPoll, setUserStartedPoll] = useSyncedState('userStartedPoll', '')

    const [text, setText] = useSyncedState('text', 'Hello\nWidgets')
    const items: Array<WidgetPropertyMenuItem> = [
        {
            itemType: 'action',
            propertyName: 'edit',
            tooltip: 'Edit'
        }
    ]
    async function onChange({
        propertyName
    }: WidgetPropertyEvent): Promise<void> {
        await new Promise<void>(function (resolve: () => void): void {
            if (propertyName === 'edit') {
                showUI({ width: 240, height: 144 }, { text })
                once('UPDATE_TEXT', function (text: string): void {
                    setText(text)
                    resolve()
                })
            }
        })
    }
    usePropertyMenu(items, onChange)
    return (
        <AutoLayout
            direction="vertical"
            verticalAlignItems="center"
            padding={16}
            fill="#FFFFFF"
            cornerRadius={8}
            spacing={12}
            effect={{
                type: 'drop-shadow',
                color: { r: 0, g: 0, b: 0, a: 0.2 },
                offset: { x: 0, y: 2 },
                blur: 2,
                spread: 2,
            }}
        >
            <Text fontSize={16} fontWeight="semi-bold" horizontalAlignText='left' width='fill-parent' fill="#363F72">Scrumalot</Text>
            <Rectangle
                height={2}
                fill="#E4E7EC"
                width="fill-parent"
            />
            <AutoLayout
                direction='vertical'
                horizontalAlignItems='start'
                verticalAlignItems='start'

            >
                {text.split('\n').map(line => {
                    return line ? (
                        <Text fontSize={12} horizontalAlignText='left' width='fill-parent'>
                            {line}
                        </Text>
                    ) : null
                })}
            </AutoLayout>
            <AutoLayout
                fill="#C8CCE5"
                cornerRadius={4}
                padding={{ left: 16, right: 16, top: 8, bottom: 8 }}
                onClick={() => {
                    var user = figma.activeUsers[0].photoUrl
                    console.log(user)
                    showUI({ width: 240, height: 144 }, { user })
                    return new Promise<void>(() => { })
                }}
            >
                <Text fontSize={12} fontWeight="semi-bold" horizontalAlignText='center' width='fill-parent' fill="#363F72">Vote</Text>
            </AutoLayout>
        </AutoLayout>
    )
}
