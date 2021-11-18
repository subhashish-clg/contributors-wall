import ProfileCard from "../components/ProfileCard";
import data from "../data.csv";

export default function IndexPage() {
  return (
    <div className="bg-gray-200 min-h-screen ">
      <h1 className="font-bold text-3xl text-center pt-6 px-6">
        The contributors wall{" "}
        <span role="img" aria-label="Confetti" className="font-normal">
          🎊
        </span>
      </h1>
      <p className="text-center">
        Find out how to get your name on the wall&nbsp;
        <a
          href="https://github.com/subhashish-clg/contributors-wall"
          className="text-blue-400 underline focus:text-blue-600 hover:text-blue-600"
        >
          here.
        </a>
      </p>
      <div className="bg-gray-200  grid gap-4 grid-cols-1 md:grid-cols-4 p-4 ">
        {data.map((profile, index) => (
          <ProfileCard key={index} name={profile.name} bio={profile.bio} />
        ))}
      </div>
    </div>
  );
}
