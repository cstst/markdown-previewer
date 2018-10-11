import React from 'react';
import Editor from './components/Editor';
import Previewer from './components/Previewer';
import { Provider } from 'react-redux';
import store from './store';
import './App.scss';

const App = () => (
  <Provider store={store}>
    <div className="app">
      <Editor />
      <Previewer />
    </div>
  </Provider>
);

export default App;
