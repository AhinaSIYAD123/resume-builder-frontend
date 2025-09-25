import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

const steps = [
  'Basic Information',
  'Contact Details',
  'Education Details',
  'Work Experience',
  'Skills',
  'Review & Submit',
];

export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
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
    Location: '',
    Duration: '',
    AddSkills: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isStepOptional = (step) => step === 1;
  const isStepSkipped = (step) => skipped.has(step);

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }
    setActiveStep((prev) => prev + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => setActiveStep((prev) => prev - 1);
  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      throw new Error("You can't skip a step that isn't optional.");
    }
    setActiveStep((prev) => prev + 1);
    setSkipped((prevSkipped) => new Set(prevSkipped).add(activeStep));
  };
  const handleReset = () => setActiveStep(0);

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Box>
            <Typography variant="h6" sx={{ mb: 2 }}>Personal Details</Typography>
            <TextField label="Full Name" name="fullName" value={formData.fullName}
              onChange={handleChange} fullWidth margin="normal" />
            <TextField label="Job Title" name="jobTitle" value={formData.jobTitle}
              onChange={handleChange} fullWidth margin="normal" />
            <TextField label="Location" name="location" value={formData.location}
              onChange={handleChange} fullWidth margin="normal" />
          </Box>
        );
      case 1:
        return (
          <Box>
            <Typography variant="h6" sx={{ mb: 2 }}>Contact Details</Typography>
            <TextField label="Email" name="Email" value={formData.Email}
              onChange={handleChange} fullWidth margin="normal" />
            <TextField label="PhoneNumber" name="PhoneNumber" value={formData.PhoneNumber}
              onChange={handleChange} fullWidth margin="normal" />
            <TextField label="GitHubLink" name="GitHubLink" value={formData.GitHubLink}
              onChange={handleChange} fullWidth margin="normal" />
            <TextField label="LinkedInLink" name="LinkdnLink" value={formData.LinkdnLink}
              onChange={handleChange} fullWidth margin="normal" />
            <TextField label="PortfolioLink" name="PortfolioLink" value={formData.PortfolioLink}
              onChange={handleChange} fullWidth margin="normal" />
          </Box>
        );
      case 2:
        return (
          <Box>
            <Typography variant="h6" sx={{ mb: 2 }}>Education Details</Typography>
            <TextField label="CourseName" name="CourseName" value={formData.CourseName}
              onChange={handleChange} fullWidth margin="normal" />
            <TextField label="CollegeName" name="CollegeName" value={formData.CollegeName}
              onChange={handleChange} fullWidth margin="normal" />
            <TextField label="University" name="University" value={formData.University}
              onChange={handleChange} fullWidth margin="normal" />
            <TextField label="YearOfPassOut" name="YearOfPassOut" value={formData.YearOfPassOut}
              onChange={handleChange} fullWidth margin="normal" />
          </Box>
        );
      case 3:
        return (
          <Box>
            <Typography variant="h6" sx={{ mb: 2 }}>Work Experience</Typography>
            <TextField label="Job or Internship" name="job" value={formData.job}
              onChange={handleChange} fullWidth margin="normal" />
            <TextField label="Company Name" name="CompanyName" value={formData.CompanyName}
              onChange={handleChange} fullWidth margin="normal" />
            <TextField label="Location" name="Location" value={formData.Location}
              onChange={handleChange} fullWidth margin="normal" />
            <TextField label="Duration" name="Duration" value={formData.Duration}
              onChange={handleChange} fullWidth margin="normal" />
          </Box>
        );
      case 4:
        return (
          <Box sx={{ mt: 2 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>Skills</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <TextField
                label="Add Skill"
                name="AddSkills"
                value={formData.AddSkills}
                onChange={handleChange}
                sx={{ mb: 2, width: '50%' }}
              />
              <Button variant="contained">Add</Button>
            </Box>
            <Box sx={{ '& :not(style)': { m: 1 }, mt: 4 }}>
              <Typography variant="subtitle1" gutterBottom>Suggestions :</Typography>
              <Stack spacing={2} direction="row" flexWrap="wrap" justifyContent="space-around">
                {['React', 'Node.js', 'Express', 'MongoDB', 'TypeScript', 'Python', 'C++']
                  .map(skill => (
                    <Button key={skill} variant="outlined" sx={{ m: 1 }}>
                      {skill}
                    </Button>
                  ))}
              </Stack>
            </Box>
          </Box>
        );
      case 5:
        return (
          <Box>
            <Typography variant="h6" sx={{ mb: 2 }}>Professional Summary</Typography>
            <TextField
              label="Professional Summary"
              multiline
              rows={6}
              fullWidth
              name="Summary"
              value={formData.Summary || ''}
              onChange={handleChange}
            />
          </Box>
        );
      default:
        return null;
    }
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = <Typography variant="caption">Optional</Typography>;
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you're finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Box sx={{ my: 3 }}>{renderStepContent(activeStep)}</Box>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}
            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}
