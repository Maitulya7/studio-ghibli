import React from 'react';
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Box, TextField, Button, Typography, Container, Grid, Paper } from '@mui/material';

const LoginPage = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid Email Adress").required('Email is required'),
      password: Yup.string().required('Password is required'),
    }),
    onSubmit: async (values) => {
      console.log(values)
      const formData = new FormData();
      formData.append('email', values.email);
      formData.append('password', values.password);

      try {
        axios.post('http://localhost:5001/api/auth/login', formData , {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }) 
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
      } catch (error) {
        console.error('Login failed:', error);
      }
    },
  });

  return (
    <Container maxWidth="xs">
      <Paper elevation={3} sx={{ padding: 3, marginTop: 8 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Login
        </Typography>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="email"
                type='email'
                name="email"
                label="Email"
                variant="outlined"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="password"
                name="password"
                label="Password"
                type="password"
                variant="outlined"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Login
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default LoginPage;
