import { createTheme } from '@mui/material';

const DatePickerTheme = createTheme({
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '&:hover': {
            cursor: 'pointer',
          },
          '& fieldset': {
            borderColor: 'black',
            borderWidth: '2px'
          },
          '&:hover fieldset': {
            borderColor: 'black',
            borderWidth: '2px'
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: 'black',
          },
        },
        input: {
          padding: '8px 15px',
          cursor: 'pointer',
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          color: 'white',
          textAlign: 'center'
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: 'white',
          '&.Mui-focused': {
            color: 'white'
          },
          '&.MuiInputLabel-shrink': {
            color: 'white'
          }
        }
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          width: '120px',
        },
      },
    },
  },
});

export default DatePickerTheme;