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
import { BiUserCircle } from "react-icons/bi";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { GrLocation } from "react-icons/gr";
import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthContext } from "../../contexts/AuthContext";
import { v4 as uuid } from "uuid";
import { Message } from "../../components/export";

export function SignUp() {
  document.title = "Localiza - Criar conta";
  const navigate = useNavigate();
  const [inputPassType, setInputPassType] = useState("password");
  const [openMessage, setOpenMessage] = useState(false);
  const [messageText, setMessageText] = useState(0);
  const { signup } = useContext(AuthContext);

  const handleOnSignUpFormSchema = z.object({
    name: z
      .string()
      .nonempty("O nome é obrigatório")
      .transform((name) => {
        return name
          .trim()
          .split(" ")
          .map((word) => {
            return word[0].toUpperCase().concat(word.substring(1));
          })
          .join(" ");
      }),
    email: z
      .string()
      .nonempty("O e-mail é obrigatório")
      .email("Formato de e-mail inválido")
      .toLowerCase(),
    location: z.string().nonempty("A morada é obrigatória"),
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
    resolver: zodResolver(handleOnSignUpFormSchema),
  });

  async function handleOnSignUp(data) {
    const newUser = {
      id: uuid(),
      name: data.name,
      email: data.email,
      location: data.location,
      password: data.password,
      avatarUrl: "",
      gender: "",
      age: 0,
    };

    const result = await signup(newUser);
    if (result !== null) {
      setMessageText(result);
      setOpenMessage(true);
    }
  }

  return (
    <>
      <Message
        isOpen={openMessage}
        closeMessage={() => {
          setOpenMessage(false);
        }}
      >
        {messageText === "Já existe um usuário com este e-mail" ? (
          <p> Já existe um usuário com este e-mail</p>
        ) : (
          <div>
            <p> Conta criada com sucesso </p>
            <button
              onClick={() => {
                navigate("/signin");
              }}
            >
              Ir para iniciar sessão <FaArrowRight />
            </button>
          </div>
        )}
      </Message>
      <Container>
        <LeftCard>
          <h1> Bem-Vindo ao Localiza! </h1>
          <p>Se já possui uma conta, clica no botão abaixo para entrar.</p>
          <SignInButton
            onClick={() => {
              navigate("/signin");
            }}
          >
            Entar
          </SignInButton>
        </LeftCard>
        <RightCard>
          <h1> Criar Conta </h1>
          <p> Introduza os seus dados para criar conta </p>
          <Form onSubmit={handleSubmit(handleOnSignUp)}>
            <section>
              <Input>
                <BiUserCircle />
                <input
                  type="text"
                  placeholder="Nome completo"
                  {...register("name")}
                  autoComplete={"off"}
                />
              </Input>
              {errors.name && <span> {errors.name.message} </span>}
            </section>
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
                <GrLocation />
                <input
                  type="text"
                  placeholder="Morada"
                  autoComplete={"off"}
                  {...register("location")}
                />
              </Input>
              {errors.location && <span> {errors.location.message} </span>}
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
              <SignUpButton> Criar Conta </SignUpButton>
            </div>
          </Form>
        </RightCard>
      </Container>
    </>
  );
}
