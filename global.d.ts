import es from "./messages/es.json";

type Messages = typeof es;

declare global {
  interface IntlMessages extends Messages {}
}
