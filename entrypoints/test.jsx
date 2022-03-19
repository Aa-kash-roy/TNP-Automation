import React from "react";

import {hydrate} from "react-dom";

import Test from '../views/test.jsx'

console.log("IAMDUMB")
hydrate(<Test/>, document.getElementById("bodyy"));

