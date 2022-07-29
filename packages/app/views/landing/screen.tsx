import { Text, View, H1 } from 'dripsy'
import { MotiLink } from 'solito/moti'

export function LandingScreen() {
  return (
    <View
      sx={{
        display: 'flex',
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <H1 sx={{ color: '$purple' }}>Landing page</H1>
      <MotiLink
        href="/home"
        animate={({ hovered, pressed }) => {
          'worklet'

          return {
            scale: pressed ? 0.95 : hovered ? 1.1 : 1,
            rotateZ: pressed ? '0deg' : hovered ? '-3deg' : '0deg',
          }
        }}
        transition={{
          type: 'timing',
          duration: 150,
        }}
      >
        <Text
          selectable={false}
          sx={{
            fontSize: 16,
            color: '$white',
            fontWeight: 'bold',
            backgroundColor: '$lightPurple',
            paddingX: '20px',
            paddingY: '12px',
            borderRadius: '20px',
          }}
        >
          To Home Page
        </Text>
      </MotiLink>
    </View>
  )
}
