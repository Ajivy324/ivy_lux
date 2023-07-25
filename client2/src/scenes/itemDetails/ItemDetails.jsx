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
    const {value, setValue } = useStatee("description");
    const [count, setCount] = useState(1);
    const [item, setItem] = useState(null);
    const {items, setItems} = useState([]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    async function getItem() {
        const item = await fetch(
            `http://localhost:1337/api/items/${itemId}?populate=images`,
            { method: "GET" }
        );
        const itemJson = await item.json();
        setItem(itemJson.data);
    }

    

    return (
        <div>ItemDetails</div>
    )
}

export default ItemDetails