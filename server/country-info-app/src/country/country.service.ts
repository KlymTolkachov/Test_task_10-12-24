import {Injectable, NotFoundException} from '@nestjs/common';
import axios from "axios";
import {CountryDto} from "./dto/country.dto";

@Injectable()
export class CountryService {
    async availableCountries() {
        const {data: countries} = await axios.get('https://date.nager.at/api/v3/AvailableCountries');

        return countries;
    }

    async countryInfo(countryDto: CountryDto) {
        const {data: {borders: borderCountries} } = await axios.get(`https://date.nager.at/api/v3/CountryInfo/${countryDto.countryCode}`);
        // const {data: {data: {populationCounts: population}}} = await axios.post(`https://countriesnow.space/api/v0.1/countries/population`, {country: countryDto.countryName});
        const {data: {data: {flag}}} = await axios.post('https://countriesnow.space/api/v0.1/countries/flag/images', { iso2: countryDto.countryCode });

        if (!borderCountries || !flag) {
            throw new NotFoundException('Country not Found')
        }
        return { borderCountries, flag }
    }
}
