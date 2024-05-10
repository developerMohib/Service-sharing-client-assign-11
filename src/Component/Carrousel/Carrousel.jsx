
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';


const Carrousel = () => {
    return (
        <div>
            <Swiper
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide> 
        <div
          className="hidden bg-cover bg-center lg:block relative "
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1606660265514-358ebbadc80d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1575&q=80')`,
            backgroundSize: 'cover'
          }}
        >
            <div className="absolute inset-0 bg-black opacity-90"></div>

             <p className='text-white ' > Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur facilis quam minus quasi sequi id dicta, repellendus dolorem labore placeat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique expedita dolorum sapiente inventore nam fuga tempora omnis sed reiciendis ipsam porro cumque neque assumenda obcaecati dolor voluptatem tempore labore aperiam nemo, placeat consectetur itaque ipsum! Dignissimos commodi nemo quaerat? Sapiente cum, delectus iure atque deleniti voluptate saepe placeat fugiat provident veritatis autem nemo! Et voluptas in molestias nostrum eaque, cumque debitis illum, accusantium quasi fugit dicta alias accusamus! Provident ea ducimus quas, ipsam tempore tempora velit fugit veniam rem obcaecati alias doloribus iure, voluptatem eum dolor facilis dicta officia id facere deserunt impedit inventore dolore? Facilis ab repellendus hic ut. </p>

        </div>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
        </div>
    );
};

export default Carrousel;