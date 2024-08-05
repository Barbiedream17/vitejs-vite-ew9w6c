import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LoginPage } from '@/app/auth/login/loginpage';
import { RegisterPage } from '@/app/auth/register/registerpage';
import { DashboardHeader } from '@/components/dashboard/header';

function App() {
  return (
    <Router>
 
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/dashboard" element={<DashboardHeader heading="Dashboard" />} />
          <Route path="/" element={<LoginPage />} />
        </Routes>
    
    </Router>
  );
}

export default App;
