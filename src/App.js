import { Container } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>
        
    </BrowserRouter>
  );
}

export default App;
