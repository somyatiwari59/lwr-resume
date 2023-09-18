import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./loop.css";

import _implicitScopedStylesheets from "./loop.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M23.4 58.3v-.5c0-.9.8-1.5 1.6-1.5h5.7c1.4 0 1.7 1.8 1.7 1.8 2.8 7.8 10.2 13.3 18.9 13.3 11.1 0 20.1-9 20.1-20.1s-9-20.1-20.1-20.1c-6.6 0-12.6 3.3-16.2 8.3.3.5.9.7 1.7.7h9.4c1.1 0 2 .9 2 2v4.2c0 1.1-.8 1.9-1.9 1.9H21.8c-1 0-1.8-.9-1.8-1.8V22c.2-1.1 1.1-2 2.2-2h4c1.1 0 2 .9 2 2v9.4c0 1.2.7 1.7 1.6.9.4-.5.7-.8 1.2-1.2 1.6-1.7 3.5-3.2 5.6-4.4h.1c4.3-2.5 9.3-4 14.6-4 15.8 0 28.6 12.7 28.6 28.6S67.1 80 51.3 80c-2.6 0-5.2-.4-7.7-1.1s-4.8-1.7-7-3-4.2-2.9-5.9-4.7c-1.8-1.8-3.3-3.8-4.5-6-.6-1.1-1.1-2.2-1.6-3.4-.4-1.1-.8-2.2-1.1-3.3-.1 0-.1-.1-.1-.2z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-45j7khqd2je";
freezeTemplate(tmpl);
