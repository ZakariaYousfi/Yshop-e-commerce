import * as React from "react";
import { Admin, Resource, ListGuesser, EditGuesser } from 'react-admin';
import { productList } from './productList.js'
import jsonServerProvider from 'ra-data-json-server';
import apiURL from '../apiURL.js'


const App = () => (
  <Admin dataProvider={jsonServerProvider('https://my-json-server.typicode.com/ZakariaYousfi/onetwothree')}>
    <Resource name="products" list={ListGuesser} edit={EditGuesser} />
    <Resource name="users" list={ListGuesser} edit={EditGuesser} />
    <Resource name="commands" list={ListGuesser} edit={EditGuesser} />
  </Admin>
);

export default App;