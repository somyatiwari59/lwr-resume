import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom67.css";

import _implicitScopedStylesheets from "./custom67.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M54 53.1L52.8 51c-.5-.8-1.3-1.3-2.2-1.3-.3 0-.6.1-.899.2l-3.5 1.3c-1.4-1.2-2.9-2-4.6-2.6L41 45c-.2-1.2-1.3-1.9-2.5-1.9H36c-1.2 0-2.3.7-2.5 2l-.6 3.5c-1.7.6-3.2 1.5-4.6 2.7L24.8 50c-.3-.1-.6-.2-.9-.2-.9 0-1.8.5-2.2 1.3l-1.2 2.1c-.6 1.1-.4 2.399.6 3.2l2.9 2.4c-.2.9-.3 1.8-.3 2.601 0 .8.1 1.8.3 2.699l-2.9 2.4c-1 .8-1.2 2.2-.6 3.2l1.2 2.1c.5.8 1.3 1.3 2.2 1.3.3 0 .6-.1.9-.199l3.5-1.301c1.4 1.2 2.9 2.101 4.6 2.601l.6 3.7C33.7 79.1 34.8 80 36 80h2.5c1.2 0 2.3-.9 2.5-2.1l.6-3.7c1.8-.601 3.4-1.601 4.8-2.8l3.3 1.3c.3.1.6.2.899.2.9 0 1.7-.5 2.2-1.2l1.2-2c.6-1.101.4-2.5-.6-3.3L50.5 64c.2-.9.3-1.8.3-2.6 0-.9-.1-1.801-.3-2.7l2.9-2.4c.9-.8 1.2-2.2.6-3.2zM37.2 68.3c-3.7 0-6.8-3-6.8-6.8s3-6.8 6.8-6.8c3.7 0 6.8 3 6.8 6.8s-3.1 6.8-6.8 6.8zM79.2 39l-2.3-1.9c.1-.7.2-1.4.2-2.1s-.1-1.5-.2-2.1l2.3-1.9c.8-.6 1-1.7.5-2.6l-1-1.7c-.4-.6-1.101-1-1.8-1-.2 0-.5.1-.7.1l-2.9 1.1c-1.1-1-2.399-1.7-3.7-2.1l-.5-3c-.199-1-1-1.6-2-1.6h-2c-1 0-1.899.6-2 1.6l-.5 2.9c-1.4.5-2.6 1.2-3.7 2.2L56 25.6c-.2-.1-.5-.1-.7-.1-.7 0-1.399.4-1.8 1l-1 1.7c-.5.9-.3 2 .5 2.6l2.3 1.9c-.1.7-.2 1.4-.2 2.1 0 .7.101 1.5.2 2.1L53 38.8c-.8.6-1 1.7-.5 2.6l1 1.7c.4.6 1.1 1 1.8 1 .2 0 .5 0 .7-.1l2.9-1.1c1.1 1 2.399 1.7 3.699 2.1l.5 2.9c.2 1 1 1.7 2 1.7h2c1 0 1.9-.7 2-1.7l.5-3c1.4-.5 2.801-1.3 3.9-2.3l2.7 1.1c.2.1.5.1.7.1.699 0 1.399-.4 1.8-1l1-1.6c.501-.4.301-1.5-.499-2.2zm-13.1 1.6c-3 0-5.5-2.5-5.5-5.5s2.5-5.5 5.5-5.5 5.5 2.5 5.5 5.5-2.4 5.5-5.5 5.5z"${3}/></g></g>`;
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
tmpl.stylesheetToken = "lwc-2a8v9gfdvne";
freezeTemplate(tmpl);