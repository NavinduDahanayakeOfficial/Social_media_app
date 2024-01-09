import { useState, useEffect } from "react";
import { 
    Box,
    Button,
    useMediaQuery,
    Typography,
    useTheme,
    TextField,
 } from "@mui/material";
 import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
 import {Field, Formik} from "formik";
 import * as yup from "yup";
 import { useNavigate } from "react-router-dom";
 import { useDispatch } from "react-redux";
 import { setLogin } from "../../state";
 import Dropzone from "react-dropzone";
 import FlexBetween from "../../components/FlexBetween";

  const registerSchema = yup.object().shape({
    firstName: yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
    lastName: yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
    email: yup.string()
        .email("Invalid email")
        .required("Required"),
    password: yup.string()
        .min(8, "Password must be at least 8 characters")
        .required("Required"),
    location: yup.string().required("Required"),
    occupation: yup.string().required("Required"),
    picture: yup.string().required("Required")
  })

  const loginSchema = yup.object().shape({
    email: yup.string().email("Invalid email").required("Required"),
    password: yup.string().required("Required")
  })

  const initialValuesRegister = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    location: "",
    occupation: "",
    picture: ""
  }

  const initialValuesLogin = {
    email: "",
    password: ""
  }
 
const Form = () => {
  const [pageType, setPageType] = useState("login");
  const {palette} = useTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const isLogin = pageType === "login";
  const isRegister = pageType === "register";

  const handleFormSubmit = async (values, onSubmitProps) => {}


  return (
    <Formik
      initialValues={isLogin? initialValuesLogin: initialValuesRegister}
      validationSchema={isLogin? loginSchema: registerSchema}
      onSubmit={handleFormSubmit}
    >
      {({
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
        setFieldValue,
        resetForm, 
      }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px" 
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              /*split the grids into 4 columns, and repeat the style in each column. Each column will have a minimum width of 0 and a maximum width of 1fr, means each column will take up an equal amount of space*/
              sx={{
                "& > div":{gridColumn: isNonMobile ? undefined : "span 4"}  
                /*"& > div" means select all the divs that are direct children of this Box element
                if isNonMobile is true, then gridColumn is undefined, else it is span 4. Grid column is the number of columns the element will span*/
              }}
            >
              {isRegister && (
                <>
                  <TextField
                    label="First Name"
                    onblur={handleBlur}
                    onChange={handleChange}
                    value={values.firstName}
                    name="firstName" //name must match the key in initialValues
                  />
                </>
              )}

            </Box>
          </form>
        )
      }
    </Formik>
  )
}

export default Form;
