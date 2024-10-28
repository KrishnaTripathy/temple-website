import { FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const Contact = () => {
  const containerVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Your Business</title>
        <meta
          name="description"
          content="Get in touch with us to learn more about our services and products. Contact us via phone or online."
        />
        <meta
          name="keywords"
          content="Contact, Support, Business, Services, Phone"
        />
      </Helmet>

      <motion.div
        className="flex flex-col md:flex-row justify-between p-5 px-6 lg:px-10 max-w-screen-xl mx-auto gap-8"
        initial="hidden"
        animate="visible"
        variants={containerVariant}
      >
        <motion.div
          className="flex flex-col items-start bg-[#9f572a] p-5 rounded shadow w-full h-auto md:h-64 text-white"
          variants={fadeIn}
          whileHover={{
            scale: 1.02,
            boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
          }}
        >
          <img
            src="./images/contact-1.png"
            alt="Logo"
            className="h-16 mb-2"
            loading="lazy"
          />
          <h2 className="text-lg font-semibold mb-1">Divine Architecture</h2>
          <p className="mb-2">
            Datta Mandir showcases traditional Indian architecture, featuring
            intricate carvings that reflect the rich cultural heritage of the
            region.
          </p>

          <motion.div
            className="flex items-center text-white mt-2"
            whileHover={{ scale: 1.1 }}
          >
            <FaPhoneAlt className="mr-2 text-2xl" />
            <span className="text-2xl whitespace-nowrap">+91 90141 26121</span>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex flex-col items-start bg-gray-100 p-5 rounded shadow w-full h-auto md:h-64"
          variants={fadeIn}
          whileHover={{
            scale: 1.02,
            boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
          }}
        >
          <img
            src="./images/compassion-img-1.png"
            loading="lazy"
            alt="Logo"
            className="h-16 mb-2"
          />
          <h2 className="text-lg font-semibold mb-1 text-[#9f572a]">
            Spiritual Significance
          </h2>
          <p className="mb-2 text-[#9f572a]">
            Dedicated to Lord Dattatreya, the temple symbolizes the harmonious
            union of Brahma, Vishnu, and Shiva.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col items-start bg-[#ca8a04] p-5 rounded shadow w-full h-auto md:h-64 text-white"
          variants={fadeIn}
          whileHover={{
            scale: 1.02,
            boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
          }}
        >
          <img src="./images/connect-2.png" alt="Logo" className="h-16 mb-2" />
          <h2 className="text-lg font-semibold mb-1">
            Festivals and Celebrations
          </h2>

          <p className="mb-2 text-white">
            The temple comes alive during major festivals, particularly Datta
            Jayanti, when thousands gather to celebrate with devotion and joy.
          </p>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Contact;
