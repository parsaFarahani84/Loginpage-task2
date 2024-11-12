import { CssBaseline, GlobalStyles } from '@mui/material'
import { RouterProvider } from 'react-router-dom'

import router from './router'
import ThemeProvider from './theme'

const App = () => {
  return (


    <ThemeProvider>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
