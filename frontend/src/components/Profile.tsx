import React from "react";
import {Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend} from 'chart.js';
import { Radar } from "react-chartjs-2";
import { Typography, Avatar, Alert, AlertTitle, IconButton, Grid, Button } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

interface profileProps {
    employee: {};
    onSignOff: () => void;
}

const Profile: React.FC<profileProps> = ({ employee, onSignOff }) => {

    if (!employee) {
        return (
            <Alert
                severity="error"
                action={
                    <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"
                        onClick={onSignOff}
                    >
                        <CloseIcon fontSize="inherit"/>
                    </IconButton>
                }
            >
                <AlertTitle>Error</AlertTitle>
                No employee found.
            </Alert>
        );
    }
    else {
        console.log(employee)
        ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

        const chartData = {
            labels: Object.keys(employee.skills),
            datasets: [
                {
                    label: "Skill Levels",
                    data: Object.values(employee.skills),
                    backgroundColor: "rgba(34,236,91,0.2)",
                    borderColor: "rgb(78,236,34)",
                },
            ],
        };
        const options = {
            responsive: true,
            scales: {
                r: {
                    min: 0,
                    max: 100,
                    ticks: {
                        stepSize: 10,
                        beginAtZero: true,
                    },
                },
            },
        };

        return (
            <Grid
                container
                padding={3}
                justifyContent="center"
                alignItems="center"
                align="center"
                spacing={5}
            >
                <Grid item>
                    <h1>Employee data</h1>
                </Grid>
                <Grid item>
                    <Button
                        variant="contained"
                        onClick={onSignOff}
                    >
                        Return
                    </Button>
                </Grid>

                <Grid
                    container
                    justifyContent="center"
                    alignItems="center"
                    align="center"
                >
                    <Grid item>
                        <Avatar src={employee.avatar}/>
                        <Typography variant="h4">{employee.name}</Typography>
                        <Typography variant="h6">{employee.position}</Typography>
                    </Grid>
                    <Grid
                        item
                    >
                        <Radar data={chartData} options={options} />
                    </Grid>
                </Grid>
            </Grid>
        );
    }
};

export default Profile;
