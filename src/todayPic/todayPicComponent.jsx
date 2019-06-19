import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import './todayPic.css';

const useStyles = makeStyles({
    card: {
        maxWidth: 500,
        paddingLeft: 10,
        paddingRight:10,
        paddingTop: 10,
    },
    media: {
        height: 140,
    },
    });



const TodayPicComponent = ({
    key,
    id,
    date,
    explanation,
    hdurl,
    media_type,
    title,
    url 
}) => {

    
    const classes = useStyles();
    return (

    <Card className={classes.card}>
        <CardActionArea>
        <CardMedia
            className={classes.media}
            image= {url}
            title={title}
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
            {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            {explanation}
            </Typography>
        </CardContent>
        </CardActionArea>
        <CardActions>
        <Button size="small" color="primary">
            Go to site
        </Button>        
        </CardActions>
    </Card>
    );



}
export default TodayPicComponent