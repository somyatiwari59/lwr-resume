import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./employee.css";

import _implicitScopedStylesheets from "./employee.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M72.1 46.7c-3-13.8-17.7-23.9-20.6-25.9-.1-.1-.2-.1-.4-.2a3.31 3.31 0 00-2.4 0c-.1 0-.1.1-.2.1-2.9 1.9-17.5 12-20.6 25.8a22.18 22.18 0 004.4 19.1 24.46 24.46 0 0014.7 9l-1.5 2.6a2.48 2.48 0 000 1.7 1.72 1.72 0 001.5.9h6.1a2 2 0 001.5-.9 2.48 2.48 0 000-1.7l-1.5-2.6a24 24 0 0014.7-9 22.33 22.33 0 004.3-18.9zm-8.3 15.7c-.5.6-1.1 1.2-1.7 1.9a13 13 0 00-12-8h-.4a12.29 12.29 0 00-11.7 8c-.6-.6-1.1-1.2-1.7-1.9a17.38 17.38 0 01-3.5-14.7C35.2 37.1 46.1 28.5 50 25.9c3.9 2.7 14.8 11.3 17.2 21.9a16.56 16.56 0 01-3.4 14.6z"${3}/><circle cx="50" cy="46.3" r="8.4"${3}/></g>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, h: api_element} = $api;
  return [api_element("svg", {
    className: $cmp.computedClass,
    attrs: {
      "focusable": "false",
      "data-key": $cmp.name,
      "aria-hidden": "true",
      "viewBox": "0 0 100 100",
      "part": "icon"
    },
    key: 0,
    svg: true
  }, [api_static_fragment($fragment1(), 2)])];
  /*LWC compiler v3.0.0*/
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];


if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets);
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets);
}
tmpl.stylesheetToken = "lwc-2eqisonlq6h";
freezeTemplate(tmpl);