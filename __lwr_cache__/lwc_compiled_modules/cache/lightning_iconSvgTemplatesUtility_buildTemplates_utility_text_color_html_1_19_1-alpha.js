import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./text_color.css";

import _implicitScopedStylesheets from "./text_color.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M10.4 36h4.1c.6 0 1.2-.5 1.4-1.1l3.2-8.9h13.4l3.5 8.9c.2.6.8 1.1 1.4 1.1h4.1c.7 0 1.2-.7.9-1.3L30.4 5c-.2-.6-.7-1-1.3-1H22c-.6 0-1.2.4-1.4 1l-11 29.7c-.3.6.2 1.3.8 1.3zm14.7-26h.9l4.3 10h-9l3.8-10zM48.5 42h-45c-.8 0-1.5.7-1.5 1.5v3c0 .8.7 1.5 1.5 1.5h45c.8 0 1.5-.7 1.5-1.5v-3c0-.8-.7-1.5-1.5-1.5z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-6ubls5jgu30";
freezeTemplate(tmpl);
