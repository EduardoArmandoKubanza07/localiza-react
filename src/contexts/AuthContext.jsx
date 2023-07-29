import { createContext, useCallback } from "react";
import api from "../services/config";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext({});

export function AuthContextProcider({ children }) {
  const naviagte = useNavigate();
  const getUsers = useCallback(async () => {
    const response = await api.get("users");
    return response.data;
  }, []);

  const setUsers = useCallback(async (user) => {
    await api.post("users", user);
  }, []);

  const navigateTo = useCallback((url) => {
    return naviagte(url);
  }, []);

  async function signin(email, password) {
    let result = null;
    await getUsers().then((users) => {
      let token = false;
      users.forEach((user) => {
        if (user.email === email && user.password === password) {
          token = uuid();
          sessionStorage.setItem("token", JSON.stringify(token));
          sessionStorage.setItem("userValid", JSON.stringify(user));

          return navigateTo("/home");
        }
      });

      if (!token) {
        result = "email ou senha incorrectos";
        return;
      }
    });

    return result;
  }

  async function signup(newUser) {
    let result = null;
    await getUsers().then(async (users) => {
      let controller = true;
      users.forEach((user) => {
        if (user.email === newUser.email) {
          result = "Já existe um usuário com este e-mail";
          controller = false;
          return;
        }
      });

      if (controller) {
        await setUsers(newUser).then(() => {
          result = "Conta criada com sucesso";
        });
      }
    });
    return result;
  }

  function signout() {
    navigateTo("/signin");
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("userValid");
  }

  return (
    <AuthContext.Provider value={{ signin, signout, signup }}>
      {children}
    </AuthContext.Provider>
  );
}
