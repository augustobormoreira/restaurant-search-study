import React, { useState } from 'react'
import TextField, { Input } from '@material/react-text-field'
import MaterialIcon from '@material/react-material-icon'

import logo from '../../assets/logo.svg'
import restaurante from '../../assets/restaurante-fake.png'
import { Card, RestaurantCard, Map, Modal } from '../../components'

import { Wrapper, Container, Search, Logo, Carousel, CarouselTitle } from './styles'

const Home = () => {
    const [inputValue, setInputValue] = useState('');
    //const [modalOpened, setModalOpened] = useState(false);
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        adaptiveHeight: true,
        arrows: false
    };

    return (
    <Wrapper>
        <Container>
            <Search>
                <Logo src={logo} alt="Logo do restaurante"/>
                <TextField
                    label='Pesquisar restaurantes'
                    outlined
                    trailingIcon={<MaterialIcon role="button" icon="search"/>}
                >
                    <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)} />
                </TextField>
                <CarouselTitle>Na sua área</CarouselTitle>
                <Carousel {...settings}>
                    <Card photo={restaurante} title="Jarbas"/>
                    <Card photo={restaurante} title="Jarbas"/>
                    <Card photo={restaurante} title="Jarbas"/>
                    <Card photo={restaurante} title="Jarbas"/>
                    <Card photo={restaurante} title="Jarbas"/>
                </Carousel>
            </Search>
            <RestaurantCard />
        </Container>
        <Map/> 
        {/*<Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)}/>*/}
    </Wrapper>
    )
}



export default Home