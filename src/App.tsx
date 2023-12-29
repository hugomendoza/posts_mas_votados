import React from 'react';

import { Layout } from './Layout/Layout';
import { ContentCard, Header, Menu } from './components';

const App = () => {
  return (
    <Layout>
      <Header title="Posts más votados" />
      <Menu />
      <ContentCard />
    </Layout>
  );
}

export default App;
