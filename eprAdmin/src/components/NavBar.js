import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
// import * as Colors from 'material-ui/styles/colors';


const style = {
    flexGrow: 1
   
}


const NavBar = () => {
    return (
        <div>
            <AppBar position="static" style={{ background: '#2E3B55' }}>
                <Toolbar>
                    <IconButton edge="start" color="Red" aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" style={style}>
                        Golden Key Admin page
                    </Typography>
                    <Button color="inherit"></Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar;