import Navbar from "../components/Navbar";
import its from "../images/partner/logoITS.png";
import istw from "../images/partner/istw.png";
import petro from "../images/partner/petro.png";
import pjb from "../images/partner/pjb.png";
import wika from "../images/partner/wika.png";
import woody from "../images/partner/woody.png";
import fuburo from "../images/partner/fuboru.png";
import kai from "../images/partner/kai.png";
import Lines2 from "../components/Lines/Lines2";
import ikoma from "../images/partner/ikoma.png";
import bki from "../images/partner/bki.png";
import Footer from "../components/Footer/Index";

const Partner = () => {
  return (
    <>
      <section className="bg-bgPartner bg-contain overflow-x-hidden">
        <Navbar />
        <div className="absolute w-screen bg-bgPartner  pb-20">
          <div className="mt-24 mx-auto text-center text-white w-10/12">
            <h1 className="italic font-bold">OUR SPONSORSHIP PARTNERS</h1>
            <p className="mt-3">
              "Thanks to these big companies for making us achieved our best
              results."
            </p>
            <div className="mt-10">
              <Lines2 />
            </div>
            <div className="flex flex-col mt-10 gap-5 ">
              <h3 className="font-semibold">Supported By :</h3>
              <div className="flex flex-row gap-5 justify-center">
                <div className=" bg-white md:w-1/4 w-5/6 rounded-lg md:p-5 py-5">
                  <img className="w-9/12 mx-auto" alt="" src={its}></img>
                </div>
                <div className=" bg-white md:w-1/4 w-3/4 rounded-lg px-5 py-8">
                  <img src={ikoma} alt="" className=" m-auto" />
                </div>
              </div>
            </div>
            <h3 className="font-semibold mt-7">Sponsored By :</h3>
            <div className="flex md:flex-row flex-col justify-center mt-5 gap-10 max-h-5/6">
              <div className="bg-white rounded-lg md:py-5 md:px-10 p-0 max-h-5/6 md:w-2/5 w-5/6 mx-auto md:m-0">
                <img className="m-auto py-16 sponsor1" alt="" src={pjb}></img>
              </div>
              <div className="bg-white rounded-lg md:py-5 md:px-10 p-0 md:w-2/5 w-5/6 mx-auto md:m-0">
                <img
                  className="m-auto md:py-5 py-7 sponsor1"
                  alt=""
                  src={wika}
                ></img>
              </div>
            </div>
            <div className="flex md:flex-row flex-col justify-center gap-5 mt-10">
              <div className="bg-white rounded-lg md:py-5 md:px-10 p-0 md:w-2/6 w-4/5 mx-auto md:m-0">
                <img
                  className="m-auto md:py-10 p-7 sponsor2"
                  alt=""
                  src={fuburo}
                ></img>
              </div>
              <div className="bg-white rounded-lg md:py-5 md:px-10 p-0 md:w-2/6 w-4/5 mx-auto md:m-0">
                <img
                  className="m-auto md:py-5 py-7 sponsor2"
                  alt=""
                  src={kai}
                ></img>
              </div>
            </div>
            <div className="flex md:flex-row flex-col juistify-center gap-4 mt-10 ">
              <div className=" bg-white md:w-3/12 rounded-lg p-5 mx-auto">
                <img
                  className="m-auto md:py-1 py-0 sponsor3"
                  alt=""
                  src={istw}
                ></img>
              </div>
              <div className="bg-white md:w-3/12 rounded-lg p-5 mx-auto">
                <img className="m-auto pb-5 sponsor3" alt="" src={petro}></img>
              </div>
              <div className="bg-white md:w-3/12 w-7/12 rounded-lg p-5 mx-auto">
                <img className=" mx-auto py-10" alt="" src={woody}></img>
              </div>
              <div className="bg-white md:w-3/12 rounded-lg p-5 mx-auto">
                <img className="m-auto sponsor3" alt="" src={bki}></img>
              </div>
              <Footer />
            </div>
          </div>
        </div>

        <style jsx>{`
          html,
          body {
            width: 100%;
            overflow-x: hidden;
          }
          .sponsor1 {
            height: 250px;
            width: 300px;
          }
          .sponsor2 {
            height: 160px;
            width: 190x;
          }
          .sponsor3 {
            height: 150px;
            width: 165px;
          }
          @media screen and (max-width: 768px) {
            .sponsor1 {
              height: 200px;
              width: 190px;
            }
            .sponsor2 {
              height: 130px;
              width: 100x;
            }
            html,
            body {
              overflow-x: visible;
            }
          }
        `}</style>
      </section>
    </>
  );
};
export default Partner;
