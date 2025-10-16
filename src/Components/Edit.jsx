import React, { useEffect, useState } from 'react';
import { Box, Button, Tooltip, Stack, TextField, TextareaAutosize, Modal, IconButton } from '@mui/material';
import { MdEditDocument } from "react-icons/md";
import { IoIosCloseCircle } from "react-icons/io";
import { getResumeHistoryAPI, updateResumeAPI, addResumeAPI } from '../services/allAPIs';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  maxHeight: '80vh',
  overflowY: 'auto',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function Edit({ resumeId, resumeData, setResumeData, setResumeId }) {
  const [resumeHistory, setResumeHistory] = useState({
    personalDetails: {},
   contactDetails: {},
    educationDetails: {},
    workExperience: {},
    skills: [],
    summary: ""
  });
  const [open, setOpen] = useState(false);
  const [userSkills, setUserSkills] = useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const suggestions = ['React', 'Angular', 'Node', 'Express', 'MongoDB', 'JavaScript', 'HTML', 'CSS', 'C++'];

 
  const getAResume = async (id) => {
    if (id) {
      try {
        const response = await getResumeHistoryAPI(id);
        setResumeHistory(response.data || resumeData);
      } catch (err) {
        console.log("Error fetching resume:", err);
        setResumeHistory(resumeData);
      }
    } else {
      setResumeHistory(resumeData);
    }
  };

  useEffect(() => {
    getAResume(resumeId);
  }, [resumeId, resumeData]);

  const addSkill = (skill) => {
    if (!skill) return;
    if (resumeHistory.skills.includes(skill)) {
      alert("Skill already added");
      return;
    }
    setResumeHistory({ ...resumeHistory, skills: [...resumeHistory.skills, skill] });
    setUserSkills("");
  };

  const removeSkill = (skill) => {
    setResumeHistory({
      ...resumeHistory,
      skills: resumeHistory.skills.filter(s => s !== skill)
    });
  };

  const handleUpdate = async () => {
    try {
      console.log("Sending Resume Data:", resumeId, resumeHistory);

      let response;
      if (resumeId) {
        // Update existing resume
        response = await updateResumeAPI(resumeId, resumeHistory);
      } else {
        // Create new resume
        response = await addResumeAPI(resumeHistory);
        if (response?.data?.id) {
          setResumeId(response.data.id); // save new ID
        }
      }

      setResumeData(response?.data || resumeHistory);
      handleClose();
    } catch (err) {
      console.log("Update error:", err);
    }
  };

  return (
    <div>
      <Tooltip title="Edit">
        <Button variant="text" onClick={handleOpen}><MdEditDocument /></Button>
      </Tooltip>

      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          {/* Personal Details */}
          <Stack spacing={2} sx={{ mb: 3 }}>
            <h5>Personal Details</h5>
            <TextField placeholder="Full Name" variant="standard" value={resumeHistory?.personalDetails?.fullName || ""} 
              onChange={e => setResumeHistory({ ...resumeHistory, personalDetails: { ...resumeHistory.personalDetails, fullName: e.target.value } })} 
            />
            <TextField placeholder="Job Title" variant="standard" value={resumeHistory?.personalDetails?.jobTitle || ""} 
              onChange={e => setResumeHistory({ ...resumeHistory, personalDetails: { ...resumeHistory.personalDetails, jobTitle: e.target.value } })} 
            />
            <TextField placeholder="Location" variant="standard" value={resumeHistory?.personalDetails?.location || ""} 
              onChange={e => setResumeHistory({ ...resumeHistory, personalDetails: { ...resumeHistory.personalDetails, location: e.target.value } })} 
            />
          </Stack>

          {/* Contact Details */}
          <Stack spacing={2} sx={{ mb: 3 }}>
            <h5>Contact Details</h5>
         <TextField
  placeholder="Email"
  variant="standard"
  value={resumeHistory.contactDetails?.email || ""}
  onChange={e =>
    setResumeHistory({
      ...resumeHistory,
      contactDetails: {
        ...resumeHistory.contactDetails,
        email: e.target.value
      }
    })
  }
/>

<TextField
  placeholder="Phone Number"
  variant="standard"
  value={resumeHistory.contactDetails?.phoneNumber || ""}
  onChange={e =>
    setResumeHistory({
      ...resumeHistory,
      contactDetails: {
        ...resumeHistory.contactDetails,
        phoneNumber: e.target.value
      }
    })
  }
/>

<TextField
  placeholder="Github"
  variant="standard"
  value={resumeHistory.contactDetails?.github || ""}
  onChange={e =>
    setResumeHistory({
      ...resumeHistory,
      contactDetails: {
        ...resumeHistory.contactDetails,
        github: e.target.value
      }
    })
  }
/>

<TextField
  placeholder="LinkedIn"
  variant="standard"
  value={resumeHistory.contactDetails?.linkedIn || ""}
  onChange={e =>
    setResumeHistory({
      ...resumeHistory,
      contactDetails: {
        ...resumeHistory.contactDetails,
        linkedIn: e.target.value
      }
    })
  }
/>

<TextField
  placeholder="Portfolio"
  variant="standard"
  value={resumeHistory.contactDetails?.portfolio || ""}
  onChange={e =>
    setResumeHistory({
      ...resumeHistory,
      contactDetails: {
        ...resumeHistory.contactDetails,
        portfolio: e.target.value
      }
    })
  }
/>

          </Stack>

          {/* Education Details */}
          <Stack spacing={2} sx={{ mb: 3 }}>
            <h5>Education Details</h5>
            <TextField placeholder="Course" variant="standard" value={resumeHistory?.educationDetails?.course || ""} 
              onChange={e => setResumeHistory({ ...resumeHistory, educationDetails: { ...resumeHistory.educationDetails, course: e.target.value } })} 
            />
            <TextField placeholder="College" variant="standard" value={resumeHistory?.educationDetails?.college || ""} 
              onChange={e => setResumeHistory({ ...resumeHistory, educationDetails: { ...resumeHistory.educationDetails, college: e.target.value } })} 
            />
            <TextField placeholder="University" variant="standard" value={resumeHistory?.educationDetails?.university || ""} 
              onChange={e => setResumeHistory({ ...resumeHistory, educationDetails: { ...resumeHistory.educationDetails, university: e.target.value } })} 
            />
            <TextField placeholder="Year of Passout" variant="standard" value={resumeHistory?.educationDetails?.passout || ""} 
              onChange={e => setResumeHistory({ ...resumeHistory, educationDetails: { ...resumeHistory.educationDetails, passout: e.target.value } })} 
            />
          </Stack>

          {/* Work Experience */}
          <Stack spacing={2} sx={{ mb: 3 }}>
            <h5>Work Experience</h5>
            <TextField placeholder="Job Title" variant="standard" value={resumeHistory?.workExperience?.jobTitle || ""} 
              onChange={e => setResumeHistory({ ...resumeHistory, workExperience: { ...resumeHistory.workExperience, jobTitle: e.target.value } })} 
            />
            <TextField placeholder="Company" variant="standard" value={resumeHistory?.workExperience?.company || ""} 
              onChange={e => setResumeHistory({ ...resumeHistory, workExperience: { ...resumeHistory.workExperience, company: e.target.value } })} 
            />
            <TextField placeholder="Location" variant="standard" value={resumeHistory?.workExperience?.location || ""} 
              onChange={e => setResumeHistory({ ...resumeHistory, workExperience: { ...resumeHistory.workExperience, location: e.target.value } })} 
            />
            <TextField placeholder="Duration" variant="standard" value={resumeHistory?.workExperience?.duration || ""} 
              onChange={e => setResumeHistory({ ...resumeHistory, workExperience: { ...resumeHistory.workExperience, duration: e.target.value } })} 
            />
          </Stack>

          {/* Skills */}
          <Stack spacing={2} sx={{ mb: 3 }}>
            <h5>Skills</h5>
            <Stack direction="row" spacing={1}>
              <TextField placeholder="Add Skill" variant="standard" value={userSkills} 
                onChange={e => setUserSkills(e.target.value)} 
              />
              <Button onClick={() => addSkill(userSkills)} variant="contained">Add</Button>
            </Stack>
            <Stack direction="row" spacing={1} flexWrap="wrap">
              {resumeHistory.skills.map((skill, i) => (
                <Button key={i} variant="outlined" size="small" sx={{ textTransform: "none" }}>
                  {skill}
                  <IconButton size="small" color="error" onClick={() => removeSkill(skill)}>
                    <IoIosCloseCircle />
                  </IconButton>
                </Button>
              ))}
            </Stack>
            <Stack direction="row" spacing={1} flexWrap="wrap">
              {suggestions.map((s, i) => (
                <Button key={i} variant="outlined" size="small" onClick={() => addSkill(s)}>{s}</Button>
              ))}
            </Stack>
          </Stack>

          {/* Summary */}
          <Stack spacing={2} sx={{ mb: 3 }}>
            <h5>Summary</h5>
            <TextareaAutosize
              value={resumeHistory.summary || ""}
              onChange={e => setResumeHistory({ ...resumeHistory, summary: e.target.value })}
              minRows={5}
              style={{ width: '100%' }}
            />
          </Stack>

          <Button variant="contained" onClick={handleUpdate}>Update</Button>
        </Box>
      </Modal>
    </div>
  );
}

export default Edit;
