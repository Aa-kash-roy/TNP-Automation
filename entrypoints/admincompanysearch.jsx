import React from "react";

import {hydrate} from "react-dom";

import AdminCompanySearch from '../views/admin/admincompanysearch.jsx'

hydrate(<AdminCompanySearch/>, document.getElementById("admin_companysearch_body"));

