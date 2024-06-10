import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return <Button onClick={handleBack}>Vissza</Button>;
};

export default BackButton;
