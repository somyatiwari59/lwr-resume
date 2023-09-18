import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./crypto_wallet_group.css";

import _implicitScopedStylesheets from "./crypto_wallet_group.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M53.9 20.75c1.56-.9 3.49-.9 5.05 0l5.16 2.98c1.56.9 2.53 2.57 2.53 4.37v5.95c0 1.8-.96 3.47-2.53 4.37l-5.16 2.98c-1.56.9-3.49.9-5.05 0l-5.16-2.98a5.057 5.057 0 01-2.53-4.37V28.1c0-1.8.96-3.47 2.53-4.37l5.16-2.98zm-4.2 11.23c-.39-.4-.39-1.04 0-1.44l1.06-1.08a.99.99 0 011.42 0l1.77 1.8c.39.4 1.02.4 1.42 0l5.31-5.4a.99.99 0 011.42 0l1.06 1.08c.39.4.39 1.04 0 1.44l-7.79 7.91a.99.99 0 01-1.42 0l-4.25-4.32z" fill-rule="evenodd"${3}/><path d="M43.31 35.08h-5.4c-2.79 0-5.05 2.26-5.05 5.05v21.89c0 2.79 2.26 5.05 5.05 5.05h37.04c2.79 0 5.05-2.26 5.05-5.05V50.23c0-2.78-2.25-5.04-5.03-5.05H40.43c-1.39 0-2.53-1.13-2.53-2.53s1.13-2.53 2.53-2.53h5.42l-.03-.02a5.057 5.057 0 01-2.53-4.37v-.66zM66.77 40.13h8.18c0-2.79-2.26-5.05-5.05-5.05h-.35v.54a5.03 5.03 0 01-2.69 4.46l-.1.05z"${3}/><path d="M26.43 47.94v20.51c0 2.79 2.26 5.05 5.05 5.05h35.66v1.38c0 2.79-2.26 5.05-5.05 5.05H25.05c-2.79 0-5.05-2.26-5.05-5.05V52.99c0-2.79 2.26-5.05 5.05-5.05h1.38z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-7lcb2k1e6ra";
freezeTemplate(tmpl);
