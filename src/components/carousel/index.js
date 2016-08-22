import './carousel.scss'
import React from 'react'
import ReactSlick from 'react-slick'

export default class Carousel extends React.Component {

    render () {

        let settings = {
            draggable: false,
            autoplay: true,
            autoplaySpeed: 3000,
            infinite: true,
            dots: true,
            dotsClass: 'carousel__dots',
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
        };

        return (
            <ReactSlick {...settings} className='carousel'>
                <div className='carousel__slide_n_0'></div>
                <div className='carousel__slide_n_1'></div>
                <div className='carousel__slide_n_2'></div>
            </ReactSlick>
        );

    }

}