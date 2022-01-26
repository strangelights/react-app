import React, { useEffect, useState } from 'react';
import { SS_BASE_URL, AFF_BASE_URL } from './globals';
import axios from 'axios';
import PhotoGrid from './components/PhotoGrid';
import StockPhoto from './components/StockPhoto';
import './styles/App.css';

const App = () => {

    const username = process.env.REACT_APP_SHUTTERSTOCK_KEY;
    const password = process.env.REACT_APP_SHUTTERSTOCK_SECRET;
    // let imageArray = [];
    const [photos, setPhotos] = useState([]);
    const [affirmations, setAffirmations] = useState([]);
    
    useEffect(() => {
        
        async function getStockPhoto() {
            const res = await axios.get(`${SS_BASE_URL}/v2/images/search`, {
                params:{
                    query: "confused",
                    per_page: 2
                },
                auth: {
                  username: username,
                  password: password
                }
            });
            setPhotos(res.data.data);
            console.log(res.data.data);
        }
       
        async function getAffirmation() {
            const res = await axios.get(AFF_BASE_URL);
            console.log(res.data[0].phrase[1].toUpperCase() + res.data[0].phrase.substring(2)); 
        }

        // imageArray = getStockPhoto();
        getAffirmation();
        // console.log(imageArray);
        console.log(getStockPhoto());
    }, []);

    /*-------Line of Understanding-------------*/


    return (
        <div className="App">
            <h1>Stock Affirmations</h1>
            <h2>When you just need that extra pick me up.</h2>
            <PhotoGrid>
                {
                photos.map((photo) => (
                    <StockPhoto
                        key={photo.id}
                        url={photo.assets.preview.url}
                    />
                ))
                }
            </PhotoGrid>
        </div>
    );
}

export default App;
 