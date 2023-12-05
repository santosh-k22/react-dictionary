import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Dictionary from '../components/Dictionary';

function App() {
  return (
    <div>
      <div class="text-center my-3">
        <h1 class="fw-bold display-1">React Dictionary</h1>
      </div>  
        <Dictionary defaultKeyword="hello"/>
      <div class="my-3 text-center">
        <div>Made with ❤️ by <a href="https://github.com/santosh-k22/">Kothapalli Santosh</a></div>
        <div><a href="https://github.com/santosh-k22/react-dictionary">Project Github Repo</a></div>
      </div>
    </div>
  );
}

export default App