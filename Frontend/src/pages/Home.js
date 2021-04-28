import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home">
            <div className="button-group">
                <Link to="/CreateTeam" className="button">Create Team</Link>
                <Link to="/TeamList" className="button">Join Team</Link>
            </div>
        </div>
    );
};

export default Home;
