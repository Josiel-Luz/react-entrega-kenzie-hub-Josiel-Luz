import { useContext, useLayoutEffect } from "react";
import { iTech, techsContext } from "../../contexts/techsContext";
import { userContext } from "../../contexts/userContext";
import { StyledText } from "../../styles/typography";
import { StyledTechList } from "./style";

export function TecnologiList() {
  const { techs, removeTech } = useContext(userContext);
  const { deleteTech } = useContext(techsContext);

  return (
    <StyledTechList>
      {techs.length > 0 ? (
        techs.map((elem) => {
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
                    removeTech(elem);
                    deleteTech(elem.id);
                  }}
                >
                  X
                </button>
              </div>
            </li>
          );
        })
      ) : (
        <li>
          <StyledText typeText="title" color="--gray0" tag="h3">
            Você ainda não cadastrou nenhuma tecnologia
          </StyledText>
        </li>
      )}
    </StyledTechList>
  );
}
