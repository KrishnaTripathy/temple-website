import { motion } from "framer-motion";
import { Helmet } from "react-helmet"; 

const Growth = () => {
  
  const containerVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const imageVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

  const textVariant = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.2 } },
  };

  return (
    <>
      <Helmet>
        <title>Growth | Datta Mandir, Bijalpur</title>
        <meta
          name="description"
          content="Explore the spiritual significance of Datta Mandir in Bijalpur and the divine presence of Lord Dattatreya."
        />
        <meta name="keywords" content="Datta Mandir, Bijalpur, Lord Dattatreya, Temple, Spirituality" />
      </Helmet>

      <motion.div
        className="flex flex-col md:flex-row max-w-screen-xl mx-auto p-5 gap-8 bg-white mt-16"
        initial="hidden"
        animate="visible"
        variants={containerVariant}
      >
        <motion.div
          className="flex items-center justify-center w-full md:w-1/2"
          variants={imageVariant}
          whileHover={{ scale: 1.05 }} 
        >
          <motion.img
            src="./images/img-1_.jpg" loading="lazy" 
            alt="Growth"
            className="w-full h-[400px] md:h-[500px] object-cover rounded" 
          />
        </motion.div>

        <motion.div
          className="flex flex-col items-start w-full md:w-1/2 mt-8 md:mt-0"
          variants={textVariant}
        >
          <p className="mb-4 text-base md:text-lg">Welcome to Datta Mandir, a sacred place of worship.</p>
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-[#9f572a]">
            Discover the Divine Presence of Lord Dattatreya
          </h2>

          <p className="mb-4 text-sm md:text-base">
            Datta Mandir is a spiritual haven dedicated to Lord Dattatreya, revered for embodying the unity of the divine trinity—Brahma, Vishnu, and Shiva. This temple, nestled in the heart of Bijalpur, Indore, serves as a beacon of hope and guidance for devotees seeking wisdom and prosperity.
          </p>

          <p className="mb-4 text-sm md:text-base">
            The temple’s intricate architecture and serene environment create a perfect setting for prayer and reflection. Visitors are often struck by the beauty of the idol of Lord Dattatreya, adorned with offerings that symbolize devotion and respect.
          </p>

          <div className="flex items-start mb-4">
            <motion.img
              src="./images/compassion-img-1.png" loading="lazy" 
              alt="Phone Icon"
              className="w-12 h-12 md:w-16 md:h-16 mr-4"
              whileHover={{ scale: 1.1 }} 
            />
            <div className="flex flex-col">
              <h3 className="text-lg font-semibold text-[#9f572a]">
                Contact Us
              </h3>
              <p className="mt-1 text-sm md:text-base">
                Feel free to reach out for more information or assistance regarding temple activities.
              </p>
            </div>
          </div>

          <motion.button
            className="bg-[#ca8a04] text-white py-2 px-4 rounded mt-4"
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }} 
          >
     <a href="#contact">
    Learn More
  </a>
          </motion.button>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Growth;
