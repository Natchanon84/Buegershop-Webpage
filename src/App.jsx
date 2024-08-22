import "./App.css"
import Navbar from "./components/Navbar/Navbar"
import Section1 from "./components/Content/Section1"
import MultiFilters from "./components/Multifilter/MultiFilter"

function App () {

  return (
    <div>
      <Navbar />
      <Section1 />
      <MultiFilters />
    </div>
  )
}

export default App