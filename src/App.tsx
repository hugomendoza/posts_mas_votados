import React from 'react';

import { Layout } from './Layout/Layout';
import { ContentCard, Header, Menu } from './components';
import { useAppDispatch, useAppSelector } from './hooks/useRedux';
import { setColorScheme, setDarkMode } from './store/ui/uiSlice';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './theme/GlobalStyles';

const App = () => {
  
  const dispatch = useAppDispatch();
  const ui = useAppSelector((state) => state.ui);
  const {text, selectedColor} = useAppSelector((state) => state.ui);

  const onChangeColorScheme = (id:number | string) => {
    dispatch(setColorScheme(id));
  }

  const onChangeDarkMode = ():void => {
    dispatch(setDarkMode())
  }

  console.log(text[selectedColor]);

  return (
    <ThemeProvider theme={ui}>
      
      <GlobalStyles />

      <Layout>
        <button onClick={onChangeDarkMode}>Modo Oscuro</button>
        <button onClick={() => onChangeColorScheme(1)}>
          cambio de color
        </button>
        <button onClick={() => onChangeColorScheme(0)}>
          cambio de color
        </button>
        <Header title="Posts más votados"/>
        <Menu />
        <ContentCard />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
