import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./survey.css";

import _implicitScopedStylesheets from "./survey.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M5.23 3h35.54A3.29 3.29 0 0144 6.33v3.34A3.29 3.29 0 0140.77 13H5.23A3.29 3.29 0 012 9.67V6.33A3.29 3.29 0 015.23 3zm-.08 15h19.7A3.26 3.26 0 0128 21.33v3.34A3.26 3.26 0 0124.85 28H5.15A3.26 3.26 0 012 24.67v-3.34A3.26 3.26 0 015.15 18zM39 28a11 11 0 11-11 11 11 11 0 0111-11zm7 7.92a.84.84 0 000-1l-1.12-1a.77.77 0 00-1.12 0l-6 6.72-2.72-2.72a.77.77 0 00-1.12 0l-1.12 1a.68.68 0 000 1l3.84 3.76a1.58 1.58 0 001.12.48 1.45 1.45 0 001.12-.48zM5.2 33h18.56a16.14 16.14 0 00-1 5 17.11 17.11 0 00.48 5H5.2A3.28 3.28 0 012 39.67v-3.34A3.28 3.28 0 015.2 33z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2nbt8kokl20";
freezeTemplate(tmpl);
