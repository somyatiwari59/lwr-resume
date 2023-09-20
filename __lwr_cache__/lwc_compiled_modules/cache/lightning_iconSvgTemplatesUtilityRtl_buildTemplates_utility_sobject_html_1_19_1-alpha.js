import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./sobject.css";

import _implicitScopedStylesheets from "./sobject.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M6.3 4.3h4c-4.8 10.6-4.8 18.6 0 29.2h-4C.7 21.3.8 16.5 6.3 4.3zM23.7 22.4c.4 1.8.7 3.3.9 3.9.3.9.8 1.6 1.4 2.1 1.5-1.2 3.4-1.9 5.4-1.9 1.3 0 2.5.3 3.6.8.2-.3.3-.6.3-.9 0-1-.8-1.8-1.8-1.8-.3 0-.5.1-.8.2 0 0-1.9 1.1-2.6.2-.5-.9-.9-2.1-1.2-3.5-.3-1.3-.6-2.8-.9-4.3l1.9-2.8s2.2.8 3.3.8 3.3-.9 3.3-3.8-2.1-3.1-2.8-3.1c-1.3 0-2.6.9-3.7 2.9s-2.4 4.2-2.4 4.2c-.3-1.4-.5-2.5-.6-3-.2-1.2-1.6-3.9-4.5-3.9s-5.6 1.7-5.6 1.7c-.5.3-.8.9-.8 1.5 0 1 .8 1.8 1.8 1.8.3 0 .5-.1.8-.2 0 0 2.2-1.2 2.7 0 .1.4.3.8.4 1.2.6 1.9 1.1 4.1 1.5 6.2l-1.9 2.7s-2.2-.8-3.3-.8c-1.1 0-3.3.9-3.3 3.8s2.1 3.1 2.8 3.1c1.3 0 2.6-.9 3.7-2.9s2.4-4.2 2.4-4.2zM43.5 28.8c.1 0 .1.1.2.1h.9c1 0 2 .2 2.9.5 3.6-9.4 3-14.4-1.9-25.1h-4c4.1 9 4.7 16.1 1.9 24.5zM35.3 32.4c.8-.8 1.9-1.3 3.2-1.3 1.6 0 3.1.9 3.9 2.2.7-.3 1.4-.5 2.2-.5 3 0 5.4 2.4 5.4 5.4 0 3-2.4 5.4-5.4 5.4-.4 0-.7 0-1.1-.1-.7 1.2-2 2-3.4 2-.6 0-1.2-.2-1.7-.4-.7 1.6-2.3 2.7-4.1 2.7-2 0-3.6-1.2-4.2-2.9-.3 0-.5.1-.9.1-2.3 0-4.2-1.8-4.2-4.1 0-1.5.8-2.9 2.1-3.6-.3-.6-.4-1.2-.4-1.9 0-2.6 2.2-4.8 4.8-4.8 1.5-.1 2.9.7 3.8 1.8z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-22ep7ftgq7q";
freezeTemplate(tmpl);