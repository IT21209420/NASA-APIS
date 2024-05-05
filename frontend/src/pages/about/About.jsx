import BackgroundVideo from "../../components/BackgroundVideo";
import bgVideo from "../../assets/video-home.mp4";

const About = () => {
  return (
    <BackgroundVideo url={bgVideo}>
      <div className="px-4 py-2 flex flex-col items-center">
        <div className="rounded-lg shadow-lg p-12 flex flex-col items-center bg-opacity-70 backdrop-filter backdrop-blur-xl border border-gray-500">
          <h2 className="text-5xl font-bold text-white mb-3">
            Discover the Cosmos
          </h2>
          <p className="text-white text-xl text-center">
            Embark on an interstellar journey with us. Our web portal is a
            gateway to the marvels of the universe, brought to life through the
            lenses of NASA&apos;s Mars rovers and Earth observation satellites.
            Crafted with the latest web technologies, including React and
            Tailwind CSS, our platform offers an immersive experience that
            transcends the confines of our planet.
          </p>
          <p className="text-white text-xl text-center mt-4">
            With real-time data powered by NASA&apos;s APIs, we present a
            collection of breathtaking images and insights from Mars and Earth.
            Our application&apos;s responsive design ensures seamless access
            across all devices, while Firebase integration provides a robust
            backend infrastructure. Join us in exploring the unknown, as we
            unravel the mysteries of space through stunning visuals and
            captivating discoveries.
          </p>
        </div>
      </div>
    </BackgroundVideo>
  );
};

export default About;
