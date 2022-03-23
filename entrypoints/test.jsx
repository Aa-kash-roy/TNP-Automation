import React from "react";

import {hydrate} from "react-dom";

import Test from '../views/test.jsx'

hydrate(<Test/>, document.getElementById("body"));

