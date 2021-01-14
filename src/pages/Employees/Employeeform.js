import React from 'react'

import { Grid } from '@material-ui/core';

import { useForm, Form } from '../../components/useForm';
import { Controls } from '../../components/controls/Controls';

import * as employeeService from '../../services/employeeService';
import DatePicker from '../../components/controls/DatePicker';

const genderItems = [
    {id: 'male', title: 'Male'},
    {id: 'female', title: 'Female'},
    {id: 'other', title: 'Other'}
]

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
                        <Controls.Input
                            name='fullName'
                            label='Full Name'
                            value={values.fullName}
                            onChange={handleInputChange}
                            />
                        <Controls.Input
                            variant='outlined'
                            label='Email'
                            name='email'
                            value={values.email}
                            onChange={handleInputChange}
                            />
                    </Grid>
                    <Grid item xs={6}>
                        <Controls.RadioGroup
                            label='Gender'
                            name='gender'
                            value={values.gender}
                            onChange={handleInputChange}
                            items={genderItems}
                            />
                        <Controls.Select
                            name='departmentId'
                            label='Department'
                            value={values.departmentId}
                            onChange={handleInputChange}
                            options={employeeService.getDepartmentCollection()}
                            />
                        <DatePicker
                            name='hireDate'
                            label='Hire Date'
                            value={values.hireDate}
                            onChange={handleInputChange}
                            />
                        <Controls.Checkbox
                            name='isPermanent'
                            label='Permanent Employee'
                            value={values.isPermanent}
                            onChange={handleInputChange}
                            />
                    </Grid>
                </Grid>
            </Form>
        </>
    )
}
