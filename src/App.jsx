import './App.css'; // Import your app.css file

import { Outlet } from 'react-router-dom';
import Nav from './components/Navbar/Navbar';

function App() {
  return (
    <>
      <Nav />
      <main className="mx-3">
        <Outlet />
      </main>
    </>
  );
}

export default App;
