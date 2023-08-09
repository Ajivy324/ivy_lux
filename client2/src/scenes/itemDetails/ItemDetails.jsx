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

                {/* COUNT AND BUTTON*/}
                <Box display="flex" alignItems="center" minHeight="50px">
                    <Box 
                        display="flex" 
                        alignItems="center" 
                        border={`1.5px solid ${shades.neutral[300]}`} 
                        mr="20px" 
                        p="2px 5px" 
                    >
                        <IconButton 
                                onClick= {() => setCount(Math.max(count -1,1))}
                            >
                                <RemoveIcon />
                            </IconButton>
                            <Typography sx={{ p: "0 5px"}}>{count}</Typography>
                            <IconButton 
                                onClick= {() => setCount(count + 1)}
                            >
                                <AddIcon />
                        </IconButton>
                    </Box>
                    <Button
                    sx={{
                        backgroundColor: "#222222",
                        color: "white",
                        borderRadius: 0,
                        minWidth: "150px",
                        padding: "10px 40px"
                    }}
                    onClick={() => dispatch(addToCart({ item: {...item, count}}))}
                >
                        ADD TO CART
                    </Button>
                </Box>

                <Box>
                    <Box m="20px 0 5px 0" display="flex">
                        <FavoriteBorderOutlinedIcon/>
                        <Typography sx={{ ml: "5px" }}></Typography>
                    </Box>
                    <Typography>CATEGORIES: {item?.attributes?.category}</Typography>
                </Box>
            </Box>
        </Box>


        {/* INFORMATION*/}
        <Box m="20px 0">
            <Tabs value={value} onChange={handleChange}>
                <Tab label="DESCRIPTION" value="description"/>
                <Tab label="REVIEWS" value="reviews"/>
            </Tabs>
        </Box>
        <Box display="flex" flexWrap="wrap" gap="15px">
            {value === "description" && (
                <div>{item?.attributes?.longDescription}</div>
            )}
        </Box>
    </Box>
};

export default ItemDetails ;