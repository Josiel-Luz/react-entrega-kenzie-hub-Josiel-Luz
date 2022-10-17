import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import { StyledMain } from "./style";
import { StyledText } from "../../styles/typography";
import { StyledInput } from "../../styles/components/styledInput";
import { BtnStyled } from "../../styles/components/styledButton";
import { useContext } from "react";
import { userContext } from "../../contexts/userContext";

export function LoginPage() {
  const { login } = useContext(userContext);

  const schema = yup.object().shape({
    password: yup.string().required("Nome obrigatório"),
    email: yup.string().required("Email obrigatório").email("email inválido"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  return (
    <StyledMain>
      <StyledText color="--Color-primary" typeText="title" tag="h1">
        Kenzie Hub
      </StyledText>
      <form onSubmit={handleSubmit(login)}>
        <StyledText color="--gray0" TipeText="title" tag="h2">
          Login
        </StyledText>
        <label htmlFor="email">Email</label>
        <StyledInput
          id="email"
          type="email"
          placeholder="Diegite seu email"
          {...register("email")}
        />
        <span>{errors.email?.message}</span>
        <label htmlFor="pass">Senha</label>
        <StyledInput
          id="pass"
          type="password"
          placeholder="Digite sua senha"
          {...register("password")}
        />
        <span>{errors.password?.message}</span>
        <BtnStyled btnType="btn1">Entrar</BtnStyled>
        <p>Ainda não possue uma conta?</p>
        <Link to={"register"}>Cadastre-se</Link>
      </form>
    </StyledMain>
  );
}
