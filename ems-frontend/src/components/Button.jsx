const Button = ({ text, onClick }) => {
  return (
    <button className="btn btn-outline-primary mb-2" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
