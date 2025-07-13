import { Link, useLocation } from "react-router-dom";

export const ScrollLink = ({ to, children, ...props }) => {
  const location = useLocation();

  const onClick = (e) => {
    if (location.pathname === to) {
    }
    window.scrollTo(0, 0);
  };

  return (
    <Link to={to} {...props} onClick={onClick}>
      {children}
    </Link>
  );
};
