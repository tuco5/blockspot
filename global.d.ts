import es from "./messages/es.json";

type Messages = typeof es;

declare global {
  // general use
  interface Props {
    className?: string;
  }
  interface PropsWithChildren extends Props {
    children?: React.ReactNode;
  }
  type FormState = {
    message?: string;
    ok?: boolean;
  };

  // i18n
  interface IntlMessages extends Messages {}
  export type ErrorKey = keyof IntlMessages["Errors"];
}
