import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./filter.css";

import _implicitScopedStylesheets from "./filter.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M48.2 4H3.8C2.4 4 1.6 5.7 2.5 6.8L22 29.5c.6.7 1 1.7 1 2.6v14.4c0 .8.7 1.5 1.5 1.5h3c.8 0 1.5-.7 1.5-1.5V32.1c0-1 .3-1.9 1-2.6L49.5 6.8c.9-1.1.2-2.8-1.3-2.8z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-5h1jq0jnm88";
freezeTemplate(tmpl);
