// const AboutMe: React.FC = () => {
//   return (
//     <div className="px-4 sm:px-10 py-10 text-gray-800 max-w-4xl mx-auto">
//       <h1 className="text-4xl font-bold mb-6 text-purple-800">About Me</h1>
//       <p className="text-lg leading-relaxed mb-4">
//         I'm Ankush, a passionate and detail-oriented <strong>Software Engineer</strong> with a strong foundation in 
//         data structures, algorithms, and system design. With hands-on experience across both <strong>backend</strong> 
//         and <strong>frontend</strong> technologies, I specialize in building robust, scalable, and user-friendly 
//         applications.
//       </p>

//       <p className="text-lg leading-relaxed mb-4">
//         I’ve worked with a wide range of technologies including <strong>Java</strong>, <strong>Spring Boot</strong>, 
//         <strong>Python</strong>, <strong>React</strong>, <strong>Docker</strong>, and <strong>Kubernetes</strong>. 
//         My expertise extends to designing RESTful APIs, managing databases like <strong>MySQL</strong>, 
//         <strong>PostgreSQL</strong>, and implementing microservices-based architectures.
//       </p>

//       <p className="text-lg leading-relaxed mb-4">
//         I enjoy transforming complex problems into clean, efficient code, and I’m always eager to learn new 
//         technologies. I take pride in writing readable, maintainable code and collaborating with cross-functional teams.
//       </p>

//       <p className="text-lg leading-relaxed mb-4">
//         When I’m not coding, I love contributing to open-source projects, solving algorithmic challenges, or exploring 
//         the latest trends in cloud computing and AI.
//       </p>

//       <p className="text-lg leading-relaxed">
//         I'm currently open to exciting opportunities where I can make meaningful contributions, grow as an engineer, 
//         and help shape innovative products.
//       </p>
//     </div>
//   );
// };

// export default AboutMe;


import React from "react";

const AboutMe: React.FC = () => {
  return (
    <div className="px-4 sm:px-10 py-16 text-gray-800 max-w-4xl mx-auto animate-fade-in">
      <h1 className="text-4xl font-bold mb-8 text-purple-800 text-center">
        👨‍💻 About Me
      </h1>

      <p className="text-lg leading-relaxed mb-6">
        I'm <span className="font-semibold text-purple-700">Ankush</span>, a passionate and detail-oriented <strong>Software Engineer</strong> 
        with a solid foundation in <strong>data structures</strong>, <strong>algorithms</strong>, and modern software architecture.
      </p>

      <p className="text-lg leading-relaxed mb-6">
        I enjoy building elegant and efficient backend systems with technologies like <strong>Java</strong>, <strong>Spring Boot</strong>, and <strong>SQL</strong>, 
        as well as creating interactive web experiences using <strong>React</strong> and <strong>Node.js</strong>.
      </p>

      <p className="text-lg leading-relaxed mb-6">
        Whether it's deploying microservices with <strong>Docker</strong> and <strong>Kubernetes</strong>, integrating <strong>gRPC</strong> APIs, 
        or analyzing logs via <strong>Grafana</strong> and <strong>Prometheus</strong>, I’m always up for solving complex problems and learning something new.
      </p>

      <p className="text-lg leading-relaxed mb-6">
        Outside of work, I love solving algorithm challenges, exploring AI frameworks like <strong>TensorFlow</strong>, and contributing to open-source.
      </p>

      <p className="text-lg leading-relaxed mb-10">
        I’m excited about crafting high-performance systems and always looking for new opportunities to grow and collaborate.
      </p>

      {/* Thank you message */}
      <div className="text-center mt-12">
        <p className="text-xl font-medium text-purple-800">
          Thank you for reading about me! <span role="img" aria-label="heart">❤️</span>
        </p>
        <p className="text-sm text-gray-500 mt-2">Let’s build something amazing together!</p>
      </div>
    </div>
  );
};

export default AboutMe;

