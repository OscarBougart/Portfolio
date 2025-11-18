import React from "react";

const Footer = () => {
  return (
    <footer class="bg-ls-4 rounded-lg shadow-sm m-4 ">
      <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <p className="text-md text-ls-8 opacity-70">
          © {new Date().getFullYear()} Oscar Bougart. All rights reserved.
        </p>
        <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a href="#" class="hover:underline me-4 md:me-6">
              {" "}
              Built with React & TailwindCSS
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
