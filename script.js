// Load JSON data from files (this would typically be done via an API or file loading in a real scenario)
const corruptionIndexData = 
    {
    "Denmark": 88,
    "New Zealand": 88,
    "Finland": 88,
    "Singapore": 85,
    "Sweden": 85,
    "Switzerland": 84,
    "Norway": 85,
    "Netherlands": 82,
    "Germany": 80,
    "Luxembourg": 81,
    "Australia": 73,
    "Canada": 74,
    "Hong Kong": 76,
    "United Kingdom": 78,
    "Austria": 74,
    "Belgium": 73,
    "Estonia": 74,
    "Iceland": 74,
    "Japan": 73,
    "Ireland": 74,
    "United Arab Emirates": 69,
    "Uruguay": 73,
    "France": 71,
    "Bhutan": 68,
    "Chile": 67,
    "United States": 67,
    "Seychelles": 70,
    "Taiwan": 68,
    "Barbados": 65,
    "Bahamas": 64,
    "Qatar": 63,
    "South Korea": 62,
    "Portugal": 62,
    "Lithuania": 61,
    "Spain": 61,
    "Botswana": 55,
    "Brunei": 60,
    "Israel": 59,
    "Slovenia": 57,
    "Saint Vincent and the Grenadines": 59,
    "Cape Verde": 58,
    "Costa Rica": 58,
    "Cyprus": 53,
    "Latvia": 59,
    "Georgia": 55,
    "Poland": 56,
    "Saint Lucia": 56,
    "Dominica": 55,
    "Czech Republic": 54,
    "Oman": 52,
    "Rwanda": 53,
    "Grenada": 53,
    "Italy": 56,
    "Malta": 54,
    "Mauritius": 54,
    "Saudi Arabia": 53,
    "Malaysia": 48,
    "Namibia": 49,
    "Greece": 49,
    "Armenia": 49,
    "Jordan": 49,
    "Slovakia": 52,
    "Belarus": 41,
    "Croatia": 47,
    "Cuba": 46,
    "São Tomé and Príncipe": 45,
    "Montenegro": 46,
    "Senegal": 43,
    "Bulgaria": 42,
    "Hungary": 43,
    "Jamaica": 44,
    "Romania": 45,
    "South Africa": 44,
    "Tunisia": 44,
    "Ghana": 43,
    "Maldives": 40,
    "Vanuatu": 45,
    "Argentina": 38,
    "Bahrain": 42,
    "China": 45,
    "Kuwait": 43,
    "Solomon Islands": 43,
    "Benin": 42,
    "Guyana": 39,
    "Lesotho": 38,
    "Burkina Faso": 42,
    "India": 40,
    "Morocco": 39,
    "Timor-Leste": 41,
    "Trinidad and Tobago": 41,
    "Turkey": 38,
    "Colombia": 39,
    "Ecuador": 36,
    "Brazil": 38,
    "Ethiopia": 39,
    "Kazakhstan": 37,
    "Peru": 36,
    "Serbia": 38,
    "Sri Lanka": 37,
    "Suriname": 39,
    "Tanzania": 39,
    "Gambia": 37,
    "Indonesia": 38,
    "Albania": 35,
    "Algeria": 33,
    "Ivory Coast": 36,
    "El Salvador": 34,
    "Kosovo": 39,
    "Thailand": 35,
    "Vietnam": 39,
    "Bosnia and Herzegovina": 35,
    "Mongolia": 35,
    "North Macedonia": 39,
    "Panama": 36,
    "Moldova": 36,
    "Philippines": 33,
    "Egypt": 33,
    "Eswatini": 32,
    "Nepal": 33,
    "Sierra Leone": 34,
    "Ukraine": 32,
    "Zambia": 33,
    "Niger": 31,
    "Bolivia": 30,
    "Kenya": 30,
    "Kyrgyzstan": 27,
    "Mexico": 31,
    "Pakistan": 28,
    "Azerbaijan": 30,
    "Gabon": 31,
    "Malawi": 35,
    "Mali": 29,
    "Russia": 29,
    "Laos": 30,
    "Mauritania": 28,
    "Togo": 30,
    "Dominican Republic": 30,
    "Liberia": 29,
    "Myanmar": 28,
    "Paraguay": 30,
    "Angola": 29,
    "Djibouti": 30,
    "Papua New Guinea": 31,
    "Uzbekistan": 28,
    "Uganda": 27,
    "Cameroon": 27,
    "Bangladesh": 26,
    "Madagascar": 26,
    "Mozambique": 26,
    "Guinea": 25,
    "Guatemala": 25,
    "Iran": 25,
    "Tajikistan": 25,
    "Central African Republic": 24,
    "Lebanon": 24,
    "Nigeria": 24,
    "Honduras": 23,
    "Iraq": 23,
    "Cambodia": 23,
    "Zimbabwe": 23,
    "Eritrea": 22,
    "Republic of the Congo": 21,
    "Guinea-Bissau": 21,
    "Comoros": 20,
    "Haiti": 20,
    "Nicaragua": 20,
    "Sudan": 20,
    "Chad": 20,
    "Burundi": 19,
    "Democratic Republic of the Congo": 21,
    "Turkmenistan": 19,
    "Equatorial Guinea": 17,
    "Libya": 17,
    "Afghanistan": 16,
    "North Korea": 16,
    "Yemen": 16,
    "Venezuela": 14,
    "Somalia": 13,
    "Syria": 13,
    "South Sudan": 11
    };

const countryContinentData = {
    
    "Afghanistan": "South Asia",
    "Angola": "Sub-Saharan Africa",
    "Albania": "Europe & Central Asia",
    "Andorra": "Europe & Central Asia",
    "United Arab Emirates": "Middle East & North Africa",
    "Argentina": "Latin America & Caribbean",
    "Armenia": "Europe & Central Asia",
    "American Samoa": "East Asia & Pacific",
    "Antigua and Barbuda": "Latin America & Caribbean",
    "Australia": "East Asia & Pacific",
    "Austria": "Europe & Central Asia",
    "Azerbaijan": "Europe & Central Asia",
    "Burundi": "Sub-Saharan Africa",
    "Belgium": "Europe & Central Asia",
    "Benin": "Sub-Saharan Africa",
    "Burkina Faso": "Sub-Saharan Africa",
    "Bangladesh": "South Asia",
    "Bulgaria": "Europe & Central Asia",
    "Bahrain": "Middle East & North Africa",
    "Bosnia and Herzegovina": "Europe & Central Asia",
    "Belarus": "Europe & Central Asia",
    "Belize": "Latin America & Caribbean",
    "Bermuda": "North America",
    "Bolivia": "Latin America & Caribbean",
    "Brazil": "Latin America & Caribbean",
    "Barbados": "Latin America & Caribbean",
    "Bhutan": "South Asia",
    "Botswana": "Sub-Saharan Africa",
    "Central African Republic": "Sub-Saharan Africa",
    "Canada": "North America",
    "Switzerland": "Europe & Central Asia",
    "Chile": "Latin America & Caribbean",
    "China": "East Asia & Pacific",
    "Cote d'Ivoire": "Sub-Saharan Africa",
    "Cameroon": "Sub-Saharan Africa",
    "Colombia": "Latin America & Caribbean",
    "Comoros": "Sub-Saharan Africa",
    "Costa Rica": "Latin America & Caribbean",
    "Cuba": "Latin America & Caribbean",
    "Cyprus": "Europe & Central Asia",
    "Germany": "Europe & Central Asia",
    "Djibouti": "Middle East & North Africa",
    "Dominica": "Latin America & Caribbean",
    "Denmark": "Europe & Central Asia",
    "Dominican Republic": "Latin America & Caribbean",
    "Algeria": "Middle East & North Africa",
    "Ecuador": "Latin America & Caribbean",
    "Eritrea": "Sub-Saharan Africa",
    "Spain": "Europe & Central Asia",
    "Estonia": "Europe & Central Asia",
    "Ethiopia": "Sub-Saharan Africa",
    "Finland": "Europe & Central Asia",
    "Fiji": "East Asia & Pacific",
    "France": "Europe & Central Asia",
    "Gabon": "Sub-Saharan Africa",
    "United Kingdom": "Europe & Central Asia",
    "Georgia": "Europe & Central Asia",
    "Ghana": "Sub-Saharan Africa",
    "Guinea": "Sub-Saharan Africa",
    "Guinea-Bissau": "Sub-Saharan Africa",
    "Equatorial Guinea": "Sub-Saharan Africa",
    "Greece": "Europe & Central Asia",
    "Grenada": "Latin America & Caribbean",
    "Greenland": "Europe & Central Asia",
    "Guatemala": "Latin America & Caribbean",
    "Guam": "East Asia & Pacific",
    "Guyana": "Latin America & Caribbean",
    "Honduras": "Latin America & Caribbean",
    "Croatia": "Europe & Central Asia",
    "Haiti": "Latin America & Caribbean",
    "Hungary": "Europe & Central Asia",
    "Indonesia": "East Asia & Pacific",
    "India": "South Asia",
    "Ireland": "Europe & Central Asia",
    "Iraq": "Middle East & North Africa",
    "Iceland": "Europe & Central Asia",
    "Israel": "Middle East & North Africa",
    "Italy": "Europe & Central Asia",
    "Jamaica": "Latin America & Caribbean",
    "Jordan": "Middle East & North Africa",
    "Japan": "East Asia & Pacific",
    "Kazakhstan": "Europe & Central Asia",
    "Kenya": "Sub-Saharan Africa",
    "Cambodia": "East Asia & Pacific",
    "Kiribati": "East Asia & Pacific",
    "Kuwait": "Middle East & North Africa",
    "Lebanon": "Middle East & North Africa",
    "Liberia": "Sub-Saharan Africa",
    "Libya": "Middle East & North Africa",
    "Sri Lanka": "South Asia",
    "Lesotho": "Sub-Saharan Africa",
    "Lithuania": "Europe & Central Asia",
    "Luxembourg": "Europe & Central Asia",
    "Latvia": "Europe & Central Asia",
    "Morocco": "Middle East & North Africa",
    "Monaco": "Europe & Central Asia",
    "Moldova": "Europe & Central Asia",
    "Madagascar": "Sub-Saharan Africa",
    "Maldives": "South Asia",
    "Mexico": "Latin America & Caribbean",
    "Marshall Islands": "East Asia & Pacific",
    "North Macedonia": "Europe & Central Asia",
    "Mali": "Sub-Saharan Africa",
    "Malta": "Middle East & North Africa",
    "Myanmar": "East Asia & Pacific",
    "Montenegro": "Europe & Central Asia",
    "Mongolia": "East Asia & Pacific",
    "Northern Mariana Islands": "East Asia & Pacific",
    "Mozambique": "Sub-Saharan Africa",
    "Mauritania": "Sub-Saharan Africa",
    "Mauritius": "Sub-Saharan Africa",
    "Malawi": "Sub-Saharan Africa",
    "Malaysia": "East Asia & Pacific",
    "Namibia": "Sub-Saharan Africa",
    "Niger": "Sub-Saharan Africa",
    "Nigeria": "Sub-Saharan Africa",
    "Nicaragua": "Latin America & Caribbean",
    "Netherlands": "Europe & Central Asia",
    "Norway": "Europe & Central Asia",
    "Nepal": "South Asia",
    "Nauru": "East Asia & Pacific",
    "New Zealand": "East Asia & Pacific",
    "Oman": "Middle East & North Africa",
    "Pakistan": "South Asia",
    "Panama": "Latin America & Caribbean",
    "Peru": "Latin America & Caribbean",
    "Philippines": "East Asia & Pacific",
    "Palau": "East Asia & Pacific",
    "Papua New Guinea": "East Asia & Pacific",
    "Poland": "Europe & Central Asia",
    "Puerto Rico": "Latin America & Caribbean",
    "Portugal": "Europe & Central Asia",
    "Paraguay": "Latin America & Caribbean",
    "Qatar": "Middle East & North Africa",
    "Romania": "Europe & Central Asia",
    "Rwanda": "Sub-Saharan Africa",
    "Saudi Arabia": "Middle East & North Africa",
    "Sudan": "Sub-Saharan Africa",
    "Senegal": "Sub-Saharan Africa",
    "Singapore": "East Asia & Pacific",
    "Solomon Islands": "East Asia & Pacific",
    "Sierra Leone": "Sub-Saharan Africa",
    "El Salvador": "Latin America & Caribbean",
    "San Marino": "Europe & Central Asia",
    "Somalia": "Sub-Saharan Africa",
    "Serbia": "Europe & Central Asia",
    "South Sudan": "Sub-Saharan Africa",
    "Sao Tome and Principe": "Sub-Saharan Africa",
    "Suriname": "Latin America & Caribbean",
    "Slovenia": "Europe & Central Asia",
    "Sweden": "Europe & Central Asia",
    "Eswatini": "Sub-Saharan Africa",
    "Seychelles": "Sub-Saharan Africa",
    "Chad": "Sub-Saharan Africa",
    "Togo": "Sub-Saharan Africa",
    "Thailand": "East Asia & Pacific",
    "Tajikistan": "Europe & Central Asia",
    "Turkmenistan": "Europe & Central Asia",
    "Tonga": "East Asia & Pacific",
    "Trinidad and Tobago": "Latin America & Caribbean",
    "Tunisia": "Middle East & North Africa",
    "Tuvalu": "East Asia & Pacific",
    "Tanzania": "Sub-Saharan Africa",
    "Uganda": "Sub-Saharan Africa",
    "Ukraine": "Europe & Central Asia",
    "Uruguay": "Latin America & Caribbean",
    "United States": "North America",
    "Uzbekistan": "Europe & Central Asia",
    "Vietnam": "East Asia & Pacific",
    "Vanuatu": "East Asia & Pacific",
    "Samoa": "East Asia & Pacific",
    "South Africa": "Sub-Saharan Africa",
    "Zambia": "Sub-Saharan Africa",
    "Zimbabwe": "Sub-Saharan Africa"
    
};
const countryCodeData = {
    
    "Afghanistan": "AFG",
    "Angola": "AGO",
    "Albania": "ALB",
    "Andorra": "AND",
    "United Arab Emirates": "ARE",
    "Argentina": "ARG",
    "Armenia": "ARM",
    "American Samoa": "ASM",
    "Antigua and Barbuda": "ATG",
    "Australia": "AUS",
    "Austria": "AUT",
    "Azerbaijan": "AZE",
    "Burundi": "BDI",
    "Belgium": "BEL",
    "Benin": "BEN",
    "Burkina Faso": "BFA",
    "Bangladesh": "BGD",
    "Bulgaria": "BGR",
    "Bahrain": "BHR",
    "Bosnia and Herzegovina": "BIH",
    "Belarus": "BLR",
    "Belize": "BLZ",
    "Bermuda": "BMU",
    "Bolivia": "BOL",
    "Brazil": "BRA",
    "Barbados": "BRB",
    "Bhutan": "BTN",
    "Botswana": "BWA",
    "Central African Republic": "CAF",
    "Canada": "CAN",
    "Switzerland": "CHE",
    "Chile": "CHL",
    "China": "CHN",
    "Cote d'Ivoire": "CIV",
    "Cameroon": "CMR",
    "Colombia": "COL",
    "Comoros": "COM",
    "Costa Rica": "CRI",
    "Cuba": "CUB",
    "Cyprus": "CYP",
    "Germany": "DEU",
    "Djibouti": "DJI",
    "Dominica": "DMA",
    "Denmark": "DNK",
    "Dominican Republic": "DOM",
    "Algeria": "DZA",
    "Ecuador": "ECU",
    "Eritrea": "ERI",
    "Spain": "ESP",
    "Estonia": "EST",
    "Ethiopia": "ETH",
    "Finland": "FIN",
    "Fiji": "FJI",
    "France": "FRA",
    "Gabon": "GAB",
    "United Kingdom": "GBR",
    "Georgia": "GEO",
    "Ghana": "GHA",
    "Guinea": "GIN",
    "Guinea-Bissau": "GNB",
    "Equatorial Guinea": "GNQ",
    "Greece": "GRD",
    "Grenada": "GRL",
    "Greenland": "GTM",
    "Guatemala": "GUM",
    "Guam": "GUY",
    "Guyana": "HND",
    "Honduras": "HRV",
    "Croatia": "HTI",
    "Haiti": "HUN",
    "Hungary": "IDN",
    "Indonesia": "IND",
    "India": "IRL",
    "Ireland": "IRQ",
    "Iraq": "ISL",
    "Iceland": "ISR",
    "Israel": "ITA",
    "Italy": "JAM",
    "Jamaica": "JOR",
    "Jordan": "JPN",
    "Japan": "KAZ",
    "Kazakhstan": "KEN",
    "Kenya": "KHM",
    "Cambodia": "KIR",
    "Kiribati": "KWT",
    "Kuwait": "LBN",
    "Lebanon": "LBR",
    "Liberia": "LBY",
    "Libya": "LKA",
    "Sri Lanka": "LSO",
    "Lesotho": "LTU",
    "Lithuania": "LUX",
    "Luxembourg": "LVA",
    "Latvia": "MAR",
    "Morocco": "MCO",
    "Monaco": "MDA",
    "Moldova": "MDG",
    "Madagascar": "MDV",
    "Maldives": "MEX",
    "Mexico": "MHL",
    "Marshall Islands": "MKD",
    "North Macedonia": "MLI",
    "Mali": "MLT",
    "Malta": "MMR",
    "Myanmar": "MNE",
    "Montenegro": "MNG",
    "Mongolia": "MNP",
    "Northern Mariana Islands": "MOZ",
    "Mozambique": "MRT",
    "Mauritania": "MUS",
    "Mauritius": "MWI",
    "Malawi": "MYS",
    "Malaysia": "NAM",
    "Namibia": "NER",
    "Niger": "NGA",
    "Nigeria": "NIC",
    "Nicaragua": "NLD",
    "Netherlands": "NOR",
    "Norway": "NPL",
    "Nepal": "NRU",
    "Nauru": "NZL",
    "New Zealand": "OMN",
    "Oman": "PAK",
    "Pakistan": "PAN",
    "Panama": "PER",
    "Peru": "PHL",
    "Philippines": "PLW",
    "Palau": "PNG",
    "Papua New Guinea": "POL",
    "Poland": "PRI",
    "Puerto Rico": "PRT",
    "Portugal": "PRY",
    "Paraguay": "QAT",
    "Qatar": "ROU",
    "Romania": "RWA",
    "Rwanda": "SAU",
    "Saudi Arabia": "SDN",
    "Sudan": "SEN",
    "Senegal": "SGP",
    "Singapore": "SLB",
    "Solomon Islands": "SLE",
    "Sierra Leone": "SLV",
    "El Salvador": "SMR",
    "San Marino": "SOM",
    "Somalia": "SRB",
    "Serbia": "SSD",
    "South Sudan": "STP",
    "Sao Tome and Principe": "SUR",
    "Suriname": "SVN",
    "Slovenia": "SWE",
    "Sweden": "SWZ",
    "Eswatini": "SYC",
    "Seychelles": "TCD",
    "Chad": "TGO",
    "Togo": "THA",
    "Thailand": "TJK",
    "Tajikistan": "TKM",
    "Turkmenistan": "TON",
    "Tonga": "TTO",
    "Trinidad and Tobago": "TUN",
    "Tunisia": "TUV",
    "Tuvalu": "TZA",
    "Tanzania": "UGA",
    "Uganda": "UKR",
    "Ukraine": "URY",
    "Uruguay": "USA",
    "United States": "UZB",
    "Uzbekistan": "VNM",
    "Vietnam": "VUT",
    "Vanuatu": "WSM",
    "Samoa": "ZAF",
    "South Africa": "ZMB",
    "Zambia": "ZWE"
    
};

const CountryAvgLifeExpectancy = {
    "Afghanistan": 64.833,
    "Angola": 61.147,
    "Albania": 78.573,
    "Andorra": null,
    "United Arab Emirates": 77.972,
    "Argentina": 76.667,
    "Armenia": 75.087,
    "American Samoa": null,
    "Antigua and Barbuda": 77.016,
    "Australia": 82.9,
    "Austria": 81.89512195,
    "Azerbaijan": 73.005,
    "Burundi": 61.584,
    "Belgium": 81.99512195,
    "Benin": 61.771,
    "Burkina Faso": 61.577,
    "Bangladesh": 72.591,
    "Bulgaria": 75.11219512,
    "Bahrain": 77.292,
    "Bosnia and Herzegovina": 77.401,
    "Belarus": 74.22682927,
    "Belize": 74.623,
    "Bermuda": 81.86658537,
    "Bolivia": 71.513,
    "Brazil": 75.881,
    "Barbados": 79.19,
    "Bhutan": 71.777,
    "Botswana": 69.592,
    "Central African Republic": 53.283,
    "Canada": 82.04878049,
    "Switzerland": 83.90487805,
    "Chile": 80.181,
    "China": 76.912,
    "Cote d'Ivoire": 57.783,
    "Cameroon": 59.292,
    "Colombia": 77.287,
    "Comoros": 64.321,
    "Costa Rica": 80.279,
    "Cuba": 78.802,
    "Cyprus": 80.982,
    "Germany": 81.29268293,
    "Djibouti": 67.112,
    "Dominica": null,
    "Denmark": 81.45121951,
    "Dominican Republic": 74.081,
    "Algeria": 76.88,
    "Ecuador": 77.01,
    "Eritrea": 66.321,
    "Spain": 83.83170732,
    "Estonia": 78.64634146,
    "Ethiopia": 66.597,
    "Finland": 81.98292683,
    "Fiji": 67.444,
    "France": 82.82682927,
    "Gabon": 66.467,
    "United Kingdom": 81.20487805,
    "Georgia": 73.767,
    "Ghana": 64.074,
    "Guinea": 61.602,
    "Guinea-Bissau": 58.322,
    "Equatorial Guinea": 58.735,
    "Greece": 81.63902439,
    "Grenada": 72.397,
    "Greenland": 72.04756098,
    "Guatemala": 74.302,
    "Guam": 80.074,
    "Guyana": 69.906,
    "Honduras": 75.27,
    "Croatia": 78.42439024,
    "Haiti": 64.001,
    "Hungary": 76.3195122,
    "Indonesia": 71.716,
    "India": 69.656,
    "Ireland": 82.70243902,
    "Iraq": 70.604,
    "Iceland": 83.16341463,
    "Israel": 82.80487805,
    "Italy": 83.49756098,
    "Jamaica": 74.475,
    "Jordan": 74.526,
    "Japan": 84.35634146,
    "Kazakhstan": 73.18,
    "Kenya": 66.699,
    "Cambodia": 69.823,
    "Kiribati": 68.369,
    "Kuwait": 75.489,
    "Lebanon": 78.93,
    "Liberia": 64.104,
    "Libya": 72.913,
    "Sri Lanka": 76.978,
    "Lesotho": 54.331,
    "Lithuania": 76.28292683,
    "Luxembourg": 82.63902439,
    "Latvia": 75.38780488,
    "Morocco": 76.68,
    "Monaco": null,
    "Moldova": 71.901,
    "Madagascar": 67.041,
    "Maldives": 78.921,
    "Mexico": 75.054,
    "Marshall Islands": null,
    "North Macedonia": 76.60243902,
    "Mali": 59.306,
    "Malta": 82.85853659,
    "Myanmar": 67.134,
    "Montenegro": 76.68292683,
    "Mongolia": 69.87,
    "Northern Mariana Islands": null,
    "Mozambique": 60.854,
    "Mauritania": 64.925,
    "Mauritius": 74.23585366,
    "Malawi": 64.263,
    "Malaysia": 76.156,
    "Namibia": 63.708,
    "Niger": 62.42,
    "Nigeria": 54.687,
    "Nicaragua": 74.485,
    "Netherlands": 82.11219512,
    "Norway": 82.95853659,
    "Nepal": 70.778,
    "Nauru": null,
    "New Zealand": 81.70731707,
    "Oman": 77.861,
    "Pakistan": 67.273,
    "Panama": 78.506,
    "Peru": 76.736,
    "Philippines": 71.231,
    "Palau": null,
    "Papua New Guinea": 64.501,
    "Poland": 77.90487805,
    "Puerto Rico": 79.9285122,
    "Portugal": 81.67560976,
    "Paraguay": 74.254,
    "Qatar": 80.227,
    "Romania": 75.60731707,
    "Rwanda": 69.024,
    "Saudi Arabia": 75.133,
    "Sudan": 65.311,
    "Senegal": 67.941,
    "Singapore": 83.59512195,
    "Solomon Islands": 72.996,
    "Sierra Leone": 54.696,
    "El Salvador": 73.317,
    "San Marino": null,
    "Somalia": 57.397,
    "Serbia": 75.93658537,
    "South Sudan": 57.846,
    "Sao Tome and Principe": 70.385,
    "Suriname": 71.682,
    "Slovenia": 81.52926829,
    "Sweden": 83.1097561,
    "Eswatini": 60.194,
    "Seychelles": 74.04634146,
    "Chad": 54.239,
    "Togo": 61.042,
    "Thailand": 77.15,
    "Tajikistan": 71.097,
    "Turkmenistan": 68.191,
    "Tonga": 70.907,
    "Trinidad and Tobago": 73.507,
    "Tunisia": 76.699,
    "Tuvalu": null,
    "Tanzania": 65.456,
    "Uganda": 63.368,
    "Ukraine": 71.82731707,
    "Uruguay": 77.911,
    "United States": 78.78780488,
    "Uzbekistan": 71.725,
    "Vietnam": 75.4,
    "Vanuatu": 70.474,
    "Samoa": 73.321,
    "South Africa": 64.131,
    "Zambia": 63.886,
    "Zimbabwe": 61.49
  }

const CountryIncomeCatagory = {
    "Afghanistan": "Low income",
    "Angola": "Lower middle income",
    "Albania": "Upper middle income",
    "Andorra": "High income",
    "United Arab Emirates": "High income",
    "Argentina": "Upper middle income",
    "Armenia": "Upper middle income",
    "American Samoa": "Upper middle income",
    "Antigua and Barbuda": "High income",
    "Australia": "High income",
    "Austria": "High income",
    "Azerbaijan": "Upper middle income",
    "Burundi": "Low income",
    "Belgium": "High income",
    "Benin": "Lower middle income",
    "Burkina Faso": "Low income",
    "Bangladesh": "Lower middle income",
    "Bulgaria": "Upper middle income",
    "Bahrain": "High income",
    "Bosnia and Herzegovina": "Upper middle income",
    "Belarus": "Upper middle income",
    "Belize": "Upper middle income",
    "Bermuda": "High income",
    "Bolivia": "Lower middle income",
    "Brazil": "Upper middle income",
    "Barbados": "High income",
    "Bhutan": "Lower middle income",
    "Botswana": "Upper middle income",
    "Central African Republic": "Low income",
    "Canada": "High income",
    "Switzerland": "High income",
    "Chile": "High income",
    "China": "Upper middle income",
    "Cote d'Ivoire": "Lower middle income",
    "Cameroon": "Lower middle income",
    "Colombia": "Upper middle income",
    "Comoros": "Lower middle income",
    "Costa Rica": "Upper middle income",
    "Cuba": "Upper middle income",
    "Cyprus": "High income",
    "Germany": "High income",
    "Djibouti": "Lower middle income",
    "Dominica": "Upper middle income",
    "Denmark": "High income",
    "Dominican Republic": "Upper middle income",
    "Algeria": "Lower middle income",
    "Ecuador": "Upper middle income",
    "Eritrea": "Low income",
    "Spain": "High income",
    "Estonia": "High income",
    "Ethiopia": "Low income",
    "Finland": "High income",
    "Fiji": "Upper middle income",
    "France": "High income",
    "Gabon": "Upper middle income",
    "United Kingdom": "High income",
    "Georgia": "Upper middle income",
    "Ghana": "Lower middle income",
    "Guinea": "Low income",
    "Guinea-Bissau": "Low income",
    "Equatorial Guinea": "Upper middle income",
    "Greece": "High income",
    "Grenada": "Upper middle income",
    "Greenland": "High income",
    "Guatemala": "Upper middle income",
    "Guam": "High income",
    "Guyana": "Upper middle income",
    "Honduras": "Lower middle income",
    "Croatia": "High income",
    "Haiti": "Lower middle income",
    "Hungary": "High income",
    "Indonesia": "Lower middle income",
    "India": "Lower middle income",
    "Ireland": "High income",
    "Iraq": "Upper middle income",
    "Iceland": "High income",
    "Israel": "High income",
    "Italy": "High income",
    "Jamaica": "Upper middle income",
    "Jordan": "Upper middle income",
    "Japan": "High income",
    "Kazakhstan": "Upper middle income",
    "Kenya": "Lower middle income",
    "Cambodia": "Lower middle income",
    "Kiribati": "Lower middle income",
    "Kuwait": "High income",
    "Lebanon": "Lower middle income",
    "Liberia": "Low income",
    "Libya": "Upper middle income",
    "Sri Lanka": "Lower middle income",
    "Lesotho": "Lower middle income",
    "Lithuania": "High income",
    "Luxembourg": "High income",
    "Latvia": "High income",
    "Morocco": "Lower middle income",
    "Monaco": "High income",
    "Moldova": "Upper middle income",
    "Madagascar": "Low income",
    "Maldives": "Upper middle income",
    "Mexico": "Upper middle income",
    "Marshall Islands": "Upper middle income",
    "North Macedonia": "Upper middle income",
    "Mali": "Low income",
    "Malta": "High income",
    "Myanmar": "Lower middle income",
    "Montenegro": "Upper middle income",
    "Mongolia": "Lower middle income",
    "Northern Mariana Islands": "High income",
    "Mozambique": "Low income",
    "Mauritania": "Lower middle income",
    "Mauritius": "Upper middle income",
    "Malawi": "Low income",
    "Malaysia": "Upper middle income",
    "Namibia": "Upper middle income",
    "Niger": "Low income",
    "Nigeria": "Lower middle income",
    "Nicaragua": "Lower middle income",
    "Netherlands": "High income",
    "Norway": "High income",
    "Nepal": "Lower middle income",
    "Nauru": "High income",
    "New Zealand": "High income",
    "Oman": "High income",
    "Pakistan": "Lower middle income",
    "Panama": "High income",
    "Peru": "Upper middle income",
    "Philippines": "Lower middle income",
    "Palau": "Upper middle income",
    "Papua New Guinea": "Lower middle income",
    "Poland": "High income",
    "Puerto Rico": "High income",
    "Portugal": "High income",
    "Paraguay": "Upper middle income",
    "Qatar": "High income",
    "Romania": "High income",
    "Rwanda": "Low income",
    "Saudi Arabia": "High income",
    "Sudan": "Low income",
    "Senegal": "Lower middle income",
    "Singapore": "High income",
    "Solomon Islands": "Lower middle income",
    "Sierra Leone": "Low income",
    "El Salvador": "Lower middle income",
    "San Marino": "High income",
    "Somalia": "Low income",
    "Serbia": "Upper middle income",
    "South Sudan": "Low income",
    "Sao Tome and Principe": "Lower middle income",
    "Suriname": "Upper middle income",
    "Slovenia": "High income",
    "Sweden": "High income",
    "Eswatini": "Lower middle income",
    "Seychelles": "High income",
    "Chad": "Low income",
    "Togo": "Low income",
    "Thailand": "Upper middle income",
    "Tajikistan": "Lower middle income",
    "Turkmenistan": "Upper middle income",
    "Tonga": "Upper middle income",
    "Trinidad and Tobago": "High income",
    "Tunisia": "Lower middle income",
    "Tuvalu": "Upper middle income",
    "Tanzania": "Lower middle income",
    "Uganda": "Low income",
    "Ukraine": "Lower middle income",
    "Uruguay": "High income",
    "United States": "High income",
    "Uzbekistan": "Lower middle income",
    "Vietnam": "Lower middle income",
    "Vanuatu": "Lower middle income",
    "Samoa": "Lower middle income",
    "South Africa": "Upper middle income",
    "Zambia": "Low income",
    "Zimbabwe": "Lower middle income"
  };
  
  


  async function fetchCountryData(country) {
    const response = await fetch(`https://restcountries.com/v3.1/name/${country}?fullText=true`);
    if (!response.ok) {
        throw new Error(`Country ${country} not found`);
    }
    const data = await response.json();
    return data[0];
}

function getAdditionalCountryData(countryName) {
    const countryCode = countryCodeData[countryName];
    const corruptionIndex = corruptionIndexData[countryName];
    const continent = countryContinentData[countryName];
    const lifeExpectancy = CountryAvgLifeExpectancy[countryName];
    const incomeCategory = CountryIncomeCatagory[countryName];
    return { corruptionIndex, continent, lifeExpectancy, incomeCategory };
}

async function compareCountries() {
    const country1 = document.getElementById('country1').value;
    const country2 = document.getElementById('country2').value;

    try {
        const data1 = await fetchCountryData(country1);
        const data2 = await fetchCountryData(country2);

        const additionalData1 = getAdditionalCountryData(data1.name.common);
        const additionalData2 = getAdditionalCountryData(data2.name.common);

        const results = document.getElementById('results');
        
        // Check if results element exists
        if (!results) {
            console.error("The results container is missing in the DOM.");
            return;
        }

        // Create table for displaying data
        const tableHTML = `
            <table>
                <thead>
                    <tr><th>Attribute</th><th>${data1.name.common}</th><th>${data2.name.common}</th></tr>
                </thead>
                <tbody>
                    <tr><td>Area (sq km)</td><td>${data1.area}</td><td>${data2.area}</td></tr>
                    <tr><td>Population</td><td>${data1.population}</td><td>${data2.population}</td></tr>
                    <tr><td>Corruption Index</td><td>${additionalData1.corruptionIndex || 'N/A'}</td><td>${additionalData2.corruptionIndex || 'N/A'}</td></tr>
                    <tr><td>Life Expectancy</td><td>${additionalData1.lifeExpectancy || 'N/A'}</td><td>${additionalData2.lifeExpectancy || 'N/A'}</td></tr>
                    <tr><td>Continent</td><td>${additionalData1.continent}</td><td>${additionalData2.continent}</td></tr>
                </tbody>
            </table>
        `;

        results.innerHTML = tableHTML + `<div id="chartsContainer"></div>`;

        // D3.js chart code for each data
        const chartData = [
            { attribute: 'Area (sq km)', values: [data1.area, data2.area] },
            { attribute: 'Population', values: [data1.population, data2.population] },
            { attribute: 'Corruption Index', values: [additionalData1.corruptionIndex || 0, additionalData2.corruptionIndex || 0] },
            { attribute: 'Life Expectancy', values: [additionalData1.lifeExpectancy || 0, additionalData2.lifeExpectancy || 0] }
        ];

        const chartsContainer = d3.select("#chartsContainer");

        chartData.forEach(d => {
            const chartDiv = chartsContainer.append("div").attr("class", "chart");
            createBarChart(chartDiv.node(), d.attribute, [data1.name.common, data2.name.common], d.values);
        });

    } catch (error) {
        document.getElementById('results').innerHTML = `<p>Error: ${error.message}</p>`;
    }
}


function createBarChart(element, title, labels, data1, data2, country1, country2) {
    // Ensure data1 and data2 are arrays
    data1 = Array.isArray(data1) ? data1 : [data1];
    data2 = Array.isArray(data2) ? data2 : [data2];

    const svg = d3.select(element).append("svg")
        .attr("width", 400)
        .attr("height", 400);

    const margin = { top: 30, right: 50, bottom: 50, left: 80 };
    const width = 400 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    const x = d3.scaleBand()
        .domain(labels)
        .range([0, width])
        .padding(0.2);

    const y = d3.scaleLinear()
        .domain([0, d3.max([...data1, ...data2])])
        .nice()
        .range([height, 0]);

    const g = svg.append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

    // Use a single color for all bars
    const barColor = "steelblue";

    // Add y-axis
    g.append("g")
        .call(d3.axisLeft(y).ticks(5).tickFormat(d => {
            if (d >= 1e9) {
                return (d / 1e9).toFixed(2) + " billion";
            } else if (d >= 1e6) {
                return (d / 1e6).toFixed(2) + " million";
            } else {
                return d;
            }
        }));

    // Add x-axis
    g.append("g")
        .attr("transform", `translate(0,${height})`)
        .call(d3.axisBottom(x));

    // Add bars for the first country
    g.selectAll(".bar1")
        .data(data1)
        .enter().append("rect")
        .attr("class", "bar1")
        .attr("x", (d, i) => x(labels[i]))
        .attr("y", d => y(d))
        .attr("width", x.bandwidth() / 2)
        .attr("height", d => height - y(d))
        .attr("fill", barColor)
        .on("mouseover", function(event, d) {
            d3.select(this)
                .attr("fill", d3.rgb(barColor).darker(2));
            showTooltip(event, d);
        })
        .on("mouseout", function() {
            d3.select(this)
                .attr("fill", barColor);
            hideTooltip();
        });

    // Add bars for the second country
    g.selectAll(".bar2")
        .data(data2)
        .enter().append("rect")
        .attr("class", "bar2")
        .attr("x", (d, i) => x(labels[i]) + x.bandwidth() / 2)
        .attr("y", d => y(d))
        .attr("width", x.bandwidth() / 2)
        .attr("height", d => height - y(d))
        .attr("fill", barColor)
        .on("mouseover", function(event, d) {
            d3.select(this)
                .attr("fill", d3.rgb(barColor).darker(2));
            showTooltip(event, d);
        })
        .on("mouseout", function() {
            d3.select(this)
                .attr("fill", barColor);
            hideTooltip();
        });

    svg.append("text")
        .attr("x", (width + margin.left + margin.right) / 2)
        .attr("y", margin.top / 2)
        .attr("text-anchor", "middle")
        .attr("font-size", "16px")
        .attr("font-weight", "bold")
        .text(title);

    // Tooltip
    const tooltip = d3.select("body").append("div")
        .attr("class", "tooltip")
        .style("position", "absolute")
        .style("background-color", "white")
        .style("border", "1px solid #ccc")
        .style("padding", "5px")
        .style("display", "none");

    function showTooltip(event, d) {
        tooltip
            .style("left", event.pageX + 10 + "px")
            .style("top", event.pageY - 25 + "px")
            .style("display", "inline-block")
            .html("Value: " + d3.format(",")(d));
    }

    function hideTooltip() {
        tooltip.style("display", "none");
    }
}

