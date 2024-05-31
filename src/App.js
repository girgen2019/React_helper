/** @format */
import './App.css';
import { AppWrapper } from './LayOut/AppWrapper';
import { AppHeader } from './LayOut/AppHeader';
import { AppContent } from './LayOut/AppContent';
import { Route, Routes } from 'react-router-dom';
import { LayOut } from './LayOut/LayOut';
import { Home } from './Components/Home';
import { About } from './Library/About';
import { Components_Props } from './Library/Components&Props';
import { State_LifeCycle } from './Library/State&LifeCycle';

const App = () => {
  return (
    <div className="App">
      <AppWrapper>
        <AppHeader />
        <AppContent>
          <Routes>
            <Route path="/" element={<LayOut />}>
              <Route index element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/components_props" element={<Components_Props />} />
              <Route path="/state_life_cycle" element={<State_LifeCycle />} />
            </Route>
          </Routes>
        </AppContent>
      </AppWrapper>
    </div>
  );
};

export default App;
