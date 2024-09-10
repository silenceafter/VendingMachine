import React, { useEffect, useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const BrandDropdown = ({ onChange }) => {
    const [options, setOptions] = useState([]);
    const [selectedOption, setSelectedOption] = useState('');

    useEffect(() => {
        // Загрузка данных для выпадающего списка
        const fetchData = async () => {
            const response = await fetch('/brands/get-brands/');
            const data = await response.json();
            setOptions(data);
        };
        fetchData();
    }, []);

    const handleChange = (event) => {
        const value = event.target.value;
        setSelectedOption(value);
        const option = options.find(option => option.id === value);
        onChange(option ? option.name : '');
    };

    return (
        <FormControl fullWidth>
            <InputLabel id="select-label">Выберите бренд</InputLabel>
            <Select
                labelId="select-label"
                value={selectedOption}
                onChange={handleChange}
                required
                sx={{ textAlign: 'left', mb: 2, mr: 2 }}
            >
                {options.map((option) => (
                    <MenuItem key={option.id} value={option.id}>
                        {option.name}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

export { BrandDropdown };
