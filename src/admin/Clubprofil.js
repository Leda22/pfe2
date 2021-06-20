import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SettingsIcon from '@material-ui/icons/Settings';
import ListItems from './listItems';
import { Avatar, Backdrop, Button, Fade, Menu, MenuItem, Modal, TextField, withStyles } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import EmailIcon from '@material-ui/icons/Email';
import Axios from 'axios';
import logo from '../images/p.png';
import AddIcon from '@material-ui/icons/Add';
import SaveIcon from '@material-ui/icons/Save';
import swal from 'sweetalert';
import { Carousel } from 'antd';
import Card from '../components/Card';
import 'antd/dist/antd.css';



function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
      </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
        },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',

    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),

    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
        justifyContent: "center",
        textAlign: "center",
    },
    fixedHeight: {
        height: 240,
    },
    presdnt: {
        display: "flex",
        flexDirection: 'column',

    },
    button2: {
        margin: theme.spacing(1),
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width:"100%"
    },
    paper1: {
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(1, 3, 2),
        

    },
    form1: {
        '& > *': {
            margin: theme.spacing(1),
            display: "flex",
            width: "40ch",

        },
    },
    first1: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    button1: {
        margin: theme.spacing(1),
        width: "50%",

    },
    large: {
        width: theme.spacing(10),
        height: theme.spacing(10),
      },

}));

const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
    },
})((props) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
));

// Generate Order Data
function createData(id, logo, date, name, shipTo, paymentMethod, amount) {
    return { id, logo, date, name, shipTo, paymentMethod, amount };
}

const rows = [
    createData(0, '16 Mar, 2019', 'Elvis Presley', 'Tupelo, MS', 'VISA ⠀•••• 3719', 'BADRAT KHAYR'),
    createData(1, '16 Mar, 2019', 'Paul McCartney', 'London, UK', 'VISA ⠀•••• 2574', 'UTC'),
    createData(2, '16 Mar, 2019', 'Tom Scholz', 'Boston, MA', 'MC ⠀•••• 1253', 'ECO CRAFT'),
    createData(3, '16 Mar, 2019', 'Michael Jackson', 'Gary, IN', 'AMEX ⠀•••• 2000', 654.39),
    createData(4, '15 Mar, 2019', 'Bruce Springsteen', 'Long Branch, NJ', 'VISA ⠀•••• 5919', 212.79),
    createData(4, '15 Mar, 2019', 'Bruce Springsteen', 'Long Branch, NJ', 'VISA ⠀•••• 5919', 212.79),
    createData(4, '15 Mar, 2019', 'Bruce Springsteen', 'Long Branch, NJ', 'VISA ⠀•••• 5919', 212.79),


];


export default function Clubprofil() {
    const Swal = require('sweetalert2')

    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    // eslint-disable-next-line
    const [loggedIn, setLoggedIn] = useState(false)

    const logout = () => {
        Axios.get('http://localhost:3030/logout').then((response) => {
            if (response.data.loggedIn === true) {
                setLoggedIn(false)
            }
        })
    };
    const [open1, setOpen1] = React.useState(false);
    const [anchorEl1, setAnchorEl1] = React.useState(null);

    const handleClick1 = (event) => {
        setAnchorEl1(anchorEl1 ? null : event.currentTarget);
    };


    const handleOpen1 = () => {
        setOpen1(true);
    };

    const handleClose1 = () => {
        setOpen1(false);

    };
    const vv = Boolean(anchorEl);
    const id = vv ? 'simple-popper' : undefined;

    const HandleClick2 = () => {
        swal("Good job!", "You clicked the button!", "success");
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
                <Toolbar className={classes.toolbar}>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                        Dashboard
          </Typography>
                    <IconButton color="inherit">
                        <Badge badgeContent={7} color="secondary">
                            <EmailIcon />
                        </Badge>
                    </IconButton>
                    <IconButton color="inherit">
                        <Badge badgeContent={4} color="secondary">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                    <IconButton onClick={handleClick} color="inherit">
                        <Avatar />
                    </IconButton>
                    <StyledMenu
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}>
                            <SettingsIcon />
            Settings
            </MenuItem>
                        <MenuItem onClick={logout}>
                            <ExitToAppIcon />
            Logout
            </MenuItem>
                    </StyledMenu>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                classes={{
                    paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                }}
                open={open}
            >
                <div className={classes.toolbarIcon}>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon />
                    </IconButton>
                </div>
                <Divider />
                <ListItems />
            </Drawer>

            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                    <Grid container spacing={3}>
                        {/* Recent Deposits */}
                        {rows.map((row) => (
                            <Grid item xs={12} md={4} lg={3}>
                                <Paper elevation={3}
                                    className={fixedHeightPaper}>
                                    <div className={classes.presdnt}>
                                        <Avatar  className={classes.large} src={logo} style={{ alignSelf: 'center' }} />
                                        <h3 style={{ paddingTop: '6%' }}>{row.paymentMethod}</h3>
                                        <p>CLUB</p>
                                    </div>
                                </Paper>
                            </Grid>

                        ))}
                    </Grid>


                    <Box pt={4}>
                        <Copyright />
                    </Box>
                    <Modal
                        aria-labelledby="transition-modal-title"
                        aria-describedby="transition-modal-description"
                        className={classes.modal}
                        open={open1}
                        onClose={handleClose1}
                        closeAfterTransition
                        BackdropComponent={Backdrop}
                        BackdropProps={{
                            timeout: 500,
                        }}
                    >

                        <Fade in={open1}>
                            <div className={classes.paper1}>
                                <h2 style={{ textAlign: 'center' }}>ADD PRESIDENT CLUB</h2>
                                <form className={classes.form1} noValidate autoComplete="off">
                                    <div className={classes.first1}>
                                        <TextField type="text" id="standard-basic" label="First Name" />
                                        <TextField type="text" id="standard-basic" label="Last Name" />
                                    </div>
                                    <TextField
                                        id="date"
                                        label="Birthday"
                                        type="date"
                                        className={classes.textField}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                     <TextField type="text" id="standard-basic" label="City" />
                                    <TextField type="email" id="standard-basic" label="Email" />
                                    <TextField type="number" id="standard-basic" label="Phone Number" />
                                    <TextField type="text" id="standard-basic" label="University" />
                                    <TextField type="text" id="standard-basic" label="The College" />
                                    <TextField type="text" id="standard-basic" label="Academic level" />
                                    <TextField id="standard-basic" label="Academic level" />

                                    <Button onClick={HandleClick2}
                                    variant="contained"
                                    color="primary"
                                    size="small"
                                    className={classes.button1}
                                    startIcon={<SaveIcon />}
                                >
                                    Save
      </Button>
                                </form>
                                
                            </div>
                        </Fade>

                    </Modal>
                </Container>
            </main>
        </div>
    );
}

