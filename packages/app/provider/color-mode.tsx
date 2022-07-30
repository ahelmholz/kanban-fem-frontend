import React, { useCallback, useMemo, useState } from 'react'

type DarkColorMode = 'dark'
type LightColorMode = 'light'

export const ColorModes = {
  dark: 'dark' as DarkColorMode,
  light: 'light' as LightColorMode,
}

export type ColorModesTypes = DarkColorMode | LightColorMode

export const ColorModeContext = React.createContext({
  mode: ColorModes.light as ColorModesTypes,
  toggle: () => {},
})

export const ColorModeContextProvider = ({ children }) => {
  const [mode, setMode] = useState<ColorModesTypes>(ColorModes.dark)

  const value = useMemo(
    () => ({
      mode,
      toggle: () => {
        setMode((currentMode: ColorModesTypes) => {
          return currentMode === ColorModes.dark
            ? ColorModes.light
            : ColorModes.dark
        })
      },
    }),
    [mode]
  )

  return (
    <ColorModeContext.Provider value={value}>
      {children}
    </ColorModeContext.Provider>
  )
}
