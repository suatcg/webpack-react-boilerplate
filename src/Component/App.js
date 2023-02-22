import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import './App.css';

const App = () => {
	return (
		<ErrorBoundary>
			<div className="App">
				<div className="App-header">
					<h1>App</h1>
				</div>
			</div>
		</ErrorBoundary>
	);
};

export default App;
