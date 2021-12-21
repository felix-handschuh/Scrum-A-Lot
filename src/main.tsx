/** @jsx figma.widget.h */

import { once, showUI } from '@create-figma-plugin/utilities'

const { widget } = figma
const {
    // Components
    AutoLayout,
    Frame,
    Text,
    Rectangle,
    Image,
    SVG,
    Ellipse,

    // Hooks
    useSyncedState,
    useSyncedMap,
    usePropertyMenu,
    useEffect,
    useWidgetId,

    // Functions
    register,
    waitForTask
} = widget

const logo = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.5255 6.96593C13.6631 6.43247 14.1912 6.11588 14.7049 6.25882L20.286 7.81174C20.7997 7.95468 21.1046 8.50302 20.9669 9.03648L18.4745 18.6957C18.3369 19.2292 17.8088 19.5458 17.2951 19.4028L11.714 17.8499C11.2003 17.707 10.8954 17.1587 11.0331 16.6252L13.5255 6.96593Z" fill="#4E5BA6"/>
<path d="M8 6C8 5.44772 8.44772 5 9 5H15C15.5523 5 16 5.44772 16 6V16C16 16.5523 15.5523 17 15 17H9C8.44772 17 8 16.5523 8 16V6Z" fill="#C8CCE5"/>
<path d="M3.03432 8.81198C2.89138 8.27852 3.20796 7.73018 3.74143 7.58724L9.53698 6.03432C10.0704 5.89138 10.6188 6.20796 10.7617 6.74143L13.3499 16.4007C13.4929 16.9342 13.1763 17.4825 12.6428 17.6254L6.84726 19.1783C6.31379 19.3213 5.76545 19.0047 5.62251 18.4712L3.03432 8.81198Z" fill="#EAECF5"/>
</svg>`

export default function () {
    widget.register(Notepad)
}

interface User {
    id: string
    color: string
    name: string
}

interface UserVote {
    vote: number
    user: User
}

enum VotingState {
    NotStarted,
    InProgress,
    Revealed
}

const fibVoteNumbers: Array<Number> = [1, 2, 3, 5, 8, 12]

function Notepad() {
    const [votingState, setVotingState] = useSyncedState('votingState', VotingState.NotStarted)
    const voteMap = useSyncedMap<UserVote>("userVote")

    useEffect(() => {
        console.log(voteMap.entries())
        console.log(figma.activeUsers)
    })

    const votingItems: WidgetPropertyMenu = fibVoteNumbers.map(nr => {
        return {
            itemType: "action",
            propertyName: `${nr}`,
            tooltip: `${nr}`
        }
    })
    const items: WidgetPropertyMenu = [
        {
            itemType: "action",
            tooltip: 'Vote',
            propertyName: 'action',
        },
        {
            itemType: "separator"
        }
    ]
    usePropertyMenu(
        items.concat(votingItems),
        ({ propertyName, propertyValue }) => {
            const userId = figma.currentUser!!.sessionId.toString()
            //if (voteMap.get(userId) === undefined) {
            const vote: UserVote = {
                vote: parseInt(propertyName),
                user: { id: userId, color: figma.currentUser!!.color, name: figma.currentUser!!.name }
            }
            voteMap.set(userId, vote)
            //}
        })
    return (
        <AutoLayout
            direction="vertical"
            verticalAlignItems="center"
            fill="#FFFFFF"
            width="hug-contents"
            cornerRadius={8}
            effect={{
                type: 'drop-shadow',
                color: { r: 0, g: 0, b: 0, a: 0.2 },
                offset: { x: 0, y: 2 },
                blur: 3,
                spread: 2,
            }}
            padding={{ vertical: 16, horizontal: 16 }}
        >
            <AutoLayout
                direction="horizontal"
                verticalAlignItems="center"
                spacing={4}
            >
                <SVG
                    src={logo}
                />
                <Text fontSize={9} fontWeight="bold" horizontalAlignText='center' fill="#000000">Scrumalot</Text>
            </AutoLayout>
            <Spacer size={16} />
            <Text fontSize={18} fontWeight="normal" horizontalAlignText='center' fill="#000000">Some Story Name</Text>
            <Spacer size={44} />

            {/* {
                VoteInProgress(voteMap.keys())
            } */}

            <AutoLayout
                direction="vertical"
                width={"fill-parent"}
                spacing={16}
            >
                {
                    VotingSection(voteMap)
                }
            </AutoLayout>
            <Spacer size={44} />
            <AutoLayout
                width={"fill-parent"}
                height={44}
                cornerRadius={8}
                fill={'#C8CCE5'}
            >
                <Text
                    verticalAlignText='center'
                    horizontalAlignText='center'
                    width='fill-parent'
                    lineHeight={44}
                    fontSize={14}
                    fontWeight={600}
                    fill='#000E52'
                >{
                        buttonText(votingState)
                    }</Text>
            </AutoLayout>
            {/* <AutoLayout
                fill="#C8CCE5"
                cornerRadius={4}
                padding={{ left: 16, right: 16, top: 8, bottom: 8 }}
                onClick={() => {
                    var user = figma.activeUsers[0].photoUrl
                    console.log(user)
                    showUI({ width: 240, height: 144 }, { user })
                    return new Promise<void>(() => { })
                }}
            > */}
            {/* <Text fontSize={12} fontWeight="semi-bold" horizontalAlignText='center' width='fill-parent' fill="#363F72">Vote</Text>
            </AutoLayout> */}
        </AutoLayout>
    )
}

function VoteInProgress(
    votedUserIds: string[]
) {
    const rows: User[][] = new Array()

    const activeUsers: User[] = figma.activeUsers.map((u) => { return { id: u.sessionId.toString(), color: u.color, name: u.name } })
    for (let i = 0; i < activeUsers.length; i += maxAvatarsPerLine) {
        rows.push(activeUsers.slice(i, i + maxAvatarsPerLine))
    }

    return (
        <AutoLayout
            direction="vertical"
            horizontalAlignItems='center'
            width={'fill-parent'}
            spacing={8}
        >
            {
                rows.map(r => (
                    <AutoLayout
                        direction="horizontal"
                        horizontalAlignItems='center'
                        spacing={8}
                        width={'fill-parent'}
                    >
                        {
                            r.map((u) => {
                                return (Avatar(u.name, u.color, votedUserIds.find(id => id == u.id) ? 0.7 : 0.3))
                            })
                        }
                    </AutoLayout>
                ))
            }
        </AutoLayout>
    )
}

function buttonText(
    votingState: VotingState
) {
    switch (votingState) {
        case VotingState.NotStarted: return 'Create Story'
        case VotingState.InProgress: return 'Vote'
        case VotingState.Revealed: return 'Reset'
        default: return ''
    }
}

interface SpacerProps {
    size: number
}

const Spacer = ({ size }: SpacerProps) =>
    <Frame width={size} height={size} />

function getActiveUserById(id: string): ActiveUser | undefined {
    return figma.activeUsers.find(u => u.sessionId.toString() == id)
}

function VotingSection(
    voteMap: SyncedMap<UserVote>
) {
    const totalVotes = voteMap.keys().length

    let voteResults = voteMap.values().reduce<Map<String, User[]>>((m, userVote) => {
        const subject = `${userVote.vote} ${userVote.vote == 1 ? 'Point' : 'Points'}`
        return m.set(subject, (m.get(subject) ?? []).concat([userVote.user]))
    }, new Map<String, User[]>())

    return Array.from(voteResults.entries()).map(([subject, user]) => {
        return (
            <AutoLayout
                direction="vertical"
                verticalAlignItems="center"
                // padding={{ vertical: 8, horizontal: 16 }}
                width={288}
                height={'hug-contents'}
                spacing={8}
            >
                <AutoLayout
                    verticalAlignItems='end'
                    spacing={0}
                    width={'fill-parent'}
                >
                    <Text fontSize={14} fontWeight="medium" fill="#000000">{subject}</Text>
                    <Frame height={1} width={'fill-parent'} />
                    {
                        AvatarSection(user.concat(user).concat(user).concat(user).concat(user).concat(user).concat(user).concat(user).concat(user))
                    }
                </AutoLayout>
                {Bar(user.length, totalVotes, 288)}
                <Text fontSize={14} fontWeight='medium' fill="#000000" width={'fill-parent'} horizontalAlignText='right'>{user.length} {user.length == 1 ? 'Vote' : 'Votes'}</Text>
            </AutoLayout>
        )
    })
}

const maxAvatarsPerLine = 6

function AvatarSection(
    user: User[]
) {
    const rows: User[][] = new Array()

    for (let i = 0; i < user.length; i += maxAvatarsPerLine) {
        rows.push(user.slice(i, i + maxAvatarsPerLine))
    }

    return (
        <AutoLayout
            direction="vertical"
            spacing={8}
        >
            {
                rows.map(r => (
                    <AutoLayout
                        direction="horizontal"
                        horizontalAlignItems='end'
                        spacing={8}
                        width={'fill-parent'}
                    >
                        {
                            r.map((u) => {
                                const activeUser = getActiveUserById(u.id)
                                if (activeUser === undefined) {
                                    return (Avatar(u.name, u.color))
                                } else {
                                    return (Avatar(activeUser.name, activeUser.color))
                                }
                            })
                        }
                    </AutoLayout>
                ))
            }
        </AutoLayout>
    )
}

// function Avatar(
//     imgSrc: string
// ) {
//     return (
//         <Image src={imgSrc} width={24} height={24} cornerRadius={24} opacity={0.7} />
//     )
// }

function Avatar(
    name: string,
    color: string,
    opacity: number = 0.5
) {
    return (
        <AutoLayout width={24} height={24} opacity={opacity} fill={color} cornerRadius={24}>
            <Text verticalAlignText='center' horizontalAlignText='center' width='fill-parent' lineHeight={24} fontSize={12} fontWeight={400} fill={'#FFFFFF'}>{name[0].toUpperCase()}</Text>
        </AutoLayout>
    )
}

function Bar(
    votes: number,
    totalVotes: number,
    length: number
) {
    return (
        <Frame
            width={length}
            height={8}
            cornerRadius={8}
        >
            <Rectangle
                width={length}
                height={8}
                fill="#F9FAFB"
            />
            {
                totalVotes > 0 ?
                    (
                        <Rectangle
                            width={votes / totalVotes * length}
                            height={8}
                            cornerRadius={8}
                            fill="#717BBC"
                        />
                    ) : null
            }
        </Frame>
    )
}
