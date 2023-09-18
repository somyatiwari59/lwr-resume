import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./picklist_choice.css";

import _implicitScopedStylesheets from "./picklist_choice.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M43.6 35.3v3.2c-.1.8.5 1.5 1.4 1.6h3.3c.9 0 1.6-.7 1.6-1.6v-3.2c0-.9-.7-1.6-1.6-1.6h-3.2c-.9 0-1.6.7-1.5 1.6zM37.1 10.2V7c0-.9-.7-1.6-1.6-1.6H3.9c-.9 0-1.6.7-1.6 1.6v3.2c0 .9.7 1.6 1.6 1.6h31.6c.9 0 1.6-.7 1.6-1.6zM37.1 24.4v-3.2c0-.9-.7-1.6-1.6-1.6H3.9c-.9 0-1.6.7-1.6 1.6v3.2c0 .9.7 1.6 1.6 1.6h31.6c.9 0 1.6-.8 1.6-1.6zM43.6 6.9v3.3c-.1.8.5 1.5 1.4 1.6h3.3c.9 0 1.6-.7 1.6-1.6V7c0-.9-.7-1.6-1.6-1.6h-3.2c-.9 0-1.6.7-1.5 1.5zM43.6 21.1v3.2c-.1.8.5 1.5 1.4 1.6h3.3c.9 0 1.6-.7 1.6-1.6v-3.2c0-.9-.7-1.6-1.6-1.6h-3.2c-.9 0-1.6.8-1.5 1.6zM12.3 31.4c.8-.8 1.9-1.3 3.2-1.3 1.7 0 3.1.9 3.9 2.2.6-.2 1.4-.5 2.2-.5 2.9 0 5.4 2.5 5.4 5.3 0 2.9-2.5 5.3-5.4 5.3-.3 0-.7 0-1-.1-.6 1.2-2 2-3.4 2-.6 0-1.2-.2-1.7-.4-.7 1.6-2.3 2.7-4.1 2.7-2 0-3.6-1.2-4.2-2.9-.2 0-.6.1-.9.1-2.3 0-4.2-1.8-4.2-4.1 0-1.5.8-2.9 2.1-3.6-.2-.6-.4-1.2-.4-1.9 0-2.6 2.2-4.8 4.8-4.8 1.4.1 2.9.8 3.7 2zM35.5 33.6h-5.2c.5 1.1.7 2.3.7 3.5 0 1-.2 2-.5 2.9h5c.9 0 1.6-.7 1.6-1.6v-3.2c0-.9-.7-1.6-1.6-1.6z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2gm6pneom4o";
freezeTemplate(tmpl);
