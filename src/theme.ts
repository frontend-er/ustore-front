// @ts-nocheck

import { createMuiTheme, ThemeProvider } from '@material-ui/core';


export const theme = createMuiTheme({

   typography: {
      fontFamily: [
         'Roboto Slab',
      ],
   },
   palette: {
      primary: {
         light: '#0289B6',
         main: '#0094C5',
         dark: '#006C8F',
         contrastText: '#fff',
      },
      secondary: {
         light: '#0289B6',
         main: '#006C8F',
         dark: '#006C8F',
         contrastText: '#fff',
      },

      background: {
         default: '#006C8F',
         paper: '006C8F'
      },

      default: {
         main: '#000',

      },

      success: {
         light: '#0289B6',
         main: '#8741A2',
         dark: '#006C8F',
         contrastText: '#fff',
      },

   },
   status: {
      danger: 'orange',
   },

   overrides: {
      MuiButton: {
         root: {
            borderRadius: 3,
            textTransform: 'none',
            fontSize: 16,
            height: 35,
            fontWeight: 700,
            padding: 4
         },
         textPrimary: {
            paddingLeft: 24,
            paddingRight: 24,
         },
         outlinedPrimary: {
            borderColor: '#006C8F',
         },
      },

      MuiDialog: {
         paper: {
            borderRadius: 3,
         },
      },
      MuiDialogActions: {
         root: {
            marginBottom: 8,
         },
      },

   }
});

theme.typography.h3 = {
   fontSize: '1.2rem',
   '@media (min-width:600px)': {
      fontSize: '1.5rem',
   },
   [theme.breakpoints.up('md')]: {
      fontSize: '2.4rem',
   },

}

export default theme;