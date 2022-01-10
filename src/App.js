import "./App.css";
import Card from "./components/Card";
import { InstantSearch } from "react-instantsearch-dom";
import searchClient from "./TypesenseConfig";
import CustomSearchBox from "./components/SearchBar";
import Map from "./components/Map"
import CustomHits from "./components/HitList";
import ListRefinements from "./components/RefinementList";
import CustomStats from "./components/CustomStats";
function App() {
  return (
    <div className="App">
      <h1 className="font-title text-6xl text-center mt-10 cursor-pointer">
        Homerce
      </h1>
      <InstantSearch indexName="master" searchClient={searchClient}>
        <CustomSearchBox />
        <div className="px-12 mt-3 h-10 flex justify-between items-center font-body font-semibold">
          <CustomStats />
          <ListRefinements />
        </div>
        <div className="flex justify-center my-20 w-full">
          <Map />
        </div>
        <div className="flex justify-center mt-10">
          <CustomHits />
        </div>
      </InstantSearch>
      
    </div>
  );
}

export default App;
