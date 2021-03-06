import React from 'react';
import Navbar from './Navbar';

const Body = () => {
    return (
        <>
            <Navbar />
            <div className="card border-dark mb-3" style={{maxWidth: "20rem"}}>
                <div className="card-header">Nombre del producto</div>
                <div className="card-body">
                    <h4 className="card-title">Dark card title</h4>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
        </>
        
    )
}

export default Body;