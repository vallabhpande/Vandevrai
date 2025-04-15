// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay } from 'swiper/modules';
// import 'swiper/css';

// const imageList = [
  // 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQywnGbNu2HO_8hWKtzClV4QeCVOJmzRsSoFw&s',
  // 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM6Of0bR8pmMYXAbvDr7ucCa0N0v-6EvQEbw&s',
  // 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVVTee9YXTjuYDfbnOYUl8tiH_vXlgFdDO0w&s',
  // 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE7Sw_tZc2dCvKJYaqBfqcmyils72WxON8Lg&s',
  // 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpGfxZTVM5t4TUYLjKTCQZIu0qFHO0fFje5g&s',
  // 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVyy30kqRTaxCqx1SKLhg_J8eRtIMtABvA9Q&s',
  // 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-0YnoAzo_CoAHeKZvCqoPOma5llppAWHkKQ&s',
  // 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ1soWzog6jM_-kUeZySuaTIAM3ZUp9B8XXg&s',
  // 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcKOx2aJkSS3K29tQgnQOYtUXYoB_Bm04bUw&s',
  // 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVeNkzNo0k84UrZbVpiemWG8KOi5utuyPYBg&s',
  // 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv5m6KBvrox6pPg_4HaLQn7mAHY6hxAoYFDw&s',
  // 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTPUvLUoPaFTH2xVlZueyK8H7BBDqekFHi8g&s',
  // 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIPiw-t0ktsaim9YGHafeXpk_aUF4CjK8a3w&s',
  // 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSITs30cgdBvKt8wmsuDxSpwBul-mRuxIkzdQ&s',
  // 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu8b1JsIKPxB07ypUwOjFlShq-6gDp8hb4Ug&s',
// ];



// const SlidingImageCardGrid = () => {
//   return (
//     <section className="py-10 px-4">
//       <h2 className="text-3xl font-bold text-center text-green-800 mb-8">Our Project Highlights</h2>

//       <div className="max-w-7xl mx-auto">
//         <Swiper
//           spaceBetween={10}
//           slidesPerView={5}
//           loop={true}
//           autoplay={{ delay: 2000, disableOnInteraction: false }}
//           breakpoints={{
//             320: { slidesPerView: 1 },
//             480: { slidesPerView: 2 },
//             768: { slidesPerView: 3 },
//             1024: { slidesPerView: 4 },
//             1280: { slidesPerView: 5 },
//           }}
//           modules={[Autoplay]}
//         >
//           {imageList.map((src, index) => (
//             <SwiperSlide key={index}>
//               <div className="p-2">
//                 <div className="bg-white shadow-lg rounded-lg overflow-hidden">
//                   <img
//                     src={src}
//                     alt={`Image ${index + 1}`}
//                     className="w-full h-48 object-cover hover:scale-105 transition duration-300"
//                   />
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </section>
//   );
// };

// export default SlidingImageCardGrid;

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const imageList = [
  {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQywnGbNu2HO_8hWKtzClV4QeCVOJmzRsSoFw&s',
    name: 'Project 1',
    location: 'Location 1',
  },
  {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM6Of0bR8pmMYXAbvDr7ucCa0N0v-6EvQEbw&s',
    name: 'Project 2',
    location: 'Location 2',
  },
  {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVVTee9YXTjuYDfbnOYUl8tiH_vXlgFdDO0w&s',
    name: 'Project 3',
    location: 'Location 3',
  },
  {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE7Sw_tZc2dCvKJYaqBfqcmyils72WxON8Lg&s',
    name: 'Project 4',
    location: 'Location 4',
  },
  {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpGfxZTVM5t4TUYLjKTCQZIu0qFHO0fFje5g&s',
    name: 'Project 5',
    location: 'Location 5',
  },
  {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVyy30kqRTaxCqx1SKLhg_J8eRtIMtABvA9Q&s',
    name: 'Project 6',
    location: 'Location 6',
  },
  {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-0YnoAzo_CoAHeKZvCqoPOma5llppAWHkKQ&s',
    name: 'Project 7',
    location: 'Location 7',
  },
  {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ1soWzog6jM_-kUeZySuaTIAM3ZUp9B8XXg&s',
    name: 'Project 8',
    location: 'Location 8',
  },
  {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcKOx2aJkSS3K29tQgnQOYtUXYoB_Bm04bUw&s',
    name: 'Project 9',
    location: 'Location 9',
  },
  {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVeNkzNo0k84UrZbVpiemWG8KOi5utuyPYBg&s',
    name: 'Project 10',
    location: 'Location 10',
  },
  {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv5m6KBvrox6pPg_4HaLQn7mAHY6hxAoYFDw&s',
    name: 'Project 11',
    location: 'Location 11',
  },
  {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTPUvLUoPaFTH2xVlZueyK8H7BBDqekFHi8g&s',
    name: 'Project 12',
    location: 'Location 12',
  },
  {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIPiw-t0ktsaim9YGHafeXpk_aUF4CjK8a3w&s',
    name: 'Project 13',
    location: 'Location 13',
  },
  {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSITs30cgdBvKt8wmsuDxSpwBul-mRuxIkzdQ&s',
    name: 'Project 14',
    location: 'Location 14',
  },
  {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu8b1JsIKPxB07ypUwOjFlShq-6gDp8hb4Ug&s',
    name: 'Project 15',
    location: 'Location 15',
  },
];


const SlidingImageCardGrid = () => {
  return (
    <section className="py-10 px-4">
      <h2 className="text-3xl font-bold text-center text-green-800 mb-8">Our Project Highlights</h2>

      <div className="max-w-7xl mx-auto">
        <Swiper
          spaceBetween={10}
          slidesPerView={5}
          loop={true}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          breakpoints={{
            320: { slidesPerView: 1 },
            480: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1280: { slidesPerView: 5 },
          }}
          modules={[Autoplay]}
        >
          {imageList.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="p-2">
                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                  <img
                    src={item.src}
                    alt={`Image ${index + 1}`}
                    className="w-full h-48 object-cover hover:scale-105 transition duration-300"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-green-800">{item.name}</h3>
                    <p className="text-gray-500">{item.location}</p>
                    <a
                      href="#"
                      className="inline-block mt-2 text-blue-500 hover:underline"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default SlidingImageCardGrid;
