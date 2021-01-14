import React from 'react'

import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';

import Employeeform from './Employeeform'

import PageHeader from '../../components/PageHeader';

export default function Employees() {
    return (
        <>
        
        <PageHeader 
          title='Page Header'
          subTitle= 'Page description'
          icon={<PeopleOutlineTwoToneIcon fontSize='large' />}
          />
            <Employeeform />
        </>
    )
}
