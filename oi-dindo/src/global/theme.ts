import { createTheme } from '@mui/material';

const theme = createTheme({
  components: {
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
      main: '#0f0',
    },
  },
});

export default theme;