import { Outlet, Link } from "react-router-dom";
import "./Layout.css"

const Layout = () => {
  return (
    <>
      <nav>
        <ul className = "ElementsParent">
          <li className="Elements">
            <Link to="/Home" className="ElementsChild"><span>H</span>ome</Link>
          </li>
          <li className="Elements">
            <Link to="/bikes" className="ElementsChild"><span>B</span>ikes</Link>
          </li>
          <li className="Elements">
            <Link to="/cars" className="ElementsChild"><span>C</span>ars</Link>
          </li>
          <li className="Elements">
            <Link to="/Category3" className="ElementsChild"><span>C</span>ategory3</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;