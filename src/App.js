import React, { useEffect, useState } from 'react';
import { SS_BASE_URL, AFF_BASE_URL } from './globals';
import axios from 'axios';
import PhotoGrid from './components/PhotoGrid';
import StockPhoto from './components/StockPhoto';
import Affirmation from './components/Affirmation';
import './styles/App.css';

const App = () => {

    const username = process.env.REACT_APP_SHUTTERSTOCK_KEY;
    const password = process.env.REACT_APP_SHUTTERSTOCK_SECRET;
    const [photos, setPhotos] = useState([]);
    const [affirmations, setAffirmations] = useState([]);
    const count = 6;
    
    useEffect(() => {
        
        async function getStockPhoto() {
            const res = await axios.get(`${SS_BASE_URL}/v2/images/search`, {
                params:{
                    query: "confused",
                    per_page: count,
                    aspect_ratio: 1.5,
                    category: "people"
                },
                auth: {
                  username: username,
                  password: password
                }
            });
            setPhotos(res.data.data);
        }
       
        async function getAffirmation() {
            const res = await axios.get(AFF_BASE_URL);
            const affirmation = res.data[0].phrase[1].toUpperCase() + res.data[0].phrase.substring(2);
            let affirmationArray = [...affirmation];
            setAffirmations(affirmationArray); 
            console.log(affirmationArray);
        }

        for (let i = 0; i < count; i++) {
            getAffirmation();
        }
        getStockPhoto();
    }, []);

    return (
        <div className="App">
            <h1>Stock Affirmations</h1>
            <h2>When you need that extra pick-me-up</h2>
            <PhotoGrid>
                {photos.map((photo) => (
                    <div className="overlay-container" key={photo.id}>
                        <StockPhoto
                            url={photo.assets.preview.url}
                        />
                        <Affirmation 
                            text={affirmations}
                        />
                    </div>
                ))}
            </PhotoGrid>
        </div>
    );
}

export default App;
 