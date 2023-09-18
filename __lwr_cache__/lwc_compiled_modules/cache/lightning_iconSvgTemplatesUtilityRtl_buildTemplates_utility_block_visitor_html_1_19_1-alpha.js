import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./block_visitor.css";

import _implicitScopedStylesheets from "./block_visitor.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M22 37a17.19 17.19 0 012.3-8.2c1.7-3 3.6-4.2 5.1-6.4a14.64 14.64 0 001.4-13A10 10 0 0021 3a10 10 0 00-9.4 6.9c-1.6 4.5-.9 9.9 2.7 13.3 1.5 1.4 2.9 3.6 2.1 5.7s-3.1 2.9-4.8 3.7c-3.9 1.7-8.6 4.1-9.4 8.7A6.22 6.22 0 008.1 49h17a1 1 0 00.8-1.6A16 16 0 0122 37z"${3}/><path d="M46.5 28.5a12 12 0 100 17 12 12 0 000-17zm-14.2 2.8a7.91 7.91 0 019.8-1.2l-11 11a7.91 7.91 0 011.2-9.8zm11.4 11.4a8.36 8.36 0 01-9.8 1.3l11-11a8.05 8.05 0 01-1.2 9.7z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-4ksc20fdaf4";
freezeTemplate(tmpl);
