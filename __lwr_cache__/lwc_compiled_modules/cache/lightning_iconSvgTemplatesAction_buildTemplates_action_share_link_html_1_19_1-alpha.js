import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./share_link.css";

import _implicitScopedStylesheets from "./share_link.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M27.2 41.7l-2.1-.3c-.7-.1-1.4-.3-2.1-.6-.4-.1-.9 0-1.2.3l-.5.5c-2.9 2.9-7.6 3.2-10.6.6-3.4-2.9-3.5-8.1-.4-11.2l7.6-7.6c1-1 2.2-1.6 3.4-2 1.6-.4 3.3-.3 4.8.3.9.4 1.8.9 2.6 1.7.4.4.7.8 1 1.3.4.7 1.3.8 1.8.2l2.8-2.8c.4-.4.4-1 .1-1.5-.4-.6-.9-1.1-1.4-1.6-.7-.7-1.5-1.4-2.4-1.9-1.4-.9-3-1.5-4.7-1.8-3.1-.6-6.5-.1-9.3 1.4-1.1.6-2.2 1.4-3.1 2.3l-7.3 7.3C.9 31.6.5 40.2 5.6 45.6c5.3 5.8 14.3 5.9 19.8.4l2.5-2.5c.7-.5.2-1.7-.7-1.8z"${3}/><path d="M45.6 5.8c-5.5-5.1-14.1-4.7-19.3.6L24 8.6c-.7.7-.2 1.9.7 2 1.4.1 2.8.4 4.2.8.4.1.9 0 1.2-.3l.5-.5c2.9-2.9 7.6-3.2 10.6-.6 3.4 2.9 3.5 8.1.4 11.2L34 28.8c-1 1-2.2 1.6-3.4 2-1.6.4-3.3.3-4.8-.3-.9-.4-1.8-.9-2.6-1.7-.4-.4-.7-.8-1-1.3-.4-.7-1.3-.8-1.8-.2l-2.8 2.8c-.4.4-.4 1-.1 1.5.4.6.9 1.1 1.4 1.6.7.7 1.6 1.4 2.4 1.9 1.4.9 3 1.5 4.6 1.8 3.1.6 6.5.1 9.3-1.4 1.1-.6 2.2-1.4 3.1-2.3l7.6-7.6c5.6-5.5 5.4-14.5-.3-19.8z"${3}/></g></g>`;
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
tmpl.stylesheetToken = "lwc-23eg5isiuk1";
freezeTemplate(tmpl);