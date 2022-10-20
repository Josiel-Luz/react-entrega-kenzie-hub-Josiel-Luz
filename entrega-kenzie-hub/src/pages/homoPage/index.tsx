import { useContext, useEffect } from "react";
import { ModalNewTeck } from "../../components/modalNewTeck";
import { TecnologiList } from "../../components/tecnologiList";
import { techsContext } from "../../contexts/techsContext";
import { userContext } from "../../contexts/userContext";
import { BtnStyled } from "../../styles/components/styledButton";
import { StyledText } from "../../styles/typography";
import { StyledHome } from "./style";

export function HomePage() {
  const { user, quit } = useContext(userContext);
  const { newTech, verifyNewTech } = useContext(techsContext);

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
          Tecnomlogias
        </StyledText>
        <BtnStyled className="new-teck" onClick={() => verifyNewTech()}>
          +
        </BtnStyled>
      </div>
      <TecnologiList />
      {newTech && <ModalNewTeck />}
    </StyledHome>
  );
}
