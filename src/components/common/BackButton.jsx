import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

function BackButton({ to }) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => (to ? navigate(to) : navigate(-1))}
      className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-50 text-primary"
    >
      <ChevronLeft size={20} />
    </button>
  );
}

export default BackButton;