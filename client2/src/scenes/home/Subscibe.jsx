import React from 'react'
import { Box, InputBase, Divider, Typography, IconButton, Icon} from "@mui/material";
import MarkEmailReadOutlinedIcon from "@mui/icons-material/MarkEmailReadOutlined";
import { useState } from 'react';


const Subscibe = () => {

    const [email, setEmail] = useState("");

    return (
        <Box width="80% auto" textAlign="center">
            <IconButton>
                <MarkEmailReadOutlinedIcon fontSize="Large"/>
            </IconButton>
            <Typography variant="h3">Subscribe To Our Newsletter</Typography>
            <Typography>and receive $20 coupon for your first order when you checkout</Typography>
            <Box
                p="2px 4px"
                m="15px auto"
                display="flex"
                alignItems="center"
                width="75%"
                backgroundColor="#f2f2f2"
            >
                <InputBase
                />
            </Box>
        </Box>
    )
}

export default Subscibe