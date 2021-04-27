import "../../index.css";
import Header from "../header";
import React, { useState } from "react";
import { Favorite, SearchVacancy } from "../pages";

const App = () => {
  const [mainPage, setMainPage] = useState(true);
  const changePage = (main) => {
    if (main) setMainPage(true);
    else setMainPage(false);
  };
  const page = mainPage ? <SearchVacancy /> : <Favorite />;
  return (
    <div>
      <Header mainPage={mainPage} changePage={changePage} />
      {page}
    </div>
  );
};

export default App;
