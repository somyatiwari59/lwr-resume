import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./recent.css";

import _implicitScopedStylesheets from "./recent.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M28.1 48c-.1.7-.1 1.3-.1 2h-6c0-.7 0-1.3.1-2h6zM51.5 36h-3c-.8 0-1.5.7-1.5 1.5v13.1c0 .4.2.8.4 1.1l8.4 8.4c.6.6 1.5.6 2.1 0L60 58c.6-.6.6-1.5 0-2.1l-7-7.1V37.5c0-.8-.7-1.5-1.5-1.5z"${3}/><path d="M50 22c-14.8 0-26.9 11.5-27.9 26 0 .3-.1.7-.1 1h-4.5c-1.3 0-2 1.5-1.2 2.4l7.5 9.1c.6.7 1.7.7 2.3 0l7.5-9.1c.8-1 .1-2.4-1.2-2.4H28v-1c1-11.2 10.5-20 21.9-20 13 0 23.3 11.3 21.9 24.5-1 9.5-10 18.5-19.6 19.4-7.1.7-13.8-1.9-18.5-7-.6-.7-1.4-1.1-2.2-.1l-2.4 2.9c-.5.6-.1 1 .4 1.5 5.4 5.7 12.8 8.9 20.8 8.8 14.4-.2 26.5-11.6 27.5-26C79.1 35.7 66.1 22 50 22z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-3ghrtd5jo6n";
freezeTemplate(tmpl);
