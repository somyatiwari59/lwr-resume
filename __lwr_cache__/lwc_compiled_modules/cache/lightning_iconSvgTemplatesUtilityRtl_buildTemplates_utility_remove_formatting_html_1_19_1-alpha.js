import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./remove_formatting.css";

import _implicitScopedStylesheets from "./remove_formatting.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M45.1 40.9l4.6-4.6c.4-.4.4-1 0-1.4l-2.8-2.8c-.4-.4-1-.4-1.4 0L41 36.8l-4.3-4.3c-.4-.4-1-.4-1.4 0l-2.8 2.8c-.4.4-.4 1 0 1.4l4.3 4.3-4.2 4.2c-.4.4-.4 1 0 1.4l2.8 2.8c.4.4 1 .4 1.4 0l4.2-4.2 4.5 4.5c.4.4 1 .4 1.4 0l2.8-2.8c.4-.4.4-1 0-1.4l-4.6-4.6zM4.8 8h10.8l-4.1 23.2c-.2 1 .5 1.8 1.4 1.8H18c.7 0 1.4-.5 1.5-1.2L23.7 8h11c.7 0 1.4-.5 1.5-1.3l.5-3c.2-.9-.5-1.7-1.5-1.7h-30c-.7 0-1.3.5-1.4 1.3l-.5 3c-.2.9.5 1.7 1.5 1.7zM28 38.5c0-.8-.7-1.5-1.5-1.5h-23c-.8 0-1.5.7-1.5 1.5v3c0 .8.7 1.5 1.5 1.5h23c.8 0 1.5-.7 1.5-1.5v-3z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-4oua5sbvklq";
freezeTemplate(tmpl);
