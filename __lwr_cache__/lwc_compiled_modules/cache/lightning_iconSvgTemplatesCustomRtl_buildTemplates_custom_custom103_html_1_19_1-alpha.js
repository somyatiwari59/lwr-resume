import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom103.css";

import _implicitScopedStylesheets from "./custom103.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M76.14 54.901c-1.625-.77-4.012-2.713-7.553-3.365.913-1.03 1.591-2.609 2.302-4.513a8.824 8.824 0 00.352-3.365c0-.972.176-2.57-.058-3.45-.796-2.948-2.772-3.75-5.074-3.75s-4.311.828-5.074 3.776c-.235.854-.059 2.445-.059 3.424a9.046 9.046 0 00.352 3.39c.711 1.918 1.39 3.51 2.302 4.514a16.435 16.435 0 00-4.865 1.891 39.241 39.241 0 015.048 2.609c.796.47 1.507.887 2.067 1.148 2.713 1.272 4.22 2.654 5.107 3.913h8.543V58.2s-.058-1.741-3.39-3.306v.006zm-42.014 2.29c.561-.268 1.272-.653 2.067-1.149a38.074 38.074 0 015.074-2.608 16.52 16.52 0 00-4.95-1.898c.913-1.03 1.592-2.609 2.303-4.513a8.824 8.824 0 00.352-3.365c0-.972.176-2.57-.059-3.45-.796-2.948-2.772-3.75-5.074-3.75s-4.304.828-5.074 3.75c-.267.854-.091 2.445-.091 3.424a9.046 9.046 0 00.352 3.39c.711 1.918 1.39 3.51 2.302 4.514-3.508.652-5.87 2.609-7.493 3.365-3.333 1.565-3.365 3.261-3.365 3.261v2.89h8.582a13.096 13.096 0 015.074-3.862zm30.887 1.956c-2.42-1.122-6.02-4.044-11.328-5.048 1.356-1.533 2.387-3.913 3.45-6.757.652-1.65.502-3.039.502-5.047 0-1.474.267-3.835-.091-5.133-1.18-4.396-4.129-5.609-7.611-5.609-3.483 0-6.444 1.246-7.605 5.674-.326 1.272-.058 3.626-.058 5.107 0 2.008-.092 3.424.502 5.048 1.063 2.863 2.067 5.25 3.424 6.782-5.283 1.03-8.824 3.913-11.244 5.048-4.989 2.328-4.989 4.898-4.989 4.898v4.337h40.037v-4.344s0-2.57-4.989-4.924v-.032z" fill-rule="evenodd"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-5e3iidiftem";
freezeTemplate(tmpl);
