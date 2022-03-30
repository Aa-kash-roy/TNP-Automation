import React from "react";

import {hydrate} from "react-dom";

import StudentPlacement from '../views/admin/studentplacement.jsx'

hydrate(<StudentPlacement/>, document.getElementById("admin_studentplacement_body"));

