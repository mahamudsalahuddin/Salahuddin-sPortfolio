import React from "react";

import { styled, useTheme } from '@mui/material/styles';
// import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
// import MuiAppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
// import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';

const drawerWidth = 240;

// const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
//   ({ theme, open }) => ({
//     flexGrow: 1,
//     padding: theme.spacing(3),
//     transition: theme.transitions.create('margin', {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//     marginRight: -drawerWidth,
//     ...(open && {
//       transition: theme.transitions.create('margin', {
//         easing: theme.transitions.easing.easeOut,
//         duration: theme.transitions.duration.enteringScreen,
//       }),
//       marginRight: 0,
//     }),
//   }),
// );

// const AppBar = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== 'open',
// })(({ theme, open }) => ({
//   transition: theme.transitions.create(['margin', 'width'], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   ...(open && {
//     width: `calc(100% - ${drawerWidth}px)`,
//     transition: theme.transitions.create(['margin', 'width'], {
//       easing: theme.transitions.easing.easeOut,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//     marginRight: drawerWidth,
//   }),
// }));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));

const Navbar = () => {



  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };



  return (



  //   <Box sx={{ display: 'flex' }}>
  //   {/* <CssBaseline /> */}
  //   <AppBar position="fixed" open={open}>
  //     <Toolbar>
  //       <Typography variant="h6" noWrap sx={{ flexGrow: 1 }} component="div">
  //       <img className="w-[60px]" src="logo1.png" />
  //       </Typography>
  //       <div className="md:hidden">
  //       <IconButton
  //         color="inherit"
  //         // aria-label="open drawer"
  //         // edge="end"
  //         onClick={handleDrawerOpen}
  //         sx={{ ...(open && { display: 'none' }) }}
  //       >
  //         <MenuIcon />
  //       </IconButton>
  //       </div>
  //     </Toolbar>
  //   </AppBar>
  //   {/* <Main open={open}>
  //     <DrawerHeader />
  //     <Typography paragraph>
  //       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
  //       tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
  //       enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
  //       imperd
  //     </Typography>
     
  //   </Main> */}
    // <Drawer
    //   sx={{
    //     width: drawerWidth,
    //     flexShrink: 0,
    //     '& .MuiDrawer-paper': {
    //       width: drawerWidth,
    //     },
    //   }}
    //   // variant="persistent"
    //   anchor="right"
    //   open={open}
    // >
    //   <DrawerHeader>
    //     <IconButton onClick={handleDrawerClose}>
    //       {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
    //     </IconButton>
    //   </DrawerHeader>
    //   <Divider />
    //   <List>
    //   <h3 className="mx-4 p-2 rounded-md font-poppins hover:bg-slate-200">Home</h3>
    //   </List>
    //   <Divider />
    //   <List>
    //   <h3 className="mx-4 p-2 rounded-md font-poppins hover:bg-slate-200">About</h3>
    //   </List>
    //   <Divider />
    //   <List>
    //   <h3 className="mx-4 p-2 rounded-md font-poppins hover:bg-slate-200">Services</h3>
    //   </List>
    //   <Divider />
    //   <List>
    //   <h3 className="mx-4 p-2 rounded-md font-poppins hover:bg-slate-200">Contact</h3>
    //   </List>
    //   <Divider />
    //   <List>
    //   <h3 className="mx-4 p-2 rounded-md font-poppins hover:bg-slate-200">Hire Me</h3>
    //   </List>
    //   <Divider />
    // </Drawer>
  // </Box>



    <div className="fixed bg-white w-[100%] md:flex font-[poppins] md:justify-between py-4 px-6 border-b-4 z-10">
      <div className="flex items-center justify-between">
        <img className="w-[80px]" src="logo1.png" />
        <div className="md:hidden">
        <IconButton
          color="inherit"
          // aria-label="open drawer"
          // edge="end"
          onClick={handleDrawerOpen}
          sx={{ ...(open && { display: 'none' }) }}>
          <MenuIcon />
        </IconButton>



        {/* =================== */}
        <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
        },
      }}
      // variant="persistent"
      anchor="right"
      open={open}
    >
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
      <h3 className="mx-4 p-2 rounded-md font-poppins hover:bg-slate-200">Home</h3>
      </List>
      <Divider />
      <List>
      <h3 className="mx-4 p-2 rounded-md font-poppins hover:bg-slate-200">About</h3>
      </List>
      <Divider />
      <List>
      <h3 className="mx-4 p-2 rounded-md font-poppins hover:bg-slate-200">Services</h3>
      </List>
      <Divider />
      <List>
      <h3 className="mx-4 p-2 rounded-md font-poppins hover:bg-slate-200">Contact</h3>
      </List>
      <Divider />
      <List>
      <h3 className="mx-4 p-2 rounded-md font-poppins hover:bg-slate-200">Hire Me</h3>
      </List>
      <Divider />
    </Drawer>
        </div>
      </div>
      <div className="md:block md:flex hidden w-2/6 md:justify-center text-base md:items-center">
        <h3 className="mx-4 p-2 rounded-md font-poppins hover:bg-slate-200">Home</h3>
        <h3 className="mx-4 p-2 rounded-md font-poppins text-center hover:bg-slate-200">About Us</h3>
        <h3 className="mx-4 p-2 rounded-md font-poppins hover:bg-slate-200">Services</h3>
        <h3 className="mx-4 p-2 rounded-md font-poppins hover:bg-slate-200">Contact</h3>
      </div>
      <div className="flex justify-end items-center">
        <div className="hidden md:block mx-4 p-2 text-2xl font-semibold rounded-md hover:bg-slate-200">Hire Me</div>
        
      </div>
    </div>
  );
};

export default Navbar;
