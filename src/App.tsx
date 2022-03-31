import './App.scss';
import FunctionClick from './FunctionClick';

const App = (): JSX.Element => (
  <div className="App">
    <FunctionClick eventName="Click me event!" />
  </div>
);

export default App;
