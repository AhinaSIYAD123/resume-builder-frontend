import React from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <>
      {/* Hero Section */}
      <Box
        sx={{
          position: "relative",
          height: "100vh",
          backgroundImage:
            'url("https://www.flexjobs.com/blog/wp-content/uploads/2023/02/13061142/30-of-the-Most-Common-Job-Interview-Questions-With-Example-Answers.jpg?w=1024")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            backgroundColor: "rgba(255,255,255,0.7)",
            p: 4,
            borderRadius: 2,
            textAlign: "center",
            maxWidth: 500,
          }}
        >
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Designed to get hired.
          </Typography>
          <Typography variant="body1" mb={3}>
            Your skills, your story, your next job — all in one.
          </Typography>
       <Link to="/resume">
  <Button
    variant="contained"
    sx={{
      backgroundColor: "#4B0082",
      "&:hover": { backgroundColor: "#36005d" },
    }}
  >
    MAKE YOUR RESUME
  </Button>
</Link>

       
        </Box>
      </Box>
        <h1 className="text-center my-4">Tools</h1>
      {/* Tools Section */}
      <Box
        component="section"
        sx={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 4,
        }}
      >

        <Stack
          direction="row"
          spacing={2}
          sx={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box>
            <h4>Resume</h4>
            <p>Create unlimited new resumes and easily edit them afterwards.</p>

            <h4>Cover Letters</h4>
            <p>Easily write professional cover letters.</p>

            <h4>Jobs</h4>
            <p>Automatically receive new and relevant job postings.</p>

            <h4>Applications</h4>
            <p>Effortlessly manage and track your job applications in an organized manner.</p>
          </Box>
          <Box>
            <img
              src="https://myoutspark.com/images/revamp_img/expert-resume-img.webp"
              alt=""
              height={'400px'}
              width={'500px'}
            />
          </Box>
        </Stack>
      </Box>

      {/* Background Image Section */}
      <Box
        component="section"
        sx={{
          height: "100vh",
          backgroundImage:
            'url("https://www.flexjobs.com/blog/wp-content/uploads/2023/02/13061142/30-of-the-Most-Common-Job-Interview-Questions-With-Example-Answers.jpg?w=1024")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      ></Box>

      {/* Testimony Section */}
      <Box
        component="section"
        sx={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          p: 4,
        }}
      >
        <h2 className="text-center">Testimony</h2>
        <Stack
          direction="row"
          spacing={3}
          sx={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
            odio, vitae rerum itaque fugit a voluptate commodi reprehenderit
            corrupti dolore iure ullam, illum voluptas repellat recusandae quam
            est, ab natus.
          </Box>
          <Box>
            <Stack
              direction="row"
              spacing={3}
              sx={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src="https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg"
                alt=""
                width={'100px'}
                height={'100px'}
              />
              <img
                src="https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg"
                alt=""
                width={'100px'}
                height={'100px'}
              />
              <img
                src="https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg"
                alt=""
                width={'100px'}
                height={'100px'}
              />
              <img
                src="https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg"
                alt=""
                width={'100px'}
                height={'100px'}
              />
            </Stack>
            <Stack
              direction="row"
              spacing={3}
              sx={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src="https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg"
                alt=""
                width={'100px'}
                height={'100px'}
              />
              <img
                src="https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg"
                alt=""
                width={'100px'}
                height={'100px'}
              />
              <img
                src="https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg"
                alt=""
                width={'100px'}
                height={'100px'}
              />
              <img
                src="https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg"
                alt=""
                width={'100px'}
                height={'100px'}
              />
            </Stack>
            <Stack
              direction="row"
              spacing={3}
              sx={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src="https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg"
                alt=""
                width={'100px'}
                height={'100px'}
              />
              <img
                src="https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg"
                alt=""
                width={'100px'}
                height={'100px'}
              />
              <img
                src="https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg"
                alt=""
                width={'100px'}
                height={'100px'}
              />
              <img
                src="https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg"
                alt=""
                width={'100px'}
                height={'100px'}
              />
            </Stack>
            <Stack
              direction="row"
              spacing={3}
              sx={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src="https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg"
                alt=""
                width={'100px'}
                height={'100px'}
              />
              <img
                src="https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg"
                alt=""
                width={'100px'}
                height={'100px'}
              />
              <img
                src="https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg"
                alt=""
                width={'100px'}
                height={'100px'}
              />
              <img
                src="https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg"
                alt=""
                width={'100px'}
                height={'100px'}
              />
            </Stack>
          </Box>
        </Stack>
      </Box>
    </>
  );
}