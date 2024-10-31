export type AuthFormState = {
  ok: boolean;
  errors?: {
    email?: string[];
    password?: string[];
  };
};

export type SignInError = keyof IntlMessages["SignInPage"]["errors"];
export type SignUpError = keyof IntlMessages["SignUnPage"]["errors"];
