import { FaFacebookF, FaWhatsapp, FaLinkedinIn } from "react-icons/fa";
import { Helmet } from "react-helmet";
const Footer = () => {
  return (
    <div className="bg-[#451a03] text-white py-8 mt-4">
     <Helmet>
        <title>Datta Mandir Bijalpur, Indore | Footer</title>
        <meta
          name="description"
          content="Stay connected with Datta Mandir Bijalpur, Indore for spiritual blessings."
        />
        <meta
          name="keywords"
          content="Datta Mandir, Bijalpur, Indore, footer, contact details, social media"
        />
      </Helmet>
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between px-4">
        <div className="flex flex-col items-center mb-6 md:mb-0">
          <h4 className="text-lg font-semibold mb-1 mt-4">About Datta Mandir</h4>
          <p className="text-center mb-2 px-4">
          A serene temple dedicated  <br />
          to Lord Dattatreya
            <br />
           offering a haven.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="text-xl hover:text-[#ca8a04] transition duration-300" />
            </a>
            <a
              href="https://wa.me/yourwhatsappnumber"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="text-xl hover:text-[#ca8a04] transition duration-300" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className="text-xl hover:text-[#ca8a04] transition duration-300" />
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center mb-6 md:mb-0">
          <img
            src="./images/logo.png"
            alt="Logo"
            className="h-12 mb-2"
            loading="lazy"
          />
          <p className="text-center px-4">
          Join us for spiritual growth and community
            <br />
            at Datta Mandir Bijalpur. Experience<br />
            peace and divine blessings
            <br />in our serene temple.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <h3 className="text-lg mb-2 mt-4">Contact Us</h3>
          <a href="mailto:info@epoojastore.com" className="hover:text-[#ca8a04] transition duration-300">
  <p className="text-center">Email: info@epoojastore.com</p>
</a>
<a href="tel: +91 90141 26121" className="hover:text-[#ca8a04] transition duration-300">
          <p className="text-center">Phone: +91 90141 26121</p>
          </a>
        </div>
      </div>

      <div className="text-center mt-8">
        <p className="text-sm">
        &copy; {new Date().getFullYear()} Datta Mandir Bijalpur, Indore. All rights reserved.
          
          <a href="/terms">
            <span className="ml-4 cursor-pointer hover:text-[#ca8a04] transition duration-300">
              Terms of Service
            </span>{" "}
          </a>
          <a href="/privacy">
            <span className="ml-4 cursor-pointer hover:text-[#ca8a04] transition duration-300">
              Privacy Policy
            </span>
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
