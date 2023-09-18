import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./price_book_entries.css";

import _implicitScopedStylesheets from "./price_book_entries.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M48.8 20l14.8.3a5.45 5.45 0 013.1 1.3l5.8 5.8 5.8 5.8a4.39 4.39 0 011.3 3.1l.4 14.9a4.45 4.45 0 01-1.3 3.2L54.4 78.7a4.53 4.53 0 01-6.3 0L34.7 65.3 21.3 51.9a4.53 4.53 0 010-6.3l24.3-24.3a4.45 4.45 0 013.2-1.3zm-8.2 23.7L38.2 46a1 1 0 000 1.6l14.2 14.2a1 1 0 001.6 0l2.4-2.4a1 1 0 000-1.6L42.1 43.7a.94.94 0 00-1.5 0zm6.7-6.8l-2.4 2.4a1 1 0 000 1.6l14.2 14.2a1 1 0 001.6 0l2.4-2.4a1 1 0 000-1.6L48.9 36.9a1.22 1.22 0 00-1.6 0zm22.9-7.1a4.45 4.45 0 100 6.3 4.53 4.53 0 000-6.3z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2dgb644faup";
freezeTemplate(tmpl);
