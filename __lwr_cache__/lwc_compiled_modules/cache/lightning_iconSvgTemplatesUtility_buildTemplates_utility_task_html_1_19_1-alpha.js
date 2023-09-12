import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./task.css";

import _implicitScopedStylesheets from "./task.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M24 7l-1.7-1.7c-.5-.5-1.2-.5-1.7 0L10 15.8l-4.3-4.2c-.5-.5-1.2-.5-1.7 0l-1.7 1.7c-.5.5-.5 1.2 0 1.7l5.9 5.9c.5.5 1.1.7 1.7.7.6 0 1.2-.2 1.7-.7L24 8.7c.4-.4.4-1.2 0-1.7zM48.4 18.4H27.5c-.9 0-1.6-.7-1.6-1.6v-3.2c0-.9.7-1.6 1.6-1.6h20.9c.9 0 1.6.7 1.6 1.6v3.2c0 .9-.7 1.6-1.6 1.6zM48.4 32.7H22.7c-.9 0-1.6-.7-1.6-1.6v-3.2c0-.9.7-1.6 1.6-1.6h25.7c.9 0 1.6.7 1.6 1.6v3.2c0 .9-.7 1.6-1.6 1.6zM13 32.7H9.8c-.9 0-1.6-.7-1.6-1.6v-3.2c0-.9.7-1.6 1.6-1.6H13c.9 0 1.6.7 1.6 1.6v3.2c.1.9-.7 1.6-1.6 1.6zM13 47H9.8c-.9 0-1.6-.7-1.6-1.6v-3.2c0-.9.7-1.6 1.6-1.6H13c.9 0 1.6.7 1.6 1.6v3.2c.1.9-.7 1.6-1.6 1.6zM48.4 47H22.7c-.9 0-1.6-.7-1.6-1.6v-3.2c0-.9.7-1.6 1.6-1.6h25.7c.9 0 1.6.7 1.6 1.6v3.2c0 .9-.7 1.6-1.6 1.6z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-6ki5eh2l90a";
freezeTemplate(tmpl);
