import { ColorModeContextProvider } from './color-mode'
import { Dripsy } from './dripsy'
import { NavigationProvider } from './navigation'

export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <NavigationProvider>
      <ColorModeContextProvider>
        <Dripsy>{children}</Dripsy>
      </ColorModeContextProvider>
    </NavigationProvider>
  )
}
