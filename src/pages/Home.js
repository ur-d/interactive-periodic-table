import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Table from '../components/Table';

// Home page

const Home = ({ props, parameters }) => {
    return (
        <div className="home">
            <Header />
            {/* data path */}
            <Table props={props} parameters={parameters}/>
            <Footer />
        </div>
    );
};

export default Home;