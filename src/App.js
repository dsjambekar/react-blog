import React from 'react';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

import "bootstrap/dist/css/bootstrap.min.css";
import Posts from './components/post';
import EditPost from './components/edit-post';
import CreatePost from './components/create/create-post';

function App() {


	return (
		<Router>
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				{/* <a class="navbar-brand" href="https://codingthesmartway.com" target="_blank">
					<img width="30" height="30" alt={process.env.API_URL} />
				</a> */}
				<Link to="/" className="navbar-brand">MERN-Stack Todo App</Link>
				<div className="collpase navbar-collapse">
					<ul className="navbar-nav mr-auto">
						<li className="navbar-item">
							<Link to="/" className="nav-link">Posts</Link>
						</li>
						<li className="navbar-item">
							<Link to="/create" className="nav-link">Create Post</Link>
						</li>
						<li className="navbar-item">
							<Link to="/edit" className="nav-link">Edit Post</Link>
						</li>
					</ul>
				</div>
			</nav>
			<div className="container">


				<Route path="/" exact component={Posts} />
				{/* <Route path="/edit/:id" component={EditPost} /> */}
				<Route path="/edit" component={EditPost} />
				<Route path="/create" component={CreatePost} />
			</div>

		</Router>
	);
}

export default App;


