import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./job_position.css";

import _implicitScopedStylesheets from "./job_position.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><circle cx="46.3" cy="36.3" r="16"${3}/><path d="M66.6 51.1a11.39 11.39 0 00-11.4 11.4c0 7.7 8.1 15 10.6 16.9a1.09 1.09 0 001.5 0c2.5-2 10.6-9.2 10.6-16.9a11.25 11.25 0 00-11.3-11.4zm0 16a4.7 4.7 0 114.7-4.7 4.76 4.76 0 01-4.7 4.7zM50.4 79.7h1.4c5.2-.5 2.4-3.7 2.4-3.7-3.2-4.6-5-9.1-5-13.5a13.74 13.74 0 01.6-4.2c.2-2-.6-2.5-1-2.7h-.2a18.48 18.48 0 00-2.4-.1 24.26 24.26 0 00-24 20.9c0 1.2.4 3.5 4.2 3.5h23.8c0-.2.1-.2.2-.2z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-45718cu4ogh";
freezeTemplate(tmpl);
