import React from 'react'

import { SaasProvider } from '@saas-ui/react'
import {
  ColorModeScript as ChakraColorModeScript,
  ColorModeScriptProps,
  ThemeProviderProps
} from '@chakra-ui/react'
import { theme as baseTheme } from './styles/theme'

type ThemeProviderPropsWithDefault = Omit<ThemeProviderProps, 'theme'> & {
  theme?: typeof baseTheme
}

export function ThemeProvider({
  theme = baseTheme,
  children,
  ...rest
}: ThemeProviderPropsWithDefault): React.ReactElement {
  return (
    <SaasProvider theme={theme} {...rest}>
      {children}
    </SaasProvider>
  )
}

export function ColorModeScript({
  initialColorMode = baseTheme.config.initialColorMode,
  ...rest
}: ColorModeScriptProps): React.ReactElement {
  return <ChakraColorModeScript initialColorMode={initialColorMode} {...rest} />
}
