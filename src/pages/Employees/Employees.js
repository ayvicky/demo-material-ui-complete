import React, { useState } from 'react'

import { Paper, makeStyles, TableBody, TableRow, TableCell } from '@material-ui/core';
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';

import Employeeform from './Employeeform'

import PageHeader from '../../components/PageHeader';
import useTable from '../../components/useTable';

import * as employeeService from '../../services/employeeService';

const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    }
}));


export default function Employees() {
    const classes = useStyles();
    const [records, setRecords] = useState(employeeService.getAllEmployees() || []);
    const { 
      TblContainer
    } = useTable();
    return (
        <>
        <PageHeader
          title='New Employee'
          subTitle= 'Form design with validation'
          icon={<PeopleOutlineTwoToneIcon fontSize='large' />}
          />
          <Paper className={classes.pageContent}>
            {/* <Employeeform /> */}
            <TblContainer>
              <TableBody>
                {records.map(item => (
                  <TableRow key={item.id}>
                    <TableCell> {item.fullName} </TableCell>
                    <TableCell> {item.email} </TableCell>
                    <TableCell> {item.mobile} </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </TblContainer>
          </Paper>
        </>
    )
}
