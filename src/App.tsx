import { Button } from "@/components/ui/button"

import './App.css'

function App() {

  return (
      <div className="text-center">
        <Button onClick={() => alert("It works!")}>
          Click Me
        </Button>
      </div>
  )
}

export default App
