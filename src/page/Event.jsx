import Navbar from "../components/Navbar";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import slide1 from "../images/about/Event/SlideBlack1.png";
import slide1B from "../images/about/Event/Slideclear1.png";
import status1 from "../images/about/Event/01.png";
import slide2 from "../images/about/Event/SlideBlack2.png";
import slide2B from "../images/about/Event/SlideClear2.png";
import status2 from "../images/about/Event/02.png";
import slide3 from "../images/about/Event/SlideBlack3.png";
import slide3B from "../images/about/Event/SlideClear3.png";
import status3 from "../images/about/Event/03.png";

import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
} from "swiper/core";

SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);

const viewportContext = React.createContext({});

const ViewportProvider = ({ children }) => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const [height, setHeight] = React.useState(window.innerHeight);
  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <viewportContext.Provider value={{ width, height }}>
      {children}
    </viewportContext.Provider>
  );
};

const useViewport = () => {
  const { width, height } = React.useContext(viewportContext);
  return { width, height };
};

function SlideContent({ status }) {
  if (status === 1) {
    return (
      <p>
        is an annual design student event organized by SAE since 1980 that
        compete all college students around the world to develop, design, build,
        and race a small-scale formula racing car style. Formula SAE divide into
        10 series: Formula SAE Michigan, Formula SAE Lincoln, Formula SAE
        Electric Nebraska, Formula SAE Australasia, Formula SAE Brazil, Formula
        SAE Italy, Formula SAE United Kingdom, Formula SAE Austria, Formula
        Student Germany, and Student Formula Japan.
      </p>
    );
  } else if (status === 2) {
    return (
      <p>
        Shell Eco-marathon is one of the world’s leading student engineering
        competitions. Over the past 35 years, the programme has consistently
        brought to life Shell’s mission of powering progress together by
        providing more and cleaner energy solutions. The global academic
        programme brings together Science, Technology, Engineering and Maths
        (STEM) students from across the globe to design, build and operate some
        of the world’s most energy-efficient vehicles. All in the name of
        collaboration and innovation, as students’ bright ideas help to shape a
        lower carbon future for all.
      </p>
    );
  } else if (status === 3) {
    return (
      <p>
        is An annual competition that is oriented to the efficient use of car
        energy by students from all universities in Indonesia, organized by
        National Achievement Center, Ministry of Education and Culture of
        Republic Indonesia. This competition has two categories, namely Urban
        and Prototype, each of which has a sub-category of electric motor drive,
        diesel-fueled MPD (Internal Combustion Engine), gasoline-fueled MPD,
        ethanol-fueled MPD.
      </p>
    );
  }
}

function Slide1Desktop() {
  return (
    <div className="h-screen">
      <img alt="" src={slide1B} className={`left-0 absolute w-1/2`}></img>
      <div className="z-20 relative AboutTitle text-white max-w-sm ">
        <h1 className="text-9xl font-extrabold italic">FSAE</h1>
        <p className="font-bold text-left w-11/12 mx-auto">
          FORMULA SOCIETY OF AUTOMOTIVE ENGINEERING (SAE)
        </p>
      </div>
      <div className="h-screen absolute AboutText max-w-md md:p-0 p-10 text-white ">
        <div className="text-justify text-lg">
          <SlideContent status={1} />
        </div>
      </div>
      <img alt="" src={status1} className="bottom-0 absolute status"></img>
    </div>
  );
}
function Slide1Mobile() {
  return (
    <div className="h-screen">
      <div className="flex flex-col relative top-20 gap-5 text-white">
        <div className="z-20 max-w-sm mx-auto">
          <h1 className="text-6xl font-extrabold italic">FSAE</h1>
        </div>
        <img src={slide1B} className="w-3/5 mx-auto" alt=""></img>
        <p className="font-bold  text-base text-center w-11/12 mx-auto">
          FORMULA SOCIETY OF AUTOMOTIVE ENGINEERING (SAE)
        </p>
        <div className="text-justify text-sm -mt-3 px-10 ">
          <SlideContent status={1} />
        </div>
      </div>
      <div className="bottom-0 absolute">
        <img
          alt=""
          src={status1}
          className="w-4/5  bottom-0 relative mx-auto"
        ></img>
      </div>
    </div>
  );
}

function Slide2Desktop() {
  return (
    <div className="h-screen">
      <img alt="" src={slide2B} className={`right-0 absolute w-1/2`}></img>
      <div className="z-20 relative AboutTitle text-white max-w-sm ">
        <h1 className="text-9xl font-extrabold italic">SEM</h1>
        <p className="font-bold text-left w-max ">SHELL ECO MARATHON (SEM)</p>
      </div>
      <div className="h-screen absolute aboutText2 max-w-md md:p-0 p-10 text-white ">
        <div className="text-justify text-lg">
          <SlideContent status={2} />
        </div>
      </div>
      <img alt="" src={status2} className="bottom-0 absolute status2"></img>
    </div>
  );
}
function Slide2Mobile() {
  return (
    <div className="h-screen">
      <div className="flex flex-col relative top-20 gap-5 text-white">
        <div className="z-20 max-w-sm mx-auto">
          <h1 className="text-6xl font-extrabold italic">SEM</h1>
        </div>
        <img src={slide2B} className="w-3/5 mx-auto" alt=""></img>
        <p className="font-bold  text-base text-center w-11/12 mx-auto">
          SHELL ECO MARATHON (SEM)
        </p>
        <div className="text-justify text-sm -mt-3 px-10 ">
          <SlideContent status={2} />
        </div>
      </div>
      <div className="bottom-0 absolute">
        <img
          alt=""
          src={status2}
          className="w-4/5 -bottom-1.5 relative mx-auto"
        ></img>
      </div>
    </div>
  );
}
function Slide3Desktop() {
  return (
    <div className="h-screen">
      <img alt="" src={slide3B} className={`left-0 absolute w-1/2`}></img>
      <div className="z-20 relative AboutTitle text-white max-w-sm ">
        <h1 className="text-9xl font-extrabold italic">KMHE</h1>
        <p className="font-bold text-left w-11/12 mx-auto">
            KONTES MOBIL HEMAT ENERGI (KMHE)
        </p>
      </div>
      <div className="h-screen absolute AboutText max-w-md md:p-0 p-10 text-white ">
        <div className="text-justify text-lg">
          <SlideContent status={3} />
        </div>
      </div>
      <img alt="" src={status3} className="bottom-0 absolute status"></img>
    </div>
  );
}
function Slide3Mobile() {
    return (
      <div className="h-screen">
        <div className="flex flex-col relative top-20 gap-5 text-white">
          <div className="z-20 max-w-sm mx-auto">
            <h1 className="text-6xl font-extrabold italic">KMHE</h1>
          </div>
          <img src={slide1B} className="w-3/5 mx-auto" alt=""></img>
          <p className="font-bold  text-base text-center w-11/12 mx-auto">
            KONTES MOBIL HEMAT ENERGI (KMHE)
          </p>
          <div className="text-justify text-sm -mt-3 px-10 ">
            <SlideContent status={3} />
          </div>
        </div>
        <div className="bottom-0 absolute">
          <img
            alt=""
            src={status3}
            className="w-4/5  bottom-0 relative mx-auto"
          ></img>
        </div>
      </div>
    );
  }

const Slide = ({ stats }) => {
  const { width } = useViewport();
  const breakpoint = 768;
  if (stats === 1) {
    return width < breakpoint ? <Slide1Mobile /> : <Slide1Desktop />;
  } else if (stats === 2) {
    return width < breakpoint ? <Slide2Mobile /> : <Slide2Desktop />;
  }else if(stats === 3){
      return width < breakpoint ? <Slide3Mobile /> : <Slide3Desktop />;
  }
};

const Event = () => {
  return (
    <section className="h-screen">
      <Navbar />
      <Swiper
        cssMode={true}
        navigation={true}
        loop={true}
        pagination={false}
        mousewheel={true}
        keyboard={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="h-screen">
            <img alt="" src={slide1} className="bgSlide z-0"></img>
            <ViewportProvider>
              <Slide stats={1} />
            </ViewportProvider>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="h-screen">
            <img alt="" src={slide2} className="bgSlide z-0"></img>
            <ViewportProvider>
              <Slide stats={2} />
            </ViewportProvider>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="h-screen">
            <img alt="" src={slide3} className="bgSlide z-0"></img>
            <ViewportProvider>
              <Slide stats={3} />
            </ViewportProvider>
          </div>
        </SwiperSlide>
      </Swiper>
      <style jsx>{`
        .AboutTitle {
          top: 20%;
        }
        .AboutText {
          top: 45%;
          left: 54%;
        }
        .aboutText2 {
          top: 40%;
          right: 55%;
        }
        .status2 {
          right: 55%;
        }
        @media screen and (max-width: 768px) {
          .AboutText {
            top: 40%;
            left: 0;
          }
        }

        .status {
          left: 57%;
        }
        .bgSlide {
          left: 0;
          top: 0;
          position: absolute;
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .swiper-container {
          margin-left: auto;
          margin-right: auto;
        }
        .swiper-button-next,
        .swiper-button-prev {
          color: white;
          margin: -10px 90px;
        }
        @media screen and (max-width: 768px) {
          .swiper-button-next,
          .swiper-button-prev {
            margin: 0px;
            visibility: hidden;
          }
        }
        .swiper-slide {
          text-align: center;
          font-size: 18px;
          background: #000000;
          display: -webkit-box;
          display: -ms-flexbox;
          display: -webkit-flex;
          display: flex;
          -webkit-box-pack: center;
          -ms-flex-pack: center;
          -webkit-justify-content: center;
          justify-content: center;
          -webkit-box-align: center;
          -ms-flex-align: center;
          -webkit-align-items: center;
          align-items: center;
        }
      `}</style>
    </section>
  );
};
export default Event;
