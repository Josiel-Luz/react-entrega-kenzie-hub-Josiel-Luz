import { useContext, useLayoutEffect } from "react";
import { techsContext } from "../../contexts/techsContext";
import { userContext } from "../../contexts/userContext";
import { StyledText } from "../../styles/typography";
import { StyledTechList } from "./style";

export function TecnologiList() {
  const { techs, setTechs } = useContext(userContext);
  const { deleteTech } = useContext(techsContext);

  return (
    <StyledTechList>
      {techs.map((elem) => {
        return (
          <li key={elem.id}>
            <StyledText typeText="title" color="--gray0" tag="h3">
              {elem.title}
            </StyledText>
            <div>
              <StyledText typeText="text1" color="--gray1" tag="p">
                {elem.status}
              </StyledText>
              <button
                onClick={() => {
                  setTechs(techs.filter((tech) => tech.title !== elem.title));
                  deleteTech(elem.id);
                }}
              >
                X
              </button>
            </div>
          </li>
        );
      })}
    </StyledTechList>
  );
}
