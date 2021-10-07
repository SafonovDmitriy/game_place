import { Box, TextField } from "@material-ui/core";
import { FormHelperText } from "@mui/material";
import { ChangeEvent, Key, ReactChild, ReactNode } from "react";
import { Button, Checkbox } from "../components/UI";

enum EFormGeneratorTypes {
  Text = "text",
  Checkbox = "checkbox",
}
interface ITitleGroups {
  [key: string | number]: string;
}
interface ISubmite {
  [key: string]: string;
}
interface IAny {
  [key: string]: string | boolean | number;
}

interface IValidationFunc {
  func: Function;
  message: string;
  any?: IAny;
}
export interface IFormItem {
  name: string;
  value: string | boolean;
  group?: number;
  type?: EFormGeneratorTypes;
  validationFunc?: IValidationFunc[];
  any?: IAny;
}

interface IError {
  [key: string]: string;
}
interface IFormGenerator {
  form: IFormItem[];
  error?: IError;
  setValue: (value: IFormItem[]) => void;
  setError?: (error: IError) => void;
  className?: string;
  submitText?: string;
  titleGroups?: ITitleGroups;
  onSubmit: (form: ISubmite) => void;
  formError?: string;
}
interface IGroupFieldsJSX {
  [key: number | string]: ReactChild[] | ReactNode[];
}

export const formGeneratorTypes = {
  text: EFormGeneratorTypes.Text,
  checkbox: EFormGeneratorTypes.Checkbox,
};

const formGenerator = ({
  form,
  error,
  setValue,
  setError,
  className,
  submitText,
  titleGroups,
  onSubmit,
  formError,
}: IFormGenerator) => {
  const _formJSX: ReactNode[] = [];
  const _groupFieldsJSX: IGroupFieldsJSX = {};

  const createField = (field: IFormItem) => (
    <TextField
      key={field.name as Key}
      name={field.name}
      value={field.value}
      error={error && !!error[field.name]}
      helperText={error && error[field.name]}
      onChange={changeFieldHendler}
      {...field.any}
    />
  );
  const createCheckBox = (field: IFormItem) => (
    <Checkbox
      key={field.name}
      name={field.name}
      checked={typeof field.value === "boolean" && field.value}
      onChange={changeFieldHendler}
      {...field.any}
    />
  );

  const onSubmitHendler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    validationField();

    const _form: { [key: string]: string } = form.reduce((acc, item) => {
      Object.assign(acc, { [item.name]: item.value });
      return acc;
    }, {});
    let formIsNotEmpty = false;
    for (const key in _form) {
      if (!_form[key].length) {
        return;
      }
      formIsNotEmpty = true;
    }
    if (formIsNotEmpty) {
      onSubmit(_form);
    }
  };

  const validationField = (_form: IFormItem[] = form) => {
    let _errors: IError = { ...error };
    for (const field of _form) {
      if (field.validationFunc) {
        for (const valid of field.validationFunc) {
          console.log({ VALUE: field.value });
          const isValid =
            !!valid.func && valid.func(field.value, { ...valid?.any });
          if (isValid) {
            Object.assign(_errors, { [field.name]: valid.message });
            break;
          } else {
            Object.assign(_errors, { [field.name]: "" });
          }
        }
      }
    }
    setError && setError(_errors);
  };
  const whereValue = (item: IFormItem) => {
    switch (item.type) {
      case formGeneratorTypes.checkbox:
        return "checked";
      default:
        return "value";
    }
  };
  const changeFieldHendler = (e: ChangeEvent<HTMLInputElement>) => {
    let indexChangesItem: number = -1;
    const _form: IFormItem[] = form.map((item, idx) => {
      if (item.name === e.target.name) {
        indexChangesItem = idx;
        return { ...item, value: e.target[whereValue(item)] };
      }
      return item;
    });

    validationField([_form[indexChangesItem]]);
    setValue(_form);
  };
  const getComponent = (field: IFormItem) => {
    switch (field.type) {
      case formGeneratorTypes.checkbox:
        return createCheckBox(field);

      default:
        return createField(field);
    }
  };
  for (const field of form) {
    let numberGroup = field.group || 100;
    if (!_groupFieldsJSX[numberGroup]) {
      _groupFieldsJSX[numberGroup] = [];
    }
    _groupFieldsJSX[numberGroup].push(getComponent(field));
  }

  for (const key in _groupFieldsJSX) {
    if (key !== "100") {
      _formJSX.push(
        <Box key={key} display="contents">
          {titleGroups && titleGroups[key] ? (
            <>
              <h2 children={titleGroups[key]} />
              <Box
                display={_groupFieldsJSX[key].length > 1 ? "flex" : "contents"}
                flexDirection="row"
                justifyContent="space-between"
              >
                {_groupFieldsJSX[key].map((item) => item)}
              </Box>
            </>
          ) : (
            _groupFieldsJSX[key].map((item) => item)
          )}
        </Box>
      );
    } else {
      _formJSX.push(_groupFieldsJSX[key].map((item) => item));
    }
  }
  const disabledBtn: boolean = error
    ? Object.values(error).findIndex((item) => !!item.length) !== -1
    : false;

  return form.length ? (
    <form className={className} onSubmit={onSubmitHendler}>
      {_formJSX}
      {submitText && (
        <Button disabled={disabledBtn} type="submit" children={submitText} />
      )}
      <FormHelperText error children={formError} />
    </form>
  ) : null;
};
export default formGenerator;
