import React, { useState } from 'react'

import { Paper, makeStyles, TableBody, TableRow, TableCell, Toolbar, InputAdornment } from '@material-ui/core';
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import Search from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';

import { Controls } from '../../components/controls/Controls';
import Employeeform from './Employeeform'

import PageHeader from '../../components/PageHeader';
import useTable from '../../components/useTable';
import Popup from '../../components/Popup';

import * as employeeService from '../../services/employeeService';

const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    },
    searchInput: {
      width: '75%'
    },
    newButton: {
      position: 'absolute',
      right: '10px'
    }
}));

const headCells = [
  {id: 'fullName', label: 'Employee Name'},
  {id: 'email', label: 'Email Address (Personal)'},
  {id: 'mobile', label: 'Mobile Number'},
  {id: 'department', label: 'Department'},
  {id: 'actions', label: 'Actions', disableSorting: true},
]

export default function Employees() {
    const classes = useStyles();
    const [records, setRecords] = useState(employeeService.getAllEmployees() || []);
    const [filterFn, setFilterFn] = useState({fn: items => {return items;}})
    const [openPopup, setOpenPopup] = useState(false)

    const { 
      TblContainer,
      TblHead,
      TblPagination,
      recordsAfterPaginationAndSorting
    } = useTable(records, headCells, filterFn);

    const handleSearch = e => {
      const target = e.target;
      setFilterFn({
        fn: items => {
          if(target.value == "")
            return items;
          else
            return items.filter(x => x.fullName.toLowerCase().includes(target.value))
        }
      })
    }
    
    const addOrEdit = (employee, resetForm) => {
      employeeService.insertEmployee(employee)
      resetForm()
      setOpenPopup(false)
      setRecords(employeeService.getAllEmployees())
    }

    return (
        <>
        <PageHeader
          title='New Employee'
          subTitle= 'Form design with validation'
          icon={<PeopleOutlineTwoToneIcon fontSize='large' />}
          />
          <Paper className={classes.pageContent}>
            <Toolbar>
              <Controls.Input
                  label='Search Employee'
                  className={classes.searchInput}
                    InputProps= {{
                      startAdornment: (<InputAdornment position='start'>
                        <Search />
                      </InputAdornment>)
                    }}
                    onChange={handleSearch}
                />
              <Controls.Button
                text='Add New'
                startIcon={<AddIcon />}
                className={classes.newButton}
                onClick={() => setOpenPopup(true)}
                />
            </Toolbar>
            <TblContainer>
              <TblHead />
              <TableBody>
                {recordsAfterPaginationAndSorting().map(item => (
                  <TableRow key={item.id}>
                    <TableCell> {item.fullName} </TableCell>
                    <TableCell> {item.email} </TableCell>
                    <TableCell> {item.mobile} </TableCell>
                    <TableCell> {item.department} </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </TblContainer>
            <TblPagination />
          </Paper>
          <Popup
            openPopup={openPopup}
            setOpenPopup={setOpenPopup}
            title='Add New Employee'
            >
            <Employeeform
              addOrEdit={addOrEdit}
              />
          </Popup>
        </>
    )
}
