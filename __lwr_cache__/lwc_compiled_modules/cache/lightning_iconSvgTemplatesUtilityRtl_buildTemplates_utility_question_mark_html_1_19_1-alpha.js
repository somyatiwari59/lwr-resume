import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./question_mark.css";

import _implicitScopedStylesheets from "./question_mark.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M26.7 42.8c.8 0 1.5.7 1.5 1.5v3.2c0 .8-.7 1.5-1.5 1.5h-3.2c-.8 0-1.5-.7-1.5-1.5v-3.2c0-.8.7-1.5 1.5-1.5h3.2zM28.2 35.1c0-2.1 1.3-4 3.1-4.8h.1c5.2-2.1 8.8-7.2 8.8-13.2 0-7.8-6.4-14.2-14.2-14.2-7.2 0-13.2 5.3-14.2 12.2v.1c-.1.9.6 1.6 1.5 1.6h3.2c.8 0 1.4-.5 1.5-1.1v-.2c.7-3.7 4-6.5 7.9-6.5 4.5 0 8.1 3.6 8.1 8.1 0 2.1-.8 4-2.1 5.5l-.1.1c-.9 1-2.1 1.6-3.3 2-4 1.4-6.7 5.2-6.7 9.4v1.5c0 .8.6 1.4 1.4 1.4h3.2c.8 0 1.6-.6 1.6-1.5l.2-.4z"${3}/></g></g>`;
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
tmpl.stylesheetToken = "lwc-4a8fdekb154";
freezeTemplate(tmpl);
