import React from "react";

import {hydrate} from "react-dom";

import Announce from '../views/admin/announce.jsx'

hydrate(<Announce/>, document.getElementById("admin_announce_body"));

