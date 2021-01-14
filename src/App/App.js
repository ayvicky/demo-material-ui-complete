import './App.css';

import SideMenu from '../components/SideMenu';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  appMain: {
    paddingLeft: '320px',
    width: '100%'
  }
})

function App() {
  const classes = useStyles();

  return (
    <>
      <SideMenu />
      <div className={classes.appMain}>
        Here we go!
      </div>
    </>
    );
}

export default App;
