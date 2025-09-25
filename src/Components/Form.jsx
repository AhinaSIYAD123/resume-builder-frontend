import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Steps from './Steps';
import Preview from './Preview';

function Form() {
  const [summary, setSummary] = useState('');

  return (
    <div>
      <Stack
        direction="row"
        spacing={2}
        sx={{ justifyContent: 'space-around', alignItems: 'center' }}
      >
        <Box>
          <Steps summary={summary} setSummary={setSummary} />
        </Box>
        <Box>
          <Preview summary={summary} />
        </Box>
      </Stack>

      
    </div>
  );
}

export default Form;
