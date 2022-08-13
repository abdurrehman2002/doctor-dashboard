
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ThemeProvider from 'react-bootstrap/ThemeProvider'

import Signup from './pages/Signup';

function App() {
  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint="xxs"
    >
      <div><Signup /></div>
    </ThemeProvider>

  );
}

export default App;
