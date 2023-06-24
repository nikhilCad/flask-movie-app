import React from 'react'
import './MovieCard.css'

export const MovieCard = (props) => {
    //console.log(props.mov[0]["title"])
    return (
        <div classNameName="wrapper">
            {
            props.mov.map( (movie)=>{
                return (
                <>

                {/* <div classNameName="HI">{movie['title']}</div>
                <div>{movie['desc']}</div>
                <div>{movie['id']}</div>
                <div>{movie['photo']}</div>
                <div>{movie['date']}</div> */}

                    {/* <div classNameName="card">
                        <img src={movie['photo']}/>
                        <div classNameName="descriptions">
                            <h1 classNameName="heading">{movie['title']}</h1>
                        </div>
                    </div> */}

<div className="card-container box">
	<div className="card-flip">
    {/* <!-- Card Front --> */}
    <div className="card front">
      <img src={movie['photo']} className="card-img-top img-fluid" alt="movie-poster"/>
        <div className="card-block">
          <h5 className="card-title">{movie['title']}</h5>
              <p className="card-text">{movie['id']}</p>
                <p className="card-text"><small className="text-muted">{movie['date']}</small></p>
          </div>
    </div>
    {/* <!-- End Card Front --> */}

    {/* <!-- Card Back --> */}
    <div className="card back">
      <div className="card-header warning-color"></div>
        <div className="card-block text-center">
		<p className="card-text">{movie['desc']}</p>
        </div>
      </div>
      {/* <!-- End Card Back --> */}
	</div>
</div>
{/* <!-- End Card --> */}
                </>)
            }
            )
            }
        </div>
    )
}
