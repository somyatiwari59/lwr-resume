import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./remove_relationship.css";

import _implicitScopedStylesheets from "./remove_relationship.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M36.001 20c0-2.2-1.799-4-4-4H6c-2.199 0-4 1.8-4 4v26c0 2.2 1.801 4 4 4h26.001c2.201 0 4-1.8 4-4V20zM11 35c-.5 0-1-.5-1-1v-2c0-.5.5-1 1-1h16.001c.5 0 1 .5 1 1v2c0 .5-.5 1-1 1H11zm32.001 7h-3v-6h3c.6 0 1-.4 1-1V9c0-.6-.4-1-1-1H17c-.6 0-1 .4-1 1v3h-6V9c0-3.9 3.102-7 7-7h26.001c3.9 0 7 3.1 7 7v26c0 3.9-3.1 7-7 7z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-193a8l26idn";
freezeTemplate(tmpl);