import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import axios from "axios";

const BASE_URL = 'http://localhost:5001';

const CountryInfo = () => {
    const [country, setCountry] = useState([]);
    const {code} = useParams();

    useEffect(() => {
        const getCountries = async () => {
            try {
                const resp = await axios.post(`${BASE_URL}/countries/CountryInfo`, {
                    countryName: '',
                    countryCode: code
                })
                console.log(resp.data)
                setCountry(resp.data);
            } catch (e) {
                console.log(e)
            }
        }
        getCountries()
    }, [code])

    return (
        <>
            <h1>{code}</h1>
            <div>
                {country && country.borderCountries && (
                    <>
                        <h2>Border Countries</h2>
                        <ol>{country.borderCountries.map(el => (
                            <li>
                                <Link to={`/country/${el.countryCode}`}>{el.officialName}</Link>
                            </li>
                        ))}</ol>
                        <img src={country.flag}/>
                    </>
                )}
            </div>
        </>);
}

export default CountryInfo;