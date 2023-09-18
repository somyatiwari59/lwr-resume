import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom18.css";

import _implicitScopedStylesheets from "./custom18.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M50 32V21.4c0-.8-.6-1.4-1.4-1.4-.4 0-.7.1-1 .4L34.4 33.6c-.3.3-.4.6-.4 1 0 .8.6 1.4 1.4 1.4H46c2.2 0 4-1.8 4-4zM22.6 52.6L38 68c.1 0 .3.1.4.1h3.3c.3 0 .3-.2.3-.5v-3.3c0-.2.1-.3 0-.4L26.6 48.4c-.8-.8-2-.8-2.8 0l-1.2 1.2c-.8.8-.8 2 0 3zm11.5 22.6c.5 2.7 3 4.8 5.9 4.8h38c3.3 0 6-2.7 6-6V26c0-3.3-2.7-6-6-6H58c-1.1 0-2 .9-2 2v14c0 3.3-2.7 6-6 6H36c-1.1 0-2 .9-2 2v2.6c0 .5.2 1 .6 1.4l12.3 12.4c.8.7 1.1 1.7 1.1 2.8v7c0 2.1-1.7 3.8-3.8 3.8h-9.1c-.6 0-1.1.6-1 1.2zM76 40c0 1.1-.9 2-2 2h-8c-1.1 0-2-.9-2-2v-2c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2v2zM56 62c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2H58c-1.1 0-2-.9-2-2v-2zm-4-12c0-1.1.9-2 2-2h20c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2H54c-1.1 0-2-.9-2-2v-2z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-31mcqirb3ro";
freezeTemplate(tmpl);
