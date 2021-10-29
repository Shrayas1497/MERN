import React from 'react';
import {List, Menu} from '@material-ui/icons';  
import {AppBar,Toolbar,makeStyles,Typography,Box,withStyles,IconButton,Drawer,ListItem} from '@material-ui/core';
import {Link} from 'react-router-dom';
import { useState } from 'react';

import SearchBar from './SearchBar';

import HeaderButtons from './HeaderButtons';

const useStyle = makeStyles(theme =>({
    header : {
        
        background:'#2874f0',
        height:55
    },
    logo:{
        width:75,

    },
    subURL:{
        width:10,
        marginLeft:4,
        height:10

    },
    list:{
        width:150
    },
container:{
   display:'flex',
   
},
component :{
    marginLeft:'12%',
    lineHeight:0,
    textDecoration:'none',
     color:'#fff'
},
subHeading:{

    fontSize:10,
    fontStyle:'italic'
},list:{
    width:250
},
menuButton:{
    display:'none',
    [theme.breakpoints.down('sm')]:{
        display:'block'
    } 
    },
    customButtons:{
       margin:' 0 5% 0 auto',
        [theme.breakpoints.down('sm')]:{
            display:'none'
        } 
    }
    
    
    
    
    }));

const ToolBar = withStyles({
root:{
    minHeight: 55

},

})(Toolbar);

const Header = () => {
const classes=useStyle();
const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
const[open,setOpen]=useState(false);   
const  handleClose = () =>{
    setOpen(false);
}
const handleOpen=()=>{
 setOpen(true);   
}
const list = () => (
    <Box className={classes.list} onClick={handleClose}>
        <HeaderButtons />
    </Box>
);
 

return (
        
 <AppBar position="fixed" className={classes.header}>
        <ToolBar>
            <IconButton
             color="inherit"
                 className={classes.menuButton}
                     onClick={handleOpen}>
                        <Menu/>


            </IconButton>

            <Drawer open= {open} onClose={handleClose}>
                {list()}
            </Drawer>
            <Link to='/' className={classes.component}>
     <img src={logoURL} className={classes.logo}/>
<Box className = {classes.container}>  
     <Typography className={classes.subHeading}>
         Explore <Box component="span" style={{color:'#FFE500'}}>plus
         </Box>
     </Typography>
        <img src={subURL} className={classes.URL}/>
        </Box> 
    </Link>
       <SearchBar/>
      <span className={classes.customButtons}>    <HeaderButtons/> </span>
        </ToolBar>
            </AppBar>   
        
    )
}

export default Header;
