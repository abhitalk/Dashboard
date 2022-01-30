import "./index.css";
import data from "./../../data";
import { useEffect, useRef, useState } from "react";

let linkWidths = [];
function checkMenuItems(len) {
  let total = 0;
  linkWidths = linkWidths.slice(0, len);
  linkWidths.forEach((width) => {
    total += width;
  });
  if (window.innerWidth <= total) {
    let count = 0;
    let totalCopy = total;
    for (let i = linkWidths.length - 1; i >= 0; i--) {
      totalCopy -= linkWidths[i];
      if (window.innerWidth >= totalCopy) {
        count = i;
        break;
      }
    }
    return count === linkWidths.length ? count + 1 : count;
  }
}

export default function Navbar({ setMenuStatus }) {
  const [splitIdx, setSplitIdx] = useState(0);
  const [menu, setMenu]=useState(false);

  const toggleMenu = () => {
    setMenu(!menu)
  }
  const navData = data.navData;
  function setLinkWidths(newWidths) {
    linkWidths.push(newWidths[newWidths.length - 1]);
  }
  useEffect(() => {
    window.addEventListener("resize", () => {
      const navData = data.navData;
      setSplitIdx(checkMenuItems(navData.length));
    });
    setSplitIdx(checkMenuItems(navData.length));
  }, []);

  function showMenu(){
    setShow('displayMenu')
  }
  return (
    <div className="nav-container">
      <div className="nav-links">
        {navData
          .slice(0, splitIdx ? splitIdx - 1 : navData.length)
          .map((link, i) => (
            <NavLink
              key={i}
              link={link}
              linkWidths={linkWidths}
              setLinkWidths={setLinkWidths}
            />
          ))}
      </div>
      {splitIdx ? (
        <div className="nav-menu-container">
          <button 
          type="button" onClick={()=> {toggleMenu()
          }}>Menu</button>
          {menu?(

          <div className="nav-menu-parent">
            {navData.slice(splitIdx - 1).map((link, i) => (
              <NavLink
                key={i}
                link={link}
                linkWidths={linkWidths}
                setLinkWidths={setLinkWidths}
              />
            ))}
          </div>
          ):null}
        </div>
      ) : null}
    </div>
  );
}

function NavLink(props) {
  const link = props.link;
  const ref = useRef(null);
  useEffect(() => {
    const newWidths = [...props.linkWidths];
    newWidths.push(
      ref.current
        ? Math.round(ref.current.getBoundingClientRect().width) + 32
        : 0
    );
    props.setLinkWidths(newWidths);
  }, []);
  return (
    <div ref={ref} className="nav-link">
      <a href={"google.com"}>{link.icon}{link.name}</a>
    </div>
  );
}
