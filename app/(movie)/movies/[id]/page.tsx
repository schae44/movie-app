import { Suspense } from "react";
import MovieInfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";
import styles from "../../../../styles/movie-id.module.css";

export default async function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <div className={styles.container}>
      <Suspense fallback={<h1>Loading movie info...⏳</h1>}>
        <MovieInfo id={id} />
      </Suspense>

      <Suspense fallback={<h1>Loading movie videos...⏳</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
