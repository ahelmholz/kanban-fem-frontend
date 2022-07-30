import { useContext, useState } from 'react'
import { Row, ScrollView, View } from 'dripsy'

import { ColorModeContext, ColorModes } from 'app/provider/color-mode'

export function HomeScreen() {
  const { mode } = useContext(ColorModeContext)
  return (
    <View
      sx={{
        flex: 1,
        backgroundColor:
          mode === ColorModes.light ? '$lightGray' : '$veryDarkGray',
      }}
    >
      <ScrollView style={{ flex: 1 }}>
        <View sx={{ height: 300 }}></View>
        <View sx={{ height: 300 }}></View>
        <View sx={{ height: 300 }}></View>
        <View sx={{ height: 300 }}></View>
        <View sx={{ height: 300 }}></View>
      </ScrollView>
    </View>
  )
}
