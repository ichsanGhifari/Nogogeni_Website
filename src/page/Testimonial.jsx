import { MainContainer } from "../components/Glassmorphism/GlassElements";
import Navbar from "../components/Navbar/index";
import rektor from "../images/about/testimonial/rektor.png";
import mentri from "../images/about/testimonial/dahlan.png";
import mentri2 from "../images/about/testimonial/dahlanFrame.png";

const Testimonial = () => {
  return (
    <section className="bg-bgTest bg-cover w-screen">
      <Navbar />
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
          <MainContainer className="text-white w-2/3 p-10 m-auto top-1/4 relative">
            <p className="text-justify m-auto">
              “Nogogeni ITS Team is one of the team that the Institut Teknologi
              Sepuluh Nopember (ITS) Surabaya proud of. They Succeeded to win
              the Ist Place of Urban Electric Class in national competition
              named Indonesia Energy Marathon Challenge (IEMC) for a couple
              times, and earned many titles in Kontes Mobil Hemat Energi (KMHE)
              by National Achievement Center, Ministry of Education and Culture
              of Republic Indonesia, also Shell Eco-Marathon (SEM) Asia. I am
              proudly support Nogogeni ITS Team to participate in any
              competitions, both in the level of national and international. I
              hope Nogogeni ITS Team could always bring all their best
              accomplishments in every competition to make the name of ITS and
              Indonesia proud.”
            </p>
          </MainContainer>
        </div>
      </div>
      <div className='h-screen'>
          <div className='absolute right-0'>
            <img src={mentri} alt='' />
            <div className='flex flex-row'>
                <div className='text-white text-center w-max ml-20'>
                    <p className=' mx-auto px-3 text-2xl font-extrabold half_background w-max'>Prof.Dr.Dahlan Iskan</p>
                    <p className='mt-1 px-3 text-xl half_background'>Ex-Minister of State Owned Enterprise</p>
                </div>
                <img className='right-0 absolute w-1/3 -mt-20' src={mentri2} alt='' />
            </div>
          </div>
          <div className="left-0 w-1/2 absolute h-screen ">
          <MainContainer className="text-white w-2/3 p-10 m-auto top-1/4 relative">
            <p className="text-justify m-auto">
              “Nogogeni ITS Team is one of the team that the Institut Teknologi
              Sepuluh Nopember (ITS) Surabaya proud of. They Succeeded to win
              the Ist Place of Urban Electric Class in national competition
              named Indonesia Energy Marathon Challenge (IEMC) for a couple
              times, and earned many titles in Kontes Mobil Hemat Energi (KMHE)
              by National Achievement Center, Ministry of Education and Culture
              of Republic Indonesia, also Shell Eco-Marathon (SEM) Asia. I am
              proudly support Nogogeni ITS Team to participate in any
              competitions, both in the level of national and international. I
              hope Nogogeni ITS Team could always bring all their best
              accomplishments in every competition to make the name of ITS and
              Indonesia proud.”
            </p>
          </MainContainer>
        </div>

      </div>
      <style jsx>{`
      html, body{
          width:100%;
          overflow-x:hidden;
        }
        .half_background {
          background: linear-gradient(to top, black 50%, transparent 50%);
        }
        .rektor{
            left:15%;
            bottom:10%;
        }
      `}</style>
    </section>
  );
};
export default Testimonial;
