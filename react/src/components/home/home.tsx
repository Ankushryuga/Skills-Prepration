const skills = [
  "DS", "Algorithms", "Java", "JavaScript", "Python", "SQL", "Spring Boot", "J2EE", "REST API",
  "gRPC + Protobuf", "React", "Node.js", "Docker", "Kubernetes", "Tensorflow", "MySQL", "PostgreSQL",
  "MariaDB", "MongoDB", "Git", "Jenkins", "JUnit", "Figma", "Microservices", "Monolithic", "AWS (EC2)",
  "Kafka", "Grafana", "Prometheus", "Linux"
];

const Home: React.FC = () => {
  return (
    <div className="px-4 sm:px-10 py-16 text-gray-800">
      <p className="text-2xl font-bold">
        <span role="img" aria-label="waving-hand">👋</span> Hi, I'm
      </p>

      <div className="py-5">
        <p className="text-4xl sm:text-6xl md:text-7xl font-bold">Ankush</p>
      </div>

      <span className="block text-2xl sm:text-3xl lg:text-4xl font-semibold mt-6 mb-10 text-transparent bg-clip-text bg-gradient-to-br from-purple-800 to-purple-400">
        Software Engineer
      </span>

      <div className="w-full flex justify-center">
        <ul className="flex flex-wrap gap-2 sm:gap-4">
          {skills.map((skill, idx) => (
            <li key={idx} className="px-3 py-2 rounded-full bg-purple-100 text-purple-800 text-xs sm:text-sm font-medium shadow-sm">
              {skill}
            </li>
          ))}
        </ul>
      </div>
      {/* Button section.. */}


      <div className="flex flex-row pt-10 gap-5">
  <button className="px-6 py-2 rounded-full bg-purple-800 text-white text-sm sm:text-base font-semibold shadow-md hover:bg-purple-700 transition duration-200">
    CV
  </button>
  <button className="px-6 py-2 rounded-full bg-white text-purple-800 border border-purple-800 text-sm sm:text-base font-semibold shadow-md hover:bg-purple-50 transition duration-200">
    About Me
  </button>
</div>

    </div>
  );
};

export default Home;
