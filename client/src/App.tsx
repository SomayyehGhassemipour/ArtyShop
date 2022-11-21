import { Route, Routes } from 'react-router-dom';
import './App.css';
import { AboutMe } from './components/aboutme/AboutMe';
import { Contact } from './components/contact/Contact';
import { Gallery } from './components/gallery/Gallery';
import { Home } from './components/home/Home';
import {Navbar} from './components/navbar/Navbar';
import { Profile } from './components/navbar/profile/Profile';
import { Shop } from './components/shop/Shop';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/aboutme" element={<AboutMe/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
    </div>
  );
}

export default App;
