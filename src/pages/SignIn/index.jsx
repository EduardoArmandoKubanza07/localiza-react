import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  LeftCard,
  RightCard,
  SignUpButton,
  SignInButton,
  Input,
  Form,
} from "./styles";
import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthContext } from "../../contexts/AuthContext";
import { Message } from "../../components/export";

export function SignIn() {
  document.title = "Localiza - Entrar ";
  const [inputPassType, setInputPassType] = useState("password");
  const [openMessage, setOpenMessage] = useState(false);
  const { signin } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleOnSignInFormSchema = z.object({
    email: z
      .string()
      .nonempty("O e-mail é obrigatório")
      .email("Formato de e-mail inválido"),
    password: z
      .string()
      .nonempty("A senha é obrigatória")
      .min(6, "O senha precisa de no mínimo 6 caracteres"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(handleOnSignInFormSchema),
  });
  async function handleOnSignIn(data) {
    const result = await signin(data.email, data.password);
    if (result !== null) setOpenMessage(true);
  }

  return (
    <>
      <Message
        isOpen={openMessage}
        closeMessage={() => {
          setOpenMessage(false);
        }}
      >
        <p> E-mail ou senha incorrectos </p>
      </Message>
      <Container>
        <LeftCard>
          <h1> Bem-Vindo ao Localiza! </h1>
          <p>
            Se não possuio uma conta, clica no botão abaixo para criar conta.
          </p>
          <SignUpButton
            onClick={() => {
              navigate("/signup");
            }}
          >
            Criar Conta
          </SignUpButton>
        </LeftCard>
        <RightCard>
          <h1> Iniciar Sessão </h1>
          <p> Introduza os seus dados para iniciar sessão </p>
          <Form onSubmit={handleSubmit(handleOnSignIn)}>
            <section>
              <Input>
                <MdOutlineMail />
                <input
                  type="email"
                  placeholder="E-mail"
                  {...register("email")}
                  autoComplete={"off"}
                />
              </Input>
              {errors.email && <span> {errors.email.message} </span>}
            </section>

            <section>
              <Input>
                <RiLockPasswordLine />
                <input
                  type={inputPassType}
                  placeholder="Senha"
                  {...register("password")}
                  autoComplete={"off"}
                />
              </Input>
              {errors.password && <span> {errors.password.message} </span>}
            </section>
            <div>
              <div>
                <input
                  type="checkbox"
                  id="checkPassword"
                  onChange={() => {
                    setInputPassType(
                      inputPassType === "password" ? "text" : "password"
                    );
                  }}
                />
                <label htmlFor="checkPassword"> Mostar senha </label>
              </div>
              <SignInButton> Entrar </SignInButton>
            </div>
          </Form>
        </RightCard>
      </Container>
    </>
  );
}
