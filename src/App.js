import logo from './logo.svg';
import './App.css';
import { CustomPaper } from './components/Paper'
import MyForm from './components/MyForm'

function App() {
  return (
    <div className="App">
       <CustomPaper>
              <MyForm />
       </CustomPaper>
    </div>
  );
}

export default App;
