import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ObjetivoScreen from './components/screens/ObjetivoScreen';
import RendaScreen from './components/screens/RendaScreen';
import Logo from './components/ui/Logo';
import DespesaScreen from './components/screens/DespesaScreen';
import HistoricScreen from './components/screens/HistoricScreen';
import PlanejamentoScreen from './components/screens/PlanejamentoScreen';
import PrevisaoConclusaoObjetivo from './components/screens/PrevisaoConclusaoObjetivo';


function App() {
  return (
    <div className="App">
      <Logo />
      <BrowserRouter>
      <Routes>
     
        <Route path='/' element={<ObjetivoScreen />}/>
        <Route path='/renda-screen' element={<RendaScreen />} />
        <Route path='/objetivo-screen' element={<ObjetivoScreen />} />
        <Route path='/despesa-screen' element={<DespesaScreen />} />
        <Route path='/historic-screen' element={<HistoricScreen />} />
        <Route path='/planejamento-screen' element={<PlanejamentoScreen />} />
        <Route path='/previsao-conclusao-objetivo' element={<PrevisaoConclusaoObjetivo />} />
      </Routes>
      </BrowserRouter>

      
      

    </div>
  );
}

export default App;
