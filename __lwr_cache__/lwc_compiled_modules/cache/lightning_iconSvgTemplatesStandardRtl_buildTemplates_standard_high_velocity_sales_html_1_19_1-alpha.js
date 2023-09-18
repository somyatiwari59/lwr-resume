import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./high_velocity_sales.css";

import _implicitScopedStylesheets from "./high_velocity_sales.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M80 21.5c0-1.2-.7-1.5-1.1-1.5H53.1c-1.9 0-1.9 1.9-1.9 1.9v3.6c0 1.6 1 2 1.5 2h18c.7.1 1.9.6 1.9 2.6v17c.1.5.4 1.6 1.9 1.6h4s1.6 0 1.6-1.9V21.5z"${3}/><path d="M64.4 37.1c.1-1.2-.7-1.5-1.1-1.5H37.5c-1.9 0-1.9 1.9-1.9 1.9v3.6c0 1.6 1 2 1.5 2h18c.7.1 1.9.6 1.9 2.6v17c.1.5.4 1.6 1.9 1.6h4s1.6 0 1.6-1.9V37.1z"${3}/><path d="M24.2 78.5c.2.2 1.2 1 2.6-.4l13-13c.4-.4 1.5-1.2 1.5.5v12.8c.1.5.4 1.6 1.9 1.6h4s1.6 0 1.6-1.9V52.8c0-1.2-.7-1.4-1.1-1.5H21.9c-1.9 0-1.9 1.9-1.9 1.9v3.6c0 1.6 1 2 1.5 2h12c.5 0 2 .1.6 1.5L21.6 73s-1.5 1.4-.2 2.6l2.8 2.9z"${3}/></g></g>`;
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
tmpl.stylesheetToken = "lwc-5gbcnmuknmm";
freezeTemplate(tmpl);
