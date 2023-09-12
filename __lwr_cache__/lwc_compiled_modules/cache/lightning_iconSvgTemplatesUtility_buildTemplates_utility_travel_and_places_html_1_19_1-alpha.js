import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./travel_and_places.css";

import _implicitScopedStylesheets from "./travel_and_places.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M47 21L42.48 8.84C41.76 6.52 39.6 5 37.2 5H14.8c-2.4 0-4.56 1.52-5.36 3.84L5 21c-2.08.56-3 2.56-3 4.8v11.6c0 2.08 2.16 3.88 4 4.6v4.033C6 47.344 6.674 48 8.023 48h5.027c1.3 0 1.95-.656 1.95-1.967V42h22v4.033c0 1.311.663 1.967 1.988 1.967h5.033c1.32 0 1.979-.656 1.979-1.967V41.96c1.84-.64 4-2.4 4-4.56V25.8c0-2.24-.92-4.24-3-4.8zM11 34c-2.24 0-4-1.76-4-4s1.76-4 4-4 4 1.76 4 4-1.76 4-4 4zm16.6-13H11.76c-.56 0-.92-.52-.76-1l3-9c.08-.32.29-1 1-1h22c.78 0 .92.76 1 1l3 9c.2.642-.12 1-.92 1H27.6zM41 34c-2.24 0-4-1.76-4-4s1.76-4 4-4 4 1.76 4 4-1.76 4-4 4z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2ch29qi53ll";
freezeTemplate(tmpl);
