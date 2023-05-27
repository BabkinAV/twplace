import React from 'react';
import { StyledCheckbox } from './Checkbox.styles';
// TODO: create checkmark as an Image component, make checked property controllable by state

const Checkbox = ({
  checked,
  handleChange,
	label,
	className
}: {
  checked?: boolean;
  handleChange?: React.ChangeEventHandler<HTMLInputElement>;
	label?: string,
	className?: string
}) => {
  return (
    <StyledCheckbox className={className}>
      <label className="checkbox__label">
        <input
          type="checkbox"
          checked={checked}
          onChange={handleChange}
          className="checkbox__input"
        />
				{label}
      </label>
    </StyledCheckbox>
  );
};

export default Checkbox;
