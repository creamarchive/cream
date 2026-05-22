import { Link } from "react-router-dom";

const HomeVideo = () => {
  return (
    <section className="w-full">
      <div className="px-6 pt-4 pb-4">
        <div className="relative overflow-hidden aspect-[16/7] w-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/videos/home-video.mov" type="video/quicktime" />
            <source src="/videos/home-video.mov" type="video/mp4" />
          </video>
          <div className="absolute inset-0 flex items-center justify-center">
            <Link
              to="/new-arrivals"
              className="border border-white text-white px-8 py-3 text-sm tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-colors duration-300"
            >
              Shop
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeVideo;
