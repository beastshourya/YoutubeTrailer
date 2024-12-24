// src/components/TrailerCard.js
import React from 'react';
import './TrailerCard.css'; // Create styles for TrailerCard

function TrailerCard({ trailer }) {
    return (
        <a
            href={trailer.url}
            target="_blank"
            rel="noopener noreferrer"
            className="trailer-card-link"
        >
            <div className="trailer-card">
                <img
                    src={trailer.thumbnail}
                    alt={trailer.title}
                    className="trailer-thumbnail"
                />
                <h2 className="trailer-title">{trailer.title}</h2>
            </div>
        </a>
    );
}

export default TrailerCard;
