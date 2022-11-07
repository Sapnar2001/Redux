
import React, {Component} from 'react';
import Container from './src/components/Container';
import { Provider } from 'react-redux';
import store from './src/redux/store';
export default class App extends Component {
  render() {
    return (
    <Provider store={store}>
    <Container />
     </Provider>
    )
  }
}
