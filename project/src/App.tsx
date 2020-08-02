import React from 'react';
import {IntlProvider} from 'react-intl';
import {Loading} from 'pf-common';

export default class App extends React.Component<{}, {}> {
  public render() {
    return (
      <IntlProvider
        locale="en"
        messages={undefined}>
        <Loading />
      </IntlProvider>
    );
  }
}
