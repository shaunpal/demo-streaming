import axios from "axios";
import React, { useContext, useEffect, useRef, useState } from "react";
import { MovieContext } from "../contexts/MovieContext";
import { TriviaWindow } from "./TriviaWindow";

export const MovieViewType = ({ type }) => {

    const errMsg = "Unavailable for now...";

    const [openTrivia, setOpenTrivia] = useState(false);

    const imgRef = useRef()

    const [visible, setVisible] = useState(false);

    const [movies, setMovies] = useContext(MovieContext);

    const [moviefilters, ] = useState(() => {
        return movies.filter(movie => movie.programType === type.toLowerCase())
    })


    const getTriviaWindow = (movie) => {
        movie.topen = !openTrivia;
        setOpenTrivia(!openTrivia);
        retrieveTrivia(movie);
    }

    const retrieveTrivia = (movie) => {
        if(movie.trivia){
            return;
        }
        axios.get(`http://numbersapi.com/${movie.releaseYear}/year`)
            .then(res => res.data)
            .then(msg => {
                movie.trivia = msg;
            })
            .catch(error => {
                console.log("Error: "+error)
                movie.trivia = errMsg;
            });
            setMovies([...movies, movie])
            return;
    }

    useEffect(() => {
        const callback = (entries) => {
          entries.forEach((entry) => {
            if(!entry.isIntersecting) return
            setVisible(entry.isIntersecting);
          });
        };
      
        let currentRef = imgRef.current;
        const options = {
          rootMargin: "100px",
          threshold: 0
        };
      
        const observer = new IntersectionObserver(callback, options);
        if(imgRef.current){
            observer.observe(currentRef);
        }
        

        return () => {
            observer.unobserve(currentRef)
        }
      }, [imgRef,visible, moviefilters]);

      

    return(
        <div style={styles.container}>
            <div style={styles.populartitlesdiv}>
                <p className="popular-header" style={{ fontSize: 18, marginLeft: '17%'}}>Popular {type}</p>
            </div>
                <div className="series-movies-container" ref={imgRef} style={styles.moviecontainer}>
                {moviefilters.map(movie => (
                    <div key={movie.title} style={{ marginRight: '20px' }}>
                        {visible ?
                        <div>
                            <div className="movie-img" style={styles.moviediv}>
                                <img 
                                    alt={movie.title}
                                    width={'180px'}
                                    height={'250px'}
                                    src={movie.images["Poster Art"].url} />
                                    <TriviaWindow isOpen={movie.topen} movie={movie} />
                            </div>
                            <div className="movie-info">
                                <h6 style={{ height: '40px', width: '120px', flexWrap: 'wrap' }}>{movie.title}</h6>
                                <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexDirection: 'row' }}>
                                    <h6>{movie.releaseYear}</h6>
                                    <p className="trivia-btn" style={styles.trivadiv} onClick={() => getTriviaWindow(movie)}>Click for Trivia</p>
                                </div>
                            </div>
                        </div>
                        :
                        <div>
                            <p>Loading...</p>
                        </div>
                        }        
                    </div>
                ))}     
                </div> 
            </div>
    );
}

const styles = {
    container: {
        alignItems: 'center',
        justifyContent: 'start',
        flexDirection: "column",
        width: '100%',
        display: 'flex',
        height: '450px'
    },
    populartitlesdiv: {
        width: '100%',
        height: '50px',
        backgroundColor: '#3a4659',
        color: 'white',
        marginBottom: '30px',
        alignItems: 'center',
        display: 'flex',
    },
    moviecontainer: {
        justifyContent: 'center',
        display: 'flex',
        flexDirection: "row",
        width: '70%',
        flexWrap: 'wrap'
    },
    moviediv: {
        width: '160px',
        height: '270px',
        alignItems: 'center',
        flexDirection: "column",
        display: 'flex',
        justifyContent: 'center',
        marginRight: '20px',
        position: 'relative'
    },
    trivadiv: {
        borderRadius: '10px',
        borderStyle: "solid",
        borderColor: "black",
        borderWidth: 1,
        backgroundColor: 'lightgrey',
        color: 'black',
        height: '12px',
        fontSize: 9,
        width: '80px',
        textAlign: 'center',
        cursor: 'pointer'
        
    },
    triviacontainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: "row",
        width: '200px',
        height: '150px',
        display: 'flex',
        backgroundColor: 'white',
        borderRadius: '10px',
        borderStyle: "solid",
        borderColor: "black",
        borderWidth: 1,
        zIndex: 1,
        position: 'absolute'
    },
    hiddencontainer: {
        display: 'none'
    }
}