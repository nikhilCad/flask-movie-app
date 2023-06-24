import React from 'react'
import './MovieCard.css'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export const MovieCard = (props) => {
    //console.log(props.mov[0]["title"])
    return (
        <div className="row">
            {



                props.mov.map((movie) => {
                    return (<>

                        {/* <div classNameNameName="HI">{movie['title']}</div>
                <div>{movie['desc']}</div>
                <div>{movie['id']}</div>
                <div>{movie['photo']}</div>
                <div>{movie['date']}</div> */}

                        {/* sm adds to 12 in row*/}
                        <div className="col-sm-3 ">
                            <div className="card">
                                <div className="card-body ">
                                    <img src={movie['photo']} alt={movie['title']} />
                                    <h5 className="card-title">{movie['title']}</h5>
                                    {/* <p className="card-text">{movie['desc']}</p> */}
                                    {/* <button className="btn btn-primary">Details</button> */}
                                    <Popup
                                        trigger={<button className="ourButton"> See Details </button>}
                                        modal
                                        nested
                                    >
                                        {close => (
                                            <div className="theCardPopup">
                                                <h1 className="card-title">{movie['title']}</h1>
                                                <img className="ourImg" src={movie['photo']} alt={movie['title']} />
                                                <div className="content">
                                                    <div> Date : {movie['date']}</div>
                                                    <br />
                                                    <h2>Plot</h2>
                                                    <div>{movie['desc']}</div>
                                                </div>

                                                <br />

                                                <button
                                                    className="button"
                                                    onClick={() => {
                                                        console.log('modal closed ');
                                                        close();
                                                    }}
                                                >
                                                    Close
                                                </button>

                                            </div>
                                        )}
                                    </Popup>
                                </div>
                            </div>
                        </div>




                    </>)
                }
                )



            }
        </div>
    )
}
