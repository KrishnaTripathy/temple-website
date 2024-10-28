
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import {timelineData} from "../../Constants/timelineData"; 

const TimeLine = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4">
     <Helmet>
        <title>Datta Mandir Bijalpur - A Story of Heritage and Devotion | Company Name</title>
        <meta
          name="description"
          content="Explore the key milestones in the history of Datta Mandir Bijalpur, Indore. Discover the significance and evolution of this revered place of worship."
        />
      </Helmet>
     
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-[#ca8a04]">Datta Mandir Bijalpur</h1>
        <h2 className="text-xl md:text-2xl font-semibold mt-4 text-[#9f572a]">A Journey of Faith and Devotion</h2>
        <p className="text-md md:text-lg mt-4 max-w-lg mx-auto">
        Discover the significant milestones that have defined the history of Datta Mandir Bijalpur. Each moment represents the unwavering faith and devotion of the community.
        </p>
      </motion.div>

      {/* Timeline Section */}
      <div className="relative flex flex-col items-center w-full max-w-5xl">
        {/* Vertical Line */}
        <div className="absolute h-full border-l-4 border-dashed border-[#ca8a04] top-0 left-1/2 transform -translate-x-1/2 z-0 md:block hidden"></div>

        {/* Render Timeline Items */}
        <div className="w-full flex flex-col space-y-12">
          {timelineData.map((milestone) => (
            <motion.div
              key={milestone.id}
              initial={{ opacity: 0, x: milestone.alignment === "left" ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col md:flex-row ${
                milestone.alignment === "left" ? "justify-start" : "justify-end"
              } items-center w-full relative`}
            >
              <div className="w-6 h-6 rounded-full bg-[#ca8a04] absolute md:left-1/2 transform md:-translate-x-1/2 md:z-10 hidden md:block"></div>
              
              {/* Conditional Layout for Left and Right Items */}
              {milestone.alignment === "left" ? (
                <>
                  <div className="flex justify-end items-center w-full md:w-1/2 md:pr-8 mb-4 md:mb-0">
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      src={milestone.imgSrc}
                      alt={milestone.title}
                      className="w-24 h-24 md:w-32 md:h-32 bg-gray-100 rounded-full shadow-lg mx-auto md:mx-0"
                    />
                    <div className="md:ml-6 text-center md:text-right">
                      <h3 className="text-lg md:text-xl font-semibold text-[#9f572a]">
                        {milestone.title}
                      </h3>
                      <p className="mt-2 text-gray-700 text-sm md:text-base">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex justify-start items-center w-full md:w-1/2 md:pl-8 mb-4 md:mb-0">
                    <div className="md:mr-6 text-center md:text-left">
                      <h3 className="text-lg md:text-xl font-semibold text-[#9f572a]">
                        {milestone.title}
                      </h3>
                      <p className="mt-2 text-gray-700 text-sm md:text-base">
                        {milestone.description}
                      </p>
                    </div>
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      src={milestone.imgSrc}
                      alt={milestone.title}
                      className="w-24 h-24 md:w-32 md:h-32 bg-gray-100 rounded-full shadow-lg mx-auto md:mx-0"
                    />
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimeLine;
