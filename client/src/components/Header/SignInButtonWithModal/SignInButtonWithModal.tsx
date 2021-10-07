import { Box } from "@mui/system";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../../hooks/useModal";
import { useToggle } from "../../../hooks/useToggle";
import { IForm } from "../../../redux/actions/user/IUser";
import {
  signInAuth,
  signUpAuth,
} from "../../../redux/actions/user/userActions";
import formGenerator, { IFormItem } from "../../../utils/formGenerator";
import { minlength, required, validateEmail } from "../../../utils/validation";
import { Button, Modal } from "../../UI";
import useStyles from "./SignInButtonWithModalStyle";
const SignInButtonWithModal = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const isOpenModalSignIn = useModal(false);
  const [signInMode, flipSignInMode] = useToggle(true);
  const signIn = () => {
    isOpenModalSignIn.onClose();
  };

  const [form, setValue] = useState<IFormItem[]>([
    {
      name: "email",
      value: "",
      validationFunc: [
        { func: required, message: "The field is empty" },
        { func: validateEmail, message: "Enter real email" },
      ],
    },
    {
      name: "password",
      value: "",
      any: { type: "password" },
      validationFunc: [
        { func: required, message: "The field is empty" },
        {
          func: minlength,
          message: "Minimum password length 6 characters",
          any: { min: 6 },
        },
      ],
    },
  ]);
  const [error, setError] = useState({});
  const onSubmit = (form: IForm) => {
    console.log(`form`, form);
    console.log(`signInMode`, signInMode);
    if (signInMode) {
      dispatch(signInAuth(form));
    } else {
      dispatch(signUpAuth(form));
    }
  };

  return (
    <Box>
      <Modal
        children={
          <Box className={classes.modal}>
            <h1 children={signInMode ? "Sign In" : "Sign Up"}></h1>
            {formGenerator({
              form,
              onSubmit,
              setValue,
              error,
              setError,
              submitText: signInMode ? "Sign In" : "Sign Up",
              className: classes.form,
            })}
            <Button
              onClick={flipSignInMode}
              children={signInMode ? "Want to register ?" : "Authorize ?"}
              className={classes.flipModeBtn}
            />
          </Box>
        }
        {...isOpenModalSignIn}
      />

      <Button onClick={signIn} children={"sign In"} />
    </Box>
  );
};
export default SignInButtonWithModal;
