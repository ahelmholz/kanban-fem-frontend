import { Text, View } from 'dripsy'
import Header from 'app/components/Header'
import { useContext } from 'react'
import { ColorModeContext, ColorModes } from 'app/provider/color-mode'

export function HomeScreen() {
  const { mode, toggle } = useContext(ColorModeContext)
  return (
    <View
      sx={{ backgroundColor: mode === ColorModes.light ? '$gray5' : '$purple' }}
    >
      <Header />
      <View>
        <Text onPress={toggle}>toggle me</Text>
      </View>
    </View>
  )
}
