import './App.css';
import SignInForm from './pages/auth/Login';
import RegisterForm from './pages/auth/Register';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Homepage from './pages/home/Homepage';
import Department from './components/Department/Department';
import Sidebar from './components/Sidebar/Sidebar'; 
import EmployeeManagement from './components/EmployeeManagement/EmployeeManagement';
import AddEmployee from './components/EmployeeManagement/AddEmployee';

function AppContent() {
  const location = useLocation();
  const showSidebar = location.pathname !== '/signin' && location.pathname !== '/signup';

  return (
    <div style={{ display: 'flex' }}>
      {showSidebar && <Sidebar />}
      <div style={{ flex: 1 }}>
        <Routes>
          <Route path='/signin' element={<SignInForm />} />
          <Route path='/signup' element={<RegisterForm />} />
          <Route path='/' element={<Homepage />} />
          <Route path='/department' element={<Department />} />
          <Route path='/employee' element={<EmployeeManagement />} />
          <Route path='/addEmployee' element={<AddEmployee/>}/>
        </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
      <ToastContainer/>
    </BrowserRouter>
  );
}

export default App;
