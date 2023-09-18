import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./tableau.css";

import _implicitScopedStylesheets from "./tableau.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M33.9 27.2h-6.6v7.2h-2.6v-7.2h-6.6v-2.6h6.6v-7.2h2.6v7.2h6.6zM20.7 36.5h-5.9v-6.6h-2.2v6.6h-6v2h6V45h2.2v-6.5h5.9zM45.5 13.2h-5.9V6.7h-2.2v6.5h-5.9v2.1h5.9v6.5h2.2v-6.5h5.9zM31 43.6h-4v-4.5h-1.9v4.5H21v1.8h4.1V50H27v-4.6h4zM20.7 13.2h-6V6.7h-2.1v6.5h-6v2h6v6.6h2.1v-6.6h6zM50 25h-4v-4.5h-1.9V25H40v1.8h4.1v4.5H46v-4.5h4zM45.5 36.5h-5.9v-6.6h-2.2v6.6h-5.9v2h5.9V45h2.2v-6.5h5.9zM30.7 6.5h-4V2h-1.4v4.5h-4v1.4h4v4.4h1.5V7.9h4zM11.4 25.2h-4v-4.4H6v4.4H2v1.4h4V31h1.4v-4.4h4z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-3gicg6j24fv";
freezeTemplate(tmpl);
