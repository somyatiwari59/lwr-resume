import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./case_transcript.css";

import _implicitScopedStylesheets from "./case_transcript.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M38 30h4c.6 0 1-.4 1-1v-3h14v3c0 .6.4 1 1 1h4c.6 0 1-.4 1-1v-3c0-3.3-2.7-6-6-6H43c-3.3 0-6 2.7-6 6v3c0 .6.4 1 1 1zM74 36H26c-3.3 0-6 2.7-6 6v32c0 3.3 2.7 6 6 6h48c3.3 0 6-2.7 6-6V42c0-3.3-2.7-6-6-6zM61 67c0 1.7-1.3 3-3 3H44c-1.7 0-3-1.3-3-3V48c0-1.7 1.3-3 3-3h7c.6 0 1 .4 1 1v6c0 1.1.9 2 2 2h6c.6 0 1 .4 1 1v12zm0-15.7c0 .4-.3.7-.7.7H56c-1.1 0-2-.9-2-2v-4.3c0-.4.3-.7.7-.7.2 0 .4.1.5.2l5.6 5.6c.1.1.2.3.2.5z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2inr5v918in";
freezeTemplate(tmpl);
