import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';






const useStyles = makeStyles({
    card: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
    });



const BlueMarbleComponent = ({
    key,
    id,
    year,
    month,
    day,
    image,
    urlImage
    
}) => {

    
    const classes = useStyles();
    return (
        <>
    <Card className={classes.card}>
        <CardActionArea>
        <CardMedia
            className={classes.media}
            image= {urlImage}
            title={id}
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
            {id}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            {id}
            </Typography>
        </CardContent>
        </CardActionArea>
        <CardActions>
        <Button size="small" color="primary">
            Go to site
        </Button>        
        </CardActions>
    </Card>
        
    </>

    );



}
export default BlueMarbleComponent