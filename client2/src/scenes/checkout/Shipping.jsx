import React from 'react'
import {Box, Checkbox, FormControlLabel, Typography} from "@mui/material";
import AddressForm from "./AddressForm";

const Shipping = ({
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    setFieldValue,
}) => {
    return (
        <Box m="30px auto">
            {/*BILLING FORM*/}
            <Box>
                <Typography sx={{mb: "15px"}} fontSize="18px">
                    Billing Address
                </Typography>
                <AddressForm
                    type="billingAddress"
                    value={values.billingAddress}
                    errors={errors}
                    touched={touched}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                />
            </Box>

            <Box mb="20px">
                <FormControlLabel
                    label="Same for Shipping Address"
                    control={
                        <Checkbox
                            defaultChecked
                            value={values.shippingAddress.isSameAddress}
                            onChange={() =>
                                setFieldValue(
                                    "shippingAddress.isSameAddress",
                                    !values.shippingAddress.isSameAddress
                                )
                            }
                        />
                    }
                />
            </Box>

            {/*SHIPPING FORM*/}
            {!values.shippingAddreess.isSameAddress && (
                <Box>
                    <Typography sx={{mb: "15px"}} frontSize="18px">
                        Shipping Address
                    </Typography>
                    <AddressForm
                        type="shippingAddress"
                        value={values.shippingAddress}
                        errors={errors}
                        touched={touched}
                        handleBlur={handleBlur}
                        handleChange={handleChange}                        
                    />
                </Box>
            ) }
        </Box>
    )


    
}

export default Shipping