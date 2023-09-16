import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./medication_dispense.css";

import _implicitScopedStylesheets from "./medication_dispense.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M58.21 20H31.39a1.33 1.33 0 00-1.34 1.31V25a1.35 1.35 0 001.34 1.25h26.79A1.36 1.36 0 0059.52 25v-3.69A1.34 1.34 0 0058.21 20z"${3}/><path d="M61.8 52.82V38.74a9.13 9.13 0 00-9-9.21H37a9.12 9.12 0 00-9.22 9v2.56h16.75a1.47 1.47 0 011.47 1.5v16.83a1.47 1.47 0 01-1.47 1.48H27.78v7.37a1.43 1.43 0 001.48 1.31h18.43A14.11 14.11 0 0161.8 55.47z"${3}/><path d="M61.8 59.16a10.42 10.42 0 1010.42 10.42A10.4 10.4 0 0061.8 59.16zm5 12.77l-4.61 4.48a.59.59 0 01-.85 0l-4.57-4.48a.54.54 0 010-.82l.82-.83a.59.59 0 01.85 0l1.44 1.41a.39.39 0 00.67-.28v-8.23a.66.66 0 01.61-.61h1.24a.64.64 0 01.61.61v8.23a.39.39 0 00.67.28l1.43-1.41a.59.59 0 01.85 0l.86.83a.56.56 0 010 .82z"${3}/><rect x="27.83" y="45.55" width="13.17" height="3.04" rx=".99"${3}/><rect x="27.83" y="53.11" width="9.23" height="3.04" rx=".99"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-6dcnlobrcob";
freezeTemplate(tmpl);
