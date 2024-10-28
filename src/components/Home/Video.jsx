import { Helmet } from "react-helmet";
import { motion } from 'framer-motion';

const Video = () => {
  return (
    <div className="relative h-full overflow-hidden mt-16">
      <Helmet>
        <title>Datta Mandir Bijalpur, Indore | Video Tutorial</title>
        <meta
          name="description"
          content="Discover the sacred Datta Mandir in Bijalpur, Indore, dedicated to Lord Dattatreya. Learn about its significance and spiritual ambiance."
        />
        <meta
          name="keywords"
          content="Datta Mandir, Bijalpur, Indore, Lord Dattatreya, spiritual teachings, pilgrimage"
        />
      </Helmet>

      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row px-4 md:px-8">
        {/* Left Container */}
        <motion.div 
          className="flex-1 p-4 md:p-8"
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.5 }}
        >
          {/* Title Section */}
          <h1 className="text-2xl md:text-3xl font-bold text-[#9f572a] mb-4">Datta Mandir Bijalpur, Indore</h1>
          <p className="text-sm md:text-lg mt-4">
            The Datta Mandir in Bijalpur, Indore, is a sacred temple dedicated to Lord Dattatreya, who embodies the qualities of the divine trinity: Brahma, Vishnu, and Shiva. This temple serves as a spiritual haven for devotees, where they can seek blessings and guidance in their personal and spiritual journeys. 
          </p>
          <p className="text-sm md:text-lg mt-2">
            The serene ambiance and intricate architecture of the temple enhance the spiritual experience, making it a prominent pilgrimage site. 
          </p>
          <p className="text-sm md:text-lg mt-2">
            Visiting the Datta Mandir allows individuals to reflect on the teachings of spirituality and the universal quest for enlightenment and inner peace, thus bridging the understanding of various spiritual paths.
          </p>
        </motion.div>

        {/* Right Container (Video) */}
        <motion.div 
          className="flex-1 relative w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] mt-4 md:mt-0"
          whileHover={{ scale: 1.05 }}  
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div style={{ paddingBottom: "56.25%" }} className="relative w-full h-full">
            <video
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              controls
              src="./videos/video-3.mp4"
              title="Discovering Datta Mandir Bijalpur, Indore"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Video;
