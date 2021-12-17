/** @jsx figma.widget.h */

import { once, showUI } from '@create-figma-plugin/utilities'

const { widget } = figma
const { AutoLayout, Text, useSyncedState, usePropertyMenu, Rectangle } = widget

export default function () {
    widget.register(Notepad)
}

function Notepad() {
    const [userStartedPoll, setUserStartedPoll] = useSyncedState('userStartedPoll', '')

    const [text, setText] = useSyncedState('text', 'Description')
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
                showUI({ width: 240, height: 344 }, { text })
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
            width="fill-parent"
            cornerRadius={8}
            spacing={8}
            effect={{
                type: 'drop-shadow',
                color: { r: 0, g: 0, b: 0, a: 0.16 },
                offset: { x: 0, y: 1 },
                blur: 3,
                spread: 0,
            }}
        >
            
            <Rectangle
                height={32}
                fill="#F2F4F7"
                cornerRadius={8}
                width="fill-parent"
            
            />

         
            
            
            <Rectangle
                height={1}
                fill="#FFFFFF"
                width="fill-parent"
            />
            

            <Rectangle
                height={16}
                fill="#F9FAFB"
                cornerRadius={8}
                width="fill-parent"
            />

            <Rectangle
                height={16}
                fill="#F9FAFB"
                cornerRadius={8}
                width="fill-parent"
            />



            <AutoLayout
                direction='vertical'
                horizontalAlignItems='start'
                verticalAlignItems='start'

            >
                
            </AutoLayout>
            <AutoLayout
                fill="#C8CCE5"
                cornerRadius={8}
                padding={{ left: 96, right: 96, top: 12, bottom: 12 }}
                onClick={() => {
                    var user = figma.activeUsers[0].photoUrl
                    console.log(user)
                    showUI({ width: 88, height: 44 }, { user })
                    return new Promise<void>(() => { })
                }}
            >
                <Text fontSize={14} fontWeight="semi-bold" horizontalAlignText='center' width='fill-parent' fill="#000E52">Create Story</Text>
            </AutoLayout>
        </AutoLayout>
    )
}

