// Importing modules
import React, { useState, useEffect } from "react";
import "./App.css";
//use {} if using rafc as it is trying to find a default export for in your file.
import {MovieCard} from './components/MovieCard';

function App() {
  // usestate for setting a javascript
  // object for storing and using data
  const [movie, setMovie] = useState(
    []
  );

  useEffect(()=>{
    // Using fetch to fetch the api from
    // flask server it will be redirected to proxy
    fetch('/data',{
      'methods':'GET',
      headers : {
        'Content-Type':'application/json'
                }
        }).then(response => {
                  let movlistpromise = response.json();

                  movlistpromise.then(movlist => {
                    movlist.forEach(mov => {
                      //console.log(mov["title"]);
                      //console.log(...movie)
                      setMovie(cur => [...cur, mov])
                      
                    });
                  })
                  
                })
      }, [])

  return (
    <div class="container">
        <h1>Latest Movies</h1>
        {/* Calling a data from setdata for showing */}

        <MovieCard mov={movie}></MovieCard>

      </div>
  );

  }

export default App;
