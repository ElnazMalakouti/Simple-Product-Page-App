import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css';


const Main = () => {

    return (
        <>
            <div className="w-full h-full flex flex-col justify-start items-center">

                <Swiper
                    navigation={true}
                    className="mySwiper w-full md:!hidden"
                    modules={[Navigation]}
                >
                    <SwiperSlide>
                        <img src='/images/image-product-1.jpg' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src='/images/image-product-2.jpg' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src='/images/image-product-3.jpg' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src='/images/image-product-4.jpg' />
                    </SwiperSlide>
                </Swiper>


            </div>
        </>
    )
}

export default Main