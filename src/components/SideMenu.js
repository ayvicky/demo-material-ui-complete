import React from 'react'

import { makeStyles, withStyles } from '@material-ui/core';

// withStyles & makeStyles

// const useStyles = makeStyles({
//     sideMenu: {        
//         display: 'flex',
//         displayDirection: 'column',
//         position: 'absolute',
//         left: 0,
//         width: '320px',
//         height: '100%',
//         backgroundColor: '#253053',
//     }
// });

const styles = {
    sideMenu: {        
        display: 'flex',
        displayDirection: 'column',
        position: 'absolute',
        left: 0,
        width: '320px',
        height: '100%',
        backgroundColor: '#253053',
    }
};

const SideMenu = (props) => {
    const {classes} = props;
    console.log(classes);
    return (
        <div className={classes.sideMenu}>
            
        </div>
    )
}

export default withStyles(styles)(SideMenu);