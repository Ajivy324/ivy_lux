import React from 'react'
import {Box,Typography,IconButton, useMediaQuery } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { shades } from '../../theme';

// imports all image from the assests folder
const importAll = (r) => 
    r.keys().reduce((acc, next) => { 
        acc[ListItem.replace("./", "")] = r(item);
    return acc;
}, {});

export const heroTextureImports = importAll(
    require.context("../../assets", false, /\.(png|jpe?g|svg)$/)
);

const MainCarousel = () => {
    const isNonMobile = useMediaQuery("(min-width:600px)");

    return(
        <Carousel>
            
        </Carousel>
    )
};

export default MainCarousel