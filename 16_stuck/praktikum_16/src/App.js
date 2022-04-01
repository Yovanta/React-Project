import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store/store';

import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import {AboutApp, AboutAuthor} from './Pages/AboutApp';
import PageNotFound from './Pages/PageNotFound';
import Sidebar from './Component/sidebar/Sidebar';

function App() {
  return (
    <Router>
      <div className="App container font-serif">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Sidebar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' exact element={<AboutApp/>}/>
            <Route path='/about/about-app' element={<AboutApp/>}/>
            <Route path='/about/about-author' element={<AboutAuthor/>}/>
            <Route path='*' element={<PageNotFound/>}/>
          </Routes>
        </PersistGate>
      </Provider>
    </div>
  </Router>
  );
}

export default App;
