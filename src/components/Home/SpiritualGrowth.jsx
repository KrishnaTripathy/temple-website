import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
const SpiritualGrowth = () => {
  const containerVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const imageVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

  return (
    <>
      <Helmet>
        <title>Spiritual Growth | Your Business</title>
        <meta
          name="description"
          content="Explore the journey of spiritual growth and discover ways to enhance your spiritual well-being."
        />
        <meta
          name="keywords"
          content="Spiritual Growth, Well-being, Self-Improvement, Personal Development"
        />
      </Helmet>
      <motion.div
        className="max-w-screen-xl mx-auto p-5 mt-16"
        initial="hidden"
        animate="visible"
        variants={containerVariant}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <motion.div
            className="flex flex-col items-start bg-gray-100 p-5 rounded shadow"
            variants={containerVariant}
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-2 mt-8 text-[#9f572a]">
              Spiritual Growth
            </h2>
            <p className="mb-4">
              Spiritual growth is a transformative journey that involves
              deepening one’s connection with the divine and understanding one’s
              purpose in life.
            </p>
            
            <motion.button
              className="bg-[#ca8a04] text-white py-2 px-4 rounded"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
               <a href="#contact">
    Learn More
  </a>
            </motion.button>
          </motion.div>

          <motion.div
            className="flex items-center justify-center bg-gray-100 rounded shadow h-64"
            variants={imageVariant}
            whileHover={{ scale: 1.05 }}
          >
            <motion.img
              src="./images/img-4_.jpg"
              alt="Spiritual Growth"
              className="w-full h-full object-cover rounded"
              loading="lazy"
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            className="flex items-center justify-center bg-gray-100 rounded shadow h-64"
            variants={imageVariant}
            whileHover={{ scale: 1.05 }}
          >
            <motion.img
              src="./images/img-7_.jpg"
              loading="lazy"
              alt="Spiritual Growth"
              className="w-full h-full object-cover rounded"
            />
          </motion.div>

          <motion.div
            className="flex items-center justify-center bg-gray-100 rounded shadow h-64"
            variants={imageVariant}
            whileHover={{ scale: 1.05 }}
          >
            <motion.img
              src="./images/img-8_.jpg"
              loading="lazy"
              alt="Spiritual Growth"
              className="w-full h-full object-cover rounded"
            />
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default SpiritualGrowth;
