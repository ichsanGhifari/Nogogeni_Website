import React from "react";
import { MainContainer } from "../components/Glassmorphism/GlassElements";
import Navbar from "../components/Navbar/index";
import rektor from "../images/about/testimonial/rektor.png";
import mentri from "../images/about/testimonial/dahlan.png";
import mentri2 from "../images/about/testimonial/dahlanFrame.png";
import sandi from "../images/about/testimonial/sandiaga.png";
import khf from "../images/about/testimonial/khf.png";
import Footer from "../components/Footer/Index";
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
        <div className=" w-1/2 absolute h-screen ">
          <MainContainer className="text-white md:w-2/3 w-full md:p-10 p-7 m-auto top-1/4 relative">
            <p className="text-justify m-auto md:text-base text-sm md:leading-normal leading-tight">
              “NOGOGENI, as the name implies which symbolizes courage, never
              gives up and always protects, Nogogeni ITS Team has won many
              achievements both in national and international events.
              Energy-efficient vehicle innovations such as Urban Electric Cars,
              Urban Ethanol, and Formula Student Cars which have optimum
              performance and always developed from period to next period and
              from generation to next generation have become inspiration and
              enthusiasm for Indonesian youth to be innovative and creative. As
              initial support for Indonesia's future as a leading country in the
              electrical energy industry, I really appreciate it and of course,
              I hope that the Nogogeni ITS Team will continue to be enthusiastic
              about working even though the Covid Pandemic is blocking and
              always succeeding in various competitions.”
            </p>
          </MainContainer>
        </div>
        <div className="right-0 absolute ">
          <img src={sandi} alt="" className="w-11/12 right-0" />
          <div className="text-white  w-max px-5 absolute text-center">
            <p className="font-extrabold half_background text-2xl px-3 w-max mx-auto">
              Sandiaga Salahudin Uno
            </p>
            <p className="half_background w-max mx-auto text-xl mt-1 px-3">
              The Ministry of Tourism and Creative Economy
            </p>
          </div>
        </div>
      </div>

      <div className="h-screen">
        <div className="left-0 absolute">
          <img alt="" src={khf} className="w-11/12" />
          <div className="absolute ">
            <div className="text-white  w-max px-5 absolute text-center">
              <p className="font-extrabold half_background text-2xl px-3 w-max mx-auto">
                Dra. Hj. Khofifah Indar Parawansa,M.Si.
              </p>
              <p className="half_background w-max mx-auto text-xl mt-1 px-3">
                Governor of East Java Province 2019-2024 term
              </p>
            </div>
          </div>
        </div>
        <div className="left-1/2 absolute h-screen ">
          <MainContainer className="text-white md:w-2/3 w-full md:p-10 p-7 m-auto top-1/4 relative">
            <p className="text-justify m-auto md:text-base text-sm md:leading-normal leading-tight">
              “Become a pride for the people of East Java, for the presence of
              creation with brilliant achievements of the nation's children,
              namely Nogogeni ITS Team from the Sepuluh Nopember Institute of
              Technology, Surabaya. High appreciation is addressed to Nogogeni
              its team as a team of initiators, researchers, and research
              developers of Nogogeni Vehicle as an energy-efficient and
              environmentally friendly vehicle. The achievements from various
              national and international car research competitions should be
              used as motivation for the Nogogeni ITS Team to always improve
              their consistency and ability in developing and perfecting
              Nogogeni Vehicle in the future. I personally and the people of
              East Java, fully support the Nogogeni ITS Team so that they
              continue to work and excel for Indonesia. May Allah SWT always
              bless us all.”
            </p>
          </MainContainer>
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
          <MainContainer className="text-white md:w-2/3 w-full md:p-10 p-7 m-auto top-1/4 relative">
            <p className="text-justify m-auto md:text-base text-sm md:leading-normal leading-tight">
              “The Nogogeni ITS Team has succeeded in making energy-efficient
              and environmentally friendly cars and participating in national
              and international events such as KMHE, SEM Asia, and Formula
              Student. I congratulate you because the previous generations have
              achieved great achievements both nationally and internationally. I
              also really support and pray that the Nogoggeni ITS Team will
              always work hard to find new solutions. Congratulations on
              thinking, working, and innovating so that the Nogogeni ITS Team
              car can be more efficient.”
            </p>
          </MainContainer>
          <Footer />
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
          <img src={sandi} alt="" className="w-4/5 mx-auto px-10" />
          <div className="text-white w-screen px-5 absolute text-center">
            <p className="font-extrabold half_background text-lg w-max mx-auto px-3 ">
              Sandiaga Salahudin Uno
            </p>
            <p className="half_background w-max mx-auto text-md mt-1 px-3">
              The Ministry of Tourism and Creative Economy
            </p>
          </div>
          <div className="h-1/3 px-5 ">
            <MainContainer className="text-white md:w-2/3 w-full md:p-10 p-7 m-auto top-1/4 relative">
              <p className="text-justify m-auto md:text-base text-sm md:leading-normal leading-tight">
                “NOGOGENI, as the name implies which symbolizes courage, never
                gives up and always protects, Nogogeni ITS Team has won many
                achievements both in national and international events.
                Energy-efficient vehicle innovations such as Urban Electric
                Cars, Urban Ethanol, and Formula Student Cars which have optimum
                performance and always developed from period to next period and
                from generation to next generation have become inspiration and
                enthusiasm for Indonesian youth to be innovative and creative.
                As initial support for Indonesia's future as a leading country
                in the electrical energy industry, I really appreciate it and of
                course, I hope that the Nogogeni ITS Team will continue to be
                enthusiastic about working even though the Covid Pandemic is
                blocking and always succeeding in various competitions.”
              </p>
            </MainContainer>
          </div>
        </div>
      </div>

      <div className="h-screen">
        <div className="m-auto  absolute h-screen">
          <img src={khf} alt="" className="w-4/5 mx-auto px-10" />
          <div className="text-white w-screen px-5 absolute text-center">
            <p className="font-extrabold half_background text-lg ">
              Dra. Hj.Khofifah Indar Parawansa,M.Si.
            </p>
            <p className="half_background w-max mx-auto text-md mt-1 px-3">
              Governor of East Java Province 2019-2024 term
            </p>
          </div>
          <div className="h-1/3 px-5 ">
            <MainContainer className="text-white md:w-2/3 w-full md:p-10 p-7 m-auto top-1/4 relative">
              <p className="text-justify m-auto md:text-base text-sm md:leading-normal leading-tight">
                “Become a pride for the people of East Java, for the presence of
                creation with brilliant achievements of the nation's children,
                namely Nogogeni ITS Team from the Sepuluh Nopember Institute of
                Technology, Surabaya. High appreciation is addressed to Nogogeni
                its team as a team of initiators, researchers, and research
                developers of Nogogeni Vehicle as an energy-efficient and
                environmentally friendly vehicle. The achievements from various
                national and international car research competitions should be
                used as motivation for the Nogogeni ITS Team to always improve
                their consistency and ability in developing and perfecting
                Nogogeni Vehicle in the future. I personally and the people of
                East Java, fully support the Nogogeni ITS Team so that they
                continue to work and excel for Indonesia. May Allah SWT always
                bless us all.”
              </p>
            </MainContainer>
          </div>
        </div>
      </div>

      <div className="h-screen">
        <div className="m-auto absolute h-screen">
          <img src={mentri} alt="" className=" mx-auto px-10" />
          <div className="w-screen -mt-10 flex flex-row">
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
            <MainContainer className="text-white md:w-2/3 w-full md:p-10 p-7 m-auto top-1/4 relative">
              <p className="text-justify m-auto md:text-base text-sm md:leading-normal leading-tight">
                “The Nogogeni ITS Team has succeeded in making energy-efficient
                and environmentally friendly cars and participating in national
                and international events such as KMHE, SEM Asia, and Formula
                Student. I congratulate you because the previous generations
                have achieved great achievements both nationally and
                internationally. I also really support and pray that the
                Nogoggeni ITS Team will always work hard to find new solutions.
                Congratulations on thinking, working, and innovating so that the
                Nogogeni ITS Team car can be more efficient.”
              </p>
            </MainContainer>
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
