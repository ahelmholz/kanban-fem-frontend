import React, { FC, useContext } from 'react'
import { Flex, Text, View } from 'dripsy'
import { ColorModeContext, ColorModes } from 'app/provider/color-mode'

interface SideBarProps {
  boards: {
    id: string
    name: string
  }[]
  onBoardClick: (boardId: string) => void
  onCloseSidebar: VoidFunction
}

const SideBar: FC<SideBarProps> = ({
  boards,
  onBoardClick,
  onCloseSidebar,
}) => {
  const { mode, toggle } = useContext(ColorModeContext)
  return (
    <Flex
      sx={{
        backgroundColor: mode === ColorModes.light ? '$white' : '$darkGray',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 15,
        paddingBottom: 32,
        height: '100%',
      }}
    >
      <View>
        <Text
          // @ts-ignore
          variants={['$heading_s']}
          sx={{ color: '$mediumGray', textTransform: 'uppercase' }}
        >
          All Boards {`(${boards.length})`}
        </Text>
      </View>
      <View>
        <Text onPress={toggle}>Toggle Color Mode</Text>
        <Text onPress={onCloseSidebar}>Hide Sidebar</Text>
      </View>
    </Flex>
  )
}

export default SideBar
