import createCache from '@emotion/cache'
import { CacheProvider } from '@emotion/react'
import { ThemeProvider as MuiThemeProvider } from '@mui/material'
import { prefixer } from 'stylis'
import rtlPlugin from 'stylis-plugin-rtl'

import MuiTheme from './MuiTheme'

const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
})

interface Props {
  children: React.ReactNode
}

const ThemeProvider = ({ children }: Props) => {
  return (
    <CacheProvider value={cacheRtl}>
      <MuiThemeProvider theme={MuiTheme}>{children}</MuiThemeProvider>
    </CacheProvider>
  )
}

export default ThemeProvider
