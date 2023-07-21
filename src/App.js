import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';

import { SideBarProvider } from './context/SideContext';
import { UsersProvider } from './context/UserContext'; 

function App() {
  return (
    <SideBarProvider>
      <UsersProvider> 
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/profile/:userId" element={<Profile />} />
          </Routes>
        </BrowserRouter>
      </UsersProvider>
    </SideBarProvider>
  );
}

export default App;
