import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./user_role.css";

import _implicitScopedStylesheets from "./user_role.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M38.3 27.2a11.4 11.4 0 1011.4 11.4 11.46 11.46 0 00-11.4-11.4zm2 12.4a2.39 2.39 0 01-.9-.2l-4.3 4.3a1.39 1.39 0 01-.9.4 1 1 0 01-.9-.4 1.39 1.39 0 010-1.9l4.3-4.3a2.92 2.92 0 01-.2-.9 3.47 3.47 0 013.4-3.8 2.39 2.39 0 01.9.2c.2 0 .2.2.1.3l-2 1.9a.28.28 0 000 .5l1.3 1.3a.38.38 0 00.6 0l1.9-1.9c.1-.1.4-.1.4.1a3.71 3.71 0 01.2.9 3.57 3.57 0 01-3.9 3.5z"${3}/><path d="M25.2 49.8c2.2 0 1-1.5 1-1.5a15.44 15.44 0 01-3.4-9.7 15 15 0 011.4-6.4.77.77 0 01.2-.3c.7-1.4-.7-1.5-.7-1.5a12.1 12.1 0 00-1.9-.1A19.69 19.69 0 002.4 47.1c0 1 .3 2.8 3.4 2.8h19.1c.2-.1.2-.1.3-.1z"${3}/><circle cx="21.7" cy="14.9" r="12.9"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-1nuhn1r7d19";
freezeTemplate(tmpl);
