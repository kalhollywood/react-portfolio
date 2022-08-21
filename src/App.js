import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<Layout />} />


      </Routes>
    </div >
  );
}

export default App;
