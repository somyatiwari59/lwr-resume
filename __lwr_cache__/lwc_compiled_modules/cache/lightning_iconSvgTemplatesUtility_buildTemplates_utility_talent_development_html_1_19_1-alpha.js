import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./talent_development.css";

import _implicitScopedStylesheets from "./talent_development.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><circle cx="16.35" cy="20.81" r="7.21"${3}/><path d="M16.35 29.62h-.17A10.76 10.76 0 005.85 40.5v2.58a1.29 1.29 0 001.29 1.29H25.6a1.27 1.27 0 001.26-1.25v-3a10.51 10.51 0 00-10.51-10.5zM31.34 27.77l-4.12 4.39a13.4 13.4 0 012.62 8v3a4.42 4.42 0 01-.21 1.25h.13a18.28 18.28 0 0012.44-4.9L31.36 27.77z"${3}/><path d="M41.12 11.54A18.36 18.36 0 0019.19 11a10.2 10.2 0 013.94 17.44 14.64 14.64 0 012.08 1.5l4.67-5v-7.65a1.5 1.5 0 011.5-1.5h6.09a1.5 1.5 0 011.5 1.5v4.19a1.5 1.5 0 01-1.5 1.5h-4.59v2L44.24 37.3a18.35 18.35 0 00-3.12-25.76z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-7n8t13uc0ui";
freezeTemplate(tmpl);
