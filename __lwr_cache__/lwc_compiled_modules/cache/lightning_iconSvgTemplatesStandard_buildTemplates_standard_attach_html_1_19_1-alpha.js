import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./attach.css";

import _implicitScopedStylesheets from "./attach.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M39.5 63.4a1.87 1.87 0 002.6 0l12.5-12.5a2.61 2.61 0 013.5 0 2.66 2.66 0 01.1 3.7l-.1.1-15.4 15.1a8.81 8.81 0 01-12.4 0l-.1-.1a8.81 8.81 0 010-12.4l27.2-27.2a8.81 8.81 0 0112.4 0l.1.1a8.81 8.81 0 010 12.4l-.1.1a1.82 1.82 0 00-.3 2.2 21.38 21.38 0 011.8 4.4 1.22 1.22 0 001.5.9l.6-.3c1-1 1.9-2 1.9-2a16.3 16.3 0 000-23.1H75a16.3 16.3 0 00-23.1 0l-27.1 27a16.3 16.3 0 000 23.1l.3.3a16.15 16.15 0 0022.9.1l.1-.1 15.4-15.4a10.18 10.18 0 10-14.2-14.6l-.4.4L36.6 58a2.13 2.13 0 000 2.8z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-7kdj510jbao";
freezeTemplate(tmpl);
