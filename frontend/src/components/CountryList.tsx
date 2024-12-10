import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

const BASE_URL = 'http://localhost:5001'

const CountryList = () => {
    const [countries, setCountries] = useState([])

    useEffect(() => {
        const getCountries = async () => {
            try {
                const resp = await axios.get(`${BASE_URL}/countries/AvailableCountries`)
                setCountries(resp.data);
            } catch (e) {
                console.log(e)
            }
        }
        getCountries()
    }, [])

    return  (<>
        <p>List</p>
        <ul>
            {countries.map(country => (
                <li key={country.countryCode}>
                    <Link to={`/country/${country.countryCode}`}>{country.name}</Link>
                </li>
            ))}
        </ul>
    </>);
}

export default CountryList;