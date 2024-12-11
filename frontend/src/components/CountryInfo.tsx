import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  Container,
  Box,
  Typography,
  Card,
  CardMedia,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL || "http://localhost:5001";

const CountryInfo = () => {
  const [country, setCountry] = useState([]);
  const { code } = useParams();

  useEffect(() => {
    const getCountries = async () => {
      try {
        const resp = await axios.post(`${BASE_URL}/countries/CountryInfo`, {
          countryCode: code,
        });
        setCountry(resp.data);
      } catch (e) {
        console.log(e);
      }
    };
    getCountries();
  }, [code]);

  return (
    <Container maxWidth="lg">
      {country && country.borderCountries && (
        <>
          <Typography variant="h4" component="h1" gutterBottom>
            {country.population.country}
          </Typography>

          <Card sx={{ maxWidth: 400, marginBottom: 4 }}>
            <CardMedia
              component="img"
              height="200"
              image={country.flag}
              alt={`${country.population.country} flag`}
            />
          </Card>

          <Typography variant="h5" component="h2" gutterBottom>
            Border Countries
          </Typography>
          <Box component="div" mb={4}>
            <List>
              {country.borderCountries.map((el) => (
                <ListItem key={el.countryCode}>
                  <ListItemText
                    primary={
                      <Link
                        to={`/country/${el.countryCode}`}
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        {el.officialName}
                      </Link>
                    }
                  />
                </ListItem>
              ))}
            </List>
          </Box>

          <Typography variant="h5" component="h2" gutterBottom>
            Population Over Time
          </Typography>
          <Box sx={{ marginBottom: 4 }}>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={country.population.populationCounts}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="year"
                  label={{
                    value: "Year",
                    position: "insideBottomRight",
                    offset: -5,
                  }}
                />
                <YAxis
                  label={{
                    value: "Population",
                    angle: -90,
                    position: "insideLeft",
                  }}
                />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#8884d8"
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </Box>
        </>
      )}
    </Container>
  );
};

export default CountryInfo;
