//Core
import {Router} from 'react-router-dom';
import {Provider} from 'react-redux';

//Navigation
import {Routes} from './navigation';
import {history} from './navigation/history';

//Other
import {store} from './init/store';

const App = () => {
  return (
    <Provider store={store}>
        <Router history={history}>
          <Routes />
        </Router>
    </Provider>
  );
}

export default App;
