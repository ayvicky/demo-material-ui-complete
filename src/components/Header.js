import React from 'react';

import { AppBar, Grid, IconButton, InputBase, Toolbar, Badge, makeStyles } from '@material-ui/core';
import NotificationNoneIcon from '@material-ui/icons/NotificationsNone';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';

const useStyles = makeStyles({
    root: {
        backgroundColor: '#fff'
    }
});

export default function Header() {

    const classes = useStyles();

    return (
        <AppBar position='static' className={classes.root}>
            <Toolbar>
                <Grid container>
                    <Grid item >
                        <InputBase />
                    </Grid>
                    <Grid item sm>

                    </Grid>
                    <Grid item >
                        <IconButton>
                            <Badge badgeContent={5} color='secondary'>
                                <NotificationNoneIcon />
                            </Badge>
                            <Badge badgeContent={5} color='secondary'>
                                <ChatBubbleOutlineIcon />
                            </Badge>
                            <Badge badgeContent={5} color='secondary'>
                                <PowerSettingsNewIcon />
                            </Badge>
                        </IconButton>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}
