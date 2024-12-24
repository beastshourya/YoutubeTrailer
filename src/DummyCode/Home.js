// src/pages/Home.js
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import TrailerCard from '../components/TrailerCard';
import './Home.css'; // Styles for the homepage

// Mock data (replace this with API data if available)
const mockTrailerData = [
    { id: 1, title: "Trailer 1", thumbnail: "/path/to/thumbnail1.jpg" },
    { id: 2, title: "Trailer 2", thumbnail: "/path/to/thumbnail2.jpg" },
    { id: 3, title: "Trailer 3", thumbnail: "/path/to/thumbnail3.jpg" },
    // Add more trailers as needed
];

function Home() {
    const [trailers, setTrailers] = useState([]);

    // Simulate fetching data (replace with API call as needed)
    useEffect(() => {
        setTimeout(() => {
            setTrailers(mockTrailerData);
        }, 500);
    }, []);

    return (
        <div className="animated-background">
            <div className="home-container">
                <h1 className="title">YouTube Trailer Showcase</h1>
                <motion.div
                    className="trailers-grid"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: { staggerChildren: 0.2 }
                        }
                    }}
                >
                    {trailers.map(trailer => (
                        <motion.div
                            key={trailer.id}
                            className="trailer-card-wrapper"
                            whileHover={{ scale: 1.05 }}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 }
                            }}
                        >
                            <TrailerCard trailer={trailer} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}

export default Home;
