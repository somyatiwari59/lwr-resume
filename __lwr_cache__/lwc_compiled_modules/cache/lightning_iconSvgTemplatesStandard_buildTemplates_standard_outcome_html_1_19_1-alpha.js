import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./outcome.css";

import _implicitScopedStylesheets from "./outcome.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M62.6 31.9c0-.1-.1-.1-.2-.2-.7-.7-1.9-.6-2.5.2l-2.7 2.6-.1.1c-.7.7-.7 1.9.1 2.5l7 7c.2.2.4.5.4.9 0 .7-.5 1.3-1.3 1.3H36.8c-1 0-1.8.8-1.9 1.8v3.8c.1 1 .9 1.8 1.9 2h26.6c.3 0 .5.1.7.3.6.4.7 1.3.2 1.8l-7 7-.1.1c-.7.7-.7 1.9.1 2.5l2.6 2.7.1.1c.7.7 1.9.7 2.5-.1l16.9-16.9.1-.1c.7-.7.7-1.9-.1-2.5L62.6 31.9z"${3}/><path d="M43.7 38.9h3.7c1 0 1.9-.9 1.9-1.9V25c0-2.8-2.2-5-5-5H25c-2.8 0-5 2.2-5 5v50c0 2.8 2.2 5 5 5H44.3c2.8 0 5-2.2 5-5V63.2c0-1-.9-1.9-1.9-1.9h-3.7c-1 0-1.9.9-1.9 1.9v7.4c0 1-.9 1.9-1.9 1.9H29.4c-1 0-1.9-.9-1.9-1.9V29.4c0-1 .9-1.9 1.9-1.9h10.5c1 0 1.9.9 1.9 1.9V37c0 1 .8 1.9 1.9 1.9z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-5d7svs3nv3h";
freezeTemplate(tmpl);
