import React from 'react'

import { Dialog, DialogContent, DialogTitle } from '@material-ui/core';

export default function Popup(props) {
    const { title, children, openPopup, setOpenPopup} = props;
    return (
        <Dialog open={openPopup}>
            <DialogTitle>
                {title}
            </DialogTitle>
            <DialogContent dividers>
                {children}
            </DialogContent>
        </Dialog>
    )
}
