import React from "react";
import { MainContainer } from "../components/Glassmorphism/GlassElements";
import Navbar from "../components/Navbar/index";
import rektor from "../images/about/testimonial/rektor.png";
import mentri from "../images/about/testimonial/dahlan.png";
import mentri2 from "../images/about/testimonial/dahlanFrame.png";
import { ViewportProvider, useViewport } from "../components/ViewportProvider";

function TestimoniCard() {
  return (
    <MainContainer className="text-white md:w-2/3 w-full md:p-10 p-7 m-auto top-1/4 relative">
      <p className="text-justify m-auto md:text-base text-sm md:leading-normal leading-tight">
        “Nogogeni ITS Team is one of the team that the Institut Teknologi
        Sepuluh Nopember (ITS) Surabaya proud of. They Succeeded to win the Ist
        Place of Urban Electric Class in national competition named Indonesia
        Energy Marathon Challenge (IEMC) for a couple times, and earned many
        titles in Kontes Mobil Hemat Energi (KMHE) by National Achievement
        Center, Ministry of Education and Culture of Republic Indonesia, also
        Shell Eco-Marathon (SEM) Asia. I am proudly support Nogogeni ITS Team to
        participate in any competitions, both in the level of national and
        international. I hope Nogogeni ITS Team could always bring all their
        best accomplishments in every competition to make the name of ITS and
        Indonesia proud.”
      </p>
    </MainContainer>
  );
}

function Desktop() {
  return (
    <>
      <div className="h-screen">
        <div className="left-0 absolute bottom-0">
          <img src={rektor} alt="" />
        </div>
        <div className="text-white  w-max px-5 absolute rektor text-center">
          <p className="font-extrabold half_background text-2xl px-3">
            Prof.Dr.Ir.Mochamad Ashari, M.Eng.
          </p>
          <p className="half_background w-max mx-auto text-xl mt-1 px-3">
            Chansellor of ITS for 2019-2024
          </p>
        </div>
        <div className="left-1/2 absolute h-screen ">
          <TestimoniCard />
        </div>
      </div>
      <div className="h-screen">
        <div className="absolute right-0">
          <img src={mentri} alt="" />
          <div className="flex flex-row">
            <div className="text-white text-center w-max ml-20">
              <p className=" mx-auto px-3 text-2xl font-extrabold half_background w-max">
                Prof.Dr.Dahlan Iskan
              </p>
              <p className="mt-1 px-3 text-xl half_background">
                Ex-Minister of State Owned Enterprise
              </p>
            </div>
            <img
              className="right-0 absolute w-1/3 -mt-20"
              src={mentri2}
              alt=""
            />
          </div>
        </div>
        <div className=" w-1/2 absolute h-screen ">
          <TestimoniCard />
        </div>
      </div>
    </>
  );
}

function Mobile() {
  return (
    <>
      <div className="h-screen">
        <div className="m-auto top-20 absolute h-screen">
          <img src={rektor} alt="" className="w-3/5 mx-auto px-10" />
          <div className="text-white w-screen px-5 absolute text-center">
            <p className="font-extrabold half_background text-lg ">
              Prof.Dr.Ir.Mochamad Ashari, M.Eng.
            </p>
            <p className="half_background w-max mx-auto text-md mt-1 px-3">
              Chansellor of ITS for 2019-2024
            </p>
          </div>
          <div className="h-1/3 px-5 ">
            <TestimoniCard />
          </div>
        </div>
      </div>
      <div className="h-screen">
        <div className="m-auto absolute h-screen">
          <img src={mentri} alt="" className=" mx-auto px-10" />
          <div className="w-screen -mt-10 flex flex-row" >
            <img src={mentri2} alt=" " className="w-1/3 ml-auto" />
            <div className="text-white m-auto px-1 absolute text-center">
              <p className="font-extrabold half_background w-max mx-auto px-2 text-lg">
                Prof.Dr.Dahlan Iskan
              </p>
              <p className="half_background w-max mx-auto text-md mt-1 px-2">
                Ex-Minister of State Owned Enterprise
              </p>
            </div>
          </div>
          <div className="mt-10 px-5 ">
            <TestimoniCard />
          </div>
        </div>
      </div>
    </>
  );
}

const Content = () => {
  const { width } = useViewport();
  const breakpoint = 768;
  return width < breakpoint ? <Mobile /> : <Desktop />;
};

const Testimonial = () => {
  return (
    <section className="bg-bgTest bg-cover w-screen bg-center">
      <Navbar />
      <ViewportProvider>
        <Content />
      </ViewportProvider>
      <style jsx>{`
        html,
        body {
          width: 100%;
          overflow-x: hidden;
        }
        .half_background {
          background: linear-gradient(to top, black 50%, transparent 50%);
        }
        .rektor {
          left: 15%;
          bottom: 10%;
        }
      `}</style>
    </section>
  );
};
export default Testimonial;
