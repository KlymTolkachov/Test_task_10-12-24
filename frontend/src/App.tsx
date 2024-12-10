import CountryList from "./components/CountryList";
import CountryInfo from "./components/CountryInfo";
import {Route, Routes} from "react-router-dom";

function App() {
    return (
        <>
            <h1>Welcome to Country Info App</h1>
            <Routes>
                <Route path="/" element={<CountryList/>}/>
                <Route path="/country/:code" element={<CountryInfo/>}/>
            </Routes>
        </>
    )
}

export default App
