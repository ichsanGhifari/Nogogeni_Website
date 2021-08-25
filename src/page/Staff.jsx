import React from "react";
import Navbar from "../components/Navbar";
import gm from "../images/Staff/GM.png";
import Frame from "../components/StaffFrame";
import Lines from "../components/Lines/index";

import intan from "../images/about/staff/finance/IntanFilaMillinia.png";
import nur from "../images/about/staff/finance/NurAfniWirdaNabila.png";
import misbah from "../images/about/staff/nontechManager/MisbahChoirulHumam.png";

import rr from "../images/about/staff/administration/RrYuanitaDewiSaresty.png";
import alifah from "../images/about/staff/administration/AlifahSyah.png";
import clariesta from "../images/about/staff/administration/ClariestaPutriArdiyanti.png";
import khusnul from "../images/about/staff/administration/KhusnulAiniaAprilinda.png";
import rahma from "../images/about/staff/administration/RahmadinaGriyantiLestari.png";

import fajar from "../images/about/staff/creativeBranding/FajarPutraCahyadi.png";
import ramadhani from "../images/about/staff/creativeBranding/RamadhaniYusdhaliyantiAnwar.png";
import bismi from "../images/about/staff/creativeBranding/RidwanBismiAhmadi.png";

import fauzan from "../images/about/staff/sponsorship/MohammadFauzanR.png";
import fairuz from "../images/about/staff/sponsorship/DaffaFairuzI’zaz.png";
import kum from "../images/about/staff/sponsorship/KumaraGilangBahtiaristanto.png";
import sabina from "../images/about/staff/sponsorship/SabinaRizkysaura.png";

import rizky from "../images/about/staff/technicalManager/AdeRizkyMaulana.png";
import marlin from "../images/about/staff/bodyframe/MarlinDwiJayaK.png";
import andi from "../images/about/staff/bodyframe/AndiMulyanto.png";
import bagus from "../images/about/staff/bodyframe/BagusKharismaYulianto.png";
import said from "../images/about/staff/bodyframe/SaidAthThaariqA.png";
import faizul from "../images/about/staff/bodyframe/FaizulFirdaus.png";

import ahmad from "../images/about/staff/electricalPropulsionSystem/AchmadYugoM.png"
import ghidfari from "../images/about/staff/electricalPropulsionSystem/MuhammadIchsanGhifari.png"
import rizal from "../images/about/staff/electricalPropulsionSystem/RizalAsharM.png"
import sulthan from "../images/about/staff/electricalPropulsionSystem/SulthanAriqPrananda.png"


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
            <div className="w-6/12 mx-auto flex flex-col">
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
              <div className=" mx-auto">
                <p className="text-justify -mt-10">
                  He is responsible for all non-technical matters on our team.
                  He has a big role in creating a comfortable working
                  atmosphere, directing and supervising staff to work together
                  in achieving the goals of our non-technical division.
                </p>
              </div>
            </div>
            <h2 className="mt-10">ADIMINSTRATION DIVISION</h2>
            <div className=" flex flex-col gap-2 ">
              <div className=" mx-auto ">
                <Frame
                  name="Rr.Yuanita Dewi Saresty"
                  img={rr}
                  email="yuanitasaresty9@gmail.com"
                />
              </div>
              <div className="flex md:flex-row flex-col mx-auto gap-5">
                <Frame
                  name="Rahmadina Griyanti Lestari"
                  img={rahma}
                  email="rahmadinagl@gmail.com"
                />
                <Frame
                  name="Alifah Syah"
                  img={alifah}
                  email="alifahsyah11@gmail.com"
                />
                <Frame
                  name="Clariesta Putri Ardiyanti"
                  img={clariesta}
                  email="clariestaputri21@gmail.com"
                />
                <Frame
                  name="Khusnul Ainia Aprilinda"
                  img={khusnul}
                  email="Khusnulainiaaprilinda14@gmail.com"
                />
              </div>
            </div>
            <h2 className="">CREATIVE BRANDING DIVISION</h2>
            <div className="flex flex-col md:flex-row mx-auto mt-5 gap-5">
              <Frame
                name="Fajar Putra Cahyadi"
                img={fajar}
                email="fajarpc01@gmail.com"
              />
              <Frame
                name="Ridwan Bismi Ahmadih"
                img={bismi}
                email="ridwan.bismi03@gmail.com"
              />
              <Frame
                name="Ramadhani Yusdhaliyanti Anwar"
                img={ramadhani}
                email="rahmaramadhani50@gmail.com"
              />
            </div>
            <h2>SPONSORSHIP DIVISION</h2>
            <div className="mx-auto flex flex-col ">
              <div className="1/4 mx-auto">
                <Frame
                  name="Mohammad Fauzan R"
                  img={fauzan}
                  email="fauzanchelsea128@gmail.com"
                />
              </div>
              <div className="flex flex-row gap-5">
                <Frame
                  name="Daffa Fairuz Izaz"
                  img={fairuz}
                  email="daffaxfairuz@gmail.com"
                />
                <Frame
                  name="Kumara Gilang Bahtiaristanto"
                  img={kum}
                  email="Kumaragilang76@gmail.com"
                />
                <Frame
                  name="Sabina Rizky Isaura"
                  img={sabina}
                  email="isabinarizky@gmail.com"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="italic text-7xl font-extrabold">
              TECHNICAL DIVISION
            </h1>
            <h3 className=" ">TECHNICAL MANAGER</h3>
            <div className="mx-auto w-5/12 ">
              <Lines color="white" />
              <div className="w-7/12 mx-auto mt-10">
                <Frame
                  name="Ade Rizky Maulana Syafi’i"
                  img={rizky}
                  email="aderizky397@gmail.com"
                />
              </div>
              <p className="mx-auto text-justify -mt-10">
                He is in charge of all technical matters of the vehicle. He has
                a big role to play in creating a comfortable working atmosphere,
                directing and supervising staff to work together in achieving
                the goals of our technical division.
              </p>
            </div>
            <h2 className="mt-10">BODY AND FRAME DIVISION</h2>
            <div className="mx-auto flex flex-col">
              <div className="mx-auto">
                <Frame
                  name="Marlin Dwi Jaya Kusuma"
                  img={marlin}
                  email="marlindwijayakusuma@gmail.com"
                />
              </div>
              <div className="flex flex-row gap-5">
                <Frame
                  name="Andi Mulyanto"
                  img={andi}
                  email="andimulyanto0909@gmail.com"
                />
                <Frame
                  name="Bagus Kharisma Yulianto"
                  img={bagus}
                  email="baguskharisma272@gmail.com"
                />
                <Frame
                  name="Said Ath-thaariq Alattas"
                  img={said}
                  email="Thaariqalattas@gmail.com"
                />
                <Frame
                  name="Fa'izul Firdaus"
                  img={faizul}
                  email="pulaubuje@gmail.com"
                />
              </div>
            </div>

            <h2 className="mt-10">ELECTRICAL &#38; PROPULSION SYSTEM DIVISION</h2>
            <div className="mx-auto flex flex-col">
              <div className="mx-auto">
                <Frame
                  name="Sulthan Ariq Prananda"
                  img={sulthan}
                  email="sulthanariqq@gmail.com"
                />
              </div>
              <div className="flex flex-row gap-5">
                <Frame
                  name="Achmad Yugo M"
                  img={ahmad}
                  email="achmadyugomarhadi@gmail.com"
                />
                <Frame
                  name="Muhammad Ichsan Ghifari"
                  img={ghidfari}
                  email="ghifargip7@gmail.com"
                />
                <Frame
                  name="Rizal Ashar Mahendra"
                  img={rizal}
                  email="rizalashar2000@gmail.com"
                />
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
