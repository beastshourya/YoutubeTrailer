// src/pages/Home.js
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import TrailerCard from '../components/TrailerCard';
import './Home.css'; // Styles for the homepage

function Home() {
    const [trailers, setTrailers] = useState([]);
    const [error, setError] = useState(null);

    const API_KEY = 'AIzaSyD6ETufdhSqX7pFDN63hrQmePpywt91Gnk';
    const SEARCH_QUERY = 'movie trailers'; // Search query for trailers
    const API_URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=${encodeURIComponent(
        SEARCH_QUERY
    )}&key=${API_KEY}&maxResults=10`;

    useEffect(() => {
        const fetchTrailers = async () => {
            try {
                const response = await fetch(API_URL);
                const data = await response.json();

                if (data.error) {
                    throw new Error(data.error.message);
                }

                // Transform data to match the structure needed for TrailerCard
                const formattedTrailers = data.items.map((item) => ({
                    id: item.id.videoId,
                    title: item.snippet.title,
                    thumbnail: item.snippet.thumbnails.high.url,
                    url: `https://www.youtube.com/watch?v=${item.id.videoId}`,
                }));

                setTrailers(formattedTrailers);
            } catch (err) {
                setError(err.message);
                console.error('Error fetching YouTube videos:', err);
            }
        };

        fetchTrailers();
    }, []);

    return (
        <div className="animated-background">
            <div className="home-container">
                <h1 className="title">YouTube Trailer Showcase</h1>
                {error && <p className="error-message">Error: {error}</p>}
                <motion.div
                    className="trailers-grid"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: { staggerChildren: 0.2 },
                        },
                    }}
                >
                    {trailers.map((trailer) => (
                        <motion.div
                            key={trailer.id}
                            className="trailer-card-wrapper"
                            whileHover={{ scale: 1.05 }}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 },
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
