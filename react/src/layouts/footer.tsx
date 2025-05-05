import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="shadow-xl text-center text-sm py-2 w-full mt-auto">
      {/* // <footer className="bg-gradient-to-br from-purple-50 to-purple-100 shadow-inner text-center py-4 w-full mt-auto"> */}
      <motion.div
        className="w-full flex justify-center items-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <ul className="flex gap-4">
          <motion.li
            whileHover={{ scale: 1.2, rotate: 3 }}
            whileTap={{ scale: 0.95, rotate: -3 }}
            className="p-3 rounded-full bg-white text-purple-800 shadow-lg cursor-pointer transition duration-200 hover:shadow-purple-300"
          >
            <a
              href="https://github.com/your_username"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-2xl sm:text-3xl" />
            </a>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.2, rotate: 3 }}
            whileTap={{ scale: 0.95, rotate: -3 }}
            className="p-3 rounded-full bg-white text-purple-800 shadow-lg cursor-pointer transition duration-200 hover:shadow-purple-300"
          >
            <a
              href="https://linkedin.com/in/your_username"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-2xl sm:text-3xl" />
            </a>
          </motion.li>
        </ul>
      </motion.div>

      <motion.p
        className="text-xs text-gray-600 mt-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        © {new Date().getFullYear()} Ankush. All rights reserved.
      </motion.p>
    </footer>
  );
};

export default Footer;
