import * as React from "react";
import { Admin, Resource, ListGuesser, EditGuesser } from 'react-admin';
import { productList } from './productList.js'
import simpleRestProvider from 'ra-data-simple-rest';
import apiURL from '../apiURL.js'


const App = () => (
  <Admin dataProvider={simpleRestProvider(apiURL + 'api/admin')}>
    <Resource name="products" list={productList} />
  </Admin>
);

export default App;