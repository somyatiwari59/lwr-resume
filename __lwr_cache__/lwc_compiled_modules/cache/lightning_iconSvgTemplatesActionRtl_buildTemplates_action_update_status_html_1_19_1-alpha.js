import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./update_status.css";

import _implicitScopedStylesheets from "./update_status.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M29.5 27.9l-2.2-2.2c-.6-.6-1.6-.6-2.2 0L12.8 38.1c-.4.4-1.1.4-1.5 0l-4.4-4.5c-.6-.6-1.6-.6-2.2 0l-2.2 2.2c-.6.6-.6 1.6 0 2.2l8.5 8.6c.6.6 1.6.6 2.2 0l16.3-16.4c.7-.7.7-1.7 0-2.3z"${3}/><path d="M47 5.2H17c-1.7 0-3 1.3-3 3v23l8.2-8.3c1-1 2.4-1.6 3.9-1.6l.9-.1h14c.6 0 1 .4 1 1v2c0 .6-.4 1-1 1h-8.6c1 1 1.5 2.3 1.6 3.6.1 1.6-.6 3.1-1.7 4.2l-.2.2H47c1.7 0 3-1.3 3-3v-22c0-1.7-1.3-3-3-3zm-5 11c0 .6-.4 1-1 1H23c-.6 0-1-.4-1-1v-2c0-.6.4-1 1-1h18c.6 0 1 .4 1 1v2z"${3}/></g></g>`;
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
tmpl.stylesheetToken = "lwc-174anbvabfg";
freezeTemplate(tmpl);
