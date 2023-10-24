import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Frequency } from '@/enums';

function StackedBarChartDropDown({ defaultValue }: { defaultValue: Frequency}) {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [selectedValue, setSelectedValue] = useState(defaultValue);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (value: Frequency) => {
    setSelectedValue(value);
    handleClose();
  };

  return (
    <div>
      <Button
        variant="outlined"
        size="small"
        className="border-2 border-black text-white"
        onClick={handleClick}
        endIcon={<ArrowDropDownIcon />}
      >
        {selectedValue}
      </Button>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => handleMenuItemClick(Frequency.Weekly)}>wöchentlich</MenuItem>
        <MenuItem onClick={() => handleMenuItemClick(Frequency.Monthly)}>monatlich</MenuItem>
        <MenuItem onClick={() => handleMenuItemClick(Frequency.Yearly)}>jährlich</MenuItem>
      </Menu>
    </div>
  );
}

export default StackedBarChartDropDown;
