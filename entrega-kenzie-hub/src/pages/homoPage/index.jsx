import { Link, useNavigate } from "react-router-dom";
import { BtnStyled } from "../../styles/components/styledButton";
import { StyledText } from "../../styles/typography";
import { StyledHome } from "./style";

export function HomePage({ user }) {
  const navigate = useNavigate();

  function quit() {
    localStorage.clear();
    navigate("/");
  }

  return (
    <StyledHome>
      <header>
        <StyledText typeText="title" tag="h1" color="--Color-primary">
          Kenzie Hub
        </StyledText>
        <BtnStyled onClick={() => quit()}>Sair</BtnStyled>
      </header>
      <div className="user">
        <StyledText typeText="title" tag="p" color="--gray0">
          Olá, {user.name}
        </StyledText>
        <StyledText typeText="text1" color="--gray1" tag="p">
          {user.course_module}
        </StyledText>
      </div>
      <div className="description">
        <StyledText typeText="title" color="--gray0" tag="h2">
          Que pena! Estamos em desenvolvimento :(
        </StyledText>
        <StyledText typeText="text1" color="--gray0" tag="p">
          Nossa aplicação está em desenvolvimento, em breve teremos novidades
        </StyledText>
      </div>
    </StyledHome>
  );
}
