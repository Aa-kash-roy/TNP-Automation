import React from "react";

import {hydrate} from "react-dom";

import CompanySearch from '../views/companysearch.jsx'

hydrate(<CompanySearch/>, document.getElementById("body"));

