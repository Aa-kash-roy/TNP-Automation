"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = AdminCompanySearch;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/jsx"));

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _reactFontawesome = _interopRequireDefault(require("@fortawesome/react-fontawesome"));

var _SearchHeader = _interopRequireDefault(require("../../components/SearchHeader"));

var _div, _button, _button2, _button3, _button4, _header, _div2, _div3;

function noResult() {
  return _div || (_div = /*#__PURE__*/(0, _jsx2.default)("div", {
    className: "no-results"
  }, void 0, "No Companies found :("));
}

function companyRow(item, index) {
  let image = "/img/companies/" + item.name.toLowerCase() + ".png";
  return /*#__PURE__*/(0, _jsx2.default)("div", {
    className: "admin-company-addremove-container07"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("span", {
    className: "admin-company-addremove-text02"
  }, void 0, index), /*#__PURE__*/(0, _jsx2.default)("img", {
    alt: "",
    src: image,
    className: "admin-company-addremove-image2"
  }), /*#__PURE__*/(0, _jsx2.default)("span", {
    className: "admin-company-addremove-text03"
  }, void 0, item.name), /*#__PURE__*/(0, _jsx2.default)("span", {
    className: "admin-company-addremove-text04"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("a", {
    href: "//" + item.website
  }, void 0, item.website)), /*#__PURE__*/(0, _jsx2.default)("span", {
    className: "admin-company-addremove-text05"
  }, void 0, item.email), /*#__PURE__*/(0, _jsx2.default)("span", {
    className: "admin-company-addremove-text06"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("a", {
    href: "/company/" + item.id
  }, void 0, "Company Profile")), _button || (_button = /*#__PURE__*/(0, _jsx2.default)("button", {
    className: "admin-company-addremove-button03 button"
  }, void 0, "EDIT")), _button2 || (_button2 = /*#__PURE__*/(0, _jsx2.default)("button", {
    className: "admin-company-addremove-button04 button"
  }, void 0, "DELETE")));
}

function resultRow(data, number) {
  let image = "/img/companies/" + data.name.toLowerCase() + ".png";
  let alternate = "/img/companies/" + "linkedin" + ".png";
  return /*#__PURE__*/(0, _jsx2.default)("div", {
    className: "admin-search-page-container05"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("div", {
    className: "admin-search-page-container07"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("span", {
    className: "search-page-text01"
  }, void 0, number), /*#__PURE__*/(0, _jsx2.default)("img", {
    src: image,
    className: "admin-search-page-image2"
  }), /*#__PURE__*/(0, _jsx2.default)("span", {
    className: "admin-search-page-text02"
  }, void 0, data.name), /*#__PURE__*/(0, _jsx2.default)("span", {
    className: "admin-search-page-text02"
  }, void 0, data.website), /*#__PURE__*/(0, _jsx2.default)("span", {
    className: "admin-search-page-text02"
  }, void 0, data.email), /*#__PURE__*/(0, _jsx2.default)("span", {
    className: "admin-search-page-text02"
  }, void 0, data.phone), /*#__PURE__*/(0, _jsx2.default)("span", {
    className: "search-page-text03"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("a", {
    href: data.id
  }, void 0, "Company Profile"))), _button3 || (_button3 = /*#__PURE__*/(0, _jsx2.default)("button", {
    type: "button",
    className: "search-page-button1 button",
    onClick: test
  }, void 0, "EDIT")), _button4 || (_button4 = /*#__PURE__*/(0, _jsx2.default)("button", {
    type: "button",
    className: "search-page-button1 button",
    onClick: test
  }, void 0, "DELETE")));
}

function results(records) {
  let count = 0;
  const rows = records.map((r, index) => {
    count += 1;
    return companyRow(r, count);
  });
  return rows;
}

function test() {
  console.log("WORKING");
}

function AdminCompanySearch(props) {
  console.log("AA");
  console.log(props);
  return /*#__PURE__*/(0, _jsx2.default)("div", {}, void 0, /*#__PURE__*/(0, _jsx2.default)("div", {
    className: "admin-company-addremove-container"
  }, void 0, _header || (_header = /*#__PURE__*/(0, _jsx2.default)("header", {
    "data-role": "Header",
    className: "admin-company-addremove-header"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("div", {
    className: "admin-company-addremove-container01"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("img", {
    alt: "image",
    src: "/img/iiitn_logo_transperent_back-200h.png",
    className: "admin-company-addremove-image"
  }), /*#__PURE__*/(0, _jsx2.default)("div", {
    className: "admin-company-addremove-nav"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("nav", {
    className: "navigation-links-nav navigation-links-root-class-name24"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("span", {
    className: "navigation-links-text"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("span", {}, void 0, "Home")), /*#__PURE__*/(0, _jsx2.default)("span", {
    className: "navigation-links-text1"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("span", {}, void 0, "Company")), /*#__PURE__*/(0, _jsx2.default)("span", {
    className: "navigation-links-text2"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("span", {}, void 0, "Placements"))))), /*#__PURE__*/(0, _jsx2.default)("div", {
    className: "admin-company-addremove-btn-group"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("button", {
    className: "admin-company-addremove-button button"
  }, void 0, "LOGOUT")), /*#__PURE__*/(0, _jsx2.default)("div", {
    "data-type": "BurgerMenu",
    className: "admin-company-addremove-burger-menu"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("svg", {
    viewBox: "0 0 1024 1024",
    className: "admin-company-addremove-icon"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("path", {
    d: "M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
  }))), /*#__PURE__*/(0, _jsx2.default)("div", {
    "data-type": "MobileMenu",
    className: "admin-company-addremove-mobile-menu"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("nav", {
    className: "admin-company-addremove-nav1"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("div", {
    className: "admin-company-addremove-container02"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("img", {
    alt: "image",
    src: "https://presentation-website-assets.teleporthq.io/logos/logo.png",
    className: "admin-company-addremove-image1"
  }), /*#__PURE__*/(0, _jsx2.default)("div", {
    "data-type": "CloseMobileMenu",
    className: "admin-company-addremove-close-mobile-menu"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("svg", {
    viewBox: "0 0 1024 1024",
    className: "admin-company-addremove-icon02"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("path", {
    d: "M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
  })))), /*#__PURE__*/(0, _jsx2.default)("nav", {
    className: "navigation-links-nav navigation-links-root-class-name24"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("span", {
    className: "navigation-links-text"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("span", {}, void 0, "Home")), /*#__PURE__*/(0, _jsx2.default)("span", {
    className: "navigation-links-text1"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("span", {}, void 0, "Company")), /*#__PURE__*/(0, _jsx2.default)("span", {
    className: "navigation-links-text2"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("span", {}, void 0, "Placements")))), /*#__PURE__*/(0, _jsx2.default)("div", {}, void 0, /*#__PURE__*/(0, _jsx2.default)("svg", {
    viewBox: "0 0 950.8571428571428 1024",
    className: "admin-company-addremove-icon04"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("path", {
    d: "M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"
  })), /*#__PURE__*/(0, _jsx2.default)("svg", {
    viewBox: "0 0 877.7142857142857 1024",
    className: "admin-company-addremove-icon06"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("path", {
    d: "M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"
  })), /*#__PURE__*/(0, _jsx2.default)("svg", {
    viewBox: "0 0 602.2582857142856 1024",
    className: "admin-company-addremove-icon08"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("path", {
    d: "M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"
  })))))), _div2 || (_div2 = /*#__PURE__*/(0, _jsx2.default)("div", {
    className: "admin-company-addremove-container03"
  })), /*#__PURE__*/(0, _jsx2.default)("form", {
    method: "GET",
    action: "/admin/companysearch"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("div", {
    className: "admin-company-addremove-container04"
  }, void 0, _div3 || (_div3 = /*#__PURE__*/(0, _jsx2.default)("div", {
    className: "admin-company-addremove-container05"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("input", {
    type: "text",
    placeholder: "Search Company",
    className: "admin-company-addremove-textinput input",
    name: "name",
    autoComplete: "off"
  }), /*#__PURE__*/(0, _jsx2.default)("button", {
    className: "admin-company-addremove-button01 button"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("span", {
    className: "admin-company-addremove-text"
  }, void 0, "SEARCH")), /*#__PURE__*/(0, _jsx2.default)("button", {
    className: "admin-company-addremove-button02 button"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("span", {
    className: "admin-company-addremove-text01"
  }, void 0, "ADD COMPANY")))), /*#__PURE__*/(0, _jsx2.default)("div", {
    className: "admin-company-addremove-container06"
  }, void 0, props.searchParam && props.records.length == 0 && noResult(), props.searchParam && props.records.length != 0 && results(props.records))))));
}

{
  /* <div>
  <div className="search-page-container">
      <SearchHeader/>
   
     <form action="/admin/companysearch" method="GET">
   <div className="search-page-container03"></div>
   <div className="search-page-container04">
     <div className="search-page-container05">
       <input
         type="text"
         placeholder="Search Company"
         className="search-page-textinput input"
         name='name'
         autoComplete="off"
       />
       <button className="search-page-button1 button">
         <span className="search-page-text">SEARCH</span>
       </button>
       <button className="search-page-button1 button" type="button" onClick={test}>
       <span className="search-page-text">ADD COMPANY</span>
         </button>
     </div>
     <div className="search-page-container06">
      {props.searchParam && props.records.length == 0 && noResult()}
       {props.searchParam && props.records.length != 0 && results(props.records)}
   
      </div>
   </div>
   </form>
  
  </div>
  </div> */
}