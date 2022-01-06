import React ,{ Component } from 'react';
import Main from './components/MainComponent';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
// provide component allows to configure our react application to make use of redux store for all component to access redux store
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

const store =ConfigureStore();

class App extends Component { 

  render(){
  return (
    //now redux store is avaliable for all the component to react applictaion
    <Provider store = { store }>
    <BrowserRouter>
    <div >
        <Main />
    </div>
    </BrowserRouter>
    </Provider>
  );
}

}
export default App;
