import { useState } from 'react';

import { Typography,Menu,MenuItem,makeStyles} from "@material-ui/core";
import {Link } from  'react-router-dom';
import {PowerSettingsNew}  from '@material-ui/icons';

const useStyle = makeStyles({
    component: {
        marginTop: 40,
    },
    logout: {
        fontSize: 14,
        marginLeft: 20
    }
})


const Profile = ({ account, setAccount }) => {
    const [open, setOpen] = useState(false);
  const classes=useStyle();  


const handleClose=() =>{
    setOpen(false);
}
const handleClick = (event) =>
    {
    setOpen(event.currentTarget)
}



    return (
    <>
    <Link to ="/" onClick={handleClick}><Typography style={{ marginTop: 2 }}>{account}</Typography></Link>      
    <Menu
                anchorEl={open}
                open={Boolean(open)}
                onClose={handleClose}
                className={classes.component}
            >
                <MenuItem onClick = { handleClose}> 
        <PowerSettingsNew/>logout         
                </MenuItem>
            </Menu>
            
        </>
    )    
    }




    export default Profile;
