//import { colors, ListItemSecondaryAction } from '@material-ui/core';
import React from 'react'
import Carousel from 'react-material-ui-carousel';
import {bannerData} from '../../constants/data';
import {makeStyles} from '@material-ui/core'

const useStyle=makeStyles(theme=>({
    container:{

    },
    image:{
    width:'100%',
    height:280,
        [theme.breakpoints.down('sm')]:{
            objectFit:'cover',
            height:180
        }
    }
            }
))

const Banner = () => {
    const classes=useStyle();
    return (
        
            <Carousel
                autoPlay={true}
                animation='slide'
                indicators={false}
                navButtonsAlwaysVisible={true}
                cycleNavigation={true}
                navButtonsProps={
                    {
        style:{
            background:'#FFFFF',
            color:'#494949',
            borderRadius:0,
            margin:0      
                }
                    }}
            
               className={classes.Carousel}
               >
                {
                bannerData.map(image =>
             (   <img src={image} className={classes.image}/>
             
                ))
                }
            </Carousel>
    
    )
}

export default Banner;
