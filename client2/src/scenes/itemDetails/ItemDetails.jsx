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

    async function getItems() {
        const items = await fetch(
            `http://localhost:1337/api/items?populate=images`,
            { method: "GET" }
        );
        const itemsJson = await items.json();
        setItems(itemsJson.data);
    }

    useEffect(() => {
        getItem();
        getItems();
    }, [itemId]) // eslint-disable-line react-hooks/exhaustive-deps

    return <Box
    width="80%" m="80px auto">
        <Box display="flex" flexWrap="wrap" columGap="40px">
            {/* IMAGEs */}
            <Box flex="1 1 40%" mb="40px">
                <img 
                    alt={item?.name}
                    width="100%"
                    height="100%"
                    src={`http://localhost:1337${item?.attributes?.image?.data?.attributes?.formats?.medium?.url}`}
                    style={{objectFit: "contain"}}
                />
            </Box>

            {/* ACTIONS */}
            <Box flex="1 1 50%" mb="40px">
                <Box display="flex" justifyContent="space-between">
                    <Box>Home/Items</Box>
                    <Box>Prev Next</Box>
                </Box>

                <Box m="65px 0 25px 0">
                    <Typography variant="h3">{item?.attributes?.name}</Typography>
                    <Typography>${item?.attributes?.price}</Typography>
                    <Typography sx={{ mt: "20px"}}>
                        {item?.attributes?.longDescription}
                    </Typography>
                </Box>
            </Box>
        </Box>
    </Box>
};

export default ItemDetails ;