import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
const Header = ({ children, sticky = false, className, ...rest }) => {
  const [isSticky, setIsSticky] = useState(false);
  const ref = useRef();

  // mount
  useEffect(() => {
    const cachedRef = ref.current,
      observer = new IntersectionObserver(
        ([e]) => setIsSticky(e.intersectionRatio < 1),
        { threshold: [1] }
      );

    observer.observe(cachedRef);

    // unmount
    return function () {
      observer.unobserve(cachedRef);
    };
  }, []);

  return (
    <>
      <header
        className={`sticky-wrapper${isSticky ? " sticky" : ""}`}
        ref={ref}
        {...rest}
      >
        <nav className="navbar sticky-inner  navbar-light bg-light">
          <div className="navbar-brand mb-0 h1">Products</div>
          <div style={{ float: "right" }}>
            <Link to="/" className="btn ">
              Products
            </Link>

            <Link to="/cart" className="btn btn-warning">
              Cart
            </Link>
          </div>
        </nav>
      </header>
      <br />
    </>
  );
};

export default Header;
