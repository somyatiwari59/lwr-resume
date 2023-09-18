import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./key_dates.css";

import _implicitScopedStylesheets from "./key_dates.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M46.8 19.6a1.6 1.6 0 011.59 1.45V45.2a4.82 4.82 0 01-4.58 4.8H8.4a4.82 4.82 0 01-4.8-4.59V21.2a1.6 1.6 0 011.45-1.59H46.8zm-21.38 4.63v.11l-2.18 6.86a.53.53 0 01-.54.41h-6.93a.75.75 0 00-.49 1.25l.08.07L20.92 37a.72.72 0 01.25.67v.11l-2.55 7a.68.68 0 001 .83l.08-.06 6-4.45a.7.7 0 01.73-.06l.09.06 6 4.45a.68.68 0 001.07-.67v-.1l-2.64-7a.72.72 0 01.15-.7l.08-.08 5.56-4.09a.74.74 0 00-.31-1.31h-7.04a.67.67 0 01-.6-.31v-.1l-2.1-6.82a.67.67 0 00-1.27-.14zM36.4 2a3.21 3.21 0 013.2 3.2v1.6h4a4.81 4.81 0 014.8 4.8v1.6a1.6 1.6 0 01-1.6 1.6H5.2a1.6 1.6 0 01-1.6-1.6v-1.6a4.81 4.81 0 014.8-4.8h4V5.2a3.2 3.2 0 016.4 0v1.6h14.4V5.2A3.21 3.21 0 0136.4 2z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-7d43b4f0n07";
freezeTemplate(tmpl);
