import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./puzzle.css";

import _implicitScopedStylesheets from "./puzzle.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M45 38.4c-.2 2.7-.5 5.6-1 8.4-.1.8-1 1.7-1.8 1.8-5.4.6-10.7 1-16.1 1-5.3 0-10.7-.3-16-1-.8-.1-1.7-.9-1.8-1.8-.7-4.4-1.1-8.9-1.1-13.4s.4-9 1.1-13.4c.1-.8 1-1.6 1.8-1.8 3.3-.4 6.5-.6 9.7-.8 0 0 2.6-.1 2.4-2.6-.2-2.2-4-3.7-4-7.4 0-3 3-5.4 7.9-5.4 4.8 0 7.8 2.4 7.8 5.4 0 3.8-3.7 5.2-3.9 7.4-.2 2.4 2.4 2.6 2.4 2.6 3.3.1 6.6.4 9.8.8.8.1 1.7.9 1.8 1.8.5 3.1.8 6 1 9.1 0 .9-.7 1.8-1.6 1.8h-.9c-.9 0-2.3-.7-2.9-1.4 0 0-2.1-2.2-4.4-2.3-3.7-.1-6.5 3.1-6.5 6.6s2.8 6.8 6.4 6.7c2.2-.1 4.4-2.3 4.4-2.3.7-.6 2-1.2 2.9-1.2h.9c1.1 0 1.8.6 1.7 1.4z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-5rg828pu50i";
freezeTemplate(tmpl);
