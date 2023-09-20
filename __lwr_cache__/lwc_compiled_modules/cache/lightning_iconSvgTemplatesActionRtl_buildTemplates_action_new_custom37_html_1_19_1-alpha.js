import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom37.css";

import _implicitScopedStylesheets from "./new_custom37.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M48.5 30.5h-9.7v-8.8c2 1.7 4.6 2.8 7.5 2.8 1.3 0 2.2-1 2.2-2.2s-1-2.2-2.2-2.2c-4.1 0-7.5-3.7-7.5-8.2V9.5c.8 0 1.5-.7 1.5-1.5V6.5c0-.8-.7-1.5-1.5-1.5h-4.5c-.8 0-1.5.7-1.5 1.5V8c0 .8.7 1.5 1.5 1.5v2.2c0 4.6-3.7 8.2-8.2 8.2s-8.2-3.7-8.2-8.2V9.5c.8 0 1.5-.7 1.5-1.5V6.5c0-.8-.7-1.5-1.5-1.5h-4.5c-.8 0-1.5.7-1.5 1.5V8c0 .8.7 1.5 1.5 1.5v2.2c0 4.6-3.4 8.2-7.5 8.2-1.3 0-2.2 1-2.2 2.2s1 2.2 2.2 2.2c2.8 0 5.5-1.1 7.5-2.8v8.8H3.5c-.8.2-1.5.9-1.5 1.7v3.6c0 .8.7 1.7 1.5 1.7h3v8.1c0 .8.7 1.6 1.5 1.6h4.5c.8 0 1.5-.8 1.5-1.6v-3c0-2.5 2-4.4 4.5-4.4h15c2.5 0 4.5 1.9 4.5 4.4v3c0 .8.7 1.6 1.5 1.6H44c.8 0 1.5-.8 1.5-1.6v-8.1h3c.8 0 1.5-.8 1.5-1.7V32c0-.8-.7-1.5-1.5-1.5zm-30.7-9.1c2.2 1.9 5.1 3.1 8.2 3.1s6-1.1 8.2-3.1v9.1H17.8v-9.1z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-7msuier249u";
freezeTemplate(tmpl);