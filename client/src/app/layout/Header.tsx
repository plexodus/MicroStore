import { AppBar, Toolbar, Typography, Switch } from "@mui/material";
import { useState } from "react";

interface Props{
    darkMode: boolean;
    handleDarkModeChange: () => void;
}

export default function Header({darkMode, handleDarkModeChange}: Props){

    return(
        <AppBar position='static' sx={{marginBottom: 4}}>
            <Toolbar>
                <Typography variant="h6">
                    MicroStore
                </Typography>
                <Switch
                    checked={darkMode}
                    onChange={handleDarkModeChange}
                    inputProps={{ 'aria-label': 'controlled' }}
                    />
            </Toolbar>
        </AppBar>
    )
}