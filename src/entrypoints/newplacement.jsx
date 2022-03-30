import React from "react";

import {hydrate} from "react-dom";

import NewPlacement from '../views/admin/newplacement.jsx'

hydrate(<NewPlacement/>, document.getElementById("admin_newplacement_body"));

