import { useContext } from "react";
import { useForm } from "react-hook-form";
import { string } from "yup";
import { iCreateNewTech, techsContext } from "../../contexts/techsContext";
import { BtnStyled } from "../../styles/components/styledButton";
import { StyledInput } from "../../styles/components/styledInput";
import { StyledText } from "../../styles/typography";
import { StyledModal } from "./style";

export function ModalNewTeck() {
  const { verifyNewTech, createNewTech } = useContext(techsContext);

  const { register, handleSubmit } = useForm<iCreateNewTech>();

  return (
    <StyledModal>
      <div>
        <div>
          <StyledText typeText="title" color="--gray0" tag="h2">
            Cadastrar Tecnologia
          </StyledText>
          <button onClick={() => verifyNewTech()}>X</button>
        </div>
        <form onSubmit={handleSubmit(createNewTech)}>
          <label htmlFor="name">Nome</label>
          <StyledInput
            id="name"
            type="text"
            placeholder="Digite o nome"
            {...register("title")}
          />
          <label htmlFor="status">Selecionar status</label>
          <select id="status" {...register("status")}>
            <option value="Iniciante">iniciante</option>
            <option value="Intermediário">intermediario</option>
            <option value="Avançado">Avançado</option>
          </select>
          <BtnStyled type="submit" btnType="btn1">
            Cadastrar Tecnologia
          </BtnStyled>
        </form>
      </div>
    </StyledModal>
  );
}
