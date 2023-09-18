import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./recipe.css";

import _implicitScopedStylesheets from "./recipe.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M31.2 4.24A2.24 2.24 0 1129 2a2.24 2.24 0 012.2 2.24zM23 12.56a3 3 0 10-3-3 3 3 0 003 3zm19.44 31l-10-15.36V20a2.14 2.14 0 002.4-2.24A2 2 0 0033 15.6H19.2a2 2 0 00-2 2 2.09 2.09 0 000 .25 2.16 2.16 0 002.4 2.24v8.31l-10 15.2a4.26 4.26 0 00-.24 4.24A3.91 3.91 0 0012.88 50H39a3.9 3.9 0 003.52-2.16 4 4 0 00-.16-4.24zm-18.8-14V20.4h4.8v9.28l4.72 7.52H18.88z" fill-rule="evenodd"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-1gtf4aa9a9g";
freezeTemplate(tmpl);
