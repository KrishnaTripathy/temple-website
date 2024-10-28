import { Link } from "react-router-dom";
import { booksData } from "../../Constants/booksData";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const Books = () => {
  return (
    <>
      <Helmet>
        <title>Books Collection</title>
        <meta
          name="description"
          content="Explore our extensive collection of books across various genres. Find your next great read!"
        />{" "}
    
      </Helmet>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-16 place-items-center">
        {booksData.map((book) => (
          <motion.div
            key={book.id}
            className="cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Link to={book.link}>
              <motion.img
                src={book.image}
                alt={book.title}
                className="w-48 h-64 object-cover rounded shadow-md"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
            </Link>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default Books;
