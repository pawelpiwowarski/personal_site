import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import { navigate } from "gatsby"
import { menubar} from './layout.css'

const pages = [ '/about', '/projects'];


const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);


  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };




  return (
    <AppBar position="static">
      <Container maxWidth="xl" className={menubar}>
        <Toolbar disableGutters >
          <IntegrationInstructionsIcon onClick ={()=> {
            navigate("/")
          }}sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h1"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 10,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'fantasy',
              fontWeight: 700,
              letterSpacing: '.10rem',
              textDecoration: 'none',
            
            }}
          >

          </Typography>

       
      
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={()=> {
                  navigate(page)
                }}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

        
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
