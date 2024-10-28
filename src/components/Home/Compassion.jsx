import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const Compassion = () => {
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
        <title>Compassion | Your Business</title>
        <meta
          name="description"
          content="Explore the concept of compassion and its importance in personal and social contexts."
        />
        <meta
          name="keywords"
          content="Compassion, Emotional Response, Self-Improvement, Personal Growth"
        />
      </Helmet>
      <motion.div
        className="max-w-screen-xl mx-auto p-5 text-center mt-16 bg-gray-100"
        initial="hidden"
        animate="visible"
        variants={containerVariant}
      >
        <p className="mb-4 text-base md:text-lg">Exploring the depths of our spiritual journey.</p>

        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#9f572a]">
          The Essence of Compassion in Temples
        </h2>

        <p className="mb-8 text-sm md:text-base">
          Temples are sacred spaces where we connect with the divine and seek guidance. They embody the essence of compassion by serving as places of worship, reflection, and community gathering. Within the walls of a temple, individuals find solace and a deeper understanding of their spiritual path, fostering a sense of belonging and love for all beings.
        </p>

        <p className="mb-8 text-sm md:text-base">
          The teachings of various deities emphasize compassion as a fundamental virtue. Through acts of kindness and understanding, we not only honor our spiritual beliefs but also manifest the divine qualities of love and empathy in our everyday lives. Engaging with our community through charitable acts, inspired by the teachings found within temples, can create a ripple effect of compassion that transforms lives.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <motion.div
            className="flex items-center justify-center bg-white rounded shadow h-64"
            variants={imageVariant}
            whileHover={{ scale: 1.05 }} 
          >
            <motion.img
              src="./images/img-2_.jpg" loading="lazy" 
              alt="Compassion"
              className="w-full h-full object-cover rounded"
            />
          </motion.div>

          <motion.div
            className="flex flex-col items-center bg-white p-5 rounded shadow"
            variants={containerVariant}
            whileHover={{ scale: 1.05 }} 
          >
            <img
              src="./images/compassion-img-1.png" loading="lazy" 
              alt="Your Description"
              className="w-12 h-12 md:w-16 md:h-16 mb-2 mt-4"
            />
            <p className="text-sm md:text-base">Caring for the community.</p>
            <h3 className="text-lg font-semibold mb-2 text-[#9f572a]">
              Acts of Kindness
            </h3>
            <p className="text-sm md:text-base text-center">
              Engaging in acts of kindness reflects our inner compassion, guiding us to help others and foster community spirit.
            </p>
          </motion.div>

          <motion.div
            className="flex items-center justify-center bg-white rounded shadow h-64"
            variants={imageVariant}
            whileHover={{ scale: 1.05 }} 
          >
            <motion.img
              src="./images/img-3_.jpg" loading="lazy" 
              alt="Compassion"
              className="w-full h-full object-cover rounded"
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            className="flex flex-col items-center bg-white p-5 rounded shadow"
            variants={containerVariant}
            whileHover={{ scale: 1.05 }} 
          >
            <img
              src="./images/compassion-img-1.png" loading="lazy" 
              alt="Your Description"
              className="w-12 h-12 md:w-16 md:h-16 mb-2 mt-4"
            />
            <p className="text-sm md:text-base">Unity in Diversity.</p>
            <h3 className="text-lg font-semibold mb-2 text-[#9f572a]">
              Embracing All Faiths
            </h3>
            <p className="text-sm md:text-base text-center">
              Compassion transcends all religions, inviting us to embrace every individual as a reflection of the divine.
            </p>
          </motion.div>

          <motion.div
            className="flex items-center justify-center bg-white rounded shadow h-64"
            variants={imageVariant}
            whileHover={{ scale: 1.05 }} 
          >
            <motion.img
              src="./images/img-5_.jpg" loading="lazy" 
              alt="Compassion"
              className="w-full h-full object-cover rounded"
            />
          </motion.div>

          <motion.div
            className="flex flex-col items-center bg-white p-5 rounded shadow"
            variants={containerVariant}
            whileHover={{ scale: 1.05 }} 
          >
            <img
              src="./images/compassion-img-1.png" loading="lazy" 
              alt="Your Description"
              className="w-12 h-12 md:w-16 md:h-16 mb-2 mt-4"
            />
            <p className="text-sm md:text-base">A Spiritual Journey.</p>
            <h3 className="text-lg font-semibold mb-2 text-[#9f572a]">
              Seeking the Divine
            </h3>
            <p className="text-sm md:text-base text-center">
              Our spiritual growth is nourished by acts of compassion, allowing us to connect more deeply with ourselves and the divine.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default Compassion;
