import React from 'react'
import { Dialog, DialogActions, DialogContent, DialogTitle, makeStyles, Typography } from '@material-ui/core'

import { Controls } from './controls/Controls'

const useStyles = makeStyles(theme => ({
    dialog: {
        padding: theme.spacing(2),
        position: 'absolute',
        top: theme.spacing(5)
    },
    dialogContent: {
        textAlign: 'center'
    },
    dialogActions: {
        justifyContent: 'center'
    }
}))

export default function ConfirmDialog(props) {
    const { confirmDialog, setConfirmDialog } = props
    const classes = useStyles()

    return (
        <Dialog open={confirmDialog.isOpen} classes={{paper: classes.dialog}}>
            <DialogTitle>

            </DialogTitle>
            <DialogContent className={classes.dialogContent}>
                <Typography variant='h6'>
                    {confirmDialog.title}
                </Typography>
                <Typography variant='subtitle2'>
                    {confirmDialog.subTitle}
                </Typography>
            </DialogContent>
            <DialogActions className={classes.dialogActions}>
                <Controls.Button
                    text='NO'
                    color='default'
                    />
                    <Controls.Button
                        text='YES'
                        color='secondary'
                        />
            </DialogActions>
        </Dialog>
    )
}
