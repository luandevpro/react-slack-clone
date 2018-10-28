import { createContext } from "react";

export const AuthorContext = createContext({
	hello: "he",
});

export const { Provider, Consumer } = AuthorContext;
