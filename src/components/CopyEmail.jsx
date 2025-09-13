import { useState } from "react";

const CopyEmail = () => {
  const [copied, setCopied] = useState(false);
  const email = "oscar.bougart.dev@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // reset after 2 sec
    });
  };

  return (
    <div className="flex flex-col items-center">
      <button
        onClick={handleCopy}
        className="px-5 py-3  text-md font-medium bg-pastel-1  rounded-full focus:outline-none"
      >
        {copied ? "Copied!" : email}
      </button>
      
    </div>
  );
};

export default CopyEmail;
