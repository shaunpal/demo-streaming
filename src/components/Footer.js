import React from "react";
import footer from '../assets/footer.png';



export const Footer = () => {
    return(
        <div style={styles.container}>
            <img 
                width={'100%'}
                height={'50%'}
                src={footer}
                alt={'footer img'} />
        </div>
    );
}

const styles = {
    container: {
        bottom: 0,
        position: 'absolute',
        zIndex: 3
    }
}
    


