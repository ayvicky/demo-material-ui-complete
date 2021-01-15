import React from 'react'

import { Dialog, DialogContent, DialogTitle, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    dialogWrapper: {
        padding: theme.spacing(2),
        position: 'absolute',
        top: theme.spacing(5)
    }
}))

export default function Popup(props) {
    const { title, children, openPopup, setOpenPopup} = props
    const classes = useStyles()

    return (
        <Dialog open={openPopup} maxWidth='md' classes={{ paper: classes.dialogWrapper}}>
            <DialogTitle>
                {title}
            </DialogTitle>
            <DialogContent dividers>
                {children}
            </DialogContent>
        </Dialog>
    )
}
