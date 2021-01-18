import React from 'react'
import { Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@material-ui/core'

import { Controls } from './controls/Controls'

export default function ConfirmDialog(props) {
    const { confirmDialog, setConfirmDialog } = props;

    return (
        <Dialog open={confirmDialog.isOpen}>
            <DialogTitle>

            </DialogTitle>
            <DialogContent>
                <Typography variant='h6'>
                    {confirmDialog.title}
                </Typography>
                <Typography variant='subtitle2'>
                    {confirmDialog.subTitle}
                </Typography>
            </DialogContent>
            <DialogActions>
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
