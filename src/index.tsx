import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import { App } from '@app/components/App/App';
import { NetworkStatusContextProvider } from '@features/networkStatus/NetworkStatusContextProvider';
import { initI18n } from '@features/locale/utils';
import '@app/common.css';

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker
      .register('sw.js')
      .then(function () {
        console.log('Service Worker Registered!!');
      })
      .catch((e) => console.error('cant register SW', e));
  });
}
initI18n(() => {
  ReactDOM.render(
    <NetworkStatusContextProvider>
      <Router>
        <App />
      </Router>
    </NetworkStatusContextProvider>,
    document.getElementById('root')
  );
});
