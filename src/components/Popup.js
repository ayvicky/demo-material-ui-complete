import React from 'react'

import { Dialog, DialogContent, DialogTitle, makeStyles, Typography } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import { Controls } from './controls/Controls'

const useStyles = makeStyles(theme => ({
    dialogWrapper: {
        padding: theme.spacing(2),
        position: 'absolute',
        top: theme.spacing(5)
    },
    dialogTitle: {
        paddingRight: '0px'
    }
}))

export default function Popup(props) {
    const { title, children, openPopup, setOpenPopup} = props
    const classes = useStyles()

    return (
        <Dialog open={openPopup} maxWidth='md' classes={{ paper: classes.dialogWrapper}}>
            <DialogTitle className={classes.dialogTitle}>
                <div style={{display:'flex'}}>
                    <Typography varient='h6' component='div' style={{flexGrow: 1}}>
                        {title}
                    </Typography>
                    <Controls.ActionButton
                        color='secondary'
                        text='X'
                        onClick={() => setOpenPopup(false)}
                        >
                            <CloseIcon />
                    </Controls.ActionButton>
                </div>
            </DialogTitle>
            <DialogContent dividers>
                {children}
            </DialogContent>
        </Dialog>
    )
}
