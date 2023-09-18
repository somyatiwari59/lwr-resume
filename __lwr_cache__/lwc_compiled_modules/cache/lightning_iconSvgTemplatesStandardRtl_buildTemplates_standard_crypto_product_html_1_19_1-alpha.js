import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./crypto_product.css";

import _implicitScopedStylesheets from "./crypto_product.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M53.33 20.89a6.64 6.64 0 00-6.65 0L26.46 32.57a6.64 6.64 0 00-3.32 5.76v23.35a6.66 6.66 0 003.32 5.76l20.22 11.68a6.64 6.64 0 006.65 0l20.22-11.68a6.64 6.64 0 003.32-5.76V38.33a6.66 6.66 0 00-3.32-5.76L53.33 20.89zm14.26 10.88H32.42c-.69 0-1.26.57-1.26 1.26v1.26c0 .69.57 1.26 1.26 1.26h35.17c.69 0 1.26-.57 1.26-1.26v-1.26c0-.69-.57-1.26-1.26-1.26zM35.56 60.66h-3.14c-.69 0-1.26-.57-1.26-1.26V39.93c0-.69.57-1.26 1.26-1.26h3.14c.69 0 1.26.57 1.26 1.26V59.4c0 .69-.57 1.26-1.26 1.26zm28.89-21.98h3.14c.69 0 1.26.57 1.26 1.26v19.47c0 .69-.57 1.26-1.26 1.26h-3.14c-.69 0-1.26-.57-1.26-1.26V39.94c0-.69.57-1.26 1.26-1.26zM51.89 60.66c.69 0 1.26-.57 1.26-1.26V39.93c0-.69-.57-1.26-1.26-1.26h-3.77c-.69 0-1.26.57-1.26 1.26V59.4c0 .69.57 1.26 1.26 1.26h3.77zm8.79-1.26c0 .69-.57 1.26-1.26 1.26h-1.26c-.69 0-1.26-.57-1.26-1.26V39.93c0-.69.57-1.26 1.26-1.26h1.26c.69 0 1.26.57 1.26 1.26V59.4zM43.1 60.66c.69 0 1.26-.57 1.26-1.26V39.93c0-.69-.57-1.26-1.26-1.26h-1.26c-.69 0-1.26.57-1.26 1.26V59.4c0 .69.57 1.26 1.26 1.26h1.26zm-10.68 3.77h35.17c.69 0 1.26.57 1.26 1.26v1.26c0 .69-.57 1.26-1.26 1.26H32.42c-.69 0-1.26-.57-1.26-1.26v-1.26c0-.69.57-1.26 1.26-1.26z" fill-rule="evenodd"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-ddse5nl59v";
freezeTemplate(tmpl);
