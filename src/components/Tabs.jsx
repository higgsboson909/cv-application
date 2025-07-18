import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

const Tabs = (props) => {
  let activeTab = props.currentTab;

  return (
    <>
      <div className="block tabs-block">
        <div className="tabs is-toggle is-toggle-rounded ">
          <ul>
            <li className={activeTab === "1" && "is-active"}>
              <button onClick={() => props.handleClick("1")}>
                <a>
                  <span class="icon is-small">
                    <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                  </span>
                  <span>General Info</span>
                </a>
              </button>
            </li>
            <li className={activeTab === "2" && "is-active"}>
              <button onClick={() => props.handleClick("2")}>
                <a>
                  <span className="icon is-small">
                    <FontAwesomeIcon icon={faLightbulb}></FontAwesomeIcon>
                  </span>
                  <span>Skills</span>
                </a>
              </button>
            </li>
            <li className={activeTab === "3" && "is-active"}>
              <button onClick={() => props.handleClick("3")}>
                <a>
                  <span className="icon is-small">
                    <FontAwesomeIcon icon={faGraduationCap}></FontAwesomeIcon>
                  </span>
                  <span>Education</span>
                </a>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Tabs;
