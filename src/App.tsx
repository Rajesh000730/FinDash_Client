import { ThemeProvider, createTheme } from "@mui/material/styles"
import { useMemo } from "react"
import { themeSettings } from "./theme"
import { Box, CssBaseline } from "@mui/material"
import Routes from "@/Components/Routes"
function App() {
  const theme = useMemo(() => createTheme(themeSettings), [])
  return (
    <>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Box width="100%" height="100%" padding="1rem 2rem 4rem 2rem">
        <Routes/>
      </Box>
    </ThemeProvider>
    </>
  )
}

export default App
