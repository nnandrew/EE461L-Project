import logo from './logo.svg';
import './App.css';
import Hardware from './Hardware';
import Projects from './Projects';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import HardwareList from './HardwareList';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <h1>Projects</h1>
      <Grid container spacing={2}>
        <Grid xs={2.5}>
          <Projects />
        </Grid>
        <Grid xs={9}>
          <HardwareList />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
