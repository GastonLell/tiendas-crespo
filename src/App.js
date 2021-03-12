import Routes from './routes';
import reducer from './reducer';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const store = createStore(reducer);

const App = () => {
  
  return (
    <div className="App">
      <Provider store={store}>
        <Routes/>
      </Provider>
    </div>
  );
}

export default App;
