import { Box } from "@mui/material"
import Header from "../Header"
import {Copyright, Copyright2} from '../Copyright';
import Example from '../FileRead';

function Main2(props) {
    return (
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <Header onDrawerToggle={props.Header} />
            <Box component="footer" sx={{ p: 2, bgcolor: '#eaeff1' }}>
                <Example></Example>
                <Copyright />
                <Copyright2></Copyright2>
            </Box>
        </Box>
    )
}

export default Main2;