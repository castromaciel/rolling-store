import { FC } from 'react';
import 'antd/dist/antd.css'
import './App.css';
import HomeScreen from './pages/HomeScreen';

const App: FC = () => {
  return (
    <main className="App">
      <HomeScreen />
    </main>
  );
}

export default App;
