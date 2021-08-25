import React from "react";
import Navbar from "../components/Navbar";
import gm from "../images/Staff/GM.png";
import Frame from "../components/StaffFrame";
import Lines from "../components/Lines/index";

import intan from "../images/about/staff/finance/IntanFilaMillinia.png";
import nur from "../images/about/staff/finance/NurAfniWirdaNabila.png";
import misbah from "../images/about/staff/nontechManager/MisbahChoirulHumam.png";
import rr from "../images/about/staff/administration/RrYuanitaDewiSaresty.png"

const Staff = () => {
  return (
    <section className="w-screen">
      <Navbar />
      <div className="h-screen bg-bgStaff bg-cover">
        <div className="h-full mt-10 absolute flex md:flex-row flex-col md:gap-24 gap-0 sm:gap-5 z-0">
          <div className="bottom-0 mt-auto md:w-max w-1/2 ">
            <img alt="" src={gm} className=""></img>
          </div>
          <div className="m-auto md:w-1/3 w-11/12 text-white text-justify indent card md:p-5 p-7">
            <p className="">
              Nogogeni ITS Team is one of the research teams at the Sepuluh
              Nopember Institute of Technology that conducts research in the
              field of vehicles that have optimum performance, low emissions and
              are environmentally friendly.
            </p>
            <p>
              Nogogeni is a form of struggle that initially was only from D3
              Mechanical Engineering students to apply their skills and compete
              with technological advances and help realize a future with
              vehicles that are friendly to nature.
            </p>
            <p>
              Here we get various things that might not be obtained from the
              lecture class. With all the problems and obstacles that exist, we
              work together to make the Nogogeni ITS Team a champion team and
              have an impact society and the natural environment.
            </p>
          </div>
        </div>
        <div className="absolute py-5 z-10 flex flex-col text-white title md:w-1/4 w-2/3 md:left-1/4 left-1/4">
          <p className="text-xl">Dimas Andi Setiawan</p>
          <h1 className="italic font-extrabold md:text-7xl text-5xl">
            GENERAL MANAGER
          </h1>
        </div>
      </div>
      <div className="bg-black -mt-1 2xl:mt-0 ">
        <div className="staff text-center text-white w-full 2xl:w-9/12 mx-auto">
          <div className="w-1/2 mx-auto flex flex-col gap-20">
            <h2>FINANCE DIVISION</h2>
            <div className="w-5/12 mx-auto flex flex-col">
              <Frame
                name="Intan Fila Millinia"
                img={intan}
                email="intanfilam@gmail.com"
              />
              <Frame
                name="Nur Afni Wirda Nabila"
                img={nur}
                email="afniwnabila@gmail.com"
              />
            </div>
          </div>
          <div className=" flex flex-col gap-5 ">
            <h1 className="italic text-7xl font-extrabold">
              NON-TECHNICAL DIVISION
            </h1>
            <h3 className=" ">NON-TECHNICAL MANAGER</h3>
            <div className="mx-auto w-5/12 ">
              <Lines color="white" />
              <div className="w-7/12 mx-auto mt-10">
                <Frame
                  name="Misbah Choirul Humam"
                  img={misbah}
                  email="misbah.humam@gmail.com"
                />
              </div>
              <div className="mt-10 mx-auto">
                <p className='text-justify'>
                  He is responsible for all non-technical matters on our team.
                  He has a big role in creating a comfortable working
                  atmosphere, directing and supervising staff to work together
                  in achieving the goals of our non-technical division.
                </p>
              </div>
            </div>
            <div className='w-1/2 mx-auto mt-10 flex flex-row'>
              <div className='w-6/12 mx-auto'>
                <Frame name='Rr.Yuanita Dewi Saresty' img={rr} email='yuanitasaresty9@gmail.com' />
              </div>
              <div className='flex flex-col'>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        html,
        body {
          width: 100%;
          overflow-x: hidden;
        }
        .indent {
          text-indent: 30px;
        }
        .card {
          background: linear-gradient(to right, white 4px, transparent 4px) 0 0,
            linear-gradient(to left, white 4px, transparent 4px) 100% 100%,
            linear-gradient(to bottom, white 4px, transparent 4px) 0 0,
            linear-gradient(to top, white 4px, transparent 4px) 100% 100%;
          background-repeat: no-repeat;
          background-size: 40px 40px;
        }

        .title {
          bottom: 0;
        }
        .staff {
          padding: 5rem;
        }
        @media screen and (max-width: 768px) {
          .title {
            bottom: 50%;
          }
          .staff {
            padding: 2rem;
          }
          @media screen and (max-width: 400px) {
            .staff {
              padding: 10rem 2rem;
            }
          }
        }
      `}</style>
    </section>
  );
};
export default Staff;
