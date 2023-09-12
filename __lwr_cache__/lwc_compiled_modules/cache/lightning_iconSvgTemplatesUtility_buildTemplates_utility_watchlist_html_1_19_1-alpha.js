import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./watchlist.css";

import _implicitScopedStylesheets from "./watchlist.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M42.9 7h.2l.3.1a2.45 2.45 0 011.4 1l.2.3 4.2 7.4c1.5 2.7.2 3.4-1.1 4.2s-2.5 1.1-3.9-.8l-.1-.2-.7-1.3-6.4 25a3 3 0 01-5.3 1.1l-.1-.1-10.7-16.5-5.5 12a3 3 0 01-2.7 1.8H3.6c-.4 0-1.5-.4-1.5-1.4a4.06 4.06 0 00-.1-1.3v-1.8a1.52 1.52 0 011.44-1.6h7.36l7-15.2a2.94 2.94 0 013.86-1.55A3 3 0 0123 19.3l9.9 15.3 4.6-18.1-.9.5c-1.9 1.3-2.7.7-3.9-.8l-.2-.3c-.8-1.3-1.1-2.6.1-3.5l1-.7L41 7.4a3.14 3.14 0 011.9-.4z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-1lcfrl69ff4";
freezeTemplate(tmpl);
