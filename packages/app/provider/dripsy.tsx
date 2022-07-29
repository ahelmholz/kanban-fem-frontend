import { DripsyProvider, makeTheme } from 'dripsy'

import colors from '../theme/colors'
import text from '../theme/text'

const theme = makeTheme({
  colors,
  text,
})

export function Dripsy({ children }: { children: React.ReactNode }) {
  return (
    <DripsyProvider
      theme={theme}
      // this disables SSR, since react-native-web doesn't have support for it (yet)
      ssr
    >
      {children}
    </DripsyProvider>
  )
}
