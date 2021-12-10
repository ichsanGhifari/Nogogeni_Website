import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faFacebook,
  faYoutube,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import mail from "../../icons/envelope.png";

const Footer = () => {
  return (
    <div className="absolute left-10 bottom-6 z-10 md:visible invisible">
      <div className="flex flex-col gap-2.5">
        <a
          href={"https://www.instagram.com/nogogeni_its"}
          className="rounded-full"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="border-2 rounded-full bg-gray-400 border-gray-400 w-8 h-8">
            <FontAwesomeIcon
              icon={faInstagram}
              className="fa-lg m-auto h-full flex "
              color="black"
            />
          </div>
        </a>
        <a
          href={"https://twitter.com/Nogogeni_ITS"}
          className="rounded-full"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="border-2 rounded-full bg-gray-400 border-gray-400 w-8 h-8">
            <FontAwesomeIcon
              icon={faTwitter}
              className="fa-lg m-auto h-full flex "
              color="black"
            />
          </div>
        </a>
        <a
          href={"https://www.facebook.com/NogogeniITS/"}
          className="rounded-full"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="border-2 rounded-full bg-gray-400 border-gray-400 w-8 h-8">
            <FontAwesomeIcon
              icon={faFacebook}
              className="fa-lg m-auto h-full flex"
              color="black"
            />
          </div>
        </a>
        <a
          href={"https://www.youtube.com/channel/UCU7D-__KLegTFYhnrlitbzg"}
          className="rounded-full"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="border-2 rounded-full bg-gray-400 border-gray-400 w-8 h-8">
            <FontAwesomeIcon
              icon={faYoutube}
              className="fa-lg m-auto h-full flex"
              color="black"
            />
          </div>
        </a>
        <a
          href={"mailto:nogogeni.its@gmail.com"}
          className="rounded-full"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="border-2 rounded-full bg-gray-400 border-gray-400 w-8 h-8">
            <img src={mail} alt='' className='p-1' /> 
          </div>
        </a>
        <a
          href={"https://www.linkedin.com/company/nogogeni-its-team/mycompany/"}
          className="rounded-full"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="border-2 rounded-full bg-gray-400 border-gray-400 w-8 h-8">
            <FontAwesomeIcon
              icon={faLinkedin}
              className="fa-lg m-auto h-full flex"
              color="black"
            />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Footer;
