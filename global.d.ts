import es from "./messages/es.json";

type Messages = typeof es;

declare global {
  // general use
  interface Props {
    className?: string;
  }
  interface Children {
    children: React.ReactNode;
  }
  type PropsWithChildren = Props & Children;

  // form
  type FormState = {
    message?: string;
    ok?: boolean;
  };

  // page props
  type Params = Promise<{ slug: string }>;
  type SearchParams = Promise<{ [key: string]: string | undefined }>;
  type QueryParams = {
    search?: string;
    take?: number;
  };

  // i18n
  interface IntlMessages extends Messages {}
  export type ErrorKey = keyof IntlMessages["Errors"];
}
