import React, {useState, useEffect} from 'react'

import { FormControl, FormLabel, RadioGroup,FormControlLabel, Radio, Grid, makeStyles, TextField } from '@material-ui/core';

import { useForm, Form } from '../../components/useForm';

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

export default function Employeeform() {
    // const [values, setValues] = useState(initialFValues);

    const {
        values,
        setValues,
        handleInputChange
    } = useForm(initialFValues);


    return (
        <>
            <Form>
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
                    <Grid item xs={6}>
                        <FormControl>
                            <FormLabel>Gender</FormLabel>
                            <RadioGroup
                                row
                                name='gender'
                                value={values.gender}
                                onChange={handleInputChange}
                                >
                                <FormControlLabel value='male' control={<Radio />} label='Male' />    
                                <FormControlLabel value='female' control={<Radio />} label='Female' />    
                                <FormControlLabel value='other' control={<Radio />} label='Other' />    
                            </RadioGroup>    
                        </FormControl>    
                    </Grid>
                </Grid>
            </Form>
        </>
    )
}
