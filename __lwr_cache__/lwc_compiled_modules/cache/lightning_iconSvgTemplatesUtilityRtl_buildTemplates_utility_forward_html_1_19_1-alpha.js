import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./forward.css";

import _implicitScopedStylesheets from "./forward.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M50 27.4v-3c0-.8-.7-1.4-1.5-1.4H15.3c-.9 0-1.3-1.1-.7-1.8l9.6-9.6c.6-.6.6-1.5 0-2.1L22 7.4c-.6-.6-1.5-.6-2.1 0L2.4 24.9c-.6.6-.6 1.5 0 2.1l17.5 17.6c.6.6 1.5.6 2.1 0l2.2-2.2c.6-.6.6-1.5 0-2.1l-9.6-9.6c-.6-.6-.2-1.7.7-1.7h33.2c.9 0 1.5-.8 1.5-1.6z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-40r5atubq9v";
freezeTemplate(tmpl);