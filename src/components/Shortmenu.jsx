import React from 'react'
import item from '../Data'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const Shortmenu = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        arrows: true,
        slidesToShow: 6,
        slidesToScroll: 5,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    initialSlide: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    };
    return (
        <div id="menu" className="md:mx-24 mx-10 ml-2 mt-10">
            <div className="text-5xl text-center text-gray-500 md:mb-24 mb-10">Our Menu</div>
            <div className="mt-10">
                <Slider {...settings}>
                    {item.map((element) => {
                        return (
                            <div key={element.id}>
                                <div className="flex justify-center">
                                    <div className="h-[-13rem] w-36 bg-gray-100">
                                        <img className='rounded-md' src={element.url} alt="" />
                                        <div className='font-semibold m-1'>{element.name}</div>
                                        <div className="flex justify-between m-1">
                                            <div className='text-3xl'>*****</div>
                                            <div>{element.price}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </Slider>
            </div>
            <Link to='/menu'><p className='flex justify-end mt-10 text-gray-600 hover:text-blue-500'>View all<ArrowRightAltIcon /></p></Link>

        </div>

    )

}

export default Shortmenu