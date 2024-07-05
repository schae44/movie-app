import { API_URL } from "../app/(home)/page";
import styles from "../styles/movie-info.module.css";
import { getMovie } from "./movie-info";

async function getCredits(id: string) {
  console.log(`Fetching credits: ${Date.now()}`);
  const response = await fetch(`${API_URL}/${id}/credits`);
  return response.json();
}

export default async function MovieCredits({ id }: { id: string }) {
  const movie = await getMovie(id);
  const credits = await getCredits(id);
  return (
    <div className={styles.container}>
      <img
        src={movie.poster_path}
        className={styles.poster}
        alt={movie.title}
      />
      <div className={styles.info}>
        <h1 className={styles.title}>{movie.title}</h1>
        <ul>
          {credits.map((credit) => (
            <li className={styles.credit}>
              {credit.name} &bull; &bull; &bull; {credit.character}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
