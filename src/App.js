import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { SS_BASE_URL, AFF_BASE_URL } from './globals';
import './styles/App.css';

const App = () => {

    const username = process.env.REACT_APP_SHUTTERSTOCK_KEY;
    const password = process.env.REACT_APP_SHUTTERSTOCK_SECRET;

    useEffect(() => {
        
        async function getStockPhoto() {
            const res = await axios.get(`${SS_BASE_URL}/v2/images/search`, {
                params:{
                    query: "affirmation"
                },
                auth: {
                  username: username,
                  password: password
                }
            });
            console.log(res);
        }
       
        async function getAffirmation() {
            const res = await axios.get(AFF_BASE_URL);
            console.log(res.data[0].phrase[1].toUpperCase() + res.data[0].phrase.substring(2)); 
        }

        getStockPhoto();
        getAffirmation();
    }, []);

    return (
        <div className="App">
        <h2>Stock Affirmations</h2>
        <h3>When you just need that extra pick me up.</h3>
        </div>
    );
}

export default App;
 