import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./side_list.css";

import _implicitScopedStylesheets from "./side_list.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M2 5.5v41c0 .8.7 1.5 1.5 1.5h27c.8 0 1.5-.7 1.5-1.5v-41c0-.8-.7-1.5-1.5-1.5h-27C2.7 4 2 4.7 2 5.5zm34 0v5c0 .8.7 1.5 1.5 1.5h11c.8 0 1.5-.7 1.5-1.5v-5c0-.8-.7-1.5-1.5-1.5h-11c-.8 0-1.5.7-1.5 1.5zm0 12v5c0 .8.7 1.5 1.5 1.5h11c.8 0 1.5-.7 1.5-1.5v-5c0-.8-.7-1.5-1.5-1.5h-11c-.8 0-1.5.7-1.5 1.5zm0 12v5c0 .8.7 1.5 1.5 1.5h11c.8 0 1.5-.7 1.5-1.5v-5c0-.8-.7-1.5-1.5-1.5h-11c-.8 0-1.5.7-1.5 1.5zm0 12v5c0 .8.7 1.5 1.5 1.5h11c.8 0 1.5-.7 1.5-1.5v-5c0-.8-.7-1.5-1.5-1.5h-11c-.8 0-1.5.7-1.5 1.5z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-423ied9u6bo";
freezeTemplate(tmpl);
