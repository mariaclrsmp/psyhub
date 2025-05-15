import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router";
import './index.css';
import Homepage from './pages/Homepage';
import App from './App';
import Calendar from './pages/Calendar';
import Patient from './pages/Patient';

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
       <Routes>
        <Route path="/" element={<App />} >
          <Route index element={<Homepage />} />
          <Route path='/agenda' element={<Calendar />} />
          <Route path='/pacientes' element={<Patient />} />
        </Route>
      </Routes>
    </BrowserRouter>
)
