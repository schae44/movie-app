import MovieCredits from "../../../../../components/movie-credits";

export default async function Credits({ params }) {
  const { id } = params;
  return (
    <div>
      <MovieCredits id={id} />
    </div>
  );
}
