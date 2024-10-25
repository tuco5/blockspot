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

  // i18n
  interface IntlMessages extends Messages {}
}
