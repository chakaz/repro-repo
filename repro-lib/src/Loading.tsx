import React from 'react';
import {FormattedMessage} from 'react-intl';

export function Loading() {
  return (
    <div className="loading">
      <h2>
        <FormattedMessage id="loading.title" />
      </h2>
      <span className="material-icons-two-tone spinning">cached</span>
    </div>
  );
}
