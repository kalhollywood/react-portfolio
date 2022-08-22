import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Layout />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />

      </Routes>
    </div >
  );
}

export default App;
