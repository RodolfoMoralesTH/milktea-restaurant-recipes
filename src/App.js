import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import HomeScreen from './screens/HomeScreen'
import TeaScreen from './screens/TeaScreen'
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Route path="/" component={HomeScreen} exact />
      <Route path="/product/:id" component={TeaScreen} />
    </Router>
  );
}

export default App;
