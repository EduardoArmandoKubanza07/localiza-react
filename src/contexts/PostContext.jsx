import { createContext, useCallback } from "react";
import api from "../services/config";

export const PostContext = createContext({});

export function PostContextProvider({ children }) {
  const getPosts = useCallback(async () => {
    const response = await api.get("posts");
    return response.data;
  }, []);

  const setPosts = useCallback(async (newPost) => {
    await api.post("posts", newPost);
  }, []);

  const setNotification = useCallback(async (newNotification) => {
    newNotification.category = "post";
    await api.post("notifications", newNotification);
  }, []);

  const createNotification = useCallback(async (notification) => {
    setNotification(notification);
  }, []);

  const verifyData = useCallback(async (name, gender) => {
    let returnData = null;

    await getPosts().then((posts) => {
      posts.forEach((post) => {
        if (
          post.name.toLowerCase() === name.trim().toLowerCase() &&
          post.gender === gender
        )
          return (returnData = "Encontrou");
      });
    });

    return returnData;
  }, []);

  const createPost = useCallback(async (newPost) => {
    await setPosts(newPost);
    createNotification(newPost);
  }, []);

  const getDateActual = useCallback(() => {
    const date = new Date();

    const day = date.getDate();
    const year = date.getFullYear();

    let month = date.getMonth();
    month = getMonth(month);

    return `${day} de ${month} de ${year}`;
  });

  const getMonth = useCallback((num) => {
    switch (num) {
      case 0:
        return "Janeiro";
      case 1:
        return "Feveiro";
      case 2:
        return "Março";
      case 3:
        return "Abril";
      case 4:
        return "Maio";
      case 5:
        return "Junho";
      case 6:
        return "Julho";
      case 7:
        return "Agosto";
      case 8:
        return "Setembro";
      case 9:
        return "Outubro";
      case 10:
        return "Novembro";
      case 11:
        return "Dezembro";
      default:
        return "";
    }
  }, []);

  return (
    <PostContext.Provider value={{ verifyData, createPost, getDateActual }}>
      {children}
    </PostContext.Provider>
  );
}
