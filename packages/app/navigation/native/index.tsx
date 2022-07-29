import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { HomeScreen } from '../../views/home/screen'
import { UserDetailScreen } from '../../views/user/detail-screen'
import { LandingScreen } from '../../views/landing/screen'

const Stack = createNativeStackNavigator<{
  home: undefined
  'user-detail': {
    id: string
  }
  landing: undefined
}>()

export function NativeNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="landing"
        component={LandingScreen}
        options={{
          title: 'Landing Page',
        }}
      />
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={{
          title: 'Home',
        }}
      />
      <Stack.Screen
        name="user-detail"
        component={UserDetailScreen}
        options={{
          title: 'User',
        }}
      />
    </Stack.Navigator>
  )
}
