import './App.scss';
import Greet from './Greet';

const App = (): JSX.Element => (
  <div>
    <Greet heroName="Superman" name="Clark">
      This is children props
    </Greet>
  </div>
);

export default App;
