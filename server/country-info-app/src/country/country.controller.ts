import {Body, Controller, Get, Post} from '@nestjs/common';
import {CountryService} from "./country.service";
import {CountryDto} from "./dto/country.dto";

@Controller('countries')
export class CountryController {
    constructor(private readonly countryService: CountryService) {
    }

    @Get('AvailableCountries')
    availableCountries() {
        return this.countryService.availableCountries();
    }

    @Post('CountryInfo')
    countryInfo(@Body() countryDto: CountryDto) {
        return this.countryService.countryInfo(countryDto);
    }

}
