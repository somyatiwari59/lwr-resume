import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./meet_focus_content.css";

import _implicitScopedStylesheets from "./meet_focus_content.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M9.9 27.41a4.29 4.29 0 014.29 4.29v.38a4.47 4.47 0 01-1.42 3.35 2.48 2.48 0 00-.94 1.81c0 .58.24 1.16 1.5 1.81l1.29.58c1.81.89 3.39 1.81 3.44 3.62A2.39 2.39 0 0116 45.52H4.05a2.39 2.39 0 01-2.3-2.45c0-1.72 1.59-2.73 3.44-3.62l.67-.29.33-.16C7.76 38.35 8 37.78 8 37.2a2.73 2.73 0 00-.94-1.81A4.46 4.46 0 015.64 32a4.3 4.3 0 013.94-4.62zM46.13 7.48a3.62 3.62 0 013.62 3.62v27.17a3.63 3.63 0 01-3.62 3.63H20.64A5.43 5.43 0 0018 38.27h27.15a.9.9 0 00.9-.9V13.82a.9.9 0 00-.9-.9H8.92a.9.9 0 00-.9.9H8v11.09a6.51 6.51 0 00-3.63 2.37V11.1A3.63 3.63 0 018 7.48z" fill-rule="evenodd"${3}/></g>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, h: api_element} = $api;
  return [api_element("svg", {
    className: $cmp.computedClass,
    attrs: {
      "focusable": "false",
      "data-key": $cmp.name,
      "aria-hidden": "true",
      "viewBox": "0 0 52 52",
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
tmpl.stylesheetToken = "lwc-48drrrqkj7q";
freezeTemplate(tmpl);
