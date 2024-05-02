import './App.css';
import {Routes, Route} from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Cadastro from './pages/Cadastro';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/cadastro'element={<Cadastro />}/>
      </Routes>
      <Sidebar />
    </div>
  );
}

export default App;
