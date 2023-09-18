import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./linked.css";

import _implicitScopedStylesheets from "./linked.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M17.3 36.1l-1.1-1.4s-.7-1-.9-1.6c-.2-.3-.5-.5-.9-.5h-.6c-3.5 0-6.5-2.6-6.7-6-.3-3.8 2.8-6.9 6.5-6.9h9.1c1.2 0 2.3.4 3.2.8 1.2.7 2.2 1.8 2.7 3.1.3.8.5 1.6.5 2.6 0 .5-.1.9-.2 1.4-.2.7.3 1.3 1 1.2h3.4c.5 0 .8-.4 1-.8.1-.6.1-1.2.1-1.8 0-.8-.1-1.7-.3-2.6-.3-1.4-.9-2.7-1.7-3.9-1.5-2.2-3.8-4-6.4-4.7-1-.3-2.2-.5-3.2-.5H14c-6.3 0-11.7 4.9-11.9 11.2-.3 6.6 5 12.1 11.6 12.1h3c.7-.1 1.1-1.1.6-1.7zm32.6-10.5c-.2-6.3-5.6-11.3-11.9-11.2l-2.7-.1c-.8 0-1.3 1-.8 1.6.8.9 1.4 1.9 2 3 .2.3.5.5.9.5h.6c3.5 0 6.5 2.6 6.7 6 .3 3.8-2.8 6.9-6.5 6.9h-9.1c-1.2 0-2.3-.4-3.2-.8-1.2-.7-2.2-1.8-2.7-3.1-.3-.8-.5-1.6-.5-2.6 0-.5.1-.9.2-1.4.2-.7-.3-1.3-1-1.2h-3.4c-.5 0-.8.4-1 .8-.1.6-.1 1.2-.1 1.8 0 .8.1 1.8.3 2.6.3 1.4.9 2.7 1.7 3.8 1.5 2.2 3.8 4 6.4 4.7 1 .3 2.2.5 3.2.5h9.1c6.7.3 12-5.2 11.8-11.8z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-13t80cpmjj4";
freezeTemplate(tmpl);
