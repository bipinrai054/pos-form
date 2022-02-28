import { useEffect, useState } from 'react';

// material-ui
import { Grid, Paper, Typography } from '@mui/material';

// project imports
// import EarningCard from './EarningCard';
// import PopularCard from './PopularCard';
// import TotalOrderLineChartCard from './TotalOrderLineChartCard';
// import TotalIncomeDarkCard from './TotalIncomeDarkCard';
// import TotalIncomeLightCard from './TotalIncomeLightCard';
// import TotalGrowthBarChart from './TotalGrowthBarChart';
import { gridSpacing } from 'store/constant';

// new components
import { CustomInput, CustomSelect, CustomTextarea } from '../../../ui-component/CustomInput';

// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <Grid container spacing={gridSpacing}>
            <Grid item>
                <Typography variant="h4">Dashboard / Menu / Create</Typography>
            </Grid>
            <Grid item xs={12}>
                <Paper>
                    <CustomInput type="text" placeholder="category" />
                    <CustomSelect />
                    <CustomInput type="file" />
                    <CustomTextarea />
                    <CustomInput type="number" placeholder="Enter number" />
                    <CustomInput type="date" placeholder="Enter date" />
                </Paper>
            </Grid>
        </Grid>
    );
};

export default Dashboard;
