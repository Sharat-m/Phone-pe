
// App.js
import './App.css';
import Phonepeform from './components/Phonepeform';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className='main'>
        <Routes>
          <Route path='/' element={<Phonepeform />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
