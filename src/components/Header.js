import React from "react";
import { Button } from "@material-ui/core";


export const Header = () => {

    const redirectHome = () => {
        window.location = window.location.origin;
        return
    }

    return(
        <div style={styles.container}>
            <div className="home-title-div" style={styles.hometitlediv} onClick={redirectHome}>
                <p className="home-title-div-title" style={{ fontSize: 25 } }>DEMO Streaming</p>
            </div>
            <div className="home-login-window" style={styles.logincontainer}>
                <p className="home-title-login-div-label" style={{ marginRight: '20px' }}>Log in</p>
                <Button className="trial-btn" style={{ height: '30px', backgroundColor: '#2f476e', color: 'white', fontWeight: 'bold' }} variant="contained">Start your free trial</Button>
            </div>
        </div>
    );
}

const styles = {
    container: {
        width: '100%',
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'space-around',
        flexDirection: "row",
        color: 'white',
        backgroundColor: '#4287f5',
        fontWeight: 'bold'
    },
    logincontainer: {
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: "row",
        color: 'white',
    },
    hometitlediv: {
        cursor: 'pointer'
    }

}
    


