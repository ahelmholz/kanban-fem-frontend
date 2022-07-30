import React, { useState, FC, useContext } from 'react'
import { Image, Flex, Row, View, Text } from 'dripsy'

import Header from 'app/components/Header'
import { ColorModeContext, ColorModes } from 'app/provider/color-mode'

import SideBar from '../Layout/Sidebar'

interface LayoutProps {}

const Layout: FC<LayoutProps> = ({ children }) => {
  const { mode } = useContext(ColorModeContext)
  const [showSideBar, setShowSideBar] = useState(true)

  return (
    <View sx={{ height: '100vh' }}>
      <Header />
      <Row
        sx={{
          height: [null, null, 'calc(100vh - 81px)', 'calc(100vh - 97px)'],
        }}
      >
        {showSideBar ? (
          <View
            sx={{
              display: ['none', null, 'initial'],
              width: [null, null, 261, 300],
              height: '100%',
            }}
          >
            <SideBar
              boards={[{ id: '1', name: 'Board 1' }]}
              onBoardClick={(id: string) => {
                console.log({ id })
              }}
              onCloseSidebar={() => {
                setShowSideBar(false)
              }}
            />
          </View>
        ) : (
          <Flex
            sx={{
              position: 'absolute',
              bottom: 32,
              left: 0,
              backgroundColor: '$purple',
              zIndex: 1,
              height: 48,
              width: 56,
              borderTopRightRadius: 30,
              borderBottomRightRadius: 30,
              justifyContent: 'center',
              alignItems: 'center',
              cursor: 'pointer',
            }}
            onClick={() => {
              setShowSideBar(true)
            }}
          >
            <Image
              source={{
                uri: '/assets/icon-show-sidebar.svg',
                height: 16,
                width: 24,
              }}
            />
          </Flex>
        )}
        <View
          sx={{
            width: [
              null,
              null,
              `calc(100% - ${showSideBar ? '261px' : '0px'})`,
              `calc(100% - ${showSideBar ? '300px' : '0px'})`,
            ],
            height: '100%',
            backgroundColor:
              mode === ColorModes.light ? '$lightGray' : '$veryDarkGray',
          }}
        >
          {children}
        </View>
      </Row>
    </View>
  )
}

export default Layout
