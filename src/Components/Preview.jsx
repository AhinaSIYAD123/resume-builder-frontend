import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { CiSaveDown2, CiClock2 } from "react-icons/ci";
import Edit from "./Edit";
import { Link as RouterLink } from "react-router-dom";
import { CiPhone, CiMail, CiLocationOn } from "react-icons/ci";
import { FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { addHistoryAPI } from "../services/allAPIs";
import { Tooltip } from "@mui/material";

function Preview({ resumeData, setResumeData, resumeId, setResumeId }) {
  // Provide defaults to avoid crashes
  const {
    personalDetails = {},
    contactDetails = {},
    educationDetails = {},
    workExperience = {},
    skills = [],
    summary = "",
  } = resumeData || {};

  const handleDownload = async () => {
    try {
      const input = document.getElementById("result");
      const canvas = await html2canvas(input, { scale: 2 });
      const imgUrl = canvas.toDataURL("image/png");
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      pdf.addImage(imgUrl, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('resume.pdf');

      const current = new Date();
      const formattedDateTime = `${current.toLocaleDateString()}, ${current.toLocaleTimeString()}`;

      const response = await addHistoryAPI({ ...resumeData, formattedDateTime, imgUrl });
      const newId = response?.data?.id;
      if (newId) setResumeId(newId);
      console.log("Saved to history with ID:", newId);
    } catch (err) {
      console.error("Download/History error:", err);
    }
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mt: 2 }}>
      <Stack direction="row" spacing={1} sx={{ mb: 2 }}>

        <Tooltip title="Download">
          <Button variant="text" onClick={handleDownload}>
            <CiSaveDown2 size={22} />
          </Button>
        </Tooltip>


        <Edit
          resumeId={resumeId}
          resumeData={resumeData}
          setResumeData={setResumeData}
        />


        <Tooltip title="History">
          <Button
            variant="text"
            component={RouterLink}
            to="/history"
          >
            <CiClock2 size={22} />
          </Button>
        </Tooltip>
      </Stack>


      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", "& > :not(style)": { m: 2, width: 350, height: "auto" } }}>
        <Paper id="result" elevation={3} sx={{ p: 3 }}>
          <Typography variant="h4" align="center" sx={{ mb: 2 }}>
            {personalDetails.fullName || "Full Name"}
          </Typography>
          <Divider sx={{ mb: 2 }} />
          <Typography variant="h6" align="center" color="blue" sx={{ mb: 1 }}>
            {personalDetails.jobTitle || "Job Title"}
          </Typography>

          <Typography variant="body1" align="center" sx={{ mb: 2, display: "flex", justifyContent: "center", gap: 2 }}>
            <span style={{ display: "flex", alignItems: "center", gap: 4 }}><CiPhone /> {contactDetails.phoneNumber || "-"}</span>
            <span style={{ display: "flex", alignItems: "center", gap: 4 }}><CiMail /> {contactDetails.email || "-"}</span>
            <span style={{ display: "flex", alignItems: "center", gap: 4 }}><CiLocationOn /> {personalDetails.location || "-"}</span>
          </Typography>

          <Typography variant="body1" align="center" sx={{ mb: 2, display: "flex", justifyContent: "center", gap: 2 }}>
            <span style={{ display: "flex", alignItems: "center", gap: 4 }}><FaGithub /> {contactDetails.github || null}</span>
            <span style={{ display: "flex", alignItems: "center", gap: 4 }}><FaLinkedin /> {contactDetails.linkedIn || null}</span>
            <span style={{ display: "flex", alignItems: "center", gap: 4 }}><FaGlobe /> {contactDetails.portfolio || null}</span>
          </Typography>


          <Divider sx={{ mb: 1 }}>Summary</Divider>
          <Typography variant="body2" sx={{ mb: 2 }}>{summary || "No summary provided."}</Typography>

          <Divider sx={{ mb: 1 }}>Education</Divider>
          <Typography variant="body2" align="center" sx={{ mb: 2 }}>
            {educationDetails.course || "Course"}<br />
            {educationDetails.college || "College"} | {educationDetails.university || "University"} | {educationDetails.passout || "Year"}
          </Typography>

          <Divider sx={{ mb: 1 }}>Experience</Divider>
          <Typography variant="body2" align="center" sx={{ mb: 2 }}>
            {workExperience.jobTitle || "Job Title"}<br />
            {workExperience.company || "Company"} | {workExperience.location || "Location"} | {workExperience.duration || "Duration"}
          </Typography>

          <Divider sx={{ mb: 2 }}>Skills</Divider>
          <Stack direction="row" spacing={1} justifyContent="center" sx={{ flexWrap: "wrap", gap: 1 }}>
            {skills.length > 0 ? skills.map((skill, i) => (
              <Button key={i} variant="contained" color="primary" size="small">{skill}</Button>
            )) : <Typography variant="body2" color="text.secondary">No skills added.</Typography>}
          </Stack>
        </Paper>
      </Box>
    </Box>
  );
}

export default Preview;
