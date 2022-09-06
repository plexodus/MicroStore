import { Button, Container, Divider, Paper, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

export default function ServerError(){
    //const currentLocation = useLocation();
    //console.log(currentLocation);
    //const history = useHistory();
    const history = useNavigate();
    const { state } = useLocation();
    const stateObject: any = state;
    return (
        <Container component={Paper}>
            {stateObject?.error ? (
                <>
                    <Typography variant="h3" color="error" gutterBottom>{stateObject.error.title}</Typography>
                    <Divider/>
                    <Typography>{stateObject.error.detail || 'Internal server error'}</Typography>
                </>
            ) : (
                <Typography variant="h5" gutterBottom>Server Error</Typography>
            )}
            <Button onClick={() => history(-1)}>Go back...</Button>
        </Container>
    )
}