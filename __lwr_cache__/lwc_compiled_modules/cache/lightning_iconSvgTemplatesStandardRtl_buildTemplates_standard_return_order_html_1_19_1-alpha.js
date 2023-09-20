import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./return_order.css";

import _implicitScopedStylesheets from "./return_order.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M77.4 22.3c1.4 0 2.4 1.1 2.3 2.3v4.7c0 1.2-1.1 2.2-2.3 2.2h-37c-1.2 0-2.2-1.1-2.2-2.3v-4.7c0-1.2 1.1-2.2 2.3-2.2h36.9c.1 0 .1 0 0 0zm-50.6 0c1.2.1 2.2 1.1 2.1 2.3v4.7c0 1.2-1.1 2.2-2.3 2.2h-4.7c-1.2 0-2.2-1.1-2.2-2.3v-4.7c0-1.2 1.1-2.2 2.3-2.2h4.8zm50.7 20.5c1.2 0 2.2 1.1 2.2 2.3v4.7c0 1.2-1.1 2.2-2.3 2.2H53.7c-1.2 0-2.2-1.1-2.2-2.3V45c0-1.2 1.1-2.2 2.3-2.2h23.7zm0 20.5c1.2 0 2.2 1.1 2.2 2.3v4.7c0 1.2-1.1 2.2-2.3 2.2H62.5c-1.2 0-2.2-1.1-2.2-2.3v-4.7c0-1.2 1.1-2.2 2.3-2.2h14.9zM22.7 40.2h1.9c.8.2 1.9 1.2 1.9 1.9-.7 7.6 5.9 16.4 13.7 17.9l1.6.3c.3.1.6 0 .8-.2.5-.3.5-1 .2-1.4L38.4 52v-.1c-.5-.6-.3-1.6.4-2l2.5-1.7h.1c.6-.5 1.6-.3 2 .4l11 16.2v.1c.5.6.3 1.6-.4 2L37.9 77.8h-.1c-.6.5-1.6.3-2-.4l-1.7-2.5v-.1c-.5-.6-.4-1.5.3-2l6.7-4.5c.2-.1.4-.3.4-.6.1-.6-.3-1.1-.8-1.2l-2.7-.6c-10-1.9-18.4-13-17.2-23.7 0-.9 1-2.1 1.9-2z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2497ailj8ui";
freezeTemplate(tmpl);