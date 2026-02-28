import ProfileCard from "./profileCard/profileCard";
import Viewers from "./viewers/viewers";
import SearchBar from "./searchBar/searchBar";
import ContentCard from "./ContentCard/ContentCard";
import NewsCard from "./NewsCard/NewsCard";

function Home() {
  return (
    <>
      <div className="profileSection">
        <ProfileCard />
        <Viewers />
      </div>

      <div className="middleSection">
        <SearchBar />
        <ContentCard />
      </div>

      <div className="rightSection">
        <NewsCard />
      </div>
    </>
  );
}

export default Home;