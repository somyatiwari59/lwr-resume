import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./locker_service_api_viewer.css";

import _implicitScopedStylesheets from "./locker_service_api_viewer.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M18 38.5c0 .8.7 1.5 1.5 1.5h2.6c-.1-.7-.1-1.3-.1-2 0-1.4.2-2.7.5-4h-3c-.8 0-1.5.7-1.5 1.5v3zM28.5 14h-9c-.8 0-1.5.7-1.5 1.5v3c0 .8.7 1.5 1.5 1.5h9c.8 0 1.5-.7 1.5-1.5v-3c0-.8-.7-1.5-1.5-1.5zM3.5 10h41c.8 0 1.5-.7 1.5-1.5v-5c0-.8-.7-1.5-1.5-1.5h-41C2.7 2 2 2.7 2 3.5v5c0 .8.7 1.5 1.5 1.5zM44.5 20c.8 0 1.5-.7 1.5-1.5v-3c0-.8-.7-1.5-1.5-1.5h-9c-.8 0-1.5.7-1.5 1.5v3c0 .8.7 1.5 1.5 1.5h9zM18 28.5c0 .8.7 1.5 1.5 1.5h4.6c1.3-2.3 3.2-4.2 5.4-5.6-.3-.3-.6-.4-1-.4h-9c-.8 0-1.5.7-1.5 1.5v3zM12.5 14h-9c-.8 0-1.5.7-1.5 1.5v3c0 .8.7 1.5 1.5 1.5h9c.8 0 1.5-.7 1.5-1.5v-3c0-.8-.7-1.5-1.5-1.5zM23.1 44h-3.6c-.8 0-1.5.7-1.5 1.5v3c0 .8.7 1.5 1.5 1.5h7.9c-1.9-1.6-3.3-3.7-4.3-6zM12.5 34h-9c-.8 0-1.5.7-1.5 1.5v3c0 .8.7 1.5 1.5 1.5h9c.8 0 1.5-.7 1.5-1.5v-3c0-.8-.7-1.5-1.5-1.5zM12.5 44h-9c-.8 0-1.5.7-1.5 1.5v3c0 .8.7 1.5 1.5 1.5h9c.8 0 1.5-.7 1.5-1.5v-3c0-.8-.7-1.5-1.5-1.5zM12.5 24h-9c-.8 0-1.5.7-1.5 1.5v3c0 .8.7 1.5 1.5 1.5h9c.8 0 1.5-.7 1.5-1.5v-3c0-.8-.7-1.5-1.5-1.5zM37.9 26.1c-6.6 0-12 5.4-12 12s5.4 12 12 12 12-5.4 12-12-5.4-12-12-12zm7.9 8.5l-9.6 9.7c-.2.2-.5.2-.7 0l-5.6-5.6c-.2-.2-.2-.5 0-.7l2.1-2.1c.2-.2.5-.2.7 0l2.9 2.9c.1.1.4.1.5 0l6.9-7c.2-.2.5-.2.7 0l2.1 2.1c.3.2.3.5 0 .7z"${3}/></g></g>`;
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
tmpl.stylesheetToken = "lwc-2eio1oaqg44";
freezeTemplate(tmpl);
