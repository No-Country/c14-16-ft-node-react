import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "./offer.css";
import "swiper/css";
function Offer() {
  return (
    <>
      <div className="container mx-auto px-5 lg:px-0">
        <section
          id="offer"
          /* className="min-h-screen flex items-center justify-center" */
        >
          <div className="md:mt-10 md:mb-20">
            <div className="swiperContainer">
              <Swiper
                modules={[Pagination, Autoplay]}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                pagination={{
                  el: ".pagination",
                  clickable: true,
                }}
                slidesPerView={1}
                breakpoints={{
                  "@0.00": {
                    slidesPerView: 1,
                    //spaceBetween: 25,
                  },
                  "@0.50": {
                    slidesPerView: 1,
                    //spaceBetween: 25,
                  },
                  "@1.00": {
                    slidesPerView: 1,
                    //spaceBetween: 25,
                  },
                  "@1.25": {
                    slidesPerView: 1,
                    //spaceBetween: 20,
                  },
                  "@1.50": {
                    slidesPerView: 1,
                    //spaceBetween: 30,
                  },
                  "@1.75": {
                    slidesPerView: 1,
                    //spaceBetween: 20,
                  },
                }}
              >
                <SwiperSlide>
                  <div className="relative flex flex-col items-center w-[50%] h-[60%] mx-auto">
                    <img
                      src="/assets/Images/Dog-Working.png"
                      alt=""
                      className="object-cover rounded-sm shadow-lg w-full "
                    />
                    <h3 className="text-2xl font-bold mt-2 text-gray-700">
                      Dog Working
                    </h3>
                    <p className="mt-4 text-xl font-semibold text-gray-500 text-center">
                      Nuestro equipo de expertos está dedicado al cuidado de tu
                      mascota.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="relative flex flex-col items-center w-[50%] h-[60%] mx-auto">
                    <img
                      src="/assets/Images/Dog-Office.png"
                      alt=""
                      className="object-cover rounded-sm shadow-lg w-full"
                    />
                    <h3 className="text-2xl font-bold mt-2 text-gray-700">
                      Dog Office
                    </h3>
                    <p className="mt-4 text-xl font-semibold text-gray-500 text-center">
                      Ofrecemos un ambiente seguro y divertido para que tu
                      mascota se sienta como en casa.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="relative flex flex-col items-center w-[50%] h-[60%] mx-auto">
                    <img
                      src="/assets/Images/Dog-Hotel.png"
                      alt=""
                      className="object-cover rounded-sm shadow-lg w-full"
                    />
                    <h3 className="text-2xl font-bold mt-2 text-gray-700">
                      Dog Hotel
                    </h3>
                    <p className="mt-4 text-xl font-semibold text-gray-500 text-center">
                      Nos preocupamos por la salud y el bienestar de cada
                      animalito que llega a nosotros.
                    </p>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="pagination" />
          </div>
        </section>
      </div>
    </>
  );
}

export default Offer;
