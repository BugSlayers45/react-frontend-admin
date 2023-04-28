import { Link } from "react-router-dom";

function Sidebar() {
    return <div className="main-sidebar sidebar-style-2">
        <aside id="sidebar-wrapper">
            <div className="sidebar-brand">
                <a href="index.html">Handcraft</a>
            </div>
            <div className="sidebar-brand sidebar-brand-sm">
                <a href="index.html">HC</a>
            </div>
            <ul className="sidebar-menu">
                <li className="menu-header">Dashboard</li>
                <li className="dropdown active">
                    <a href="#" className="nav-link has-dropdown">
                        <i className="fas fa-fire" />
                        <span>Dashboard</span>
                    </a>
                    <ul className="dropdown-menu">
                        <li>
                            <Link to="/" className="nav-link">
                                Dashboard
                            </Link>
                        </li>
                        <li className="active">
                            <Link to="/product" className="nav-link" >
                                Products
                            </Link>
                        </li>
                        <li className="active">
                            <Link to="/category" className="nav-link" >
                               Category
                            </Link>
                        </li>
                        <li className="active">
                            <Link to="/customer" className="nav-link" >
                                Customers
                            </Link>
                        </li>
                        <li className="active">
                            <Link to="/seller" className="nav-link" >
                               Sellers
                            </Link>
                        </li>
                        <li className="active">
                            <Link to="/order" className="nav-link" >
                               Orders
                            </Link>
                        </li>
                    </ul>
                </li>
                <li className="menu-header">Starter</li>
                <li className="dropdown">
                    <a
                        href="#"
                        className="nav-link has-dropdown"
                        data-toggle="dropdown"
                    >
                        <i className="fas fa-columns" /> <span>Layout</span>
                    </a>
                    <ul className="dropdown-menu">
                        <li>
                            <a className="nav-link" href="layout-default.html">
                                List Vendor
                            </a>
                        </li>
                        <li>
                            <a className="nav-link" href="layout-transparent.html">
                                Transparent Sidebar
                            </a>
                        </li>
                        <li>
                            <a className="nav-link" href="layout-top-navigation.html">
                                Top Navigation
                            </a>
                        </li>
                    </ul>
                </li>

                <li className="dropdown">

                    <ul className="dropdown-menu">
                        <li>
                            <a href="utilities-contact.html">Contact</a>
                        </li>

                        <li>
                            <a href="utilities-subscribe.html">Subscribe</a>
                        </li>
                    </ul>
                </li>

            </ul>

        </aside>
    </div>
}
export default Sidebar;