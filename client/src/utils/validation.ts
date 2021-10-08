export interface GenericValidator<T1, T2> {
  (arg1: T1, arg2: T2): boolean;
}

export const required: GenericValidator<string, never> = (text) =>
  !text.trim().length;
export const minlength: GenericValidator<string, { min: number }> = (
  text,
  { min }
) => text.trim().length < min;
export const maxlength: GenericValidator<string, { max: number }> = (
  text,
  { max }
) => text.trim().length > max;
export const isChecked: GenericValidator<boolean, never> = (value) => !value;
export const validateEmail: GenericValidator<string, never> = (email) =>
  !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email.toLowerCase()
  );
