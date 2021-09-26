import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

export const EditorSlider = ({ id }) => {
    return (
        <Box width={80}>
            <Slider onChange={(ev) => { console.log(ev.eventPhase) }} id={id} defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
        </Box>
    );
}



