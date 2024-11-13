import es from "./messages/es.json";

type Messages = typeof es;

declare global {
  // general use
  interface Props {
    className?: string;
  }
  type Children = Readonly<{
    children: React.ReactNode;
  }>;
  type PropsWithChildren = Props & Children;

  // form
  type FormState = {
    message?: string;
    ok?: boolean;
  };

  // page props
  type Params<K> = Promise<{ [key in K]: string }>;
  type EmptyParams = Params<never>;
  type SearchParams = Promise<{ [key: string]: string | undefined }>;
  type QueryParams = {
    search?: string;
    take?: number;
  };

  // i18n
  interface IntlMessages extends Messages {}
  export type ErrorKey = keyof IntlMessages["Errors"];
}
