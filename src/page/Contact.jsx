import Navbar from "../components/Navbar";

import title from "../images/contact/contactTitle.png";
import gm from "../images/contact/GeneralManager.png";
import tm from "../images/contact/TechnicalManager.png";
import ntc from "../images/contact/NonTechnicalManager.png";
import spn from "../images/contact/Sponsorship.png";
import ContactFrame from "../components/ContactFrame";

const Contact = () => {
  return (
    <section className="h-screen bg-bgContact bg-cover">
      <Navbar />
      <div className="top-20 absolute w-screen">
        <img className=" md:p-0 px-7 mx-auto" alt="" src={title}></img>
      </div>
      <div className="w-screen absolute md:top-48 top-48">
        <div className=" flex flex-col mx-auto md:w-3/4 w-screen samsung:px-5 px-0 md:gap-0 gap-5">
          <ContactFrame
            stats={true}
            title="General Manager"
            name="Dimas Andi Setiawan"
            img={gm}
            number="+62 823-3161-4673"
            email="dimasandi061@gmail.com"
          />
          <ContactFrame
            stats={false}
            title="Technical Manager"
            name="Ade Rizky Maulana Syafi’i"
            img={tm}
            number="+62 823-3161-4673"
            email="dimasandi061@gmail.com"
          />
          <ContactFrame
            stats={true}
            title="Non-Technical Manager"
            name="Misbah Choirul Humam"
            img={ntc}
            number="+62 858-0164-4203"
            email="misbah.humam@gmail.com"
          />
          <ContactFrame
            stats={false}
            title="Sponsorship"
            name="Mohammad Fauzan R."
            img={spn}
            number="+62 856-0494-8971"
            email="fauzanchelsea128@gmail.com"
          />
        </div>
      </div>
      <style jsx>{`
        .card {
          width: 160px;
          height: 170px;
        }
        @media screen and (max-width: 768px) {
          .card {
            min-width: 120px;
            max-width: 120px;
            margin:auto  0;
            height: 120px;
            width: 120px;
          }
          .icon {
            width: 20px;
          }
        }
      `}</style>
    </section>
  );
};
export default Contact;
