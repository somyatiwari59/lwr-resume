import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./feed.css";

import _implicitScopedStylesheets from "./feed.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M25.2 43c-.3 0-.7-.1-1.1-.3-.6-.3-1.1-1-1.2-1.6L17.2 18l-4.9 11c-.3.9-1.1 1.4-2 1.4H3.5c-.8 0-1.5-.6-1.5-1.4v-1.5c0-.8.7-1.5 1.5-1.5h5.2l6.9-15.7c.4-.8 1.3-1.4 2.3-1.3 1 .1 1.8.7 2 1.7l5.9 23.4L33.7 17c.4-.9 1.3-1.4 2.2-1.3.8.1 1.6.7 2 1.5l3.9 8.9h6.8c.8 0 1.5.7 1.5 1.5V29c0 .8-.7 1.5-1.5 1.5h-8.2c-.9 0-1.7-.5-2.1-1.3l-2.5-5.7-8.4 18.3c-.5.7-1.2 1.2-2.2 1.2z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-62s8kldtotk";
freezeTemplate(tmpl);
