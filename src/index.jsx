import React from 'react';
import { render } from 'react-dom';
import CountryMap from './components/CountryMap';

const App = () => <CountryMap />;

render(<App />, document.getElementById('app'));
