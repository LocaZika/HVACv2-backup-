import './assets/Style/style.scss';
import { createTheme, ThemeProvider } from '@mui/material';
import { DefaultLayout } from './Layouts';
import { useEffect } from 'react';
import { useFetch } from 'Services/Hooks';
import { useDispatch } from 'react-redux';
import { webDbSlice } from './Services/Redux';

function App() {
  const api = useFetch('options');
  const dispatch = useDispatch();
  const { addDb } = webDbSlice.actions;
  const muiTheme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 576,
        md: 768,
        lg: 992,
        xl: 1200,
      },
    },
    components: {
      MuiContainer: {
        styleOverrides: {
          disableGutters: true,
          root: {
            padding: "0 15px !important",
          },
        },
      },
      MuiList: {
        styleOverrides: {
          root: {
            textTransform: "capitalize",
          },
        },
      },
    },
  });
  const getData = () => {
    api.get().then(({data}) => {
      dispatch(addDb(data));
    });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <ThemeProvider theme={muiTheme}>
        <DefaultLayout />
      </ThemeProvider>
    </>
  );
}

export default App
