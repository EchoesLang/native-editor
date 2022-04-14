import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import HelpIcon from '@mui/icons-material/Help';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import htsStore from '../states/headTabState';
import { alertTitleClasses } from '@mui/material';
import { SettingsCellOutlined } from '@mui/icons-material';

const lightColor = 'rgba(0, 234, 255, 0.7)';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

function Header(props) {
    const { onDrawerToggle } = props;

    const [value, setValue] = React.useState(0);

    const { count, SetCount } = htsStore();

    const handleChange = (event, newValue) => {
        setValue(newValue);
        SetCount(newValue);
    };

    return (
        <React.Fragment>
            <AppBar color="primary" position="sticky" elevation={0}>
                <Toolbar>
                    <Grid container spacing={1} alignItems="center">
                        <Grid sx={{ display: { sm: 'none', xs: 'block' } }} item>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                onClick={onDrawerToggle}
                                edge="start"
                            >
                                <MenuIcon />
                            </IconButton>
                        </Grid>
                        <Grid item xs />
                        <Grid item>
                            <Link
                                href="http://www.echoechoes.site/nympheia/editor"
                                variant="body2"
                                sx={{
                                    textDecoration: 'none',
                                    color: lightColor,
                                    '&:hover': {
                                        color: 'common.white',
                                    },
                                }}
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                Go to docs
                            </Link>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <AppBar
                component="div"
                color="primary"
                position="static"
                elevation={0}
                sx={{ zIndex: 0 }}
            >
                <Toolbar>
                    <Grid container alignItems="center" spacing={1}>
                        <Grid item xs>
                            <Typography color="inherit" variant="h5" component="h1">
                                Nympheia Editor
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Tooltip title="Help">
                                <IconButton color="inherit" href='http://www.echoechoes.site/nympheia/editor/help'
                                    rel="noopener noreferrer"
                                    target="_blank">
                                    <HelpIcon />
                                </IconButton>
                            </Tooltip>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <AppBar component="div" position="static" elevation={0} sx={{ zIndex: 0 }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" textColor="inherit">
                    <Tab label="File" {...a11yProps(0)} />
                    <Tab label="System" {...a11yProps(1)} />
                </Tabs>
            </AppBar>

        </React.Fragment>
    );
}

/*function TabpanelDummy() {
    return (
        <div>
            <TabPanel value={value} index={0}>
                <p>Item Zero</p>
                <p>{count}</p>
                <p>{value}</p>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <p>Item One</p>
                <p>{count}</p>
                <p>{value}</p>
            </TabPanel>
        </div>
    )
}*/

Header.propTypes = {
    onDrawerToggle: PropTypes.func.isRequired,
};

export default Header;