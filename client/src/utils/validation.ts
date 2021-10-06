export const required = (text: string) => !text.trim().length;
export const minlength = (text: string, { min }: { min: number }) =>
  text.trim().length < min;
export const maxlength = (text: string, { max }: { max: number }) =>
  text.trim().length > max;
export const isChecked = (value: boolean) => !value;
export const validateEmail = (email: string) =>
  !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email.toLowerCase()
  );
