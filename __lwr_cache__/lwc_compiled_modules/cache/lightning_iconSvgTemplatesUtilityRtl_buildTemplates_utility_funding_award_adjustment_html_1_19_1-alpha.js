import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./funding_award_adjustment.css";

import _implicitScopedStylesheets from "./funding_award_adjustment.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M20.82 27.08l.07 15.11c0 .37.25.62.63.62.13 0 .25 0 .31-.06 3-1.69 9.11-6.22 9.11-6.48 0-1.82.5-3.12.76-3.9.26-.78.94-1.82 1.29-2.35.35-.52.77-1.04 1.29-1.57s1.55-1.31 1.55-1.31l-.04-8.12c0-.37-.25-.62-.63-.62-.13 0-.25 0-.31.06l-13.42 7.56c-.37.19-.62.62-.62 1.06zm-1.27-4.2l13.48-7.56c.31-.19.37-.56.18-.87-.06-.06-.13-.12-.19-.18-3.01-1.66-12.23-6.81-12.23-6.81a3.92 3.92 0 00-3.88.02s-9.17 5.18-12.17 6.93c-.31.19-.37.56-.18.87.06.06.13.12.19.18l13.55 7.43c.38.18.88.18 1.25 0zm-3.11 3.17L2.95 18.62c-.31-.18-.69-.06-.87.25-.06.06-.06.19-.06.31l.06 13.5c0 1.36.76 2.6 1.96 3.27 0 0 9.16 5.1 12.17 6.75.31.18.69.06.87-.25.06-.12.06-.25.06-.31l-.07-15.05c0-.43-.25-.87-.63-1.05z"${3}/><path d="M50.01 36.12c.02 4.88-3.91 8.85-8.79 8.87s-8.85-3.91-8.87-8.79 3.91-8.85 8.79-8.87 8.85 3.91 8.87 8.79zm-3.5-5.6l-3.35.02c-.22 0-.28.22-.11.41l1.06 1.17-1.93 2.16c-.11.12-.11.31 0 .45l.8.88c.11.12.28.12.41 0l1.96-2.18 1.06 1.17c.17.19.37.12.37-.12l-.02-3.68c0-.14-.13-.26-.26-.26zm-6.95 11.27l-3.63.02c-.16 0-.35-.21-.36-.37l-.02-3.61c0-.23.23-.31.45-.12l1.18 1.14 2.11-2.12c.14-.12.33-.12.45 0l.88.86c.12.12.12.33 0 .45l-2.11 2.14 1.16 1.17c.19.19.12.44-.12.45z" fill-rule="evenodd"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-vb4cbspaml";
freezeTemplate(tmpl);