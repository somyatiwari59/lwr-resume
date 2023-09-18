import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./note.css";

import _implicitScopedStylesheets from "./note.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M71.3 67l-1.1 1.1C69 69.3 67.3 70 65.6 70h-3.3c-3 0-6.3-2.3-6.3-6.5v-3.1c0-2.5 1.1-4 1.8-4.8L71.3 42c.4-.4.7-1.2.7-1.7V30c0-3.3-2.7-6-6-6H34c-3.3 0-6 3-6 6h-2c-2.2 0-4 1.8-4 4s1.8 4 4 4h2v8h-2c-2.2 0-4 1.8-4 4s1.8 4 4 4h2v8h-2c-2.2 0-4 1.8-4 4s1.8 4 4 4h2c0 4 2.7 6 6 6h32c3.3 0 6-2.7 6-6v-2.7c0-.6-.3-.7-.7-.3zM61 39c0 1.1-.9 2-2 2H39c-1.1 0-2-.9-2-2v-2c0-1.1.9-2 2-2h20c1.1 0 2 .9 2 2v2zm-9 24c0 1.1-.9 2-2 2H39c-1.1 0-2-.9-2-2v-2c0-1.1.9-2 2-2h11c1.1 0 2 .9 2 2v2zm3-12c0 1.1-.9 2-2 2H39c-1.1 0-2-.9-2-2v-2c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2v2z"${3}/><path d="M81.4 45.6l-1.2-1.2c-.8-.8-2-.8-2.8 0L62.1 59.9c-.1 0-.1.2-.1.3v3.3c0 .3 0 .5.3.5h3.3c.1 0 .3-.1.4-.1l15.4-15.4c.8-.9.8-2.1 0-2.9z"${3}/></g></g>`;
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
tmpl.stylesheetToken = "lwc-3e6519ti3rf";
freezeTemplate(tmpl);
