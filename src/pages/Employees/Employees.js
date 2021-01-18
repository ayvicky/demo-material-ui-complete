import React, { useState } from 'react'

import { Paper, makeStyles, TableBody, TableRow, TableCell, Toolbar, InputAdornment } from '@material-ui/core';
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';

import Search from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import CloseIcon from '@material-ui/icons/Close';

import { Controls } from '../../components/controls/Controls';
import Employeeform from './Employeeform'

import PageHeader from '../../components/PageHeader';
import useTable from '../../components/useTable';
import Popup from '../../components/Popup';
import Notification from '../../components/Notification';

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
    const [recordForEdit, setRecordForEdit] = useState(null)
    const [records, setRecords] = useState(employeeService.getAllEmployees() || []);
    const [filterFn, setFilterFn] = useState({fn: items => {return items;}})
    const [openPopup, setOpenPopup] = useState(false)
    const [notify, setNotify] = useState({isOpen: '', message: '', type: ''})

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
      if(employee.id == 0)
        employeeService.insertEmployee(employee)
      else
        employeeService.updateEmployee(employee)
      resetForm()
      setRecordForEdit(null)
      setOpenPopup(false)
      setRecords(employeeService.getAllEmployees())
      setNotify({
        isOpen: true,
        message: 'Submitted successfully!',
        type: 'success'
      })
    }

    const openInPopup = item => {
      setRecordForEdit(item)
      setOpenPopup(true)
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
                onClick={() => {setOpenPopup(true); setRecordForEdit(null)}}
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
                    <TableCell> 
                      <Controls.ActionButton
                        color='primary'
                        onClick={() => openInPopup(item)}
                        >
                        <EditOutlinedIcon fontSize='small' />
                      </Controls.ActionButton>
                      <Controls.ActionButton
                        color='secondary'
                        >
                        <CloseIcon fontSize='small' />
                      </Controls.ActionButton>
                    </TableCell>
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
              recordForEdit={recordForEdit}
              addOrEdit={addOrEdit}
              />
          </Popup>
          <Notification
            notify={notify}
            setNotify={setNotify}
            />
        </>
    )
}
