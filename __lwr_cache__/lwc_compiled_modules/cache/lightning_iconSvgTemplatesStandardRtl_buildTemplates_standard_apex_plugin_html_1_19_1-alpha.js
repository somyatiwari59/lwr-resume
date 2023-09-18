import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./apex_plugin.css";

import _implicitScopedStylesheets from "./apex_plugin.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M50.2 40l14-14c.7-.7.7-1.9 0-2.6l-3-3c-.7-.7-1.9-.7-2.6 0l-14 14 5.6 5.6zM65.6 55.8l14-14c.7-.7.7-1.9 0-2.6l-3-3c-.7-.7-1.9-.7-2.6 0l-14 14 5.6 5.6zM63.6 67.4c.2-.3.4-.6.5-1 .1-.5 0-1-.3-1.4-.1-.1-.1-.2-.2-.3l-.1-.1-28.2-28.2-.1-.1c-.3-.4-.9-.5-1.3-.5-.6 0-1 .3-1.4.6-.3.2-.5.4-.7.7-.2.2-.3.3-.4.5-.2.2-.3.4-.5.6-.2.3-.4.5-.5.8-.2.3-.4.6-.5 1-.2.4-.4.8-.6 1.1-.2.4-.4.9-.5 1.3-.2.5-.4 1-.5 1.5-.2.6-.3 1.2-.5 1.7-.2.7-.3 1.3-.4 2-.1.7-.3 1.5-.4 2.2l-.3 2.4c-.1.9-.1 1.8-.2 2.7v3c0 1.1 0 2.2.1 3.3.1 1.2.1 2.4.2 3.6 0 .3.1.7.1 1h.2l-6.5 6.5c-.7.7-.7 1.9 0 2.6l4.6 4.6c.7.7 1.9.7 2.6 0l6.5-6.5c2.3.2 4.7.4 7.1.4 2 0 3.9 0 5.9-.2 1.6-.1 3.2-.3 4.8-.6 1.3-.2 2.6-.5 3.8-.9 1-.3 2-.7 2.9-1.1.7-.3 1.5-.7 2.1-1.1.9-.6 1.8-1.2 2.5-2 0 .1.1 0 .2-.1z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-o205oife1c";
freezeTemplate(tmpl);
