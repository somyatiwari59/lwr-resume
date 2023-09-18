import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./privately_shared.css";

import _implicitScopedStylesheets from "./privately_shared.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M35.6 39.5c-.7-4.1-4.9-6.2-8.3-7.7-1.5-.7-3.6-1.5-4.2-3.3-.4-1-.2-2 .3-2.9.9-.9 1.7-1.7 2.4-2.8.2-.3.3-.5.5-.8 2-2.9 2.3-6.9 1.1-10.2-1.2-3.6-4.4-6-8.3-6.1h-.6c-3.9.1-7.1 2.5-8.3 6.1-1.2 3.4-.9 7.3 1.1 10.2.1.3.3.5.5.8.7 1.1 1.6 1.9 2.4 2.8.4.9.6 1.9.3 2.9-.6 1.8-2.7 2.6-4.2 3.3-3.4 1.5-7.6 3.6-8.3 7.7-.7 3.4 1.6 6.8 5.2 6.8h23.6c3.2 0 5.5-3.4 4.8-6.8zM41.3 9.9c4.1-.2 7.4 3 7.4 7.1 0 .3-.2.4-.4.4h-1.8c-.3 0-.4-.1-.4-.4v.1c0-2.4-1.8-4.4-4.1-4.6-2.6-.2-4.7 1.9-4.7 4.4 0 .3-.2.4-.4.4h-1.8c-.2 0-.4-.2-.4-.4 0-3.6 2.9-6.8 6.6-7z"${3}/><path d="M48.7 19.2H34.6c-1 0-1.8.8-1.8 1.8v8.4c0 1 .8 1.8 1.8 1.8h14.1c1 0 1.8-.8 1.8-1.8V21c0-1-.8-1.8-1.8-1.8zm-5 8.7c.1.3-.1.6-.4.6H40c-.3 0-.5-.3-.4-.6l.8-2.6c-.7-.4-1.1-1.2-.9-2.1.2-.8.8-1.5 1.7-1.7 1.4-.3 2.6.7 2.6 2.1 0 .7-.4 1.4-.9 1.7l.8 2.6z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-5uou54u307i";
freezeTemplate(tmpl);
