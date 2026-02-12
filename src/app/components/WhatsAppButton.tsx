import { FaWhatsapp } from "react-icons/fa";
const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/918224009936?text=Hello%20I%20want%20admission%20details"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed flex gap-1 bottom-5 right-5 bg-green-500 text-white px-3 py-3 rounded-full shadow-lg hover:bg-green-600"
    >
      <FaWhatsapp className="h-5 w-5 text-[#f7f6f4]" />
    </a>
  );
};

export default WhatsAppButton;
