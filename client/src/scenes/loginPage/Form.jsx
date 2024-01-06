import { useState, useEffect } from "react";
import { 
    Box,
    Button,
    testField,
    useMediaQuery,
    Typography,
    useTheme,
 } from "@mui/material";
 import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
 import {Formik} from 'formik';
 import * as yup from 'yup';
 import { useNavigate } from "react-router-dom";
 import { useDispatch } from "react-redux";
 import { setLogin } from "../../state";
 import Dropzone from 'react-dropzone';
 import FlexBetween from "../../components/FlexBetween";

  const registerSchema = yup.object().shape({
    firstName: yup.String()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    lastName: yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: yup.string()
        .email('Invalid email')
        .required('Required'),
    pasword: yup.string()
        .min(8, 'Password must be at least 8 characters')
        .required('Required'),
    location: 
    occupation:
    picture:
  })

 
const Form = () => {


  return (
    <Box></Box>
  )
}

export default Form;
