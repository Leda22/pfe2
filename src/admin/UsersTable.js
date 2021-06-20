import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import Modal from '@material-ui/core/Modal';
import { Avatar, Button, Fab, Fade, makeStyles, TextField } from '@material-ui/core';
import logo from '../images/p.png';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Backdrop from '@material-ui/core/Backdrop';
import SaveIcon from '@material-ui/icons/Save';
import AddIcon from '@material-ui/icons/Add';
import Popper from '@material-ui/core/Popper';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';



const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    display: 'flex',
    flexDirection:"column",
    alignItems: 'center',
    justifyContent: 'center',
  },
  form1:{
    '& > *': {
      margin: theme.spacing(1),
      display: "flex",
      width: "50ch"
  },
display: "flex",
flexDirection:"column"
  },
  button1: {
    margin: theme.spacing(1),
  },
  
  ttl:{
    display: "flex",
    alignItems:"center",
    justifyContent:"space-between",
    paddingBottom:"3%",
  },
  paper1: {
    border: '1px solid',
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

// Generate Order Data
function createData(id, logo, date, name, shipTo, paymentMethod, amount) {
  return { id, logo, date, name, shipTo, paymentMethod, amount};
}

const rows = [
  createData(0, '16 Mar, 2019', 'Elvis Presley', 'Tupelo, MS', 'VISA ⠀•••• 3719', 312.44,),
  createData(1, '16 Mar, 2019', 'Paul McCartney', 'London, UK', 'VISA ⠀•••• 2574', 866.99),
  createData(2, '16 Mar, 2019', 'Tom Scholz', 'Boston, MA', 'MC ⠀•••• 1253', 100.81),
  createData(3, '16 Mar, 2019', 'Michael Jackson', 'Gary, IN', 'AMEX ⠀•••• 2000', 654.39),
  createData(4, '15 Mar, 2019', 'Bruce Springsteen', 'Long Branch, NJ', 'VISA ⠀•••• 5919', 212.79),
];




export default function Users() {
  const classes = useStyles();
  const [open, setOpen1] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };


  const handleOpen1 = () => {
    setOpen1(true);
  };

  const handleClose1 = () => {
    setOpen1(false);
    
  };
  const vv = Boolean(anchorEl);
  const id = vv ? 'simple-popper' : undefined;

  return (
    <React.Fragment>
      <div className={classes.ttl}>
      <Title>Recent Orders</Title>
      <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
      <Fab color="primary" aria-label="add" className={classes.margin}>
      <AddIcon />
        </Fab>
        </div>
       
      
      <Table size="medium">
        <TableHead>
          <TableRow>
            <TableCell>Clubs</TableCell>
            <TableCell>Club Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Club President</TableCell>
            <TableCell>Created At</TableCell>
            <TableCell >Phone Number</TableCell>
            <TableCell >Category</TableCell>
            <TableCell >Edit/Del</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>
                <Avatar src={logo}/>
                </TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell >{row.amount}</TableCell>
              <TableCell >{row.amount}</TableCell>
              <TableCell >
                <Button onClick={handleOpen1}><EditIcon/></Button>
                <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose1}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
          <form className={classes.form1} noValidate autoComplete="off">
  <TextField id="standard-basic" label="Standard" />
  <TextField id="standard-basic" label="Standard" />
  <TextField id="standard-basic" label="Standard" />
  <TextField id="standard-basic" label="Standard" />
  <TextField id="standard-basic" label="Standard" />
</form>
<Button
        variant="contained"
        color="primary"
        size="small"
        className={classes.button1}
        startIcon={<SaveIcon />}
      >
        Save
      </Button>
          </div>
        </Fade>
        
      </Modal>
      <Button aria-describedby={id} type="button" onClick={handleClick}   ><DeleteIcon color="Error"/></Button>
      <Popper id={id} open={vv} anchorEl={anchorEl} >
        <div className={classes.paper1}>
          <Button  color="secondary">YES</Button>
        <Button  color="error">NO</Button>
        </div>
      </Popper>
      </TableCell>
              

            </TableRow>
          ))}
        </TableBody>
      </Table>
     
    </React.Fragment>
  );
}