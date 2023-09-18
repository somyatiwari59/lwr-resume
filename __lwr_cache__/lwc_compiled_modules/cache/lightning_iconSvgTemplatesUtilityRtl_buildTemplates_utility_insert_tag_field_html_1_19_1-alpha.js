import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./insert_tag_field.css";

import _implicitScopedStylesheets from "./insert_tag_field.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M16.3 12.2L14 10.3c-.7-.5-1.5-.4-2.1.2L.3 25.1c-.4.5-.4 1.3 0 1.9L12 41.5c.5.6 1.4.8 2.1.2l2.3-1.9c.7-.5.8-1.5.2-2.1L7.2 26l9.5-11.7c.4-.6.3-1.5-.4-2.1zM51.7 25.1L40 10.6c-.5-.6-1.4-.8-2.1-.2l-2.3 1.9c-.7.5-.8 1.5-.2 2.1l9.5 11.7-9.5 11.7c-.5.6-.4 1.6.2 2.1l2.3 1.9c.7.5 1.5.4 2.1-.2L51.7 27c.4-.7.4-1.4 0-1.9zM31.6 10.8l-3-.7c-.8-.2-1.7.3-1.9 1.1l-7.4 28.4c-.2.8.3 1.6 1.1 1.8l3 .7c.8.2 1.7-.3 1.9-1.1l7.4-28.4c.2-.9-.3-1.6-1.1-1.8z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2qsclv77dsd";
freezeTemplate(tmpl);
