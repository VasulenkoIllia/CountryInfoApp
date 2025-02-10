import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import PopulationChart from './PopulationChart';
import './CountryInfo.css';

interface CountryInfo {
  name: string;
  flag: string;
  borders: { countryCode: string; commonName: string }[];
  population: { year: number; value: number }[];
}

const CountryInfo = () => {
  const { code } = useParams<{ code: string }>();
  const [countryInfo, setCountryInfo] = useState<CountryInfo | null>(null);

  useEffect(() => {
    const fetchCountryInfo = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/countries/info/${code}`);
        setCountryInfo(response.data);
      } catch (error) {
        console.error('Failed to fetch country info:', error);
      }
    };
    fetchCountryInfo();
  }, [code]);

  if (!countryInfo) return <div className="loading">Loading...</div>;

  return (
    <div className="country-info">
      <h1>{countryInfo.name}</h1>
      <img src={countryInfo.flag} alt={`${countryInfo.name} flag`} className="country-flag" />
      <h2>Border Countries</h2>
      <ul className="border-countries">
        {countryInfo.borders.map((border, index) => (
          <li key={index}>
            <a href={`/country/${border.countryCode}`}>{border.commonName}</a>
          </li>
        ))}
      </ul>
      <h2>Population Chart</h2>
      <div className="chart-container">
        <PopulationChart populationData={countryInfo.population} />
      </div>
    </div>
  );
};

export default CountryInfo;
