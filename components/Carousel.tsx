import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

interface CarouselProps {
    activityData: {
        images: string[]; // Lista de URLs de las imágenes
    };
}

const Carousel: React.FC<CarouselProps> = ({ activityData }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const { images } = activityData;

    // Función para concatenar el token a cada URL de imagen
    const appendTokenToImageUrl = (url: string) => {
        return url + "&token=80b3775c-abb7-43dd-9f5c-df9803cf6bf0";
    };

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === images.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex: number) => {
        setCurrentIndex(slideIndex);
    };

    return (
        <div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group'>
            <img
                src={appendTokenToImageUrl(images[currentIndex])} // Concatenar el token a la URL de la imagen actual
                alt="Slide"
                className='w-full h-full rounded-2xl bg-center bg-cover duration-200'
            />
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactLeft onClick={prevSlide} size={30} />
            </div>
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactRight onClick={nextSlide} size={30} />
            </div>
            <div className='flex top-4 justify-center py-2'>
                {images.map((imageUrl, index) => (
                    <div
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`text-2xl cursor-pointer ${index === currentIndex ? 'text-blue-500' : 'text-gray-500'}`}
                    >
                        <RxDotFilled />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
