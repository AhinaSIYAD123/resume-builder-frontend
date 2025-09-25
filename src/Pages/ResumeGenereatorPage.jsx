import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import React from 'react'
import { Link } from 'react-router-dom'


function ResumeGeneratorPage() {
  return (
    <div>
      <h3 className='text-center my-5'>Create a job-winn</h3>
      <Stack
        direction="row"
        spacing={4}
        sx={{
          justifyContent: "space-around",
          alignItems: "center",
          textAlign: "center"
        }}
      >
        <Box>
          <h3> Add your information</h3>
          <h6>Add pre-written examples to each section</h6>
          <h5>Step 1</h5>
        </Box>
      </Stack>
      <Box className='text-center my-5'>
        <Link to={'/form'}>
        <Button>
          Lets Start
          </Button>
          </Link>
      </Box>
    </div>
  )
}

export default ResumeGeneratorPage
