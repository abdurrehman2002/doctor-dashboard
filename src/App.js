
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import Router from './Router';


function App() {
  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint="xxs"
    >
      <Router/>
    </ThemeProvider>

  );
}

export default App;
