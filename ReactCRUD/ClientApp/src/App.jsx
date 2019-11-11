import React from 'react';
import { Route } from 'react-router-dom'
import { Layout } from './components/Layout';
import { FetchEmployee } from './components/FetchEmployee';
import { Counter } from './components/Counter';

import './custom.css'
import {AddEmployee} from "./components/AddEmployee";

export default class App extends React.Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={FetchEmployee} />
        <Route path='/counter' component={Counter} />
        <Route path='/addemployee' component={AddEmployee} />
        <Route path='/employee/edit/:empid' component={AddEmployee} />
      </Layout>
    );
  }
}
