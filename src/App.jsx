import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import LandingPage from "./pages/LandingPage";
import CvApp from "./pages/CvApp";

function App() {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(true);
  };

  return (
    <>
      {click == true ? (
        <>
          <CvApp></CvApp>
        </>
      ) : (
        <LandingPage handleClick={handleClick} />
      )}
    </>
  );
}

export default App;
