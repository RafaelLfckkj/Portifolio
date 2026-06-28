import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faDiscord,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="absolute bottom-5 left-1/2 -translate-x-1/2">
      <div className="p-3 w-130 ml-25 md:m-0 lg:max-w-156.75 bg-[#05131E] rounded-3xl flex items-center justify-between mx-auto self-end gap-5 ">
        <div className="flex gap-5">
          <Link href="https://github.com/RafaelLfckkj">
            <FontAwesomeIcon
              className="cursor-pointer hover:text-black duration-100 "
              icon={faGithub}
              size="lg"
            />
          </Link>

          <Link href="https://discord.com/users/583432722924568652">
            <FontAwesomeIcon
              className="cursor-pointer hover:text-blue-600 duration-100"
              icon={faDiscord}
              size="lg"
            />
          </Link>
        </div>
        <div>
          <p className="text-center text-sm py-2 md:w-70">
            Desenvolvido por Rafael Oliveira © 2026
          </p>
        </div>
        <div className="flex gap-5">
          <Link href="https://www.instagram.com/rafaellfckkj/">
            <FontAwesomeIcon
              className="cursor-pointer  duration-100 hover:text-pink-400"
              icon={faInstagram}
              size="lg"
            />
          </Link>
          <Link href="https://www.linkedin.com/in/rafaellfckkj/">
            <FontAwesomeIcon
              className="cursor-pointer  duration-100 hover:text-blue-500"
              icon={faLinkedin}
              size="lg"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}
