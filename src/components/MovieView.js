import React from "react";
import filmicon from '../assets/series.png';


export const MovieView = () => {

    const directToSeries = () => {
        window.location = window.location.origin+"/series";
        return
    }

    const directToMovies = () => {
        window.location = window.location.origin+"/movies";
        return
    }

    return(
        <div style={styles.container}>
            <div style={styles.populartitlesdiv}>
                <p className="popular-titles-header" style={{ fontSize: 18, marginLeft: '17%'}}>Popular Titles</p>
            </div>
            <div style={styles.moviecontainer}>
                    <div className="series-div" style={styles.selecteddiv} onClick={directToSeries}>
                        <div style={styles.moviediv}>
                            <p style={{ fontSize: 25 }}>SERIES</p>
                        </div>
                        <h4>Popular Series</h4>
                    </div>
                    <div className="movies-div" style={styles.selecteddiv} onClick={directToMovies}>  
                        <div style={styles.moviediv}>
                            {/* <img src={require('../assets/takeicon.jpg')} /> */}
                            <p style={{ fontSize: 25 }}>MOVIES</p>
                        </div>
                        <h4>Popular Movies</h4>
                    </div>
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
        justifyContent: 'start',
        display: 'flex',
        flexDirection: "row",
        width: '66%',
    },
    moviediv: {
        backgroundImage: `url(${filmicon})`,
        backgroundColor: 'rgba(0,0,0,0.8)',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '50%',
        color: 'white',
        width: '160px',
        height: '270px',
        alignItems: 'center',
        flexDirection: "column",
        display: 'flex',
        justifyContent: 'center',
        marginRight: '20px'
    },
    selecteddiv: {
        cursor: 'pointer'
    }
}