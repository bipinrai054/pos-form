/*eslint-disable */
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

// import AbcIcon from '@mui/icons-material/Abc';

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 52,
    height: 30,
    padding: 7,
    '& .MuiSwitch-switchBase': {
        margin: 1,
        padding: 0,
        transform: 'translateX(6px)',
        '&.Mui-checked': {
            color: '#fff',
            transform: 'translateX(22px)',
            '& + .MuiSwitch-track': {
                opacity: 1,
                backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be'
            }
        }
    },
    '& .MuiSwitch-thumb': {
        backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#2196f3',
        width: 25,
        height: 25,
        '&:before': {
            content: "''",
            position: 'absolute',
            width: '100%',
            height: '100%',
            left: 0,
            top: 0,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'
        }
    },
    '& .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
        borderRadius: 20 / 2
    }
}));

export default function CustomizedSwitches() {
    return (
        <>
            <Grid container display="grid" justifyContent="center">
                <Grid item xs={12}>
                    <Typography sx={{ mt: 3, mb: 1 }}>
                        <label>Ticket</label>
                    </Typography>
                </Grid>

                <Grid item xs={12}>
                    <Stack direction="row" spacing={1} alignItems="center">
                        <Typography>KOT</Typography>
                        <MaterialUISwitch />
                        <Typography>BOT</Typography>
                    </Stack>
                </Grid>
            </Grid>
        </>
    );
}
