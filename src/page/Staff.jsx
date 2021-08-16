import Navbar from "../components/Navbar";
import gm from "../images/Staff/GM.png";

const Staff = () => {
  return (
    <section className="bg-bgStaff bg-cover">
      <Navbar />
      <div className="h-screen">
        <div className=" h-screen absolute flex flex-row gap-24 z-0">
          <div className="bottom-0 mt-auto ">
            <img alt="" src={gm} className=""></img>
          </div>
          <div className="m-auto w-1/3 text-white text-justify indent">
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
        <div className="absolute py-5 z-10 flex flex-col text-white bottom-0 w-1/4 left-1/4">
          <p className="text-xl">Dimas Andi Setiawan</p>
          <h1 className="italic font-extrabold text-7xl">GENERAL MANAGER</h1>
        </div>
      </div>
      <style jsx>{`
        .indent{
          text-indent: 30px;
        }
      `}</style>
    </section>
  );
};
export default Staff;
