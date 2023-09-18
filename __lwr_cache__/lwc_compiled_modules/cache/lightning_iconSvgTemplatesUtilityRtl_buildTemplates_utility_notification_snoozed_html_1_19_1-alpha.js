import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./notification_snoozed.css";

import _implicitScopedStylesheets from "./notification_snoozed.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M49.69 2c.26 0 .49.23.49.49v1.05c0 .1-.03.23-.1.33l-4.97 6.08h4.58c.26 0 .49.23.49.49v.98c0 .26-.23.49-.49.49h-6.87c-.26 0-.49-.23-.49-.49v-.98c0-.1.03-.2.1-.26v-.03l5.07-6.18h-4.68c-.26 0-.49-.23-.49-.49V2.5c0-.26.23-.49.49-.49h6.87z"${3}/><path d="M45.35 33.13h.5c2.18 0 3.97 1.79 3.97 3.97v1.49c0 .79-.69 1.49-1.49 1.49H3.67c-.79 0-1.49-.69-1.49-1.39V37.2c0-2.18 1.79-4.07 3.97-4.07h.5c1.89 0 3.47-1.49 3.47-3.37V18.75c0-8.63 6.55-15.98 15.08-16.37 9.13-.4 16.67 6.85 16.67 15.88v11.41c0 1.89 1.59 3.47 3.47 3.47zM35.89 7.97c.52 0 .98.46.98.98v2.09c0 .2-.07.46-.2.65l-9.92 12.14h9.14c.52 0 .98.46.98.98v1.96c0 .52-.46.98-.98.98H22.18c-.52 0-.98-.46-.98-.98v-1.96c0-.2.07-.39.2-.52v-.07l10.12-12.34h-9.33c-.52 0-.98-.46-.98-.98V8.94c0-.52.46-.98.98-.98h13.7z" fill-rule="evenodd"${3}/><path d="M21.14 44.04h9.72c.6 0 1.09.6.99 1.19-.5 2.68-2.98 4.76-5.85 4.76s-5.36-1.98-5.85-4.76c-.1-.6.4-1.19.99-1.19z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-5a726i27r4q";
freezeTemplate(tmpl);
