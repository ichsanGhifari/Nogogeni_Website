import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="absolute left-10 bottom-10 z-10">
      <div className="flex flex-col gap-3">
        <a href={"http://barunastra.its.ac.id"} className='rounded-full'>
          <div className="border-2 rounded-full bg-gray-400 border-gray-400 w-8 h-8">
            <FontAwesomeIcon
              icon={faInstagram}
              className="fa-lg m-auto h-full flex"
            />
          </div>
        </a>
        <a href={"http://barunastra.its.ac.id"} className='rounded-full'>
          <div className="border-2 rounded-full bg-gray-400 border-gray-400 w-8 h-8">
            <FontAwesomeIcon
              icon={faInstagram}
              className="fa-lg m-auto h-full flex"
            />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Footer;
