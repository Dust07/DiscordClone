import React, { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import First from './First'
import Second from './Second'
import Third from './Third'
import Fourth from './Fourth'
import Fifth from './Fifth'
import Footer from './Footer'
import Login from './Login'
import Register from './Register'
function App() {
	const [defaultProps, setDefaultProps] = useState(false);

	const setProps = (status) => {
		setDefaultProps(status);
		console.log("defaultProps after modified", defaultProps);
	}

	return (
		<Router>
			<Routes>
				<Route path="/" element={<>
					<First />
					<Second />
					<Third />
					<Fourth />
					<Fifth />
					<Footer />
				</>} />

				<Route path="login" element={<Login defaultProps={defaultProps} setProps={setProps} />} exact />
				<Route path="/login/register" element={<Register />} />

			</Routes>
		</Router>

	)
}

export default App
