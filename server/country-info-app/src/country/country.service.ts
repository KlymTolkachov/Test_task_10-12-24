import { Injectable, NotFoundException } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class CountryService {
  async availableCountries() {
    const { data: countries } = await axios.get(
      `${process.env.DATE_NAGER_API_URL}/AvailableCountries`,
    );
    if (!countries) {
      throw new NotFoundException('countries not found');
    }
    return countries;
  }

  async getCountryInfo(countryCode: string) {
    const borderCountries = await this.getBorderCountries(countryCode);
    const population = await this.getPopulationCounts(countryCode);
    const flag = await this.getCountryFlag(countryCode);

    if (!borderCountries || !flag || !population) {
      throw new NotFoundException('Can not get info about country');
    }
    return { borderCountries, flag, population };
  }

  async getPopulationCounts(countryCode: string) {
    const countries = await this.availableCountries();
    const { name } = countries.find(
      country => country.countryCode === countryCode,
    );

    const {
      data: { data: population },
    } = await axios.post(
      `https://countriesnow.space/api/v0.1/countries/population`,
      { country: name },
    );

    if (!population) {
      throw new NotFoundException('Can not get info about population');
    }
    return population;
  }

  async getBorderCountries(countryCode: string) {
    const {
      data: { borders: borderCountries },
    } = await axios.get(
      `${process.env.DATE_NAGER_API_URL}/CountryInfo/${countryCode}`,
    );

    if (!borderCountries) {
      throw new NotFoundException('Border Countries not found');
    }

    return borderCountries;
  }

  async getCountryFlag(countryCode: string) {
    const {
      data: {
        data: { flag: flagUrl },
      },
    } = await axios.post(
      'https://countriesnow.space/api/v0.1/countries/flag/images',
      { iso2: countryCode },
    );

    if (!flagUrl) {
      throw new NotFoundException('flag not found');
    }

    return flagUrl;
  }
}
