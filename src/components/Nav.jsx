import React from 'react';
import { Box, AppBar, Toolbar, Typography, Button } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const navbarStyle = {
    background:"#20232a",
    position: "absolute",
}

function Nav(){
    return(
        <Box> 
            <AppBar sx={navbarStyle}>
                <Toolbar>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>My Website</Typography>
                    <MenuIcon sx={{ display: {xs:"block", md:"none"}}}/>
                    <Button color="inherit" sx={{ display: {xs:"none", md:"block"}}}>Home</Button>
                    <Button color="inherit" sx={{ display: {xs:"none", md:"block"}}}>About</Button>
                    <Button color="inherit" sx={{ display: {xs:"none", md:"block"}}}>Contact</Button>
                </Toolbar>
            </AppBar>
            <Toolbar></Toolbar>
        </Box>
    );
}

export default Nav;