import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./richtextnumberedlist.css";

import _implicitScopedStylesheets from "./richtextnumberedlist.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M50 6.5v3c0 .8-.7 1.5-1.5 1.5h-27c-.8 0-1.5-.7-1.5-1.5v-3c0-.8.7-1.5 1.5-1.5h27c.8 0 1.5.7 1.5 1.5zM21.5 21h18c.8 0 1.5-.7 1.5-1.5v-3c0-.8-.7-1.5-1.5-1.5h-18c-.8 0-1.5.7-1.5 1.5v3c0 .8.7 1.5 1.5 1.5zm27 9h-27c-.8 0-1.5.7-1.5 1.5v3c0 .8.7 1.5 1.5 1.5h27c.8 0 1.5-.7 1.5-1.5v-3c0-.8-.7-1.5-1.5-1.5zm-9 10h-18c-.8 0-1.5.7-1.5 1.5v3c0 .8.7 1.5 1.5 1.5h18c.8 0 1.5-.7 1.5-1.5v-3c0-.8-.7-1.5-1.5-1.5zM3.5 8H6v12.5c0 .8.7 1.5 1.5 1.5h1c.8 0 1.5-.7 1.5-1.5V6c0-1.1-.9-2-2-2H3.5C2.7 4 2 4.7 2 5.5v1C2 7.3 2.7 8 3.5 8zM12 28H3.5c-.8 0-1.5.7-1.5 1.5v1c0 .8.7 1.5 1.5 1.5H10v4H4c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h8.5c.8 0 1.5-.7 1.5-1.5v-1c0-.8-.7-1.5-1.5-1.5H6v-4h6c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-7atvbebebq";
freezeTemplate(tmpl);
