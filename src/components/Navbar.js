import logo from "../images/logo.svg";
import { socialLinks } from "../data";
// import { pageLinks, socialLinks } from "../data";
import PageLinks from "./PageLinks";
import SocialLink from "./SocialLink";
// import PageLink from "./PageLink";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {/* <!-- left this comment on purpose --> */}
        {/* this was my solution to PageLink. The lesson solution changed the PageLinks */}
        {/* <ul className="nav-links" id="nav-links">
          {pageLinks.map((link) => {
            return <PageLink key={link.id} link={link} itemClass="nav-link" />;
          })}
        </ul> */}
        <PageLinks parentClass="nav-links" itemClass="nav-link" />
        {/* <ul className="nav-links" id="nav-links">
          {pageLinks.map((link) => {
            return (
              <li key={link.id}>
                <a href={link.href} className="nav-link">
                  {link.text}
                </a>
              </li>
            );
          })}
        </ul> */}
        <ul className="nav-icons">
          {socialLinks.map((link) => {
            // const { id, href, icon } = link;
            // return <SocialLink key={link.id} {...link} itemClass="nav-icon" />;
            return <SocialLink key={link.id} {...link} itemClass="nav-icon" />;
            // (
            //   <li key={id}>
            //     <a
            //       href={href}
            //       target="_blank"
            //       rel="noreferrer"
            //       className="nav-icon"
            //     >
            //       <i className={icon}></i>
            //     </a>
            //   </li>
            // );
          })}
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
