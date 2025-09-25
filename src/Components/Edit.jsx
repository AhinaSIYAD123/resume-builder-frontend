import React from 'react';
import Button from '@mui/material/Button';
import { CiEdit } from 'react-icons/ci';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  maxHeight: '90vh',
  overflowY: 'auto',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Edit() {
  const [open, setOpen] = React.useState(false);
  const [formData, setFormData] = React.useState({
    fullName: '',
    jobTitle: '',
    location: '',
    Email: '',
    PhoneNumber: '',
    GitHubLink: '',
    LinkdnLink: '',
    PortfolioLink: '',
    CourseName: '',
    CollegeName: '',
    University: '',
    YearOfPassOut: '',
    job: '',
    CompanyName: '',
    WorkLocation: '',
    Duration: '',
    AddSkills: '',
    Summary: '',
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <Button onClick={handleOpen} variant="outlined" startIcon={<CiEdit />}>
        Edit
      </Button>

      <Modal open={open} onClose={handleClose}>
        <Box sx={modalStyle}>
          <Typography variant="h5" sx={{ mb: 2 }} align="center">
            Edit Resume
          </Typography>

          <Typography variant="h6" sx={{ mt: 2 }}>Personal Details</Typography>
          <TextField label="Full Name" name="fullName" value={formData.fullName} onChange={handleChange} fullWidth margin="normal" />
          <TextField label="Job Title" name="jobTitle" value={formData.jobTitle} onChange={handleChange} fullWidth margin="normal" />
          <TextField label="Location" name="location" value={formData.location} onChange={handleChange} fullWidth margin="normal" />

     
          <Typography variant="h6" sx={{ mt: 2 }}>Contact Details</Typography>
          <TextField label="Email" name="Email" value={formData.Email} onChange={handleChange} fullWidth margin="normal" />
          <TextField label="Phone Number" name="PhoneNumber" value={formData.PhoneNumber} onChange={handleChange} fullWidth margin="normal" />
          <TextField label="GitHub Link" name="GitHubLink" value={formData.GitHubLink} onChange={handleChange} fullWidth margin="normal" />
          <TextField label="LinkedIn Link" name="LinkdnLink" value={formData.LinkdnLink} onChange={handleChange} fullWidth margin="normal" />
          <TextField label="Portfolio Link" name="PortfolioLink" value={formData.PortfolioLink} onChange={handleChange} fullWidth margin="normal" />

        
          <Typography variant="h6" sx={{ mt: 2 }}>Education Details</Typography>
          <TextField label="Course Name" name="CourseName" value={formData.CourseName} onChange={handleChange} fullWidth margin="normal" />
          <TextField label="College Name" name="CollegeName" value={formData.CollegeName} onChange={handleChange} fullWidth margin="normal" />
          <TextField label="University" name="University" value={formData.University} onChange={handleChange} fullWidth margin="normal" />
          <TextField label="Year Of Pass Out" name="YearOfPassOut" value={formData.YearOfPassOut} onChange={handleChange} fullWidth margin="normal" />

    
          <Typography variant="h6" sx={{ mt: 2 }}>Work Experience</Typography>
          <TextField label="Job or Internship" name="job" value={formData.job} onChange={handleChange} fullWidth margin="normal" />
          <TextField label="Company Name" name="CompanyName" value={formData.CompanyName} onChange={handleChange} fullWidth margin="normal" />
          <TextField label="Work Location" name="WorkLocation" value={formData.WorkLocation} onChange={handleChange} fullWidth margin="normal" />
          <TextField label="Duration" name="Duration" value={formData.Duration} onChange={handleChange} fullWidth margin="normal" />

          <Typography variant="h6" sx={{ mt: 2 }}>Skills</Typography>
          <TextField label="Add Skill" name="AddSkills" value={formData.AddSkills} onChange={handleChange} fullWidth margin="normal" />
          <Stack direction="row" flexWrap="wrap" spacing={1} sx={{ mt: 1 }}>
            {['React', 'Node.js', 'Express', 'MongoDB', 'TypeScript', 'Python', 'C++'].map(skill => (
              <Button key={skill} variant="outlined">{skill}</Button>
            ))}
          </Stack>

     
          <Typography variant="h6" sx={{ mt: 2 }}>Professional Summary</Typography>
          <TextField
            label="Summary"
            name="Summary"
            value={formData.Summary}
            onChange={handleChange}
            multiline
            rows={6}
            fullWidth
            margin="normal"
          />

       
          <Stack direction="row" spacing={2} justifyContent="flex-end" sx={{ mt: 3 }}>
            <Button variant="contained" color="primary" onClick={() => { alert('Form submitted!'); handleClose(); }}>
              Save
            </Button>
            <Button variant="outlined" color="secondary" onClick={handleClose}>
              Cancel
            </Button>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}
