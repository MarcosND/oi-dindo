import { createTheme } from '@mui/material';

const theme = createTheme({
  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          color: '#000',
          "&.Mui-selected": {
            color: '#D67224',
          },
        },
      },
    },
    MuiTabs: {
      defaultProps: {
        TabIndicatorProps: {
          style: {
            backgroundColor: '#D67224',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: "#4881D6",
              borderWidth: '0.08rem',
            },
            '&:hover fieldset': {
              borderColor: '#4881D6',
              borderWidth: '0.10rem',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#4881D6',
            },
        },
      },
    },
  },
},
  palette: {
    primary: {
      main: '#4881D6',
    },
    secondary: {
      main: '#D67224',
    },
  },
  typography: {
    fontFamily: 'Montserrat'
  }
});

export default theme;