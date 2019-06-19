import React from 'react'

import { makeStyles } from '@material-ui/core/styles';


import Carousel from 'react-bootstrap/Carousel'




const useStyles = makeStyles({
    card: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
    });



const BlueMarbleComponent = ({
    // key,
    id,
    year,
    month,
    day,
    image,
    urlImage
    
}) => {

    
    const classes = useStyles();
    
    console.log("print ", //key,
    id,
    year,
    month,
    day,
    image,
    urlImage);

    return (

        <div>
            
            
           
                <img src={urlImage} alt={id}  />
           
            
    </div>

    );  

    



}
export default BlueMarbleComponent