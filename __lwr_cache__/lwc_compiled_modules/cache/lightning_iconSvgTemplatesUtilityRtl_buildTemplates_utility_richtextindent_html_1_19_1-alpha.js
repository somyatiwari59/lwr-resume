import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./richtextindent.css";

import _implicitScopedStylesheets from "./richtextindent.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M0 14.5c0 .8.7 1.5 1.5 1.5h17c.8 0 1.5-.7 1.5-1.5v-3c0-.8-.7-1.5-1.5-1.5h-17c-.8 0-1.5.7-1.5 1.5v3zm4 24c0 .8.7 1.5 1.5 1.5h13c.8 0 1.5-.7 1.5-1.5v-3c0-.8-.7-1.5-1.5-1.5h-13c-.8 0-1.5.7-1.5 1.5v3zm-4-12c0 .8.7 1.5 1.5 1.5h17c.8 0 1.5-.7 1.5-1.5v-3c0-.8-.7-1.5-1.5-1.5h-17c-.8 0-1.5.7-1.5 1.5v3zm24 20c0 .8.7 1.5 1.5 1.5h3c.8 0 1.5-.7 1.5-1.5v-41c0-.8-.7-1.5-1.5-1.5h-3c-.8 0-1.5.7-1.5 1.5v41zm10.3-22.1c-.3.4-.3 1 0 1.4l8.3 9c.5.6 1.4.1 1.4-.9V28h6.5c.8 0 1.5-.7 1.5-1.5v-3c0-.8-.7-1.5-1.5-1.5H44v-5.8c0-1-.8-1.5-1.4-.9l-8.3 9.1z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-74sp8bkti44";
freezeTemplate(tmpl);