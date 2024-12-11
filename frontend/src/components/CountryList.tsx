import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
} from '@mui/material';

const BASE_URL = import.meta.env.VITE_BASE_URL || 'http://localhost:5001';

const CountryList = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const getCountries = async () => {
      try {
        const resp = await axios.get(
          `${BASE_URL}/countries/AvailableCountries`,
        );
        console.log(resp.data);
        setCountries(resp.data);
      } catch (e) {
        console.log(e);
      }
    };
    getCountries();
  }, []);

  return (
    <>
      <Typography
        variant="h4"
        gutterBottom
      >
        Country List
      </Typography>
      <List>
        {countries.map(country => (
          <ListItem
            key={country.countryCode}
            disablePadding
          >
            <ListItemButton
              component={Link}
              to={`/country/${country.countryCode}`}
            >
              <ListItemText primary={country.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default CountryList;
