import './App.css';
import ChatPage from './pages/chatPage';
import Contact from './pages/contact';
import Home from './pages/home';
import Login from './pages/login';
import OrderFood from './pages/orderFood';
import SignUp from './pages/signUp';
import { Outlet } from 'react-router-dom';
function App() {
  return (
    <div className='p-4 h-screen flex items-center justify-center'>
      <Outlet />
    </div>
    // <Login />
    // <ChatPage />
    // <SignUp />
    // <Contact />
    // <Home />
    // <OrderFood/>
    // <div className='p-4 h-screen flex items-center justify-center'>
  
  );
}

export default App;
