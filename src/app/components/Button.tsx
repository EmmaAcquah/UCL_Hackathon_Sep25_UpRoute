import './Button.css';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {

  return (
    <button
      onClick={onClick}
      className="Button"
    >
      {children}
    </button>
  );
};

export default Button;
