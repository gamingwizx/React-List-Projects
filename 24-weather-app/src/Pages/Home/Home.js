import Header from "../Header.js";
import HomeMainContent from "./HomeMainContent.js";
export default function Home() {
  return (
    <div className="container-parent container-parent__home">
      <div className="container">
        <Header />
      </div>
      <div className="container">
        <HomeMainContent />
      </div>
    </div>
  );
}
