import React from "react";

import {hydrate} from "react-dom";

import CompanyProfile from '../views/company.jsx'

hydrate(<CompanyProfile/>, document.getElementById("body"));

