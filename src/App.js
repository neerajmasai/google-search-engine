import { GlobalStyle } from '../src/styles/Global.styled';
import SearchContainer from './components/SearchContainer';
import { Routes, Route } from 'react-router-dom';
import Results from './components/Results';

function App() {
  return (
    <GlobalStyle>
      <div className="App">
        <Routes>
          <Route path="/" element={<SearchContainer />} />
          <Route path="/Results" element={<Results />} />
        </Routes>
      </div>
    </GlobalStyle>
  );
}

export default App;
