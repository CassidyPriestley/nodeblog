import { Link } from "react-router-dom";
import { useTitle } from "../hooks/useTitle";
import PageNotFoundImg from "../assets/images/pagenotfound.png";

export const PageNotFound = () => {
  useTitle("Page Not Found");
  return (
    <section className="pageNotFound">
      <p>404 | Page Not Found</p>
      <img src={PageNotFoundImg} alt="Page Not Found" />
      <Link to="/">
        <button>Back to Home</button>
      </Link>
    </section>
  );
};
