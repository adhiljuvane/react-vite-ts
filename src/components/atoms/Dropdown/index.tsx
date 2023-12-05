import styles from "./Dropdown.module.scss";

const Dropdown = ({ options, onSelect, value }: DropdownProps) => {
  const handleSelectChange = (event: MouseEvent) => {
    const target = event.target;
    const selectedValue = target?.value || "";
    onSelect(selectedValue);
  };

  return (
    <div className={styles.dropdownContent}>
      <label htmlFor="dropdown" className={styles.label}>
        Select an option:
      </label>
      <select
        id="dropdown"
        value={value}
        onChange={(event: MouseEvent) => handleSelectChange(event)}
      >
        <option value="">Select...</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

interface DropdownProps {
  options: { label: string; value: string }[];
  onSelect: (selectedValue: string) => void;
  value: string;
}

export default Dropdown;
