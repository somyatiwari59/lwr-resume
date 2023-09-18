import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./nft_settings.css";

import _implicitScopedStylesheets from "./nft_settings.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M50.09 60.5c-5.79 0-10.38-4.66-10.38-10.38s4.66-10.38 10.38-10.38 10.38 4.66 10.38 10.38S55.81 60.5 50.09 60.5zm-6.62-10.38c0-3.69 2.93-6.62 6.62-6.62s6.62 2.93 6.62 6.62-2.93 6.62-6.62 6.62-6.62-2.93-6.62-6.62z" fill-rule="evenodd"${3}/><path d="M53.99 15.07a7.958 7.958 0 00-7.98 0L21.74 29.08a7.983 7.983 0 00-3.99 6.91v28.02c0 2.85 1.52 5.48 3.99 6.91l24.27 14.01a7.958 7.958 0 007.98 0l24.27-14.01a7.983 7.983 0 003.99-6.91V35.99c0-2.85-1.52-5.48-3.99-6.91L53.99 15.07zm12.42 38.05l3.46 2.93c1.13.98 1.5 2.63.6 3.76l-1.43 2.48c-.53.9-1.58 1.5-2.71 1.5-.25 0-.5-.07-.75-.13-.13-.03-.25-.07-.38-.09l-4.06-1.58c-1.73 1.58-3.69 2.71-5.87 3.46l-.75 4.51c-.23 1.5-1.58 2.63-3.08 2.63h-3.01c-1.58 0-2.78-1.05-3.08-2.56l-.75-4.51a16.9 16.9 0 01-5.57-3.23l-4.36 1.58c-.3.15-.68.23-1.05.23-1.13 0-2.11-.53-2.71-1.5l-1.5-2.63c-.75-1.35-.38-3.01.75-3.99l3.46-2.93c-.23-1.05-.3-2.11-.3-3.23 0-1.05.08-2.18.3-3.23l-3.46-2.93c-1.2-.98-1.5-2.63-.75-3.99l1.5-2.63c.53-.9 1.58-1.5 2.71-1.5.24 0 .45.06.67.13.12.04.25.07.38.1l4.44 1.58c1.66-1.43 3.54-2.56 5.64-3.23l.75-4.36c.23-1.5 1.58-2.33 3.08-2.33h3.01c1.5 0 2.78.83 3.08 2.33l.75 4.44a16.9 16.9 0 015.57 3.23l4.36-1.58c.3-.15.68-.23 1.05-.23 1.13 0 2.11.53 2.71 1.5l1.5 2.63c.75 1.35.38 3.01-.75 3.99l-3.46 2.93c.23 1.05.3 2.18.3 3.23s-.08 2.18-.3 3.23z" fill-rule="evenodd"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-r7fcdkjh7u";
freezeTemplate(tmpl);
