import { Link } from "react-router-dom";
import styled from "styled-components";
import Kkancho from "../assets/images/Kkancho.png";

export const Main = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  flex: 3 0 auto;
  position: relative;
  z-index: 900;
  background-color: #bf8b67;
`;

const Home = () => {
  return (
    <Main>
      <Link to="/tranceform">
        <img src={Kkancho} className="/logo" alt="logo" />
      </Link>
    </Main>
  );
};

export default Home;
