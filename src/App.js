import React from 'react';
import { Provider } from 'react-redux';
import store from './app/store';
import { Counter } from './components/Counter';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <h1>Redux Toolkit Counter Example</h1>
          <Counter />
        </header>
      </div>
    </Provider>
  );
}

export default App;
