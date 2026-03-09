import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#7f2d12',
      contrastText: '#fff7ee',
    },
    secondary: {
      main: '#c2410c',
    },
    background: {
      default: '#fff4e8',
      paper: '#fffdf9',
    },
    text: {
      primary: '#3a170f',
      secondary: '#613423',
    },
  },
  shape: {
    borderRadius: 16,
  },
  typography: {
    fontFamily: '"Trebuchet MS", "Segoe UI", Tahoma, sans-serif',
    h2: {
      fontWeight: 800,
      lineHeight: 1.06,
      letterSpacing: '-0.02em',
    },
    h5: {
      fontWeight: 700,
    },
    button: {
      textTransform: 'none',
      fontWeight: 700,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundImage:
            'radial-gradient(circle at 15% 20%, #ffe6bf 0%, #ffd2b7 40%, #ffddea 100%)',
          backgroundAttachment: 'fixed',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: '0 12px 28px rgba(126, 68, 34, 0.16)',
        },
      },
    },
  },
})

export default theme
