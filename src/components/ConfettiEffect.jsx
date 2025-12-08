import { useWindowSize } from "@uidotdev/usehooks";
import Confetti from "react-confetti";

export default function ConfettiEffect({ active }) {
  const { width, height } = useWindowSize();

  if (!active) return null;

  return (
    <Confetti
      width={width}
      height={height}
      gravity={0.2}
      wind={0.01}
      recycle={false} 
      numberOfPieces={350}
    />
  );
}
