import './App.css';
import {Routes, Route} from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Cadastro from './pages/Cadastro';
import Ocorrencias from './pages/Ocorrencias';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/cadastro'element={<Cadastro />}/>
        <Route path='/cadastro'element={<Ocorrencias />}/>
      </Routes>
      <Sidebar />
    </div>
  );
}

export default App;
