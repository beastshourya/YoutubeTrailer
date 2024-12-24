// src/components/TrailerCard.js
import React from 'react';
import './TrailerCard.css';

function TrailerCard({ trailer }) {
    return (
        <div className="trailer-card">
            <img src={trailer.thumbnail} alt={trailer.title} className="thumbnail" />
            <div className="trailer-info">
                <h2>{trailer.title}</h2>
            </div>
        </div>
    );
}

export default TrailerCard;
