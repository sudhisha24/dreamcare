import React,{useState} from 'react';

import Drawer from '@mui/material/Drawer';
import {Box,Typography,IconButton} from '@mui/material';
// import Link from '@mui/material/Link';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import "../Navbar/Navbar.css"
const Navbar = () => {

  const [isDrawerOpen, setIsDrawerOpen] =useState(false)
  return (
    <>
    <IconButton size='lg' edge='start' style={{color:"white",marginTop:"40px",marginLeft:"5px"}} onClick={()=>setIsDrawerOpen(true)}>
      <MenuIcon></MenuIcon>
    </IconButton>
    <Drawer anchor="left" onScroll="sticky" open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
  <Box
   
    width="180vw" /* Adjust the width as needed */
    maxWidth="250px"
    textAlign="center"
    role="presentation"
    bgcolor="black" /* Adjust the transparency as needed */

  >
    <Typography variant="h6" color='white'>Menu</Typography>
    <nav style={{ backgroundColor:"royal blue",height:"30%" }}>
      <ul>
        <li>
          <Link to="/" onClick={() => setIsDrawerOpen(false)} style={{textDecoration:"none",color:"white"}}>
            Property Owner Details
          </Link>
        </li>
        <li>
          <Link to="/TenantDetails" onClick={() => setIsDrawerOpen(false)} style={{textDecoration:"none",color:"white"}}>
            Tenant's Details
          </Link>
        </li>

        <li>
          <Link to="/TenantWorkplace" onClick={() => setIsDrawerOpen(false)} style={{textDecoration:"none",color:"white"}}>
            Tenant's Workplace Details
          </Link>
        </li>
        <li>
          <Link to="/PersonKnowingTenant" onClick={() => setIsDrawerOpen(false)} style={{textDecoration:"none",color:"white"}}>
            Person Knowing Tenant
          </Link>
        </li>

        <li>
          <Link to="/tenantInfomation" onClick={() => setIsDrawerOpen(false)} style={{textDecoration:"none",color:"white"}}>
            Tenant Information
          </Link>
        </li>
        <li>
          <Link to="/complaints" onClick={() => setIsDrawerOpen(false)} style={{textDecoration:"none",color:"white"}}>
            Complaints
          </Link>
        </li>
      </ul>
    </nav>
  </Box>
</Drawer>


    </>
  );
};

export default Navbar;

