const { fetchAvailableCountries, fetchCountryInfo } = require('../services/countryService');

const getAvailableCountries = async (req, res) => {
  try {
    const countries = await fetchAvailableCountries();
    res.json(countries);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch countries' });
  }
};

const getCountryInfo = async (req, res) => {
  try {
    const { countryCode } = req.params;
    const countryInfo = await fetchCountryInfo(countryCode);
    res.json(countryInfo);
    console.log(countryInfo)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch country info' });
  }
};

module.exports = { getAvailableCountries, getCountryInfo };
