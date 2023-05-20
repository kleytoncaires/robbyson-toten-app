import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import AppRouter from 'renderer/src/routes/routes';
import theme from 'renderer/src/styles/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <AppRouter />
    </ThemeProvider>
  );
}
