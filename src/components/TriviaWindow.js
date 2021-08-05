import React from 'react'


export const TriviaWindow = ({ isOpen, movie }) => {

    return (
        <div className="trivia-div" style={isOpen ? styles.container : styles.hiddencontainer}>
            <div style={{ display: 'flex', justifyContent: 'flex-start', flexDirection: 'column', margin: '0 0 0 5px', height: '120px' }}>
                <p style={{ fontSize: 10, margin: 0 }}>Fun Trivia</p>
                <div style={styles.triviabody}>
                    <p>{movie.trivia}</p>
                </div>
            </div>
        </div>
    );
}

const styles = {
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: "column",
        width: '190px',
        height: '150px',
        display: 'flex',
        backgroundColor: 'black',
        borderRadius: '10px',
        borderStyle: "solid",
        borderColor: "black",
        borderWidth: 1,
        zIndex: 1,
        position: 'absolute',
        overflowY: 'scroll',
        opacity: 0.8,
        color: 'white'
    },
    hiddencontainer: {
        display: 'none'
    },
    triviabody: {
        margin: 0
    }
}