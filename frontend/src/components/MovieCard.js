import React from 'react'
import './MovieCard.css'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export const MovieCard = (props) => {
    //console.log(props.mov[0]["title"])
    return (
        <div class="row">
            {



                props.mov.map((movie) => {
                    return (<>

                        {/* <div classNameNameName="HI">{movie['title']}</div>
                <div>{movie['desc']}</div>
                <div>{movie['id']}</div>
                <div>{movie['photo']}</div>
                <div>{movie['date']}</div> */}

                        {/* sm adds to 12 in row*/}
                        <div class="col-sm-4">
                            <div class="card">
                                <div class="card-body ">
                                    <img src={movie['photo']} alt={movie['title']} />
                                    <h5 class="card-title">{movie['title']}</h5>
                                    {/* <p class="card-text">{movie['desc']}</p> */}
                                    {/* <button class="btn btn-primary">Details</button> */}
                                    <Popup trigger={<button className="button"> Open Modal </button>} modal>
                                        <div>

                                            <h5 class="card-title">{movie['title']}</h5>
                                            <p class="card-text">{movie['desc']}</p>
                                        </div>
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
