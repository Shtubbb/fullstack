import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import { Provider } from 'react-redux';
import { Main } from './components/Main';
import { Login } from './components/Login/Login';
import { Restaurants } from './components/Restaurants/Restaurants';
import { MyRestaurants } from './components/MyRestaurants';
import { AddRest } from './components/AddRest';
import { Header } from './components/Header';
import { store } from './store';


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />}/>
          <Route path='/restaurants' element={<Restaurants />}/>
          <Route path='/myrestaurants' element={<MyRestaurants />}/>
          <Route path='/add' element={<AddRest />}/>
          <Route path='/login' element={<Login />}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
