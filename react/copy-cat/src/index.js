import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import CopyCatContainer from './containers/CopyCatContainer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<CopyCatContainer />
	</React.StrictMode>
);
