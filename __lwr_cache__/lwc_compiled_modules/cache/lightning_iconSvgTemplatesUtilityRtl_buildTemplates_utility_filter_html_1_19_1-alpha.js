import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./filter.css";

import _implicitScopedStylesheets from "./filter.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M25.4 33.9c-.6.6-.6 1.5 0 2.1L37 47.6c.6.6 1.5.6 2.1 0l11.5-11.5c.6-.6.6-1.5 0-2.1l-2.2-2.2c-.6-.6-1.5-.6-2.1 0l-3.6 3.6c-.7.6-1.7.2-1.7-.7V21.5c0-.8-.7-1.5-1.5-1.5h-3c-.8 0-1.5.7-1.5 1.5v13.2c0 .9-1.1 1.3-1.7.7l-3.6-3.6c-.6-.6-1.5-.6-2.1 0l-2.2 2.1zM.9 12.5c0 .8.7 1.5 1.5 1.5h37c.8 0 1.5-.7 1.5-1.5v-3c0-.8-.7-1.5-1.5-1.5h-37C1.6 8 .9 8.7.9 9.5v3zm0 12c0 .8.7 1.5 1.5 1.5h27c.8 0 1.5-.7 1.5-1.5v-3c0-.8-.7-1.5-1.5-1.5h-27c-.8 0-1.5.7-1.5 1.5v3zm0 12c0 .8.7 1.5 1.5 1.5h17c.8 0 1.5-.7 1.5-1.5v-3c0-.8-.7-1.5-1.5-1.5h-17c-.8 0-1.5.7-1.5 1.5v3z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-342auaq1re7";
freezeTemplate(tmpl);