const convertToCelsius = function(F) {
  let C = ((F - 32) / (9 / 5));

  C = (Math.round(C * 10)) / 10;

  return C;
};

const convertToFahrenheit = function(C) {
  let F = (C * (9 / 5)) + 32;

  F = (Math.round(F * 10)) / 10;

  return F;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
