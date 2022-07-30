import React from 'react'
import { Text, Row, Image } from 'dripsy'

const Header = () => {
  return (
    <Row
      sx={{
        height: [64, null, 81, 97],
        width: '100%',
        alignItems: 'center',
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
      <Text>Header</Text>
    </Row>
  )
}

export default Header
