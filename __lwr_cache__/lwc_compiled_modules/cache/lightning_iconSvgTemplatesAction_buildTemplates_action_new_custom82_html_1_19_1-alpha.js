import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom82.css";

import _implicitScopedStylesheets from "./new_custom82.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M48.5 21.5H32.7c-.8 0-1.5.7-1.5 1.5v.7c0 1.2-1 2.2-2.3 2.2-1.2 0-2.3-1-2.3-2.2V23c0-.8-.7-1.5-1.5-1.5h-3.8.1c-4.4.2-8.3 2.8-10.4 6.4-.8-.3-1.6-.4-2.4-.4-3.8 0-6.8 3-6.8 6.7S5 41 8.8 41c.8 0 1.7-.1 2.4-.4 2.1 3.7 6 6.2 10.4 6.4 7.3.4 13.4-5.5 13.4-12.8 0-.4 0-.9-.1-1.3-.1-.7.5-1.5 1.2-1.6l12.7-2.8c.7-.1 1.2-.7 1.2-1.5v-4c0-.8-.7-1.5-1.5-1.5zm-39.8 15c-1.3 0-2.3-1-2.3-2.2s1-2.2 2.3-2.2c.3 0 .7.1.9.2-.2.9-.2 1.9-.2 2.8 0 .5.1.8.2 1.2-.3.1-.6.2-.9.2zM29 16.2c1.3 0 2.3-1 2.3-2.2V7.2C31.2 6 30.2 5 29 5c-1.3 0-2.3 1-2.3 2.2V14c0 1.3 1 2.2 2.3 2.2zM18.2 17c.5.5 1.1.7 1.7.7.5 0 1.1-.1 1.5-.5 1-.8 1.1-2.2.2-3.1l-4.5-5.2c-.8-1-2.3-1-3.2-.2-1 .8-1.1 2.2-.2 3.1l4.5 5.2zM38 17.7c.6 0 1.3-.3 1.7-.7l4.5-5.2c.8-1 .7-2.4-.2-3.1-1-.8-2.4-.7-3.2.2l-4.5 5.2c-.8 1-.7 2.4.2 3.1.4.4 1 .5 1.5.5z"${3}/></g></g>`;
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
tmpl.stylesheetToken = "lwc-4ci4ufg6hs5";
freezeTemplate(tmpl);
