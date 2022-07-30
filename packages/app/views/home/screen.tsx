import { ScrollView, Text, View } from 'dripsy'
import Header from 'app/components/Header'
import { useContext } from 'react'
import { ColorModeContext, ColorModes } from 'app/provider/color-mode'

export function HomeScreen() {
  const { mode, toggle } = useContext(ColorModeContext)
  return (
    <ScrollView
      sx={{
        backgroundColor:
          mode === ColorModes.light ? '$lightGray' : '$veryDarkGray',
      }}
    >
      <Header />
      <View>
        <Text onPress={toggle}>toggle me</Text>
      </View>
    </ScrollView>
  )
}
