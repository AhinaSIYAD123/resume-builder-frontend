import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Swal from "sweetalert2";

import { CiCircleRemove } from "react-icons/ci"; 
import { addResumeAPI } from "../services/allAPIs";


const steps = [
  "Basic Information",
  "Contact Details",
  "Education Details",
  "Work Experience",
  "Skills",
  "Review & Submit",
];

export default function Steps({ resumeData, setResumeData, setIsFinished }) {
  const { skills = [], summary = "" } = resumeData;
  const [userSkills, setUserSkills] = useState("");
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());
  const [isSubmitting, setIsSubmitting] = useState(false);

  const suggestions = [
    "React", "Angular", "Node", "Express",
    "MongoDB", "JavaScript", "HTML", "CSS", "C++",
  ];

  const addSkill = (skill) => {
    if (!skill) return;
    if (skills.includes(skill)) {
      Swal.fire({
        icon: "info",
        title: "Already added 💡",
        text: `${skill} is already in your skill list!`,
        confirmButtonColor: "#6C63FF",
      });
      return;
    }
    setResumeData((data) => ({ ...data, skills: [...skills, skill] }));
    setUserSkills("");
  };
const removeSkill = (skillToDelete) => {
  setResumeData((prev) => ({
    ...prev,
    skills: prev.skills.filter((s) => s !== skillToDelete),
  }));
};
;

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
    if (!isStepOptional(activeStep)) throw new Error("You can't skip a non-optional step.");
    setActiveStep((prev) => prev + 1);
    setSkipped((prev) => new Set([...prev, activeStep]));
  };
  const handleReset = () => setActiveStep(0);

  const handleAddResume = async () => {
    setIsSubmitting(true);
    try {
      const response = await addResumeAPI(resumeData);
      console.log("Resume added successfully:", response);

      Swal.fire({
        title: 'Success!',
        text: 'Your resume has been added successfully!',
        icon: 'success',
        confirmButtonText: 'OK'
      });

      setIsFinished(true);
    } catch (err) {
      console.log("ERROR:", err);
      Swal.fire({
        title: "Error!",
        text: "Something went wrong. Please try again!",
        icon: "error",
        confirmButtonText: "Cool",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Stack spacing={2}>
            <TextField
              placeholder="Full Name"
              variant="standard"
              value={resumeData.personalDetails?.fullName || ""}
              onChange={(e) =>
                setResumeData({
                  ...resumeData,
                  personalDetails: { ...resumeData.personalDetails, fullName: e.target.value },
                })
              }
            />
            <TextField
              placeholder="Job Title"
              variant="standard"
              value={resumeData.personalDetails?.jobTitle || ""}
              onChange={(e) =>
                setResumeData({
                  ...resumeData,
                  personalDetails: { ...resumeData.personalDetails, jobTitle: e.target.value },
                })
              }
            />
            <TextField
              placeholder="Location"
              variant="standard"
              value={resumeData.personalDetails?.location || ""}
              onChange={(e) =>
                setResumeData({
                  ...resumeData,
                  personalDetails: { ...resumeData.personalDetails, location: e.target.value },
                })
              }
            />
          </Stack>
        );

      case 1:
        return (
          <Stack spacing={2}>
       <TextField
  placeholder="Email"
  variant="standard"
  value={resumeData.contactDetails?.email || ""}
  onChange={e =>
    setResumeData({
      ...resumeData,
      contactDetails: {
        ...resumeData.contactDetails,
        email: e.target.value
      }
    })
  }
/>

<TextField
  placeholder="Phone Number"
  variant="standard"
  value={resumeData.contactDetails?.phoneNumber || ""}
  onChange={e =>
    setResumeData({
      ...resumeData,
      contactDetails: {
        ...resumeData.contactDetails,
        phoneNumber: e.target.value
      }
    })
  }
/>

<TextField
  placeholder="Github"
  variant="standard"
  value={resumeData.contactDetails?.github || ""}
  onChange={e =>
    setResumeData({
      ...resumeData,
      contactDetails: {
        ...resumeData.contactDetails,
        github: e.target.value
      }
    })
  }
/>

<TextField
  placeholder="LinkedIn"
  variant="standard"
  value={resumeData.contactDetails?.linkedIn || ""}
  onChange={e =>
    setResumeData({
      ...resumeData,
      contactDetails: {
        ...resumeData.contactDetails,
        linkedIn: e.target.value
      }
    })
  }
/>

<TextField
  placeholder="Portfolio"
  variant="standard"
  value={resumeData.contactDetails?.portfolio || ""}
  onChange={e =>
    setResumeData({
      ...resumeData,
      contactDetails: {
        ...resumeData.contactDetails,
        portfolio: e.target.value
      }
    })
  }
/>


          </Stack>
        );

      case 2:
        return (
          <Stack spacing={2}>
            <TextField
              placeholder="Course Name"
              variant="standard"
              value={resumeData.educationDetails?.course || ""}
              onChange={(e) =>
                setResumeData({
                  ...resumeData,
                  educationDetails: { ...resumeData.educationDetails, course: e.target.value },
                })
              }
            />
            <TextField
              placeholder="College Name"
              variant="standard"
              value={resumeData.educationDetails?.college || ""}
              onChange={(e) =>
                setResumeData({
                  ...resumeData,
                  educationDetails: { ...resumeData.educationDetails, college: e.target.value },
                })
              }
            />
            <TextField
              placeholder="University"
              variant="standard"
              value={resumeData.educationDetails?.university || ""}
              onChange={(e) =>
                setResumeData({
                  ...resumeData,
                  educationDetails: { ...resumeData.educationDetails, university: e.target.value },
                })
              }
            />
            <TextField
              placeholder="Year of Passout"
              variant="standard"
              value={resumeData.educationDetails?.passout || ""}
              onChange={(e) =>
                setResumeData({
                  ...resumeData,
                  educationDetails: { ...resumeData.educationDetails, passout: e.target.value },
                })
              }
            />
          </Stack>
        );

      case 3:
        return (
          <Stack spacing={2}>
            <TextField
              placeholder="Job or Internship"
              variant="standard"
              value={resumeData.workExperience?.jobTitle || ""}
              onChange={(e) =>
                setResumeData({
                  ...resumeData,
                  workExperience: { ...resumeData.workExperience, jobTitle: e.target.value },
                })
              }
            />
            <TextField
              placeholder="Company Name"
              variant="standard"
              value={resumeData.workExperience?.company || ""}
              onChange={(e) =>
                setResumeData({
                  ...resumeData,
                  workExperience: { ...resumeData.workExperience, company: e.target.value },
                })
              }
            />
            <TextField
              placeholder="Location"
              variant="standard"
              value={resumeData.workExperience?.location || ""}
              onChange={(e) =>
                setResumeData({
                  ...resumeData,
                  workExperience: { ...resumeData.workExperience, location: e.target.value },
                })
              }
            />
            <TextField
              placeholder="Duration"
              variant="standard"
              value={resumeData.workExperience?.duration || ""}
              onChange={(e) =>
                setResumeData({
                  ...resumeData,
                  workExperience: { ...resumeData.workExperience, duration: e.target.value },
                })
              }
            />
          </Stack>
        );

        case 4:
        return (
          <>
            <Stack spacing={2}>
              <TextField
                placeholder="Add Skill"
                variant="standard"
                value={userSkills}
                onChange={(e) => setUserSkills(e.target.value)}
              />
              <Button variant="contained" onClick={() => addSkill(userSkills)}>
                Add
              </Button>
            </Stack>

            {/* Skill Suggestions */}
            <Stack direction="row" flexWrap="wrap" spacing={1} sx={{ mt: 2 }}>
              {suggestions.map((s, i) => (
                <Button key={i} variant="outlined" onClick={() => addSkill(s)}>
                  {s}
                </Button>
              ))}
            </Stack>

            <Typography sx={{ mt: 3, fontWeight: 500 }}>Added Skills:</Typography>
            <Stack direction="row" flexWrap="wrap" spacing={1} sx={{ mt: 1 }}>
              {skills.map((s, i) => (
                <Box
                  key={i}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    border: "1px solid #ccc",
                    borderRadius: "25px",
                    padding: "4px 10px",
                    backgroundColor: "#f7f7f7",
                  }}
                >
                  <Typography variant="body2" sx={{ mr: 1 }}>
                    {s}
                  </Typography>
                  <Button
                    size="small"
                    color="error"
                    onClick={() => removeSkill(s)}
                    sx={{ minWidth: 0 }}
                  >
                    <CiCircleRemove size={20} />
                  </Button>
                </Box>
              ))}
            </Stack>
          </>
        );
      case 5:
        return (
          <TextareaAutosize
            minRows={5}
            placeholder="Enter Summary"
            style={{ width: "100%" }}
            value={summary}
            onChange={(e) => setResumeData({ ...resumeData, summary: e.target.value })}
          />
        );

      default:
        return null;
    }
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>
              {label} {isStepOptional(index) && <Typography variant="caption">(Optional)</Typography>}
            </StepLabel>
          </Step>
        ))}
      </Stepper>

      <Box sx={{ mt: 2 }}>
        {renderStepContent(activeStep)}

        <Box sx={{ display: "flex", pt: 2 }}>
          <Button disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>
            Back
          </Button>

          <Box sx={{ flex: "1 1 auto" }} />

          {isStepOptional(activeStep) && (
            <Button onClick={handleSkip} sx={{ mr: 1 }}>
              Skip
            </Button>
          )}

          {activeStep === steps.length - 1 ? (
            <Button onClick={handleAddResume} disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Finish"}
            </Button>
          ) : (
            <Button onClick={handleNext}>Next</Button>
          )}
        </Box>
      </Box>
    </Box>
  );
}
