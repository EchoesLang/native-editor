import { Typography } from "@mui/material";
import { Link } from "@mui/material";

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {'Template by © '}
            <Link color="inherit" href="https://mui.com/">
                mui.com
            </Link>{' '}
            {new Date().getFullYear()}
        </Typography>
    );
}

function Copyright2() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="http://echoechoes.site/">
                echoechoes.site
            </Link>{' '}
            {new Date().getFullYear()}
        </Typography>
    );
}

export {Copyright, Copyright2};