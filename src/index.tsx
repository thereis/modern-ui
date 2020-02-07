import * as React from 'react';
import { render } from 'react-dom';
import * as serviceWorker from './serviceWorker';

/**
 * Components
 */
import { App } from './components/App';
import { AppProvider } from 'context/app.context';

/**
 * Styles
 */
import './assets/styles/index.css';

render(
  <AppProvider>
    <App />
  </AppProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();
