import { FaTimesCircle } from "react-icons/fa";
import { ErrorStyled, ButtonClose } from "./style";

const Error = ({ message, setErrorView }) => {
  return (
    <ErrorStyled>
      {message}
      <ButtonClose onClick={() => setErrorView(false)}>
        <FaTimesCircle size={16} color={"#fff"} />
      </ButtonClose>
    </ErrorStyled>
  );
};

export default Error;
