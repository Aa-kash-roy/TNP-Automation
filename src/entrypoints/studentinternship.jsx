import React from "react";

import {hydrate} from "react-dom";

import StudentInternship from '../views/admin/studentinternship.jsx'

hydrate(<StudentInternship/>, document.getElementById("admin_studentinternship_body"));

