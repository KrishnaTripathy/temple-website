import { Helmet } from "react-helmet";

const Header = () => {
  return (
    <div className="bg-gray-100 relative w-full h-[500px] md:h-[600px] flex justify-center items-center">
      <Helmet>
        <title>Temple | Welcome</title>
        <meta
          name="description"
          content="Explore our temple and discover the services we offer, including events, activities, and community engagement."
        />
        <meta
          name="keywords"
          content="temple, community, services, events, activities, spirituality"
        />
      </Helmet>
      <div
        className="w-[95%] max-w-9xl h-full bg-cover bg-center" loading="lazy" 
        style={{ backgroundImage: "url('./images/background-img.avif')" }}
      >
        <div className="h-full flex flex-col justify-center items-center bg-black bg-opacity-50 text-white p-5 text-center">
          <h1 className="text-4xl md:text-6xl font-normal mb-2">Datta Mandir </h1>
          <p className="text-sm md:text-base mb-4">
          Discover Peace and Devotion at Datta Mandir, Bijalpur, Indore.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
