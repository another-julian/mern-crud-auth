import bgImage from "../../assets/tasks-bg.jpg";
import { Link } from "react-router";
export default function Banner() {
  return (
    <section className="relative h-screen w-full bg-light flex items-center justify-center">
      <img
        src={bgImage}
        alt="Background"
        className="absolute inset-0 w-full object-cover h-[80%]"
      />
      <div className="h-[80%] absolute inset-0 bg-gradient-to-b from-transparent to-light"></div>
      <div className="relative z-10 h-[80%] flex flex-col justify-end items-center">
        <span className="mb-12 text-secondary text-4xl font-medium">
          welcome to
        </span>
        <h1 className="mb-16 text-7xl font-bold text-secondary tracking-wider">
          <span className="bg-secondary text-light px-7">TASK</span> TRACK
        </h1>
        <Link
          to="/register"
          className="bg-primary px-12 py-4 text-light font-bold text-2xl tracking-wider"
        >
          START
        </Link>
      </div>
    </section>
  );
}
