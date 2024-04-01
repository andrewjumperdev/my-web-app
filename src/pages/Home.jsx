import Header from "../components/Header";
import RecentsProjects from "../components/RecentsProjects";

const Home = () => {
  return (
      <div className="d-flex flex-column">
        <main className="flex-shrink-0">
          <Header />
        </main>
        <RecentsProjects />
      </div>
  );
};

export default Home;
