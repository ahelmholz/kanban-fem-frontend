import React, { useContext } from 'react'
import { Text, Row, Image } from 'dripsy'
import { ColorModeContext, ColorModes } from 'app/provider/color-mode'

const Header = () => {
  const { mode } = useContext(ColorModeContext)

  return (
    <Row
      sx={{
        height: [64, null, 81, 97],
        width: '100%',
        alignItems: 'center',
        backgroundColor: mode === ColorModes.light ? '$white' : '$darkGray',
        paddingX: [16, null, 24],
      }}
    >
      <Image
        sx={{ display: [null, 'none'], height: 24, width: 24 }}
        source={{
          // TODO: need to come up with url pattern
          uri: '/assets/logo-mobile.svg',
          width: 24,
          height: 24,
        }}
      />
    </Row>
  )
}

export default Header
