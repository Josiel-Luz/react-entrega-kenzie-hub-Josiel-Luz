import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { StyledMain } from "./style.js";
import { BtnStyled } from "../../styles/components/styledButton/index.js";
import { StyledInput } from "../../styles/components/styledInput/index.js";
import { StyledText } from "../../styles/typography.js";
import { useContext } from "react";
import { userContext } from "../../contexts/userContext.js";
import { Link } from "react-router-dom";

export function RegisterPage() {
  const { createUser } = useContext(userContext);
  const schema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().required("Email obrigatório").email("Email inválido"),
    bio: yup.string().required("Bio obrigatória"),
    contact: yup.string().required("Contato obrigatótio"),
    password: yup
      .string()
      .matches(/[A-Z]/, "Deve conter ao  menos uma letra maiúscula")
      .matches(/[a-z]/, "Deva conter ao menos uma letra minúscula")
      .matches(/(\d)/, "Deve conter ao menos um número")
      .matches(/(\W)||_/, "Deve conter ao menos um caracter especial")
      .min(8, "Deve conter pelo meno 8 caracteres")
      .required("Senha obrigatória"),
    confirmPassword: yup
      .string()
      .oneOf(
        [yup.ref("password")],
        "Confirmação de senha deve ser igual a senha"
      ),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  return (
    <StyledMain>
      <div>
        <StyledText typeText="title" color="--Color-primary" tag="h1">
          Kenzie Hub
        </StyledText>
        <Link to={"/"}>Voltar</Link>
      </div>
      <form onSubmit={handleSubmit(createUser)}>
        <StyledText typeText="title" color="--gray0" tag="h2">
          Crie uma conta
        </StyledText>
        <p>rapido e grátes, vamos nessa</p>
        <label htmlFor="name">Nome</label>
        <StyledInput
          type="text"
          id="name"
          placeholder="Digite seu nome"
          {...register("name")}
        />
        <span>{errors.name?.message}</span>
        <label htmlFor="email">Email</label>
        <StyledInput
          type="email"
          id="email"
          placeholder="Digite seu email"
          {...register("email")}
        />
        <span>{errors.email?.message}</span>
        <label htmlFor="pass">Senha</label>
        <StyledInput
          type="password"
          id="pass"
          placeholder="Digite uma senha"
          {...register("password")}
        />
        <span>{errors.password?.message}</span>
        <label htmlFor="confirmPass">Confirmar senha</label>
        <StyledInput
          type="password"
          id="confirmPass"
          placeholder="Digite sua senha novamente"
          {...register("confirmPassword")}
        />
        <span>{errors.confirmPassword?.message}</span>
        <label htmlFor="bio">Bio</label>
        <StyledInput
          type="text"
          id="bio"
          placeholder="Fale sobre você"
          {...register("bio")}
        />
        <span>{errors.bio?.message}</span>
        <label htmlFor="contact">Contato</label>
        <StyledInput
          type="text"
          id="contact"
          placeholder="Opção de contato"
          {...register("contact")}
        />
        <span>{errors.contact?.message}</span>
        <label htmlFor="module">Selecionar modulo</label>
        <select id="module" {...register("course_module")}>
          <option value="Primeiro módulo (Introdução ao Frontend)">
            Primeiro módulo
          </option>
          <option value="Segundo módulo (Frontend Avançado)">
            Segundo módulo
          </option>
          <option value="Terceiro módulo (Introdução ao Backend)">
            Terceiro módulo
          </option>
          <option value="Quarto módulo (Backend Avançado)">
            Quarto módulo
          </option>
        </select>
        <BtnStyled type="submit" btnType="btn1">
          Cadastrar
        </BtnStyled>
      </form>
    </StyledMain>
  );
}
