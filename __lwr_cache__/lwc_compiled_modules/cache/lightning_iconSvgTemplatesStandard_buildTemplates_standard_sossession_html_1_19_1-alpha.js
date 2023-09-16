import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./sossession.css";

import _implicitScopedStylesheets from "./sossession.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M49.6 18c-17.7.2-31.8 14.8-31.6 32.4.2 17.7 14.8 31.8 32.4 31.6 17.7-.2 31.8-14.8 31.6-32.4-.2-17.7-14.8-31.8-32.4-31.6zm0 4.2c4.8-.1 9.3 1.1 13.2 3.1l-4.3 7.2c-2.6-1.3-5.5-2-8.5-2s-6 .7-8.5 2l-4.3-7.2c3.7-1.9 7.9-3.1 12.4-3.1zM32.5 58.5l-7.2 4.3c-1.9-3.7-3.1-8-3.1-12.5-.1-4.8 1.1-9.3 3.1-13.2l7.2 4.3c-1.3 2.6-2 5.5-2 8.5s.7 6.1 2 8.6zm17.9 19.3c-4.8.1-9.3-1.1-13.2-3.1l4.3-7.2c2.6 1.3 5.5 2 8.5 2s6-.7 8.5-2l4.3 7.2c-3.7 1.9-7.9 3.1-12.4 3.1zM50 65.3c-8.5 0-15.3-6.9-15.3-15.3 0-8.5 6.9-15.3 15.3-15.3 8.5 0 15.3 6.9 15.3 15.3 0 8.5-6.8 15.3-15.3 15.3zm17.5-6.8c1.3-2.6 2-5.5 2-8.5s-.7-6-2-8.5l7.2-4.3c1.9 3.7 3.1 8 3.1 12.5.1 4.8-1.1 9.3-3.1 13.2l-7.2-4.4z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-11soh3l3pbv";
freezeTemplate(tmpl);
