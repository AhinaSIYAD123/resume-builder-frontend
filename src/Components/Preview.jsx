import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { CiSaveDown2 } from 'react-icons/ci';
import Edit from './Edit';
import { CiClock2 } from 'react-icons/ci';  


import { Link as RouterLink } from 'react-router-dom';


 
export default function SimplePaper() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        mt: 2,
      }}
    >
   
    <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
  <Button variant="outlined" startIcon={<CiSaveDown2 />}>Download</Button>
  <Edit /> 
  <Button
    variant="outlined"
    startIcon={<CiClock2 />}
    component={RouterLink}
    to="/history"
  >
    History
  </Button>
</Stack>


     
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          '& > :not(style)': {
            m: 2,
            width: 350,
            height: 'auto',
          },
        }}
      >
        <Paper elevation={3} sx={{ p: 3 }}>
          <Typography variant="h4" align="center" sx={{ mb: 2 }}>
            Full Name
          </Typography>
          <Divider sx={{ mb: 2 }} />

          <Typography variant="h6" align="center" color="blue" sx={{ mb: 1 }}>
            Title
          </Typography>

          <Typography variant="body1" align="center" sx={{ mb: 2 }}>
            38764746 | usgdh@hha | Location
          </Typography>

          <Stack direction="row" spacing={2} justifyContent="center" sx={{ mb: 3 }}>
            <Link href="#" target="_blank" underline="hover">Github</Link>
            <Link href="#" target="_blank" underline="hover">LinkedIn</Link>
            <Link href="#" target="_blank" underline="hover">Portfolio</Link>
          </Stack>

          <Divider sx={{ mb: 1 }}>Summary</Divider>
          <Typography variant="body2" sx={{ mb: 2 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit…
          </Typography>

          <Divider sx={{ mb: 1 }}>Education</Divider>
          <Typography variant="body2" align="center" sx={{ mb: 2 }}>
            Course<br />
            College | University | Year
          </Typography>

          <Divider sx={{ mb: 1 }}>Experience</Divider>
          <Typography variant="body2" align="center" sx={{ mb: 2 }}>
            Title<br />
            Company | Location | Duration
          </Typography>

          <Divider sx={{ mb: 2 }}>Skills</Divider>
          <Stack
            direction="row"
            spacing={2}
            justifyContent="center"
            sx={{ flexWrap: 'wrap', gap: 1 }}
          >
            <Button variant="contained" color="primary">React</Button>
            <Button variant="contained" color="primary">JavaScript</Button>
            <Button variant="contained" color="primary">HTML/CSS</Button>
            <Button variant="contained" color="primary">Node.js</Button>
          </Stack>
        </Paper>
      </Box>
    </Box>
  );
}
