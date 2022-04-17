import * as React from 'react';
import Box from '@mui/material/Box';
import Header from '../Header';
import htsStore from '../../states/headTabState';
import { Copyright, Copyright2 } from '../Copyright';
import Content from '../Contents/Content';
import Content2 from '../Contents/Content2';

function MainProcess(props) {

    const { count } = htsStore();

    return (
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <Header onDrawerToggle={props.Header} />
            <Box component="main" sx={{ flex: 1, py: 6, px: 4, bgcolor: '#eaeff1' }}>
                {(() => {
                    if (count === 0) {
                        return (<Content></Content>);
                    } else {
                        if (count === 1) {
                            return (<Content2></Content2>)
                        } else {
                            return (<></>)
                        }
                    }
                })()}
            </Box>
            <Box component="footer" sx={{ p: 2, bgcolor: '#eaeff1' }}>
                <Copyright />
                <Copyright2></Copyright2>
            </Box>
        </Box>
    )
}

export default MainProcess;