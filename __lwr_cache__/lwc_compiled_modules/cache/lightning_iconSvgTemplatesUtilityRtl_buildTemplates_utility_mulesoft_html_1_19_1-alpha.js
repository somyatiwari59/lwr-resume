import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./mulesoft.css";

import _implicitScopedStylesheets from "./mulesoft.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M26 48.12c-12.07 0-21.84-9.83-21.84-21.97S13.93 4.17 26 4.17 47.84 14 47.84 26.14 38.07 48.11 26 48.11zm0-46.11C12.78 2 2 12.7 2 26s10.78 24 24 24 24-10.7 24-24S39.22 2 26 2z"${3}/><path d="M19.96 36.85c-3.59-1.74-6.18-5.64-6.18-9.97 0-2.31.72-4.48 1.87-6.36l7.91 11.86h4.74l7.91-11.86c1.15 1.74 1.87 4.05 1.87 6.36 0 4.19-2.15 7.81-5.46 9.69l1.58 5.78c5.75-3.04 9.77-9.11 9.77-16.05s-3.59-12.44-8.77-15.47L26 25l-9.05-14.31c-5.32 3.18-8.91 8.96-8.91 15.62 0 7.23 4.17 13.45 10.35 16.34l1.58-5.78v-.02z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-4jo5otc9dub";
freezeTemplate(tmpl);
