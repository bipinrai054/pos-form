// material-ui
// import { Typography } from '@mui/material';

// project imports
// import MainCard from 'ui-component/cards/MainCard';

// mui
import {
    // Grid, Typography,
    Paper
} from '@mui/material';

// components
// import { CustomCheckbox } from '../../ui-component/CustomInput';
import ItemDetails from '../../components/ItemDetails';

// ==============================|| SAMPLE PAGE ||============================== //

const SamplePage = () => (
    <Paper sx={{ mt: 30 }}>
        <ItemDetails />;
    </Paper>
);

export default SamplePage;
