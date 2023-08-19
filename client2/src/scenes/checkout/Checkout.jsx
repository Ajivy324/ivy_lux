import React from 'react'
import { useSelector } from "react-redux"
import  {Box, Button, Stepper, Step, StepLabel} from "@mui/material"
import { Formik } from "formik"
import { useState } from "react"
import * as yup from "yup"
import { shades } from "../../theme";

const initialValues = {
    billingAddress: {
        firstName: "",
        lastName: "",
        county: "",
        street1: "",
        street2: "",
        city: "",
        state: "",
        zipCode: "",
    }
}

const Checkout = () => {
    const [activeStep, setActiveStep] = useState(0)
    const cart = useSelector((state) => state.cart.cart);
    const isFirstSteep = activeStep === 0;
    const isSecondStep = activeStep === 1;

    const handleFormSubmit = async (value, actions) => {
        setActiveStep(activeStep + 1);
    }

    async function makePayment(values){

    }
    return <Box width="80%" m="100px auto">
        <Stepper activeStep={activeStep} sx={{m: "20px 0"}}>
            <Step>
                <StepLabel>Billing</StepLabel>
            </Step>
            <Step>
                <StepLabel>Payment</StepLabel>
            </Step>
        </Stepper>
        <Box>
            <Formik
                onSubmit={handleFormSubmit}
                intitialValues={initialValues}
                validationSchema={}
            >

            </Formik>
        </Box>
    </Box>
};

export default Checkout