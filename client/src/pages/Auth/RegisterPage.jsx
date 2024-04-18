import React, { useEffect, useState } from 'react';
import {
  Grid,
  TextField,
  Button,
  Typography,
  Box,
  Avatar,
  IconButton,
  Input,
} from '@mui/material';
import {
  PhotoCamera,
  Person as PersonIcon,
  CloudUpload as CloudUploadIcon,
} from '@mui/icons-material';
import registerAnimation from "../../assets/todoro-miyazaki.gif"
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from "axios"


const RegisterPage = () => {



  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      email: ''
    },

    validationSchema: Yup.object({
      username: Yup.string().required("Username is requrie"),
      password: Yup.string().required("Password is require"),
      email: Yup.string().email("Invalid Email Adress").required("Email is require")
    }),

    onSubmit: async values => {
      console.log(values)
      try {
          const formData = new FormData();
          formData.append('username', values.username);
          formData.append('password', values.password);
          formData.append('email', values.email);
  
          const response = await axios.post(
              "http://localhost:5002/api/auth/register",
              formData,
              {
                  headers: {
                      'Content-Type': 'multipart/form-data'
                  }
              }
          );
  
          console.log(response);
      } catch (error) {
          console.log(error.message);
      }
  }
  
  })



  return (
    <Grid
      container
      spacing={4}
      display="flex"
      height="100vh"
      justifyContent="center"
      alignItems="center"
      sx={{ padding: '2rem' }}
    >
      {/* Left side: User information */}
      <Grid item xs={12} md={6}>
        <Box
          sx={{
            padding: '2rem',
          }}
        >
          <Typography variant="h5" gutterBottom>
            Register
          </Typography>
          <form onSubmit={formik.handleSubmit}>
            <TextField
              label="Username"
              name="username"
              value={formik.values.username}
              onChange={formik.handleChange}
              fullWidth
              margin="normal"
              variant="outlined"
              required
            />

            <TextField
              label="Email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              fullWidth
              margin="normal"
              variant="outlined"
              required
              type="email"
            />

            <TextField
              label="Password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              fullWidth
              margin="normal"
              variant="outlined"
              required
              type="password"
            />
            {/* <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>

              <Box sx={{ display: 'flex', alignItems: 'center', marginY: '1rem' }}>
                <IconButton
                  color="primary"
                  aria-label="upload banner image"
                  component="label"
                  sx={{ marginRight: '1rem' }}
                >
                  <PhotoCamera />
                  <Input
                    type="file"
                    name="bannerImage"
                    accept="image/*"
                    onChange={handleChange}
                    sx={{ display: 'none' }}
                  />
                </IconButton>
                <Typography variant="body1">Upload Banner Image</Typography>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', marginY: '1rem' }}>
                <IconButton
                  color="primary"
                  aria-label="upload user icon"
                  component="label"
                  sx={{ marginRight: '1rem' }}
                >
                  <PersonIcon />
                  <Input
                    type="file"
                    name="userIcon"
                    accept="image/*"
                    onChange={handleChange}
                    sx={{ display: 'none' }}
                  />
                </IconButton>
                <Typography variant="body1">Upload User Icon</Typography>
              </Box>

            </Box> */}
            {/* Submit button */}
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ marginTop: '1rem' }}
            >
              Register
            </Button>
          </form>
        </Box>
      </Grid>

      {/* Right side: Display image */}
      <Grid item xs={6} md={3}>
        <Box
          sx={{
            padding: '2rem',
          }}
        >
          {/* Placeholder image */}
          <img
            src={registerAnimation}
            alt="Banner"
            style={{
              width: '50%%',
              height: '50%',
              borderRadius: '8px',
            }}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default RegisterPage;
