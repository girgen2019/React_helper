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
import { VirtualDom } from './Library/VirtualDOM';
import { Keys } from './Library/Keys';
import { ReactFragment } from './Library/ReactFragment';
import { ReactContext } from './Library/ReactContext';
import { Hooks } from './Library/Hooks';

const App = () => {
  return (
    <div className="App">
      <AppWrapper>
        <AppHeader />
        <AppContent>
          <Routes>
            <Route path="/React_helper" element={<LayOut/>}>
              <Route index element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/virtual_dom" element={<VirtualDom />} />
              <Route path="/components_props" element={<Components_Props />} />
              <Route path="/state_life_cycle" element={<State_LifeCycle />} />
              <Route path="/keys" element={<Keys />} />
              <Route path="/fragments" element={<ReactFragment />} />
              <Route path="/context" element={<ReactContext />} />
              <Route path="/hooks" element={<Hooks />} />
            </Route>
          </Routes>
        </AppContent>
      </AppWrapper>
    </div>
  );
};

export default App;
