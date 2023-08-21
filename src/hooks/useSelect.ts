import { useState } from 'react';

interface WithId {
  _id: string;
}

/**
 * Helper hook to manage selected state
 * for a list of select inputs
 */
const useSelect = <T extends WithId>(
  itemsArr: T[]
): [
  isSelected: (_id: string) => boolean,
	isAllSelected: boolean,
  handleSelectClick: (
    event: React.ChangeEvent<HTMLInputElement>,
    name: string
  ) => void,
  handleSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void,
] => {
  const [selected, setSelected] = useState<readonly string[]>([]);

	console.log('selected: ', selected);

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = itemsArr.map(n => n._id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleSelectClick = (
    event: React.ChangeEvent<HTMLInputElement>,
    _id: string
  ) => {
    const selectedIndex = selected.indexOf(_id);
    let newSelected: readonly string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, _id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const isSelected = (_id: string) => selected.indexOf(_id) !== -1;

	const isAllSelected = itemsArr.length > 0 && selected.length === itemsArr.length;

	// TODO: implement onItemDelete method for seledted state

  return [isSelected, isAllSelected,  handleSelectClick, handleSelectAllClick];
};

export default useSelect;
