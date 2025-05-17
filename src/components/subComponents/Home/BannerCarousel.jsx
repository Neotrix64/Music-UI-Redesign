import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function BannerCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const newsSlides = [
    {
      id: 1,
      author: "Kevin Kaarl",
      title: "What's hot this weekend?",
      description: "The singer-songwriter Kevin Kaarl released a new song called \"No me culpes por sentir\" this December 14, 2024",
      image: "https://es.rollingstone.com/wp-content/uploads/2023/05/Kevin-Kaarl-y-el-valor-de-la-vulnerabilidad.jpg",
    },
    {
      id: 2,
      author: "Taylor Swift",
      title: "New Album Release",
      description: "Taylor Swift surprises fans with a special edition of her latest album featuring 5 unreleased tracks",
      image: "https://es.rollingstone.com/wp-content/uploads/2023/05/Kevin-Kaarl-y-el-valor-de-la-vulnerabilidad.jpg",
    },
    {
      id: 3,
      author: "The weeknd",
      title: "Concert Announcement",
      description: "The Weeknd announces world tour dates for 2025 with special guest performers",
      image: "/api/placeholder/800/400",
    },
    {
      id: 4,
      author: "Olivia Dean",
      title: "Rising Artist Spotlight",
      description: "Indie sensation Olivia Dean is breaking charts with her soulful new single",
      image: "/api/placeholder/800/400",
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === newsSlides.length - 1 ? 0 : prev + 1));
    }, 5000);
    
    return () => clearInterval(interval);
  }, [newsSlides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? newsSlides.length - 1 : prev - 1));
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev === newsSlides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="banner-container relative w-full h-96">
      <img
        src={newsSlides[currentSlide].image}
        alt="banner background"
        className="absolute w-full h-full object-cover transition-opacity duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-[#0d0d0d]"></div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0d0d0d] to-transparent"></div>

      <div className="content flex flex-col gap-6 pl-8 absolute bottom-16 w-full z-10">
        <div className="text flex flex-col gap-2">
          <div className="flex gap-2">
            <div className="bg-white size-9 rounded-full"></div>
            <h2 className="text-2xl font-semibold tracking-wide text-white/60">
            {newsSlides[currentSlide].author}
          </h2>
          </div>
          <h2 className="text-5xl font-semibold tracking-wide">
            {newsSlides[currentSlide].title}
          </h2>
          <h4 className="text-xl text-white/70">
            {newsSlides[currentSlide].description}
          </h4>
        </div>

        <div className="buttons flex gap-4">
          <button className="bg-green-400 text-white hover:bg-white hover:text-green-400 p-3 font-semibold text-lg rounded-full w-32 transition duration-300 ease-in-out">
            Play Now
          </button>
        </div>
      </div>

      <div className="absolute top-1/2 right-8 transform -translate-y-1/2 flex flex-col gap-3 z-20">
        {newsSlides.map((_, index) => (
          <button
            key={index}
            className={`size-3 rounded-full transition-all duration-300 ${
              currentSlide === index ? "bg-white scale-125" : "bg-white/40 hover:bg-white/60"
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="absolute bottom-3 right-3 flex justify-center  z-20">
        <button 
          onClick={goToPrevSlide}
          className="hover:scale-125 rounded-full p-2 transition-all duration-300"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} className="text-white" />
        </button>
        <button 
          onClick={goToNextSlide}
          className="hover:scale-125 rounded-full p-2 transition-all duration-300"
          aria-label="Next slide"
        >
          <ChevronRight size={24} className="text-white" />
        </button>
      </div>
    </div>
  );
}

export default BannerCarousel;