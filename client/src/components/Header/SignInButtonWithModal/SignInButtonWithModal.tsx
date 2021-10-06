import { Box } from "@mui/system";
import { useState } from "react";
import { useModal } from "../../../hooks/useModal";
import { useToggle } from "../../../hooks/useToggle";
import formGenerator, { IFormItem } from "../../../utils/formGenerator";
import { Button, Modal } from "../../UI";
import useStyles from "./SignInButtonWithModalStyle";
const SignInButtonWithModal = () => {
  const classes = useStyles();
  const isOpenModalSignIn = useModal(false);
  const [signInMode, flipSignInMode] = useToggle(true);
  const signIn = () => {
    isOpenModalSignIn.onClose();
  };

  const [form, setValue] = useState<IFormItem[]>([
    { name: "email", value: "" },
    { name: "password", value: "", any: { type: "password" } },
  ]);
  const [error, setError] = useState({});
  const onSubmit = (form: { [k: string]: string | boolean }) => {
    console.log(`form`, form);
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
              children={"Want to register?"}
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
