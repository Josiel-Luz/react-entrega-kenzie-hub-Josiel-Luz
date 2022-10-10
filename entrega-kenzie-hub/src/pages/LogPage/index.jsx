import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { Api } from "../../services/apis/api";
import { StyledMain } from "./style";
import { StyledText } from "../../styles/typography";
import { StyledInput } from "../../styles/components/styledInput";
import { BtnStyled } from "../../styles/components/styledButton";

export function LoginPage({ setUser }) {
  const navigate = useNavigate();
  const schema = yup.object().shape({
    password: yup.string().required("Nome obrigatório"),
    email: yup.string().required("Email obrigatório").email("email inválido"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  function onSubmit(data) {
    Api.post("/sessions", data)
      .then((res) => {
        setUser(res.data.user);
        localStorage.setItem("@TOKEN", res.data.token);
        localStorage.setItem("@USERID", res.data.user.id);
        navigate("/home");
      })
      .catch((err) => console.log(err));
  }

  return (
    <StyledMain>
      <StyledText color="--Color-primary" typeText="title" tag="h1">
        Kenzie Hub
      </StyledText>
      <form onSubmit={handleSubmit(onSubmit)}>
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
        <BtnStyled onClick={() => navigate("/register")}>Cadstre-se</BtnStyled>
      </form>
    </StyledMain>
  );
}
