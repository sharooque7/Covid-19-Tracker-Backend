const axios = require("axios");

///ALL
exports.getCountryInfo = async (req, res, next) => {
  await axios
    .get("https://disease.sh/v3/covid-19/all")
    .then((response) => {
      res.send({ message: response.data });
    })
    .catch((err) => console.log(err));
};

exports.getCountry = async (req, res, next) => {
  await axios
    .get("https://disease.sh/v3/covid-19/countries")
    .then((response) => {
      res.send({ message: response.data });
    })
    .catch((err) => console.log(err));
};

exports.getCountryParticular = async (req, res, next) => {
  const countryCode = req.params.countryCode;
  console.log(countryCode);
  await axios
    .get(`https://disease.sh/v3/covid-19/countries/${countryCode}`)
    .then((response) => {
      res.send({ message: response.data });
    })
    .catch((err) => console.log(err));
};
