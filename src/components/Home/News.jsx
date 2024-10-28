import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { newsItems } from '../../Constants/newsItems'; 
import MobileNews from './MobileNews';
import { Helmet } from "react-helmet";
import PaginationDot from './PaginationDot'; 
import Modal from 'react-modal'; 

const News = () => {
  const carouselRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [modalVideoSrc, setModalVideoSrc] = useState(null); 
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768); 
  const itemsPerPage = 4;
  const totalItems = newsItems.length;

  useEffect(() => {
   
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % Math.ceil(totalItems / itemsPerPage));
    }, 3000); 

    return () => clearInterval(scrollInterval); 
  }, [totalItems, itemsPerPage]);

  useEffect(() => {
    if (carouselRef.current) {
      const items = carouselRef.current.children;
      for (let i = 0; i < items.length; i++) {
        items[i].style.transform = `translateX(-${currentPage * 100}%)`;
      }
    }
  }, [currentPage, itemsPerPage, totalItems]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  
  const openModal = (videoSrc) => {
    setModalVideoSrc(videoSrc);
    setIsModalOpen(true);
  };

  
  const closeModal = () => {
    setIsModalOpen(false);
    setModalVideoSrc(null);
  };

  return (
    <div className="relative px-4 sm:px-8 md:px-16 lg:px-28 mt-8 md:mt-16">
      <Helmet>
        <title>What is datta-mandir? | Video Tutorial</title>
        <meta
          name="description"
          content="Watch our insightful video exploring the fundamentals of Buddhism and its beliefs. Discover the essence of Buddhist teachings and practices."
        />
        <meta
          name="keywords"
          content="datta-mandir, video tutorial, Buddhist beliefs, spiritual teachings, mindfulness"
        />
      </Helmet>
      <h2 className="hidden md:block text-xl sm:text-2xl md:text-3xl font-bold text-center mb-4 text-[#9f572a]">Latest Videos</h2>
      
      {/* Carousel Section */}
      <Carousel className="w-full overflow-hidden mt-8 md:mt-12 hidden md:block">
        <CarouselContent ref={carouselRef} className="flex">
          {newsItems.map((item) => (
            <CarouselItem key={item.id} className={`flex-shrink-0 w-1/4 h-[400px] mx-0`}> 
              <motion.div 
                className="bg-gray-800 rounded-lg shadow-lg overflow-hidden h-full cursor-pointer"
                whileHover={{ scale: 1.05 }} 
                transition={{ duration: 0.3 }}
                onClick={() => openModal(item.localVideoSrc)} 
              >
                <iframe
                  width="100%"
                  height="100%"
                  src={item.localVideoSrc}
                  title="Embedded YouTube video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      
      {isDesktop && (
        <PaginationDot 
          curPage={currentPage} 
          maxPage={Math.ceil(totalItems / itemsPerPage)} 
          onPageChange={handlePageChange} 
        />
      )}

      {/* Mobile News Section */}
      <div className='block md:hidden'>
           <MobileNews/>
      </div>
      
      
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        className="fixed inset-0 flex items-center justify-center z-50 p-4 bg-white rounded-lg shadow-lg outline-none max-w-3xl w-full h-auto"
        overlayClassName="fixed inset-0 bg-black bg-opacity-75"
        contentLabel="Video Modal"
        ariaHideApp={false} 
      >
        <div className="relative w-full h-[70vh]">
          <button 
            className="absolute top-0 right-0 text-white bg-gray-800 hover:bg-gray-700 p-2 rounded-full z-10"
            onClick={closeModal}
          >
            ✕
          </button>
          {modalVideoSrc && (
            <iframe
              className="w-full h-full"
              src={modalVideoSrc}
              title="Embedded YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default News;
