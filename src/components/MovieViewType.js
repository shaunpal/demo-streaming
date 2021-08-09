import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { MovieContext } from "../contexts/MovieContext";
import { TriviaWindow } from "./TriviaWindow";
import { Button } from "@material-ui/core";
import './MovieViewType.css'

export const MovieViewType = ({ type }) => {

    const errMsg = "Unavailable for now...";

    const [openTrivia, setOpenTrivia] = useState(false);

    const [movies, setMovies] = useContext(MovieContext);

    const [moviefilters,] = useState(() => {
        return movies.filter(movie => movie.programType === type.toLowerCase())
    })

    const arrLength = moviefilters.length;
    const [elRefs,] = React.useState(() => {
        let arr = []
        return Array(arrLength).fill().map((_, i) => arr[i] || React.createRef())
    });

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
        
        const callback = (entries, observer) => {
          entries.forEach(entry => { 
            if(entry.isIntersecting){
                entry.target.querySelector("img").classList.remove("inactive")
                entry.target.querySelector(".loading").classList.add("inactive")
                observer.unobserve(entry.target);
            }
          });
        };
      
        const options = {
          rootMargin: "0px",
          threshold: 1.0
        };
      
        const observer = new IntersectionObserver(callback, options);
       
        elRefs.forEach(ref => {
            observer.observe(ref.current);
        })
      }, [elRefs, moviefilters]);

      

    return(
        <div style={styles.container}>
            <div style={styles.populartitlesdiv}>
                <p className="popular-header" style={{ fontSize: 18, marginLeft: '17%'}}>Popular {type}</p>
            </div>
                <div className="series-movies-container" style={styles.moviecontainer}>
                {moviefilters.map((movie, index) => (
                    <div key={index} style={{ marginRight: '20px' }}>
                        
                        <div className="movie-div">
                            <div ref={elRefs[index]} className="movie-img" style={styles.moviediv}>
                             
                                <img className="inactive"
                                    alt={movie.title}
                                    width={'180px'}
                                    height={'250px'}
                                    src={ movie.images["Poster Art"].url } />
                                    
                                    <div className="loading">
                                        <p>Loading...</p>
                                    </div>
                                      
                                    <TriviaWindow isOpen={movie.topen} movie={movie} />
                            </div>
                            <div className="movie-info">
                                <h6 style={{ height: '40px', width: '120px', flexWrap: 'wrap' }}>{movie.title}</h6>
                                <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexDirection: 'row' }}>
                                    <h6>{movie.releaseYear}</h6>
                                    <Button className="trivia-btn" style={styles.trivadiv} variant="contained" onClick={() => getTriviaWindow(movie)}>Click for Trivia</Button>
                                </div>
                            </div>
                        </div>
                           
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
        fontSize: 7,
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