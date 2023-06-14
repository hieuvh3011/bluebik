/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import AppNavigation from '@app/route/app.navigator';
import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import * as Sentry from '@sentry/react-native';
import {persistor, store} from '@app/redux/store.redux';
import {PersistGate} from 'redux-persist/integration/react';

Sentry.init({
  dsn: 'https://e4e256a5c3a94bf3b9015d5c9e6b9e32@o914809.ingest.sentry.io/4505192850587648',
});

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar
          barStyle={'dark-content'}
          backgroundColor={'transparent'}
          translucent={true}
        />
        <AppNavigation />
      </PersistGate>
    </Provider>
  );
}

export default Sentry.wrap(App);
