import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faDiscord,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="absolute bottom-5 left-1/2 -translate-x-1/2">
      <div className="p-3 max-w-[627px] bg-[#05131E] rounded-3xl flex items-center justify-between mx-auto self-end px-10 gap-5  ">
        <div className="flex gap-5">
          <FontAwesomeIcon className="cursor-pointer" icon={faGithub} size="lg" />
          <FontAwesomeIcon className="cursor-pointer" icon={faDiscord} size="lg" />
        </div>
        <div>
          <p className="text-center text-sm py-2">
            Desenvolvido por Rafael Oliveira © 2026
          </p>
        </div>
        <div className="flex gap-5">
          <FontAwesomeIcon className="cursor-pointer" icon={faInstagram} size="lg" />
          <FontAwesomeIcon className="cursor-pointer" icon={faLinkedin} size="lg" />
        </div>
      </div>
    </footer>
  );
}
