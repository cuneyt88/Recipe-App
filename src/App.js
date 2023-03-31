import { ThemeProvider } from 'styled-components';
import './App.css';
import AppRouter from './router/AppRouter';
import Theme from "./components/globalStyles/Theme"

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <AppRouter/>
    </ThemeProvider>
     
    
  );
}

export default App;

