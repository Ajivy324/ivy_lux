import React from 'react'
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import {IconButton, Box, Typography, Button,  Tabs, Tab } from "@mui/material"
import { FavoriteBorderOutlinedIcon } from '@mui/icons-material/FavoriteBorderOutlined';
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import {shades} from "../../theme";
import { addToCart } from "../../state";
import { useNParams } from "react-router-dom";


const ItemDetails = () => {

    const dispatch = useDispatch();
    const {itemId} = useNParams();

    return (
        <div>ItemDetails</div>
    )
}

export default ItemDetails