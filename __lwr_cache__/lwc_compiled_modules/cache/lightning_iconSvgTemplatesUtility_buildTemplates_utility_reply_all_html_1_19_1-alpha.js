import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./reply_all.css";

import _implicitScopedStylesheets from "./reply_all.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M24.4 18.1s-1.1-1.1-.5-1.7l5.6-5.6c.6-.6.6-1.5 0-2.1l-2.1-2.2c-.6-.6-1.5-.6-2.1 0L11.8 20c-.6.6-.6 1.5 0 2.1l13.5 13.5c.6.6 1.5.6 2.1 0l2.1-2.1c.6-.6.6-1.5 0-2.1L24 25.8c-.6-.6-.2-1.5.5-1.7 11.1.4 20.1 9.3 20.8 20.6 0 .8.7 1.4 1.5 1.4h3c.9 0 1.4-.7 1.3-1.6-.7-14.5-11.7-25.9-26.7-26.4z"${3}/><path d="M5.4 20.4L17 8.8c.6-.6.6-1.5 0-2.1l-.1-.2c-.6-.6-1.5-.6-2.1 0L1.3 20c-.6.6-.6 1.5 0 2.1l13.5 13.5c.6.6 1.5.6 2.1 0l.1-.1c.6-.6.6-1.5 0-2.1L5.5 21.8s-.7-.6-.1-1.4z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-19nn3kig0ar";
freezeTemplate(tmpl);
