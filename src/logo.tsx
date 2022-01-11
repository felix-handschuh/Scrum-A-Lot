/** @jsx figma.widget.h */

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
  waitForTask,
} = widget

export const logo = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.5255 6.96593C13.6631 6.43247 14.1912 6.11588 14.7049 6.25882L20.286 7.81174C20.7997 7.95468 21.1046 8.50302 20.9669 9.03648L18.4745 18.6957C18.3369 19.2292 17.8088 19.5458 17.2951 19.4028L11.714 17.8499C11.2003 17.707 10.8954 17.1587 11.0331 16.6252L13.5255 6.96593Z" fill="#4E5BA6"/>
<path d="M8 6C8 5.44772 8.44772 5 9 5H15C15.5523 5 16 5.44772 16 6V16C16 16.5523 15.5523 17 15 17H9C8.44772 17 8 16.5523 8 16V6Z" fill="#C8CCE5"/>
<path d="M3.03432 8.81198C2.89138 8.27852 3.20796 7.73018 3.74143 7.58724L9.53698 6.03432C10.0704 5.89138 10.6188 6.20796 10.7617 6.74143L13.3499 16.4007C13.4929 16.9342 13.1763 17.4825 12.6428 17.6254L6.84726 19.1783C6.31379 19.3213 5.76545 19.0047 5.62251 18.4712L3.03432 8.81198Z" fill="#EAECF5"/>
</svg>`

export const WidgetLogo = () => (
  <AutoLayout direction='horizontal' verticalAlignItems='center' spacing={4}>
    <SVG src={logo} />
    <Text fontSize={9} fontWeight='bold' horizontalAlignText='center' fill='#000000'>
      Scrumalot
    </Text>
  </AutoLayout>
)
