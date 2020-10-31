import React from 'react';
import PropTypes from 'prop-types';
import Header from './header';
import Footer from './footer';

import '../sass/index.scss'

import '../../src/tachyons.min.css'

const Layout = ({ children }) => (
	<div id="flexContainer">
		<Header />
		<main>
			{children}
		</main>
		<Footer/>
	</div>

);

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
