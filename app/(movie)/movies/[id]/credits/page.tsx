import { useRouter } from "next/navigation";
import MovieCredits from "../../../../../components/movie-credits";
import styles from "../../../../../styles/movie-info.module.css";

export default async function Credits({ params }) {
  const { id } = params;
  return (
    <div>
      <MovieCredits id={id} />
    </div>
  );
}
