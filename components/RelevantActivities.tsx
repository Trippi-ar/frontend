'use client'

import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { FaStar } from "react-icons/fa";


const RelevantActivities = () => {
    const [activities, setActivities] = useState([
        { image: '/image-1.jpg', name:"Everrest", rating: 4.5, price: '$10230', difficulty: 'Medium', location: 'New York', description: 'Appending currency sign to a purchase form in your e-commerce site using plain JavaScript.', headline: 'w3js.com - web front-end studio' },
        { image: '/image-2.jpg', name:"El Morro",rating: 5, price: '$12220', difficulty: 'Hard', location: 'Los Angeles', description: 'React Carousel with Server Side Rendering Support – Part 1', headline: 'w3js.com - web front-end studio' },
        { image: '/image-3.jpg', name:"La cueva del terror",rating: 4, price: '$80', difficulty: 'Easy', location: 'San Francisco', description: 'React Carousel with Server Side Rendering Support – Part 2', headline: 'w3js.com - web front-end studio' },
        { image: '/image-4.jpeg', name:"Aconcagua",rating: 4.5, price: '$10220', difficulty: 'Medium', location: 'New York', description: 'Appending currency sign to a purchase form in your e-commerce site using plain JavaScript.', headline: 'w3js.com - web front-end studio' },
        { image: '/image-5.jpg', name:"Las piedras", rating: 5, price: '$13320', difficulty: 'Hard', location: 'Los Angeles', description: 'React Carousel with Server Side Rendering Support – Part 1', headline: 'w3js.com - web front-end studio' },
        { image: '/images.jpg', name:"El cerrito",rating: 4, price: '$80213', difficulty: 'Easy', location: 'San Francisco', description: 'React Carousel with Server Side Rendering Support – Part 2', headline: 'w3js.com - web front-end studio'}
    ]);

    return (
        <div className=" px-2 mt-10">
            <h1 className="text-2xl font-bold mx-44  flex text-left ">Local favorites on Argentina </h1>

            <div className="flex justify-center">

                <Carousel
                    additionalTransfrom={0}
                    arrows
                    autoPlaySpeed={3000}
                    centerMode={false}
                    className=""
                    containerClass="container"
                    dotListClass=""
                    draggable
                    focusOnSelect={true}
                    infinite
                    itemClass=""
                    keyBoardControl
                    minimumTouchDrag={80}
                    partialVisible
                    pauseOnHover
                    renderArrowsWhenDisabled={false}
                    renderButtonGroupOutside={false}
                    renderDotsOutside={false}
                    responsive={{
                        desktop: {
                            breakpoint: {
                                max: 3000,
                                min: 1024
                            },
                            items: 4,
                            partialVisibilityGutter: 0
                        },
                        mobile: {
                            breakpoint: {
                                max: 464,
                                min: 0
                            },
                            items: 1,
                            partialVisibilityGutter: 30
                        },
                        tablet: {
                            breakpoint: {
                                max: 1024,
                                min: 464
                            },
                            items: 2,
                            partialVisibilityGutter: 30
                        }
                    }}
                    rewind={false}
                    rewindWithAnimation={false}
                    rtl={false}
                    shouldResetAutoplay
                    showDots={false}
                    sliderClass=""
                    slidesToSlide={1}
                    swipeable
                >
                    {activities.map((activity, index) => (
                        <div key={index}
                             className="w-full h-1/2 px-3 mt-32 hover:scale-105 transition duration-300 ">
                            <img
                                src={activity.image}
                                alt="Activity"
                                className="rounded-2xl w-full h-full object-cover"
                                style={{maxHeight: '100%'}} // Ensure images maintain their aspect ratio
                            />

                            <div className="bg-opacity-60 w-full p-4 rounded-lg">
                                <p className="font-bold text-xl">{activity.name}</p>
                                <p className="text-md">{activity.location}</p>
                            </div>

                            <div className="flex px-3">
                                <div className="flex text-green-400">
                                    <FaStar/>
                                    <p className="text-sm text-black">{activity.rating}</p>
                                </div>
                                <p className="text-sm px-2">{activity.price}</p>
                                <p className="text-sm px-2">{activity.difficulty}</p>
                            </div>
                        </div>
                    ))}
                </Carousel>

            </div>

        </div>
    );
};

export default RelevantActivities;