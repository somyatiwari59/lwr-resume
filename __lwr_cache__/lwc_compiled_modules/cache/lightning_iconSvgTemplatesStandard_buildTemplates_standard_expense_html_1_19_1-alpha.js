import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./expense.css";

import _implicitScopedStylesheets from "./expense.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M75 23.8H25a4.59 4.59 0 00-4.6 4.6V74a1.12 1.12 0 001.9.8l4.1-4.1a1 1 0 011.6 0l5.2 5.2a1 1 0 001.6 0l4.1-4.1a1 1 0 011.6 0l4.1 4.1a1 1 0 001.6 0l4.1-4.1a1 1 0 011.6 0l4.1 4.1a1 1 0 001.6 0l4.1-4.1a1 1 0 011.6 0l4.1 4.1a1 1 0 001.6 0l4.1-4.1a1 1 0 011.6 0l3 3a1.12 1.12 0 001.9-.8V28.3a4.5 4.5 0 00-4.6-4.5zM53 50.4v1.1a5.45 5.45 0 01-3.1 1 5.6 5.6 0 010-11.2 5.59 5.59 0 015.6 5.2 4.48 4.48 0 00-2.5 3.9zm15 14.1a1.52 1.52 0 01-1.5 1.4h-9a1.43 1.43 0 01-1.4-1.4v-1.4a1.43 1.43 0 011.4-1.4h9.1a1.43 1.43 0 011.4 1.4zm0-6.3a1.52 1.52 0 01-1.5 1.4h-9a1.43 1.43 0 01-1.4-1.4v-1.4a1.43 1.43 0 011.4-1.4h9.1a1.43 1.43 0 011.4 1.4zm0-6.4a1.52 1.52 0 01-1.5 1.4h-9a1.43 1.43 0 01-1.4-1.4v-1.4a1.43 1.43 0 011.4-1.4h9.1a1.43 1.43 0 011.4 1.4zm.1-5.7a3.4 3.4 0 00-1.4-.2h-2.9v-3a4 4 0 01-4-4H40a4 4 0 01-4 4v8.4a4 4 0 014 4h13.2a3.4 3.4 0 00-.2 1.4v1.4a6.64 6.64 0 00.3 1.5h-18a3.37 3.37 0 01-3.4-3.4V38.1a3.37 3.37 0 013.4-3.4h29.4a3.37 3.37 0 013.4 3.4z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-62qmmi3hdvb";
freezeTemplate(tmpl);
