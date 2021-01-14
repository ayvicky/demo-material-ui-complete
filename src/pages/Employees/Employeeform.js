import React, {useState, useEffect} from 'react'

import { Grid, makeStyles, TextField } from '@material-ui/core';

const initialFValues = {
    id: 0,
    fullName: '',
    email: '',
    mobile: '',
    city: '',
    gender: '',
    departmentId: '',
    hireDate: new Date(),
    isPermanent: false
};

const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiInputBase-root': {
            width: '80%',
            margin: theme.spacing(1)
        }
    }
}));

export default function Employeeform() {
    const [values, setValues] = useState(initialFValues);

    const classes = useStyles();

    return (
        <>
            <form className={classes.root}>
                <Grid container>
                    <Grid item xs={6}>
                        <TextField
                            variant='outlined'
                            label='Full Name'
                            value={values.fullName}
                            />
                            <TextField
                                variant='outlined'
                                label='Email'
                                value={values.email}
                                />
                    </Grid>
                    <Grid item xs={6}> </Grid>
                </Grid>
            </form>
        </>
    )
}
