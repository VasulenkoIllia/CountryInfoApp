const axios = require('axios');

const BASE_URL = 'https://date.nager.at/api/v3';

const fetchAvailableCountries = async () => {
  const response = await axios.get(`${BASE_URL}/AvailableCountries`);
  return response.data;
};

const fetchCountryInfo = async (countryCode) => {
  const [countryData, flagData] = await Promise.all([
    axios.get(`${BASE_URL}/CountryInfo/${countryCode}`).catch(console.log),
    axios.post(`https://countriesnow.space/api/v0.1/countries/flag/images`, {iso2: countryCode}).catch(console.log),
  ]);

  const populationData = await axios.post('https://countriesnow.space/api/v0.1/countries/population', { country: countryData.data.commonName }).catch(console.log)
  console.log(countryData.data, populationData.data, flagData.data)

  return {
    name: countryData.data.commonName,
    borders: countryData.data.borders,
    population: populationData.data.data.populationCounts,
    flag: flagData.data.data.flag,
  };
};

module.exports = { fetchAvailableCountries, fetchCountryInfo };
