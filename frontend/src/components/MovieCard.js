import React from 'react'
import './MovieCard.css'

export const MovieCard = (props) => {
    //console.log(props.mov[0]["title"])
    return (
        <div className="wrapper">
            {
            props.mov.map( (movie)=>{
                return (
                <>

                {/* <div className="HI">{movie['title']}</div>
                <div>{movie['desc']}</div>
                <div>{movie['id']}</div>
                <div>{movie['photo']}</div>
                <div>{movie['date']}</div> */}

                    <div className="card">
                        <img src={movie['photo']}/>
                        <div className="descriptions">
                            <h1>{movie['title']}</h1>
                            <button>
                                <i className="fab fa-youtube"></i>
                                Play trailer on YouTube
                            </button>
                        </div>
                    </div>
                </>)
            }
            )
            }
        </div>
    )
}
