import { ShoppingCart } from "@mui/icons-material";
import { AppBar, Toolbar, Typography, Switch, List, ListItem, IconButton, Badge, Box } from "@mui/material";
import { NavLink } from "react-router-dom";

interface Props{
    darkMode: boolean;
    handleDarkModeChange: () => void;
}

const midLinks = [
    {title: 'catalog', path: '/catalog'},
    {title: 'about', path: '/about'},
    {title: 'contact', path: '/contact'}
]

const rightLinks = [
    {title: "login", path: "/login"},
    {title: "register", path: "/register"}
]

const navStyles = {
    color: 'inherit',
    textDecoration: 'none',
    typography: 'h6',
    '&:hover': {
        color: 'grey.500'
    },
    '&.active': {
        color: 'text.secondary'
    }
}

export default function Header({darkMode, handleDarkModeChange}: Props){

    return(
        <AppBar position='static' sx={{marginBottom: 4}}>
            <Toolbar sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <Box display='flex' alignItems='center'>
                    <Typography variant="h6" component={NavLink} to='/' exact sx={navStyles}>
                        MICRO-STORE
                    </Typography>
                    <Switch checked={darkMode} onChange={handleDarkModeChange}/>
                </Box>
                <List sx={{display: 'flex'}}>
                    {midLinks.map(({title, path}) => (
                        <ListItem
                            component={NavLink}
                            to={path}
                            key={path}
                            sx={navStyles}>
                            {title.toUpperCase()}
                        </ListItem>
                    ))}
                </List>
                <Box display='flex' alignItems='center'>
                <IconButton size="large" sx={{color: 'inherit'}}>
                    <Badge badgeContent={3} color='secondary'>
                        <ShoppingCart/>
                    </Badge>
                </IconButton>
                    <List sx={{display: 'flex', alignItems: 'right'}}>
                        {rightLinks.map(({title, path}) => (
                            <ListItem
                                component={NavLink}
                                to={path}
                                key={path}
                                sx={navStyles}>
                                {title.toUpperCase()}
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Toolbar>
        </AppBar>
    )
}