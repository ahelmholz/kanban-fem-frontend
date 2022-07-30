import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Layout from '../../../../apps/expo/components/Layout'
import { HomeScreen } from '../../views/home/screen'
import { UserDetailScreen } from '../../views/user/detail-screen'

const layoutWrapper = (component) => {
  return () => {
    return <Layout>{component}</Layout>
  }
}

const Stack = createNativeStackNavigator<{
  home: undefined
  'user-detail': {
    id: string
  }
}>()

export function NativeNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={layoutWrapper(HomeScreen)}
        options={{
          title: 'Home',
        }}
      />
      <Stack.Screen
        name="user-detail"
        component={layoutWrapper(UserDetailScreen)}
        options={{
          title: 'User',
        }}
      />
    </Stack.Navigator>
  )
}
