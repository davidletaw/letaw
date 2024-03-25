import reactLogo from './assets/react.svg'
import './App.css'
import ApiComponent from "./components/ApiComponent.tsx";

function App() {

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <ApiComponent />
    </>
  )
}

export default App
