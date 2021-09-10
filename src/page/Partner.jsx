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

const Partner = () => {
  return (
    <>
      <section className="bg-bgPartner bg-contain">
        <Navbar />
        <div className="absolute w-screen bg-bgPartner pb-20">
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
                <div className=" bg-white md:w-1/4 w-3/4 rounded-lg p-5">
                  <img className="w-9/12 mx-auto" alt="" src={its}></img>
                </div>
                <div className=" bg-white md:w-1/4 w-3/4 rounded-lg px-5 py-8">
                  <img src={ikoma} alt="" className=" m-auto" />
                </div>
              </div>
            </div>
            <h3 className="font-semibold mt-7">Sponsored By :</h3>
            <div className="flex md:flex-row flex-col justify-center mt-5 gap-10 max-h-5/6">
              <div className="bg-white rounded-lg md:py-5 md:px-10 p-0 max-h-5/6 md:w-2/5 w-3/4 mx-auto md:m-0">
                <img className="m-auto py-16 sponsor1" alt="" src={pjb}></img>
              </div>
              <div className="bg-white rounded-lg md:py-5 md:px-10 p-0 md:w-2/5 w-3/4 mx-auto md:m-0">
                <img
                  className="m-auto md:py-5 py-7 sponsor1"
                  alt=""
                  src={wika}
                ></img>
              </div>
            </div>
            <div className="flex md:flex-row flex-col justify-center gap-5 mt-10">
              <div className="bg-white rounded-lg md:py-5 md:px-10 p-0 md:w-2/6 w-3/5 mx-auto md:m-0">
                <img
                  className="m-auto md:py-5 py-7 sponsor2"
                  alt=""
                  src={fuburo}
                ></img>
              </div>
              <div className="bg-white rounded-lg md:py-5 md:px-10 p-0 md:w-2/6 w-3/5 mx-auto md:m-0">
                <img
                  className="m-auto md:py-5 py-7 sponsor2"
                  alt=""
                  src={kai}
                ></img>
              </div>
            </div>
            <div className="flex md:flex-row flex-col juistify-center gap-4 mt-10 ">
              <div className=" bg-white w-full mx-auto rounded-lg p-5">
              <img
                className="md:w-6/12 w-8/12 m-auto h-full md:py-1 py-0"
                alt=""
                src={istw}
              ></img>
            </div>
            <div className="bg-white w-full mx-auto rounded-lg px-5">
              <img
                className="md:w-9/12 w-10/12 m-auto h-full py-5"
                alt=""
                src={petro}
              ></img>
            </div>
            <div className="bg-white w-full mx-auto rounded-lg px-5">
              <img className=" mx-auto h-full py-10" alt="" src={woody}></img>
            </div>
            </div>
          </div>
        </div>
        <style jsx>{`
          .sponsor1 {
            height: 250px;
            width: 300px;
          }
          .sponsor2 {
            height: 160px;
            width: 190x;
          }
          @media screen and (max-width: 768px) {
            .sponsor1 {
              height: 200px;
              width: 170px;
            }
          }
        `}</style>
      </section>
    </>
  );
};
export default Partner;
