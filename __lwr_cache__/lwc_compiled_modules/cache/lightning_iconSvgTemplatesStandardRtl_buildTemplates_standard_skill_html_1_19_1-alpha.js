import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./skill.css";

import _implicitScopedStylesheets from "./skill.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M43.84 46.76a5.35 5.35 0 115.46-5.34 5.41 5.41 0 01-5.46 5.34z" fill-rule="evenodd"${3}/><path d="M77.33 55.7l-7.27-10.8V44a24 24 0 00-23.87-24 22 22 0 00-5.67.7A23.89 23.89 0 0022.31 44a21.92 21.92 0 003.58 12.7c4.18 6 7 10.8 5.27 17.3a4.58 4.58 0 00.9 4.2 4.43 4.43 0 003.68 1.8h19.6A4.72 4.72 0 0060 76.2a5 5 0 00.2-1.2 2.37 2.37 0 012.39-2H64a4.72 4.72 0 004.68-3.4 41.31 41.31 0 001.48-9.6h5.17a2.78 2.78 0 002.19-1.6 2.86 2.86 0 00-.19-2.7zm-19.84-8.37l-1 1.57a2.22 2.22 0 01-1.76.94 2.38 2.38 0 01-.72-.16l-2.65-1a11.64 11.64 0 01-3.85 2.2l-.48 2.91a2 2 0 01-2 1.65h-2a2 2 0 01-2-1.65l-.48-2.91a10 10 0 01-3.69-2l-2.81 1a2.38 2.38 0 01-.72.16 2.1 2.1 0 01-1.76-1l-1-1.65a1.94 1.94 0 01.48-2.51l2.33-1.89a10.11 10.11 0 01-.24-2.12 9.41 9.41 0 01.24-2l-2.28-1.99a1.92 1.92 0 01-.48-2.51l1-1.65a2 2 0 011.76-1 2.38 2.38 0 01.72.16l2.81 1a11.52 11.52 0 013.69-2.12L41 28a1.91 1.91 0 012-1.57h2a1.92 1.92 0 012 1.49l.48 2.83a11.31 11.31 0 013.69 2l2.81-1a2.38 2.38 0 01.72-.16 2.1 2.1 0 011.76 1l1 1.65A2 2 0 0157 36.8l-2.33 1.89a9.56 9.56 0 01.24 2.12 9.41 9.41 0 01-.24 2L57 44.74a2 2 0 01.49 2.59z" fill-rule="evenodd"${3}/></g>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, h: api_element} = $api;
  return [api_element("svg", {
    className: $cmp.computedClass,
    attrs: {
      "focusable": "false",
      "data-key": $cmp.name,
      "aria-hidden": "true",
      "viewBox": "0 0 100 100",
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
tmpl.stylesheetToken = "lwc-17r3g9u46pd";
freezeTemplate(tmpl);
