import styles from "./Select.module.scss";
import { FormStateInterface } from "../Form/Form";

interface SelectProps {
  label: string;
  list: string[];
  action: (par1: keyof FormStateInterface, par2: string) => void;
}

const Select = (props: SelectProps) => {
  const { label, list, action } = props;

  return (
    <div className={styles.select}>
      <p>{label}:</p>
      <select
        defaultValue={list[0]}
        onChange={(e) => action("genere", e.target.value)}
      >
        {list.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
