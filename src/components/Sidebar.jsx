import { Box, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import PeopleIcon from '@mui/icons-material/People';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

const sidebarStyle = {
    display:"flex",
    justifyContent:"flex-end"
}

function Sidebar(){
    return(
        <Box sx={sidebarStyle}>
            <List>
                <ListItemButton>
                    <ListItemIcon>
                        <HomeIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Homepage"/>
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <ArticleIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Pages"/>
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <PeopleIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Groups"/>
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <StorefrontIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Marketplace"/>
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <PersonIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Friends"/>
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <SettingsIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Settings"/>
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <AccountBoxIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Profile"/>
                </ListItemButton>
            </List>
        </Box>
    );
}

export default Sidebar;