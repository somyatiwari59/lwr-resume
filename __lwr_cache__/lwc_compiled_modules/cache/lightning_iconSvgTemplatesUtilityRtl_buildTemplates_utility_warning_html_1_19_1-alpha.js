import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./warning.css";

import _implicitScopedStylesheets from "./warning.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M51.4 42.5l-22.9-37c-1.2-2-3.8-2-5 0L.6 42.5C-.8 44.8.6 48 3.1 48h45.8c2.5 0 4-3.2 2.5-5.5zM26 40c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3zm3-9c0 .6-.4 1-1 1h-4c-.6 0-1-.4-1-1V18c0-.6.4-1 1-1h4c.6 0 1 .4 1 1v13z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-74rg0m8gllp";
freezeTemplate(tmpl);
