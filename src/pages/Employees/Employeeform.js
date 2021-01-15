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

    const validate = (fieldValues = values) => {
        let temp = {...errors}
        if('fullName' in fieldValues)
            temp.fullName = fieldValues.fullName ? '' : 'This field is required.'
        if('email' in fieldValues)
            temp.email = (/$^|.+@.+..+/).test(fieldValues.email) ? '' : 'Email is not valid.'
        if('mobile' in fieldValues)
            temp.mobile = fieldValues.mobile.length > 9 ? '' : 'Minimum 10 numbers are required!'
        if('departmentId' in fieldValues)
            temp.departmentId = fieldValues.departmentId.length != 0 ? '' : 'This field is required.'
        setErrors({
            ...temp
        })
        
        if(fieldValues == values)
            return Object.values(temp).every(x => x == '')
    }

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    } = useForm(initialFValues, true, validate);

    const handleSubmit = e => {
        e.preventDefault();
        if(validate())
            alert('form is valid')
    }


    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Grid container>
                    <Grid item xs={6}>
                        <Controls.Input
                            name='fullName'
                            label='Full Name'
                            value={values.fullName}
                            onChange={handleInputChange}
                            error={errors.fullName}
                            />
                            <Controls.Input
                                variant='outlined'
                                label='Email'
                                name='email'
                                value={values.email}
                                onChange={handleInputChange}
                                error={errors.email}
                                />
                                <Controls.Input
                                    variant='outlined'
                                    label='Mobile'
                                    name='mobile'
                                    value={values.mobile}
                                    onChange={handleInputChange}
                                    error={errors.mobile}
                                    />
                                    <Controls.Input
                                        variant='outlined'
                                        label='City'
                                        name='city'
                                        value={values.city}
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
                            error={errors.departmentId}
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

                        <div>
                            <Controls.Button
                                type='submit'
                                text='Submit'
                                />
                                <Controls.Button
                                    text='Reset'
                                    color='default'
                                    onClick={resetForm}
                                    />
                        </div>
                    </Grid>
                </Grid>
            </Form>
        </>
    )
}
