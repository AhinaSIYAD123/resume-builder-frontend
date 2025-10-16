import React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom'

function ResumeGeneratorPage() {
  return (
    <Box sx={{ mt: 8, px: 4 }}>
      {/* Heading */}
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ fontWeight: 'bold' }}
      >
        Create a job-winning Resume in minutes
      </Typography>

      {/* Steps */}
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={4}
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          my: 5,
        }}
      >
        {/* Step 1 */}
        <Paper
          elevation={4}
          sx={{
            p: 4,
            width: 300,
            textAlign: 'center',
            borderRadius: 3,
          }}
        >
          <Typography variant="h6" sx={{ mb: 1 }}>
            Add your information
          </Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            Add pre-written examples to each section
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Step 1
          </Typography>
        </Paper>

        {/* Step 2 */}
        <Paper
          elevation={4}
          sx={{
            p: 4,
            width: 300,
            textAlign: 'center',
            borderRadius: 3,
          }}
        >
          <Typography variant="h6" sx={{ mb: 1 }}>
            Download your Resume
          </Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            Download and start applying
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Step 2
          </Typography>
        </Paper>
      </Stack>

      {/* Button */}
      <Box textAlign="center">
        <Link to="/form" style={{ textDecoration: 'none' }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#4b0082',
              '&:hover': { backgroundColor: '#360062' },
              px: 4,
              py: 1.2,
              borderRadius: 2,
            }}
          >
            LET'S START
          </Button>
        </Link>
      </Box>
    </Box>
  )
}

export default ResumeGeneratorPage