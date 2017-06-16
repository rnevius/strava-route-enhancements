import React from 'react';
import ReactDOM from 'react-dom';

import RouteReverse from './components/route-reverse';

let customControls = document.createElement('div'),
    builderControls = document.querySelector('#builder-controls > :first-child');

customControls.id = 'Strava-Route-Enhancements--controls';
customControls.style.display = 'inline-block';
builderControls.appendChild(customControls);

ReactDOM.render(
  <RouteReverse />,
  customControls
);
