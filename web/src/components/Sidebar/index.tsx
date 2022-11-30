import "./styles.css";
import {
  List,
  MagnifyingGlass,
  SquaresFour,
  PawPrint,
  User,
  Gear,
} from "phosphor-react";

import VetIcon from "../../assets/user-md.svg";
import Logout from "../../assets/log-out.svg";

import { useState } from "react";

export const Sidebar = () => {
  const [openSidebar, setOpenSidebar] = useState<boolean>(false);

  return (
    <div className="container">
      <div className="side-container">
        <button className="openButton">
          <List size={24} color="#084236" weight="bold" />

          <div className="items-container">
            <button>
              <MagnifyingGlass size={24} color="#084236" weight="bold" />
            </button>
            <button>
              <SquaresFour size={24} color="#084236" weight="bold" />
            </button>
            <button>
              <PawPrint size={24} color="#084236" weight="bold" />
            </button>
            <button>
              <User size={24} color="#084236" weight="bold" />
            </button>
            <button>
              <img src={VetIcon} alt="" />
            </button>
            <button>
              <Gear size={24} color="#084236" weight="bold" />
            </button>
          </div>
        </button>
      </div>
      <footer>
        <button>
          <img src={Logout} alt="" />
        </button>
      </footer>
    </div>
  );
};
