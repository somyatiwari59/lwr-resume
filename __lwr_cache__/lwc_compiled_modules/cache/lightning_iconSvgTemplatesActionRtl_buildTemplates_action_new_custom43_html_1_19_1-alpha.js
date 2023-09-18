import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom43.css";

import _implicitScopedStylesheets from "./new_custom43.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M49.8 21.2s.1 0 0 0c.1-.2.1-.3.1-.4v-.1-.5-.3-.1s-.1-.1-.1-.2 0-.1-.1-.1c0-.1-.1-.1-.1-.2s-.1-.1-.1-.1L40.8 6.9c-.4-.5-1-.9-1.7-.9H12.9c-.7 0-1.4.4-1.8.9L2.3 19.1c0 .1-.1.1-.1.1-.1.1-.1.1-.1.2s0 .1-.1.1c0 .1-.1.1-.1.2V20.7c0 .1.1.3.1.4v.1c.1.1.1.2.1.3 0 .1.1.1.1.1l.1.1 21.9 23.6.1.1.1.1.1.1s.1 0 .1.1c.1 0 .1.1.1.1s.1 0 .1.1c0 0 .1 0 .1.1 0 0 .1 0 .1.1H26.6s.1 0 .1-.1c0 0 .1 0 .1-.1 0 0 .1 0 .1-.1 0 0 .1 0 .1-.1.1 0 .1-.1.1-.1s.1 0 .1-.1l.1-.1.1-.1.1-.1 21.9-23.6.1-.1c0-.1.1-.1.1-.1.1 0 .2-.1.2-.2zm-23.8-3h-3.5l3.5-5.8 3.5 5.8H26zm0 4.3h4.4L26 36.6l-4.4-14.1H26zm3.8-12.2h5.5l-2 5.7-3.5-5.7zm-11 5.7l-2-5.7h5.5L18.8 16zm-1.7 6.5l4 13-12-13h8zm17.8 0h8l-12 13 4-13zm8.7-4.3H37l2.2-6.1 4.4 6.1zm-30.9-6.1l2.2 6.1H8.4l4.3-6.1z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-4ksav78babq";
freezeTemplate(tmpl);
