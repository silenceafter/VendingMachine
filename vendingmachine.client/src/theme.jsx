import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#4caf50', //зеленый цвет кнопки по умолчанию
    },
    secondary: {
      main: '#ffeb3b', //желтый цвет для кнопки "Назад"
    },
  },
});