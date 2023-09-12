import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./rules.css";

import _implicitScopedStylesheets from "./rules.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M50.1 25.4L42 17.3c-.4-.4-1.1-.4-1.5 0L39 18.8c-.4.4-.4 1.1 0 1.5l2.5 2.5c.4.4.1 1.2-.5 1.2H18.9l13.2-13.1c.4-.4 1.2-.1 1.2.5V15c0 .6.4 1 1 1h2.1c.6 0 1-.4 1-1V3.4c0-.6-.4-1-1-1H25c-.5 0-1 .5-1 1.1v2c0 .6.4 1 1 1h3.6c.6 0 .9.7.5 1.2L12.9 23.9H3c-.6 0-1 .5-1 1.1v2.1c0 .6.6 1.1 1.1 1.1h10l16.1 16.1c.4.4.1 1.2-.5 1.2h-3.6c-.6 0-1 .4-1 1v2c0 .5.4 1 1 1.1h11.4c.6 0 1-.4 1-1V37.1c0-.6-.4-1-1-1h-2.1c-.6 0-1 .4-1 1v3.6c0 .6-.7.9-1.2.5L19 28.2h22.1c.6 0 .9.8.5 1.2L39 31.9c-.4.4-.4 1.1 0 1.5l1.5 1.5c.4.4 1.1.4 1.5 0l8.1-8c.4-.5.4-1.1 0-1.5z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-6tsu82r7olb";
freezeTemplate(tmpl);
