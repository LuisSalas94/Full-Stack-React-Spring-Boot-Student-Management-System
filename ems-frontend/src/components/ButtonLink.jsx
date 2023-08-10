import { Link } from "react-router-dom";

const ButtonLink = ({ text, toAction }) => {
  return (
    <Link className="btn btn-outline-primary mb-2" to={toAction}>
      {text}
    </Link>
  );
};

export default ButtonLink;
