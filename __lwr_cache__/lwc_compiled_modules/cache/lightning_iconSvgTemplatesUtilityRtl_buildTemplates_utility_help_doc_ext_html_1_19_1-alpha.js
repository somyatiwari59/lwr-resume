import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./help_doc_ext.css";

import _implicitScopedStylesheets from "./help_doc_ext.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M49.83 32.45A1.43 1.43 0 0048.44 31h-12A1.43 1.43 0 0035 32.44v1.44a1.43 1.43 0 001.4 1.44h6.14l-11 11a1.42 1.42 0 000 2l1 1a1.54 1.54 0 001.09.45 1.32 1.32 0 00.94-.38l11-11v6A1.43 1.43 0 0047 45.83h1.53a1.43 1.43 0 001.47-1.4zM19.91 32.07h-4.08A1.12 1.12 0 0114.68 31v-1.3a8.18 8.18 0 015.47-7.7 6.16 6.16 0 002.61-1.71 6.56 6.56 0 00-9.38-9.15 5.77 5.77 0 00-1.88 3.6 1.17 1.17 0 01-1.23.89H6.19A1.17 1.17 0 015 14.46v-.1a13.31 13.31 0 013.89-8.08 13.38 13.38 0 019.55-3.68 13.1 13.1 0 014 25.39 1.83 1.83 0 00-1.23 1.63v1.23a1.27 1.27 0 01-1.3 1.22zm1.3 8.57A1.24 1.24 0 0120 41.87h-4.09a1.27 1.27 0 01-1.23-1.23v-4.08a1.25 1.25 0 011.23-1.22H20a1.25 1.25 0 011.22 1.22z"${3}/></g></g>`;
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
tmpl.stylesheetToken = "lwc-4ga5tk2rjn8";
freezeTemplate(tmpl);
