import styles from "./Input.module.scss";
import { FormStateInterface } from "../Form/Form";

interface InputPropsInterface {
  label: string;
  value: string;
  stateKey: keyof FormStateInterface;
  action: (par1: keyof FormStateInterface, par2: string) => void;
}

const Input = (props: InputPropsInterface) => {
  const { label, value, stateKey, action } = props;

  return (
    <div className={styles.input}>
      <p>{label}:</p>
      <input
        type="text"
        value={value}
        onChange={(e) => action(stateKey, e.target.value)}
      />
    </div>
  );
};

export default Input;
