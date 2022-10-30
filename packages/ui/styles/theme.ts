import { extendTheme } from '@chakra-ui/react'
import { baseTheme } from '@saas-ui/react'

export const theme = extendTheme(
  {
    initialColorMode: 'dark',
    useSystemColorMode: false
  },
  baseTheme
)
