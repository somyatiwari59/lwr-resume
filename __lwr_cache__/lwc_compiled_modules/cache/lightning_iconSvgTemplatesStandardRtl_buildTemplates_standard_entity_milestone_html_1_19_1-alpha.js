import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./entity_milestone.css";

import _implicitScopedStylesheets from "./entity_milestone.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M74.2 32.9L53.1 21.1c-2-1.1-4.4-1.1-6.4 0L25.6 33c-2 1.1-3.2 3.2-3.2 5.4v23.7c.1 2.2 1.3 4.2 3.2 5.4l21.1 11.9c2 1.1 4.4 1.1 6.4 0l21.1-11.9c2-1.1 3.2-3.2 3.1-5.4V38.3c0-2.2-1.2-4.3-3.1-5.4zm-33.4 7.6v25c0 1.2-.9 2.1-2.1 2.2-1.2 0-2.1-1-2.1-2.2v-25c-.7-.7-1.1-1.6-1.1-2.5 0-1.8 1.5-3.2 3.3-3.1s3.2 1.5 3.1 3.3c0 .9-.4 1.7-1.1 2.3zm25.7 15.7c0 .4-.2.7-.5.9-8.3 4.6-12.9-2.8-20.5-.4-.6.2-1.2-.1-1.4-.7V41.5c0-.4.3-.8.7-1 7.9-3 12.5 4.8 20.9.3.3-.1.6 0 .7.2 0 .1.1.2.1.3v14.9z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-78l9r0bvong";
freezeTemplate(tmpl);
