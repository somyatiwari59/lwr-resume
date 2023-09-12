import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./word.css";

import _implicitScopedStylesheets from "./word.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g fill-rule="evenodd"${3}><path d="M5.11 0A5.07 5.07 0 000 5v53.88A5.07 5.07 0 005.11 64h45.78A5.07 5.07 0 0056 58.88v-38.6L37.06 0z" fill="#107CAD"${3}/><path d="M56 20.35v1H43.18s-6.31-1.26-6.13-6.71c0 0 .21 5.71 6 5.71z" fill="#084968"${3}/><path d="M37.07 0v14.56a5.78 5.78 0 006.11 5.79H56z" fill="#90D0FE"${3}/></g><path d="M14.24 53.86h-3a1.08 1.08 0 01-1.08-1.08v-9.85a1.08 1.08 0 011.08-1.08h3a6 6 0 110 12zm0-10.67h-2.61v9.34h2.61a4.41 4.41 0 004.61-4.66 4.38 4.38 0 00-4.61-4.68zm14.42 10.89a5.86 5.86 0 01-6-6.21 6 6 0 1111.92 0 5.87 5.87 0 01-5.92 6.21zm0-11.09c-2.7 0-4.41 2.07-4.41 4.88s1.71 4.88 4.41 4.88 4.41-2.09 4.41-4.88S31.35 43 28.66 43zm18.45.38a.75.75 0 01.2.52.71.71 0 01-.7.72.64.64 0 01-.51-.24 4.06 4.06 0 00-3-1.38 4.61 4.61 0 00-4.63 4.88 4.63 4.63 0 004.63 4.88 4 4 0 003-1.37.7.7 0 01.51-.24.72.72 0 01.7.74.78.78 0 01-.2.51 5.33 5.33 0 01-4 1.69 6.22 6.22 0 010-12.43 5.26 5.26 0 014 1.72z" fill="#fff"${3}/></g>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, h: api_element} = $api;
  return [api_element("svg", {
    className: $cmp.computedClass,
    attrs: {
      "focusable": "false",
      "data-key": $cmp.name,
      "aria-hidden": "true",
      "viewBox": "0 0 56 64",
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
tmpl.stylesheetToken = "lwc-4tjnlb5cqbk";
freezeTemplate(tmpl);
