import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./segments.css";

import _implicitScopedStylesheets from "./segments.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M78.8 45.1l-1-2.8-22.7 8.1-.5 1.3a4.81 4.81 0 01-1.7 2.3 4.89 4.89 0 01-7.8-4 5.73 5.73 0 011.4-3.7l.6-.8V20.3l-3.6.8A29 29 0 0027.4 31a29.7 29.7 0 00-6.9 18.9 29.6 29.6 0 0059.2 0 17.72 17.72 0 00-.9-4.8zM66.7 66.8A23.37 23.37 0 0150 73.7a23.61 23.61 0 01-16.7-6.9A23.57 23.57 0 0131.9 35a24.13 24.13 0 019.3-6.8v15.5a11.51 11.51 0 00-2 6.4 10.74 10.74 0 003.2 7.7 11 11 0 007.7 3.2 10.67 10.67 0 006.4-2.1 10.23 10.23 0 003.2-3.7l14-5a23.83 23.83 0 01-7 16.6z"${3}/><path d="M55.6 43.9L75.1 37a1.05 1.05 0 00.5-1.7l-.2-.4a29.69 29.69 0 00-20.7-14 1.58 1.58 0 00-1.8 1.6v19.6a2 2 0 00.1.7 2 2 0 002.6 1.1z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-6tjkae12pji";
freezeTemplate(tmpl);