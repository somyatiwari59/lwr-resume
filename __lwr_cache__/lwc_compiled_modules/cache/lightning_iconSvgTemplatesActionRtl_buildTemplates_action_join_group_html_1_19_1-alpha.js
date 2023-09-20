import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./join_group.css";

import _implicitScopedStylesheets from "./join_group.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M36 23.9c-.1-2.8-2.8-4.5-5.7-5.8-2-.9-2.4-1.7-2.4-2.6 0-.9.6-1.7 1.2-2.4C30.4 12 31 10.4 31 8.5 31 5 29 2 25.3 2c-2.2 0-3.7 1.1-4.7 2.7 2.5 1.9 4 5.2 4 9 0 2.2-.6 4.3-1.7 6.1-.4.6-.2 1.5.5 1.9 2.1 1.1 4.5 2.5 5.9 4.9.2.4.6.5 1.1.5h2.7c1.7-.1 2.9-1.3 2.9-3.2z"${3}/><path d="M19.7 24.1c-2.3-1-2.6-1.9-2.6-2.9s.6-2 1.4-2.7c1.3-1.3 2-3.1 2-5.2 0-3.9-2.3-7.3-6.3-7.3H14h-.1c-4 0-6.3 3.4-6.3 7.3 0 2.1.7 3.9 2 5.2.8.7 1.4 1.7 1.4 2.7 0 1-.3 1.9-2.6 2.9-3.3 1.5-6.4 3-6.5 6.1C2 32.4 3.5 34 5.4 34h17.4c1.9 0 3.4-1.6 3.4-3.7-.1-3.2-3.3-4.7-6.5-6.2zM48.5 34H44v-4.5c0-.8-.7-1.5-1.5-1.5h-3c-.8 0-1.5.7-1.5 1.5V34h-4.5c-.8 0-1.5.7-1.5 1.5v3c0 .8.7 1.5 1.5 1.5H38v4.5c0 .8.7 1.5 1.5 1.5h3c.8 0 1.5-.7 1.5-1.5V40h4.5c.8 0 1.5-.7 1.5-1.5v-3c0-.8-.7-1.5-1.5-1.5z"${3}/></g></g>`;
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
tmpl.stylesheetToken = "lwc-6ldhfdh9l00";
freezeTemplate(tmpl);