import React, {useState, useEffect} from 'react'

import { Grid, makeStyles, TextField } from '@material-ui/core';

import useForm from '../../components/useForm';

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
    // const [values, setValues] = useState(initialFValues);

    const classes = useStyles();

    const {
        values,
        setValues,
        handleInputChange
    } = useForm(initialFValues);


    return (
        <>
            <form className={classes.root}>
                <Grid container>
                    <Grid item xs={6}>
                        <TextField
                            variant='outlined'
                            label='Full Name'
                            name='fullName'
                            value={values.fullName}
                            onChange={handleInputChange}
                            />
                            <TextField
                                variant='outlined'
                                label='Email'
                                name='email'
                                value={values.email}
                                onChange={handleInputChange}
                                />
                    </Grid>
                    <Grid item xs={6}> </Grid>
                </Grid>
            </form>
        </>
    )
}
