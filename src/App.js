import './App.css';
import {Routes, Route} from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Cadastro from './pages/Cadastro';
import Ocorrencias from './pages/Ocorrencias';
import  Arvores  from "./pages/Arvores";
import  Config  from "./pages/Config";
import  Relatorios  from "./pages/Relatorios";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/cadastro'element={<Cadastro />}/>
        <Route path='/ocorrencias'element={<Ocorrencias />}/>
        <Route path='/arvores'element={<Arvores />}/>
        <Route path='/config'element={<Config />}/>
        <Route path='/relatorios'element={<Relatorios />}/>
      </Routes>
      <Sidebar />
    </div>
  );
}

export default App;
