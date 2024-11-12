import { createTheme } from '@mui/material/styles';

const MuiTheme = createTheme({
  direction: 'rtl',
  palette: {
    primary: {
      main: "#004F86",
      light: "#73C322",
      dark: "#F98A07",
      contrastText: "#FFFFFF",
    },
  },
  typography: {
    fontFamily: '"IranYekan", "Roboto", "Helvetica", "Arial", sans-serif',
  },
  components: {
    MuiTextField: {
      defaultProps: {
        variant: 'filled',
      },
    },
    MuiButton: {
      defaultProps: {
        variant: 'contained',
      },
    },
  },
});

export default MuiTheme;
