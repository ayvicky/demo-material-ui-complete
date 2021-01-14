import React from 'react';

import { AppBar, Grid, IconButton, InputBase, Toolbar, Badge, makeStyles } from '@material-ui/core';
import NotificationNoneIcon from '@material-ui/icons/NotificationsNone';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles({
    root: {
        backgroundColor: '#fff'
    },
    searchInput: {
        opacity: 0.6,
        padding: '0px 8px',
        fontSize: '0.8rem',
        '&:hover': {
            backgroundColor: '#f2f2f2'
        },
        '& .MuiSvgIcon-root': {
            marginRight: '8px'
        }
    },
    btnRoot: {
        backgroundColor: 'green'
    },
    btnLabel: {
        backgroundColor: 'red'
    }
});

export default function Header() {

    const classes = useStyles();

    return (
        <AppBar position='static' className={classes.root}>
            <Toolbar>
                <Grid container alignItems='center'>
                    <Grid item >
                        <InputBase
                            className={classes.searchInput}
                            placeholder='Search Complaint'
                            startAdornment={<SearchIcon fontSize='small' />} />
                    </Grid>
                    <Grid item sm>

                    </Grid>
                    <Grid item >
                        <IconButton>
                            <Badge badgeContent={5} color='secondary'>
                                <NotificationNoneIcon />
                            </Badge>
                        </IconButton>
                        <IconButton classes={{root: classes.btnRoot, label: classes.btnLabel}}>
                            <Badge badgeContent={5} color='secondary'>
                                <ChatBubbleOutlineIcon />
                            </Badge>
                        </IconButton>
                        <IconButton>
                            <PowerSettingsNewIcon />
                        </IconButton>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}
