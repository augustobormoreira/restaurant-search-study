import React from "react";
import { Restaurant, RestaurantInfo, Title, Address } from "./styles";
//desenvolvimento de componentes parte 3
const RestaurantCard = () =>  (
    <Restaurant> 
        <RestaurantInfo>
            <Title>Restaurant Name</Title>
            <p>Rating</p>
            <Address>Address</Address>
        </RestaurantInfo>
    </Restaurant>)

export default RestaurantCard;