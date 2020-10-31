import React from 'react';
import NavBar from '../NavBar';
import Footer from '../footer';

const ClubsLayout = ({ children }) => {
    return(
        <div id="flexContainer">
            <NavBar/>
            <div style={{
                marginTop: "65px"
            }}>
                { children }
            </div>
            <Footer/>
        </div>
    )
}

export default ClubsLayout;