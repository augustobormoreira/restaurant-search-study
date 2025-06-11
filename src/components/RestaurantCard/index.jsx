import React from "react";
import { Restaurant, RestaurantInfo, RestaurantPhoto, Title, Address } from "./styles";
import { Rating } from "react-simple-star-rating";
import restaurante from "../../assets/restaurante-fake.png" 
const RestaurantCard = () =>  (
    <Restaurant> 
        <RestaurantInfo>
            <Title>Restaurant Name</Title>
            <Rating
            iconsCount={5}
            initialValue={4}
            readonly={true}
            allowFraction={true}
            size={20}
            fillColor="#e7711c"
            />
            <Address>Address</Address>
        </RestaurantInfo>
        <RestaurantPhoto src={restaurante} alt="Foto do restaurante"/>
    </Restaurant>)

export default RestaurantCard;