import { Replay } from "./replay";

const events = [
  {
    "data": {
      "href": "http://localhost:3000/record",
      "width": 1600,
      "height": 1073
    },
    "type": 4,
    "timestamp": 1712867123185
  },
  {
    "data": {
      "node": {
        "id": 1,
        "type": 0,
        "childNodes": [
          {
            "id": 2,
            "name": "html",
            "type": 1,
            "publicId": "",
            "systemId": ""
          },
          {
            "id": 3,
            "type": 2,
            "tagName": "html",
            "attributes": {
              "dir": "ltr",
              "lang": "en",
              "class": "dark",
              "style": "color-scheme: dark;"
            },
            "childNodes": [
              {
                "id": 4,
                "type": 2,
                "tagName": "input",
                "attributes": {
                  "id": "__yoroi_connector_api_injected_type",
                  "type": "hidden",
                  "value": "prod"
                },
                "childNodes": []
              },
              {
                "id": 5,
                "type": 2,
                "tagName": "head",
                "attributes": {},
                "childNodes": [
                  {
                    "id": 6,
                    "type": 2,
                    "tagName": "meta",
                    "attributes": {
                      "charset": "utf-8"
                    },
                    "childNodes": []
                  },
                  {
                    "id": 7,
                    "type": 2,
                    "tagName": "meta",
                    "attributes": {
                      "name": "viewport",
                      "content": "width=device-width, initial-scale=1"
                    },
                    "childNodes": []
                  },
                  {
                    "id": 8,
                    "type": 2,
                    "tagName": "link",
                    "attributes": {
                      "as": "font",
                      "rel": "preload",
                      "href": "http://localhost:3000/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",
                      "type": "font/woff2",
                      "crossorigin": ""
                    },
                    "childNodes": []
                  },
                  {
                    "id": 9,
                    "type": 2,
                    "tagName": "link",
                    "attributes": {
                      "_cssText": "@font-face { font-family: __Inter_aaf875; font-style: normal; font-weight: 100 900; font-display: swap; src: url(\"http://localhost:3000/_next/static/media/ec159349637c90ad-s.woff2\") format(\"woff2\"); unicode-range: U+460-52F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F; }@font-face { font-family: __Inter_aaf875; font-style: normal; font-weight: 100 900; font-display: swap; src: url(\"http://localhost:3000/_next/static/media/513657b02c5c193f-s.woff2\") format(\"woff2\"); unicode-range: U+301, U+400-45F, U+490-491, U+4B0-4B1, U+2116; }@font-face { font-family: __Inter_aaf875; font-style: normal; font-weight: 100 900; font-display: swap; src: url(\"http://localhost:3000/_next/static/media/fd4db3eb5472fc27-s.woff2\") format(\"woff2\"); unicode-range: U+1F00-1FFF; }@font-face { font-family: __Inter_aaf875; font-style: normal; font-weight: 100 900; font-display: swap; src: url(\"http://localhost:3000/_next/static/media/51ed15f9841b9f9d-s.woff2\") format(\"woff2\"); unicode-range: U+370-377, U+37A-37F, U+384-38A, U+38C, U+38E-3A1, U+3A3-3FF; }@font-face { font-family: __Inter_aaf875; font-style: normal; font-weight: 100 900; font-display: swap; src: url(\"http://localhost:3000/_next/static/media/05a31a2ca4975f99-s.woff2\") format(\"woff2\"); unicode-range: U+102-103, U+110-111, U+128-129, U+168-169, U+1A0-1A1, U+1AF-1B0, U+300-301, U+303-304, U+308-309, U+323, U+329, U+1EA0-1EF9, U+20AB; }@font-face { font-family: __Inter_aaf875; font-style: normal; font-weight: 100 900; font-display: swap; src: url(\"http://localhost:3000/_next/static/media/d6b16ce4a6175f26-s.woff2\") format(\"woff2\"); unicode-range: U+100-2AF, U+304, U+308, U+329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF; }@font-face { font-family: __Inter_aaf875; font-style: normal; font-weight: 100 900; font-display: swap; src: url(\"http://localhost:3000/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2\") format(\"woff2\"); unicode-range: U+0-FF, U+131, U+152-153, U+2BB-2BC, U+2C6, U+2DA, U+2DC, U+304, U+308, U+329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }@font-face { font-family: __Inter_Fallback_aaf875; src: local(\"Arial\"); ascent-override: 90.2%; descent-override: 22.48%; line-gap-override: 0%; size-adjust: 107.4%; }.__className_aaf875 { font-family: __Inter_aaf875, __Inter_Fallback_aaf875; font-style: normal; }*, ::before, ::after { box-sizing: border-box; border-width: 0px; border-style: solid; border-color: rgb(229, 231, 235); }::before, ::after { --tw-content: ''; }html, :host { line-height: 1.5; text-size-adjust: 100%; tab-size: 4; font-family: ui-sans-serif, system-ui, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; font-feature-settings: normal; font-variation-settings: normal; -webkit-tap-highlight-color: transparent; }body { margin: 0px; line-height: inherit; }hr { height: 0px; color: inherit; border-top-width: 1px; }abbr:where([title]) { text-decoration: underline dotted; }h1, h2, h3, h4, h5, h6 { font-size: inherit; font-weight: inherit; }a { color: inherit; text-decoration: inherit; }b, strong { font-weight: bolder; }code, kbd, samp, pre { font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; font-feature-settings: normal; font-variation-settings: normal; font-size: 1em; }small { font-size: 80%; }sub, sup { font-size: 75%; line-height: 0; position: relative; vertical-align: baseline; }sub { bottom: -0.25em; }sup { top: -0.5em; }table { text-indent: 0px; border-color: inherit; border-collapse: collapse; }button, input, optgroup, select, textarea { font-family: inherit; font-feature-settings: inherit; font-variation-settings: inherit; font-size: 100%; font-weight: inherit; line-height: inherit; color: inherit; margin: 0px; padding: 0px; }button, select { text-transform: none; }button, [type=\"button\"], [type=\"reset\"], [type=\"submit\"] { appearance: button; background-color: transparent; background-image: none; }progress { vertical-align: baseline; }::-webkit-inner-spin-button, ::-webkit-outer-spin-button { height: auto; }[type=\"search\"] { appearance: textfield; outline-offset: -2px; }::-webkit-search-decoration { appearance: none; }::-webkit-file-upload-button { appearance: button; font: inherit; }summary { display: list-item; }blockquote, dl, dd, h1, h2, h3, h4, h5, h6, hr, figure, p, pre { margin: 0px; }fieldset { margin: 0px; padding: 0px; }legend { padding: 0px; }ol, ul, menu { list-style: none; margin: 0px; padding: 0px; }dialog { padding: 0px; }textarea { resize: vertical; }input::placeholder, textarea::placeholder { opacity: 1; color: rgb(156, 163, 175); }button, [role=\"button\"] { cursor: pointer; }:disabled { cursor: default; }img, svg, video, canvas, audio, iframe, embed, object { display: block; vertical-align: middle; }img, video { max-width: 100%; height: auto; }[hidden] { display: none; }:root { --gradient: #00416A; --background: 216 100% 98.42%; --foreground: 216 10% 0.84%; --muted: 216 10% 92.1%; --muted-foreground: 216 5% 42.1%; --popover: 216 10% 92.1%; --popover-foreground: 216 10% 1.05%; --card: 216 10% 92.1%; --card-foreground: 216 10% 1.05%; --border: 216 15% 89.84%; --input: 216 15% 89.84%; --primary: 216 100% 21%; --primary-foreground: 216 2% 92.1%; --secondary: 216 5% 96.05%; --secondary-foreground: 216 7% 12.1%; --accent: 216 5% 96.05%; --accent-foreground: 216 7% 12.1%; --destructive: 0 84.2% 60.2%; --destructive-foreground: 0 0% 98%; --ring: 216 100% 21%; --radius: 0.5rem; }.dark { --background: 240 10% 3.9%; --foreground: 0 0% 98%; --card: 240 10% 3.9%; --card-foreground: 0 0% 98%; --popover: 240 10% 3.9%; --popover-foreground: 0 0% 98%; --primary: 0 0% 98%; --primary-foreground: 240 5.9% 10%; --secondary: 240 3.7% 15.9%; --secondary-foreground: 0 0% 98%; --muted: 240 3.7% 15.9%; --muted-foreground: 240 5% 64.9%; --accent: 240 3.7% 15.9%; --accent-foreground: 0 0% 98%; --destructive: 0 62.8% 30.6%; --destructive-foreground: 0 0% 98%; --border: 240 3.7% 15.9%; --input: 240 3.7% 15.9%; --ring: 240 4.9% 83.9%; }* { border-color: hsl(var(--border)); }body { background-color: hsl(var(--background)); color: hsl(var(--foreground)); }*, ::before, ::after { --tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgb(59 130 246 / 0.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; }::backdrop { --tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgb(59 130 246 / 0.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; }.sr-only { position: absolute; width: 1px; height: 1px; padding: 0px; margin: -1px; overflow: hidden; clip: rect(0px, 0px, 0px, 0px); white-space: nowrap; border-width: 0px; }.fixed { position: fixed; }.absolute { position: absolute; }.relative { position: relative; }.inset-0 { inset: 0px; }.left-2 { left: 0.5rem; }.left-\\[50\\%\\] { left: 50%; }.right-2 { right: 0.5rem; }.right-4 { right: 1rem; }.top-4 { top: 1rem; }.top-\\[50\\%\\] { top: 50%; }.z-50 { z-index: 50; }.m-4 { margin: 1rem; }.-mx-1 { margin-left: -0.25rem; margin-right: -0.25rem; }.mx-2 { margin-left: 0.5rem; margin-right: 0.5rem; }.mx-4 { margin-left: 1rem; margin-right: 1rem; }.mx-auto { margin-left: auto; margin-right: auto; }.my-1 { margin-top: 0.25rem; margin-bottom: 0.25rem; }.my-2 { margin-top: 0.5rem; margin-bottom: 0.5rem; }.my-2\\.5 { margin-top: 0.625rem; margin-bottom: 0.625rem; }.my-3 { margin-top: 0.75rem; margin-bottom: 0.75rem; }.my-6 { margin-top: 1.5rem; margin-bottom: 1.5rem; }.-ml-3 { margin-left: -0.75rem; }.mb-1 { margin-bottom: 0.25rem; }.mb-2 { margin-bottom: 0.5rem; }.mb-3 { margin-bottom: 0.75rem; }.mb-4 { margin-bottom: 1rem; }.mb-5 { margin-bottom: 1.25rem; }.mb-6 { margin-bottom: 1.5rem; }.me-1 { margin-inline-end: 0.25rem; }.me-2 { margin-inline-end: 0.5rem; }.ml-1 { margin-left: 0.25rem; }.ml-2 { margin-left: 0.5rem; }.ml-3 { margin-left: 0.75rem; }.ml-3\\.5 { margin-left: 0.875rem; }.ml-4 { margin-left: 1rem; }.ml-auto { margin-left: auto; }.mr-1 { margin-right: 0.25rem; }.mr-2 { margin-right: 0.5rem; }.mr-4 { margin-right: 1rem; }.ms-0 { margin-inline-start: 0px; }.mt-2 { margin-top: 0.5rem; }.mt-4 { margin-top: 1rem; }.mt-5 { margin-top: 1.25rem; }.block { display: block; }.inline-block { display: inline-block; }.inline { display: inline; }.flex { display: flex; }.inline-flex { display: inline-flex; }.\\!table { display: table !important; }.table { display: table; }.table-row { display: table-row; }.grid { display: grid; }.hidden { display: none; }.h-10 { height: 2.5rem; }.h-16 { height: 4rem; }.h-2 { height: 0.5rem; }.h-2\\.5 { height: 0.625rem; }.h-24 { height: 6rem; }.h-3 { height: 0.75rem; }.h-3\\.5 { height: 0.875rem; }.h-4 { height: 1rem; }.h-5 { height: 1.25rem; }.h-8 { height: 2rem; }.h-9 { height: 2.25rem; }.h-\\[1\\.2rem\\] { height: 1.2rem; }.h-\\[1px\\] { height: 1px; }.h-\\[60px\\] { height: 60px; }.h-\\[var\\(--radix-select-trigger-height\\)\\] { height: var(--radix-select-trigger-height); }.h-full { height: 100%; }.h-px { height: 1px; }.max-h-96 { max-height: 24rem; }.max-h-\\[300px\\] { max-height: 300px; }.min-h-screen { min-height: 100vh; }.w-1\\/2 { width: 50%; }.w-24 { width: 6rem; }.w-3 { width: 0.75rem; }.w-3\\.5 { width: 0.875rem; }.w-4 { width: 1rem; }.w-4\\/5 { width: 80%; }.w-5 { width: 1.25rem; }.w-64 { width: 16rem; }.w-72 { width: 18rem; }.w-8 { width: 2rem; }.w-9 { width: 2.25rem; }.w-\\[1\\.2rem\\] { width: 1.2rem; }.w-\\[100px\\] { width: 100px; }.w-\\[150px\\] { width: 150px; }.w-\\[160px\\] { width: 160px; }.w-\\[1px\\] { width: 1px; }.w-\\[200px\\] { width: 200px; }.w-\\[450px\\] { width: 450px; }.w-\\[70px\\] { width: 70px; }.w-\\[80px\\] { width: 80px; }.w-full { width: 100%; }.min-w-\\[120px\\] { min-width: 120px; }.min-w-\\[80px\\] { min-width: 80px; }.min-w-\\[8rem\\] { min-width: 8rem; }.min-w-\\[var\\(--radix-select-trigger-width\\)\\] { min-width: var(--radix-select-trigger-width); }.min-w-full { min-width: 100%; }.max-w-\\[400px\\] { max-width: 400px; }.max-w-\\[500px\\] { max-width: 500px; }.max-w-lg { max-width: 32rem; }.max-w-md { max-width: 28rem; }.flex-1 { flex: 1 1 0%; }.shrink-0 { flex-shrink: 0; }.table-fixed { table-layout: fixed; }.caption-bottom { caption-side: bottom; }.translate-x-\\[-50\\%\\] { --tw-translate-x: -50%; transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)); }.translate-y-\\[-50\\%\\] { --tw-translate-y: -50%; transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)); }.translate-y-\\[2px\\] { --tw-translate-y: 2px; transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)); }.rotate-0 { --tw-rotate: 0deg; transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)); }.rotate-90 { --tw-rotate: 90deg; transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)); }.scale-0 { --tw-scale-x: 0; --tw-scale-y: 0; transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)); }.scale-100 { --tw-scale-x: 1; --tw-scale-y: 1; transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)); }.transform { transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)); }@keyframes pulse { \n  50% { opacity: 0.5; }\n}.animate-pulse { animation: 2s cubic-bezier(0.4, 0, 0.6, 1) 0s infinite normal none running pulse; }@keyframes spin { \n  100% { transform: rotate(360deg); }\n}.animate-spin { animation: 1s linear 0s infinite normal none running spin; }.cursor-default { cursor: default; }.cursor-pointer { cursor: pointer; }.select-none { user-select: none; }.flex-row { flex-direction: row; }.flex-col { flex-direction: column; }.flex-col-reverse { flex-direction: column-reverse; }.content-center { align-content: center; }.items-center { align-items: center; }.justify-center { justify-content: center; }.justify-between { justify-content: space-between; }.gap-1 { gap: 0.25rem; }.gap-4 { gap: 1rem; }.-space-x-px > :not([hidden]) ~ :not([hidden]) { --tw-space-x-reverse: 0; margin-right: calc(-1px * var(--tw-space-x-reverse)); margin-left: calc(-1px * calc(1 - var(--tw-space-x-reverse))); }.space-x-1 > :not([hidden]) ~ :not([hidden]) { --tw-space-x-reverse: 0; margin-right: calc(0.25rem * var(--tw-space-x-reverse)); margin-left: calc(0.25rem * calc(1 - var(--tw-space-x-reverse))); }.space-x-2 > :not([hidden]) ~ :not([hidden]) { --tw-space-x-reverse: 0; margin-right: calc(0.5rem * var(--tw-space-x-reverse)); margin-left: calc(0.5rem * calc(1 - var(--tw-space-x-reverse))); }.space-x-4 > :not([hidden]) ~ :not([hidden]) { --tw-space-x-reverse: 0; margin-right: calc(1rem * var(--tw-space-x-reverse)); margin-left: calc(1rem * calc(1 - var(--tw-space-x-reverse))); }.space-x-6 > :not([hidden]) ~ :not([hidden]) { --tw-space-x-reverse: 0; margin-right: calc(1.5rem * var(--tw-space-x-reverse)); margin-left: calc(1.5rem * calc(1 - var(--tw-space-x-reverse))); }.space-y-1 > :not([hidden]) ~ :not([hidden]) { --tw-space-y-reverse: 0; margin-top: calc(0.25rem * calc(1 - var(--tw-space-y-reverse))); margin-bottom: calc(0.25rem * var(--tw-space-y-reverse)); }.space-y-1\\.5 > :not([hidden]) ~ :not([hidden]) { --tw-space-y-reverse: 0; margin-top: calc(0.375rem * calc(1 - var(--tw-space-y-reverse))); margin-bottom: calc(0.375rem * var(--tw-space-y-reverse)); }.space-y-4 > :not([hidden]) ~ :not([hidden]) { --tw-space-y-reverse: 0; margin-top: calc(1rem * calc(1 - var(--tw-space-y-reverse))); margin-bottom: calc(1rem * var(--tw-space-y-reverse)); }.space-y-8 > :not([hidden]) ~ :not([hidden]) { --tw-space-y-reverse: 0; margin-top: calc(2rem * calc(1 - var(--tw-space-y-reverse))); margin-bottom: calc(2rem * var(--tw-space-y-reverse)); }.overflow-auto { overflow: auto; }.overflow-hidden { overflow: hidden; }.overflow-y-auto { overflow-y: auto; }.overflow-x-hidden { overflow-x: hidden; }.truncate { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }.whitespace-nowrap { white-space: nowrap; }.break-words { overflow-wrap: break-word; }.break-all { word-break: break-all; }.rounded { border-radius: 0.25rem; }.rounded-full { border-radius: 9999px; }.rounded-lg { border-radius: var(--radius); }.rounded-md { border-radius: calc(var(--radius) - 2px); }.rounded-sm { border-radius: calc(var(--radius) - 4px); }.rounded-e-lg { border-start-end-radius: var(--radius); border-end-end-radius: var(--radius); }.rounded-s-lg { border-start-start-radius: var(--radius); border-end-start-radius: var(--radius); }.border { border-width: 1px; }.border-b { border-bottom-width: 1px; }.border-b-2 { border-bottom-width: 2px; }.border-b-4 { border-bottom-width: 4px; }.border-b-8 { border-bottom-width: 8px; }.border-e-0 { border-inline-end-width: 0px; }.border-r { border-right-width: 1px; }.border-r-\\[1px\\] { border-right-width: 1px; }.border-t { border-top-width: 1px; }.border-dashed { border-style: dashed; }.border-black { --tw-border-opacity: 1; border-color: rgb(0 0 0 / var(--tw-border-opacity)); }.border-destructive\\/50 { border-color: hsl(var(--destructive) / 0.5); }.border-gray-200 { --tw-border-opacity: 1; border-color: rgb(229 231 235 / var(--tw-border-opacity)); }.border-gray-300 { --tw-border-opacity: 1; border-color: rgb(209 213 219 / var(--tw-border-opacity)); }.border-input { border-color: hsl(var(--input)); }.border-primary { border-color: hsl(var(--primary)); }.border-teal-200 { --tw-border-opacity: 1; border-color: rgb(153 246 228 / var(--tw-border-opacity)); }.border-transparent { border-color: transparent; }.border-violet-200 { --tw-border-opacity: 1; border-color: rgb(221 214 254 / var(--tw-border-opacity)); }.bg-amber-300 { --tw-bg-opacity: 1; background-color: rgb(252 211 77 / var(--tw-bg-opacity)); }.bg-background { background-color: hsl(var(--background)); }.bg-black\\/80 { background-color: rgba(0, 0, 0, 0.8); }.bg-blue-400 { --tw-bg-opacity: 1; background-color: rgb(96 165 250 / var(--tw-bg-opacity)); }.bg-blue-500 { --tw-bg-opacity: 1; background-color: rgb(59 130 246 / var(--tw-bg-opacity)); }.bg-border { background-color: hsl(var(--border)); }.bg-cyan-500 { --tw-bg-opacity: 1; background-color: rgb(6 182 212 / var(--tw-bg-opacity)); }.bg-destructive { background-color: hsl(var(--destructive)); }.bg-gray-500 { --tw-bg-opacity: 1; background-color: rgb(107 114 128 / var(--tw-bg-opacity)); }.bg-gray-700 { --tw-bg-opacity: 1; background-color: rgb(55 65 81 / var(--tw-bg-opacity)); }.bg-gray-800 { --tw-bg-opacity: 1; background-color: rgb(31 41 55 / var(--tw-bg-opacity)); }.bg-green-500 { --tw-bg-opacity: 1; background-color: rgb(34 197 94 / var(--tw-bg-opacity)); }.bg-muted { background-color: hsl(var(--muted)); }.bg-muted\\/50 { background-color: hsl(var(--muted) / 0.5); }.bg-popover { background-color: hsl(var(--popover)); }.bg-primary { background-color: hsl(var(--primary)); }.bg-red-500 { --tw-bg-opacity: 1; background-color: rgb(239 68 68 / var(--tw-bg-opacity)); }.bg-secondary { background-color: hsl(var(--secondary)); }.bg-teal-100 { --tw-bg-opacity: 1; background-color: rgb(204 251 241 / var(--tw-bg-opacity)); }.bg-teal-500 { --tw-bg-opacity: 1; background-color: rgb(20 184 166 / var(--tw-bg-opacity)); }.bg-transparent { background-color: transparent; }.bg-violet-100 { --tw-bg-opacity: 1; background-color: rgb(237 233 254 / var(--tw-bg-opacity)); }.bg-white { --tw-bg-opacity: 1; background-color: rgb(255 255 255 / var(--tw-bg-opacity)); }.bg-yellow-100 { --tw-bg-opacity: 1; background-color: rgb(254 249 195 / var(--tw-bg-opacity)); }.bg-yellow-500 { --tw-bg-opacity: 1; background-color: rgb(234 179 8 / var(--tw-bg-opacity)); }.bg-opacity-50 { --tw-bg-opacity: 0.5; }.fill-current { fill: currentcolor; }.fill-primary { fill: hsl(var(--primary)); }.p-0 { padding: 0px; }.p-1 { padding: 0.25rem; }.p-10 { padding: 2.5rem; }.p-2 { padding: 0.5rem; }.p-4 { padding: 1rem; }.p-5 { padding: 1.25rem; }.p-6 { padding: 1.5rem; }.p-8 { padding: 2rem; }.px-1 { padding-left: 0.25rem; padding-right: 0.25rem; }.px-2 { padding-left: 0.5rem; padding-right: 0.5rem; }.px-2\\.5 { padding-left: 0.625rem; padding-right: 0.625rem; }.px-3 { padding-left: 0.75rem; padding-right: 0.75rem; }.px-4 { padding-left: 1rem; padding-right: 1rem; }.px-5 { padding-left: 1.25rem; padding-right: 1.25rem; }.px-8 { padding-left: 2rem; padding-right: 2rem; }.py-0 { padding-top: 0px; padding-bottom: 0px; }.py-0\\.5 { padding-top: 0.125rem; padding-bottom: 0.125rem; }.py-1 { padding-top: 0.25rem; padding-bottom: 0.25rem; }.py-1\\.5 { padding-top: 0.375rem; padding-bottom: 0.375rem; }.py-2 { padding-top: 0.5rem; padding-bottom: 0.5rem; }.py-2\\.5 { padding-top: 0.625rem; padding-bottom: 0.625rem; }.py-3 { padding-top: 0.75rem; padding-bottom: 0.75rem; }.py-6 { padding-top: 1.5rem; padding-bottom: 1.5rem; }.pl-2 { padding-left: 0.5rem; }.pl-2\\.5 { padding-left: 0.625rem; }.pl-8 { padding-left: 2rem; }.pr-2 { padding-right: 0.5rem; }.pr-2\\.5 { padding-right: 0.625rem; }.pr-6 { padding-right: 1.5rem; }.pr-8 { padding-right: 2rem; }.pt-0 { padding-top: 0px; }.text-left { text-align: left; }.text-center { text-align: center; }.align-middle { vertical-align: middle; }.font-mono { font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; }.text-2xl { font-size: 1.5rem; line-height: 2rem; }.text-lg { font-size: 1.125rem; line-height: 1.75rem; }.text-sm { font-size: 0.875rem; line-height: 1.25rem; }.text-xl { font-size: 1.25rem; line-height: 1.75rem; }.text-xs { font-size: 0.75rem; line-height: 1rem; }.font-bold { font-weight: 700; }.font-medium { font-weight: 500; }.font-normal { font-weight: 400; }.font-semibold { font-weight: 600; }.capitalize { text-transform: capitalize; }.leading-none { line-height: 1; }.leading-tight { line-height: 1.25; }.tracking-tight { letter-spacing: -0.025em; }.tracking-widest { letter-spacing: 0.1em; }.text-accent-foreground { color: hsl(var(--accent-foreground)); }.text-black { --tw-text-opacity: 1; color: rgb(0 0 0 / var(--tw-text-opacity)); }.text-blue-500 { --tw-text-opacity: 1; color: rgb(59 130 246 / var(--tw-text-opacity)); }.text-current { color: currentcolor; }.text-destructive { color: hsl(var(--destructive)); }.text-destructive-foreground { color: hsl(var(--destructive-foreground)); }.text-foreground { color: hsl(var(--foreground)); }.text-gray-500 { --tw-text-opacity: 1; color: rgb(107 114 128 / var(--tw-text-opacity)); }.text-gray-700 { --tw-text-opacity: 1; color: rgb(55 65 81 / var(--tw-text-opacity)); }.text-gray-800 { --tw-text-opacity: 1; color: rgb(31 41 55 / var(--tw-text-opacity)); }.text-gray-900 { --tw-text-opacity: 1; color: rgb(17 24 39 / var(--tw-text-opacity)); }.text-green-600 { --tw-text-opacity: 1; color: rgb(22 163 74 / var(--tw-text-opacity)); }.text-muted-foreground { color: hsl(var(--muted-foreground)); }.text-muted-foreground\\/70 { color: hsl(var(--muted-foreground) / 0.7); }.text-popover-foreground { color: hsl(var(--popover-foreground)); }.text-primary { color: hsl(var(--primary)); }.text-primary-foreground { color: hsl(var(--primary-foreground)); }.text-purple-500 { --tw-text-opacity: 1; color: rgb(168 85 247 / var(--tw-text-opacity)); }.text-secondary-foreground { color: hsl(var(--secondary-foreground)); }.text-white { --tw-text-opacity: 1; color: rgb(255 255 255 / var(--tw-text-opacity)); }.underline-offset-4 { text-underline-offset: 4px; }.opacity-50 { opacity: 0.5; }.opacity-60 { opacity: 0.6; }.opacity-70 { opacity: 0.7; }.shadow { --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1); --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color); box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow); }.shadow-lg { --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1); --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color); box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow); }.shadow-md { --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1); --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color); box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow); }.shadow-sm { --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05); --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color); box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow); }.outline-none { outline: transparent solid 2px; outline-offset: 2px; }.outline { outline-style: solid; }.ring-offset-background { --tw-ring-offset-color: hsl(var(--background)); }.filter { filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow); }.transition { transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms; }.transition-all { transition-property: all; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms; }.transition-colors { transition-property: color, background-color, border-color, text-decoration-color, fill, stroke; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms; }.transition-opacity { transition-property: opacity; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms; }.duration-200 { transition-duration: 200ms; }.ease-in-out { transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); }@keyframes enter { \n  0% { opacity: var(--tw-enter-opacity, 1); transform: translate3d(var(--tw-enter-translate-x, 0), var(--tw-enter-translate-y, 0), 0) scale3d(var(--tw-enter-scale, 1), var(--tw-enter-scale, 1), var(--tw-enter-scale, 1)) rotate(var(--tw-enter-rotate, 0)); }\n}@keyframes exit { \n  100% { opacity: var(--tw-exit-opacity, 1); transform: translate3d(var(--tw-exit-translate-x, 0), var(--tw-exit-translate-y, 0), 0) scale3d(var(--tw-exit-scale, 1), var(--tw-exit-scale, 1), var(--tw-exit-scale, 1)) rotate(var(--tw-exit-rotate, 0)); }\n}.duration-200 { animation-duration: 200ms; }.ease-in-out { animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1); }.file\\:border-0::file-selector-button { border-width: 0px; }.file\\:bg-transparent::file-selector-button { background-color: transparent; }.file\\:text-sm::file-selector-button { font-size: 0.875rem; line-height: 1.25rem; }.file\\:font-medium::file-selector-button { font-weight: 500; }.placeholder\\:text-muted-foreground::placeholder { color: hsl(var(--muted-foreground)); }.hover\\:bg-accent:hover { background-color: hsl(var(--accent)); }.hover\\:bg-accent\\/80:hover { background-color: hsl(var(--accent) / 0.8); }.hover\\:bg-blue-700:hover { --tw-bg-opacity: 1; background-color: rgb(29 78 216 / var(--tw-bg-opacity)); }.hover\\:bg-destructive\\/80:hover { background-color: hsl(var(--destructive) / 0.8); }.hover\\:bg-destructive\\/90:hover { background-color: hsl(var(--destructive) / 0.9); }.hover\\:bg-gray-100:hover { --tw-bg-opacity: 1; background-color: rgb(243 244 246 / var(--tw-bg-opacity)); }.hover\\:bg-green-700:hover { --tw-bg-opacity: 1; background-color: rgb(21 128 61 / var(--tw-bg-opacity)); }.hover\\:bg-muted\\/50:hover { background-color: hsl(var(--muted) / 0.5); }.hover\\:bg-primary\\/80:hover { background-color: hsl(var(--primary) / 0.8); }.hover\\:bg-primary\\/90:hover { background-color: hsl(var(--primary) / 0.9); }.hover\\:bg-red-700:hover { --tw-bg-opacity: 1; background-color: rgb(185 28 28 / var(--tw-bg-opacity)); }.hover\\:bg-secondary\\/80:hover { background-color: hsl(var(--secondary) / 0.8); }.hover\\:bg-yellow-700:hover { --tw-bg-opacity: 1; background-color: rgb(161 98 7 / var(--tw-bg-opacity)); }.hover\\:text-accent-foreground:hover { color: hsl(var(--accent-foreground)); }.hover\\:text-blue-700:hover { --tw-text-opacity: 1; color: rgb(29 78 216 / var(--tw-text-opacity)); }.hover\\:text-gray-700:hover { --tw-text-opacity: 1; color: rgb(55 65 81 / var(--tw-text-opacity)); }.hover\\:text-primary:hover { color: hsl(var(--primary)); }.hover\\:underline:hover { text-decoration-line: underline; }.hover\\:opacity-100:hover { opacity: 1; }.hover\\:brightness-125:hover { --tw-brightness: brightness(1.25); filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow); }.focus\\:border-transparent:focus { border-color: transparent; }.focus\\:bg-accent:focus { background-color: hsl(var(--accent)); }.focus\\:text-accent-foreground:focus { color: hsl(var(--accent-foreground)); }.focus\\:outline-none:focus { outline: transparent solid 2px; outline-offset: 2px; }.focus\\:ring-1:focus { --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color); --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color); box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000); }.focus\\:ring-2:focus { --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color); --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color); box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000); }.focus\\:ring-4:focus { --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color); --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color); box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000); }.focus\\:ring-gray-100:focus { --tw-ring-opacity: 1; --tw-ring-color: rgb(243 244 246 / var(--tw-ring-opacity)); }.focus\\:ring-ring:focus { --tw-ring-color: hsl(var(--ring)); }.focus\\:ring-sky-300:focus { --tw-ring-opacity: 1; --tw-ring-color: rgb(125 211 252 / var(--tw-ring-opacity)); }.focus\\:ring-offset-2:focus { --tw-ring-offset-width: 2px; }.focus-visible\\:outline-none:focus-visible { outline: transparent solid 2px; outline-offset: 2px; }.focus-visible\\:ring-1:focus-visible { --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color); --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color); box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000); }.focus-visible\\:ring-ring:focus-visible { --tw-ring-color: hsl(var(--ring)); }.disabled\\:pointer-events-none:disabled { pointer-events: none; }.disabled\\:cursor-not-allowed:disabled { cursor: not-allowed; }.disabled\\:opacity-50:disabled { opacity: 0.5; }.aria-selected\\:bg-accent[aria-selected=\"true\"] { background-color: hsl(var(--accent)); }.aria-selected\\:text-accent-foreground[aria-selected=\"true\"] { color: hsl(var(--accent-foreground)); }.data-\\[disabled\\]\\:pointer-events-none[data-disabled] { pointer-events: none; }.data-\\[side\\=bottom\\]\\:translate-y-1[data-side=\"bottom\"] { --tw-translate-y: 0.25rem; transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)); }.data-\\[side\\=left\\]\\:-translate-x-1[data-side=\"left\"] { --tw-translate-x: -0.25rem; transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)); }.data-\\[side\\=right\\]\\:translate-x-1[data-side=\"right\"] { --tw-translate-x: 0.25rem; transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)); }.data-\\[side\\=top\\]\\:-translate-y-1[data-side=\"top\"] { --tw-translate-y: -0.25rem; transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)); }.data-\\[state\\=checked\\]\\:bg-primary[data-state=\"checked\"] { background-color: hsl(var(--primary)); }.data-\\[state\\=open\\]\\:bg-accent[data-state=\"open\"] { background-color: hsl(var(--accent)); }.data-\\[state\\=open\\]\\:bg-muted[data-state=\"open\"] { background-color: hsl(var(--muted)); }.data-\\[state\\=selected\\]\\:bg-muted[data-state=\"selected\"] { background-color: hsl(var(--muted)); }.data-\\[state\\=checked\\]\\:text-primary-foreground[data-state=\"checked\"] { color: hsl(var(--primary-foreground)); }.data-\\[state\\=open\\]\\:text-muted-foreground[data-state=\"open\"] { color: hsl(var(--muted-foreground)); }.data-\\[disabled\\]\\:opacity-50[data-disabled] { opacity: 0.5; }.data-\\[state\\=open\\]\\:animate-in[data-state=\"open\"] { animation-name: enter; animation-duration: 150ms; --tw-enter-opacity: initial; --tw-enter-scale: initial; --tw-enter-rotate: initial; --tw-enter-translate-x: initial; --tw-enter-translate-y: initial; }.data-\\[state\\=closed\\]\\:animate-out[data-state=\"closed\"] { animation-name: exit; animation-duration: 150ms; --tw-exit-opacity: initial; --tw-exit-scale: initial; --tw-exit-rotate: initial; --tw-exit-translate-x: initial; --tw-exit-translate-y: initial; }.data-\\[state\\=closed\\]\\:fade-out-0[data-state=\"closed\"] { --tw-exit-opacity: 0; }.data-\\[state\\=open\\]\\:fade-in-0[data-state=\"open\"] { --tw-enter-opacity: 0; }.data-\\[state\\=closed\\]\\:zoom-out-95[data-state=\"closed\"] { --tw-exit-scale: .95; }.data-\\[state\\=open\\]\\:zoom-in-95[data-state=\"open\"] { --tw-enter-scale: .95; }.data-\\[side\\=bottom\\]\\:slide-in-from-top-2[data-side=\"bottom\"] { --tw-enter-translate-y: -0.5rem; }.data-\\[side\\=left\\]\\:slide-in-from-right-2[data-side=\"left\"] { --tw-enter-translate-x: 0.5rem; }.data-\\[side\\=right\\]\\:slide-in-from-left-2[data-side=\"right\"] { --tw-enter-translate-x: -0.5rem; }.data-\\[side\\=top\\]\\:slide-in-from-bottom-2[data-side=\"top\"] { --tw-enter-translate-y: 0.5rem; }.data-\\[state\\=closed\\]\\:slide-out-to-left-1\\/2[data-state=\"closed\"] { --tw-exit-translate-x: -50%; }.data-\\[state\\=closed\\]\\:slide-out-to-top-\\[48\\%\\][data-state=\"closed\"] { --tw-exit-translate-y: -48%; }.data-\\[state\\=open\\]\\:slide-in-from-left-1\\/2[data-state=\"open\"] { --tw-enter-translate-x: -50%; }.data-\\[state\\=open\\]\\:slide-in-from-top-\\[48\\%\\][data-state=\"open\"] { --tw-enter-translate-y: -48%; }:is(.dark .dark\\:-rotate-90) { --tw-rotate: -90deg; transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)); }:is(.dark .dark\\:rotate-0) { --tw-rotate: 0deg; transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)); }:is(.dark .dark\\:scale-0) { --tw-scale-x: 0; --tw-scale-y: 0; transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)); }:is(.dark .dark\\:scale-100) { --tw-scale-x: 1; --tw-scale-y: 1; transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)); }:is(.dark .dark\\:border-destructive) { border-color: hsl(var(--destructive)); }:is(.dark .dark\\:border-gray-700) { --tw-border-opacity: 1; border-color: rgb(55 65 81 / var(--tw-border-opacity)); }:is(.dark .dark\\:border-neutral-800) { --tw-border-opacity: 1; border-color: rgb(38 38 38 / var(--tw-border-opacity)); }:is(.dark .dark\\:bg-black) { --tw-bg-opacity: 1; background-color: rgb(0 0 0 / var(--tw-bg-opacity)); }:is(.dark .dark\\:bg-gray-800) { --tw-bg-opacity: 1; background-color: rgb(31 41 55 / var(--tw-bg-opacity)); }:is(.dark .dark\\:bg-rose-500) { --tw-bg-opacity: 1; background-color: rgb(244 63 94 / var(--tw-bg-opacity)); }:is(.dark .dark\\:text-black) { --tw-text-opacity: 1; color: rgb(0 0 0 / var(--tw-text-opacity)); }:is(.dark .dark\\:text-gray-300) { --tw-text-opacity: 1; color: rgb(209 213 219 / var(--tw-text-opacity)); }:is(.dark .dark\\:text-gray-400) { --tw-text-opacity: 1; color: rgb(156 163 175 / var(--tw-text-opacity)); }:is(.dark .dark\\:text-white) { --tw-text-opacity: 1; color: rgb(255 255 255 / var(--tw-text-opacity)); }:is(.dark .dark\\:hover\\:bg-gray-700:hover) { --tw-bg-opacity: 1; background-color: rgb(55 65 81 / var(--tw-bg-opacity)); }:is(.dark .dark\\:hover\\:text-white:hover) { --tw-text-opacity: 1; color: rgb(255 255 255 / var(--tw-text-opacity)); }:is(.dark .dark\\:focus\\:ring-gray-600:focus) { --tw-ring-opacity: 1; --tw-ring-color: rgb(75 85 99 / var(--tw-ring-opacity)); }@media (min-width: 640px) {\n  .sm\\:flex-row { flex-direction: row; }\n  .sm\\:justify-end { justify-content: flex-end; }\n  .sm\\:space-x-2 > :not([hidden]) ~ :not([hidden]) { --tw-space-x-reverse: 0; margin-right: calc(0.5rem * var(--tw-space-x-reverse)); margin-left: calc(0.5rem * calc(1 - var(--tw-space-x-reverse))); }\n  .sm\\:rounded-lg { border-radius: var(--radius); }\n  .sm\\:text-left { text-align: left; }\n}@media (min-width: 768px) {\n  .md\\:flex { display: flex; }\n  .md\\:max-w-\\[40\\%\\] { max-width: 40%; }\n  .md\\:max-w-\\[60\\%\\] { max-width: 60%; }\n  .md\\:max-w-full { max-width: 100%; }\n  .md\\:flex-\\[2\\] { flex: 2 1 0%; }\n  .md\\:flex-\\[3\\] { flex: 3 1 0%; }\n  .md\\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0px, 1fr)); }\n  .md\\:flex-row { flex-direction: row; }\n}@media (min-width: 1024px) {\n  .lg\\:flex { display: flex; }\n  .lg\\:hidden { display: none; }\n  .lg\\:w-\\[450px\\] { width: 450px; }\n  .lg\\:gap-8 { gap: 2rem; }\n  .lg\\:space-x-6 > :not([hidden]) ~ :not([hidden]) { --tw-space-x-reverse: 0; margin-right: calc(1.5rem * var(--tw-space-x-reverse)); margin-left: calc(1.5rem * calc(1 - var(--tw-space-x-reverse))); }\n  .lg\\:space-x-8 > :not([hidden]) ~ :not([hidden]) { --tw-space-x-reverse: 0; margin-right: calc(2rem * var(--tw-space-x-reverse)); margin-left: calc(2rem * calc(1 - var(--tw-space-x-reverse))); }\n  .lg\\:px-3 { padding-left: 0.75rem; padding-right: 0.75rem; }\n}.\\[\\&\\:has\\(\\[role\\=checkbox\\]\\)\\]\\:pr-0:has([role=\"checkbox\"]) { padding-right: 0px; }.\\[\\&\\>\\[role\\=checkbox\\]\\]\\:translate-y-\\[2px\\] > [role=\"checkbox\"] { --tw-translate-y: 2px; transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)); }.\\[\\&\\>span\\]\\:line-clamp-1 > span { overflow: hidden; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 1; }.\\[\\&\\>svg\\+div\\]\\:translate-y-\\[-3px\\] > svg + div { --tw-translate-y: -3px; transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)); }.\\[\\&\\>svg\\]\\:absolute > svg { position: absolute; }.\\[\\&\\>svg\\]\\:left-4 > svg { left: 1rem; }.\\[\\&\\>svg\\]\\:top-4 > svg { top: 1rem; }.\\[\\&\\>svg\\]\\:text-destructive > svg { color: hsl(var(--destructive)); }.\\[\\&\\>svg\\]\\:text-foreground > svg { color: hsl(var(--foreground)); }.\\[\\&\\>svg\\~\\*\\]\\:pl-7 > svg ~ * { padding-left: 1.75rem; }.\\[\\&\\>tr\\]\\:last\\:border-b-0:last-child > tr { border-bottom-width: 0px; }.\\[\\&_\\[cmdk-group-heading\\]\\]\\:px-2 [cmdk-group-heading] { padding-left: 0.5rem; padding-right: 0.5rem; }.\\[\\&_\\[cmdk-group-heading\\]\\]\\:py-1\\.5 [cmdk-group-heading] { padding-top: 0.375rem; padding-bottom: 0.375rem; }.\\[\\&_\\[cmdk-group-heading\\]\\]\\:text-xs [cmdk-group-heading] { font-size: 0.75rem; line-height: 1rem; }.\\[\\&_\\[cmdk-group-heading\\]\\]\\:font-medium [cmdk-group-heading] { font-weight: 500; }.\\[\\&_\\[cmdk-group-heading\\]\\]\\:text-muted-foreground [cmdk-group-heading] { color: hsl(var(--muted-foreground)); }.\\[\\&_\\[cmdk-group\\]\\:not\\(\\[hidden\\]\\)_\\~\\[cmdk-group\\]\\]\\:pt-0 [cmdk-group]:not([hidden]) ~ [cmdk-group] { padding-top: 0px; }.\\[\\&_\\[cmdk-group\\]\\]\\:px-2 [cmdk-group] { padding-left: 0.5rem; padding-right: 0.5rem; }.\\[\\&_\\[cmdk-input-wrapper\\]_svg\\]\\:h-5 [cmdk-input-wrapper] svg { height: 1.25rem; }.\\[\\&_\\[cmdk-input-wrapper\\]_svg\\]\\:w-5 [cmdk-input-wrapper] svg { width: 1.25rem; }.\\[\\&_\\[cmdk-input\\]\\]\\:h-12 [cmdk-input] { height: 3rem; }.\\[\\&_\\[cmdk-item\\]\\]\\:px-2 [cmdk-item] { padding-left: 0.5rem; padding-right: 0.5rem; }.\\[\\&_\\[cmdk-item\\]\\]\\:py-3 [cmdk-item] { padding-top: 0.75rem; padding-bottom: 0.75rem; }.\\[\\&_\\[cmdk-item\\]_svg\\]\\:h-5 [cmdk-item] svg { height: 1.25rem; }.\\[\\&_\\[cmdk-item\\]_svg\\]\\:w-5 [cmdk-item] svg { width: 1.25rem; }.\\[\\&_p\\]\\:leading-relaxed p { line-height: 1.625; }.\\[\\&_svg\\]\\:invisible svg { visibility: hidden; }.\\[\\&_tr\\:last-child\\]\\:border-0 tr:last-child { border-width: 0px; }.\\[\\&_tr\\]\\:border-b tr { border-bottom-width: 1px; }",
                      "data-precedence": "next_static/css/app/layout.css"
                    },
                    "childNodes": []
                  },
                  {
                    "id": 10,
                    "type": 2,
                    "tagName": "link",
                    "attributes": {
                      "as": "script",
                      "rel": "preload",
                      "href": "http://localhost:3000/_next/static/chunks/webpack.js?v=1712867122159",
                      "fetchpriority": "low"
                    },
                    "childNodes": []
                  },
                  {
                    "id": 11,
                    "type": 2,
                    "tagName": "script",
                    "attributes": {
                      "src": "http://localhost:3000/_next/static/chunks/main-app.js?v=1712867122159",
                      "async": ""
                    },
                    "childNodes": []
                  },
                  {
                    "id": 12,
                    "type": 2,
                    "tagName": "script",
                    "attributes": {
                      "src": "http://localhost:3000/_next/static/chunks/app-pages-internals.js",
                      "async": ""
                    },
                    "childNodes": []
                  },
                  {
                    "id": 13,
                    "type": 2,
                    "tagName": "script",
                    "attributes": {
                      "src": "http://localhost:3000/_next/static/chunks/app/layout.js",
                      "async": ""
                    },
                    "childNodes": []
                  },
                  {
                    "id": 14,
                    "type": 2,
                    "tagName": "script",
                    "attributes": {
                      "src": "http://localhost:3000/_next/static/chunks/app/record/page.js",
                      "async": ""
                    },
                    "childNodes": []
                  },
                  {
                    "id": 15,
                    "type": 2,
                    "tagName": "script",
                    "attributes": {
                      "src": "http://localhost:3000/_next/static/chunks/app/page.js",
                      "async": ""
                    },
                    "childNodes": []
                  },
                  {
                    "id": 16,
                    "type": 2,
                    "tagName": "title",
                    "attributes": {},
                    "childNodes": [
                      {
                        "id": 17,
                        "type": 3,
                        "textContent": "Decipher - Next Generation Debugging and Error Monitoring"
                      }
                    ]
                  },
                  {
                    "id": 18,
                    "type": 2,
                    "tagName": "meta",
                    "attributes": {
                      "name": "description",
                      "content": "Decipher - Next Generation Debugging and Error Monitoring"
                    },
                    "childNodes": []
                  },
                  {
                    "id": 19,
                    "type": 2,
                    "tagName": "link",
                    "attributes": {
                      "rel": "icon",
                      "href": "http://localhost:3000/favicon.ico",
                      "type": "image/x-icon",
                      "sizes": "16x16"
                    },
                    "childNodes": []
                  },
                  {
                    "id": 20,
                    "type": 2,
                    "tagName": "link",
                    "attributes": {
                      "rel": "icon",
                      "href": "http://localhost:3000/icon.png?bf39a3427b1016ba",
                      "type": "image/png",
                      "sizes": "512x512"
                    },
                    "childNodes": []
                  },
                  {
                    "id": 21,
                    "type": 2,
                    "tagName": "meta",
                    "attributes": {
                      "name": "next-size-adjust"
                    },
                    "childNodes": []
                  },
                  {
                    "id": 22,
                    "type": 2,
                    "tagName": "script",
                    "attributes": {
                      "src": "http://localhost:3000/_next/static/chunks/polyfills.js",
                      "nomodule": ""
                    },
                    "childNodes": []
                  },
                  {
                    "id": 23,
                    "type": 2,
                    "tagName": "style",
                    "attributes": {},
                    "childNodes": [
                      {
                        "id": 24,
                        "type": 3,
                        "isStyle": true,
                        "textContent": "* { transition: none 0s ease 0s !important; }"
                      }
                    ]
                  },
                  {
                    "id": 25,
                    "type": 2,
                    "tagName": "style",
                    "attributes": {},
                    "childNodes": [
                      {
                        "id": 26,
                        "type": 3,
                        "isStyle": true,
                        "textContent": "* { transition: none 0s ease 0s !important; }"
                      }
                    ]
                  }
                ]
              },
              {
                "id": 27,
                "type": 2,
                "tagName": "body",
                "attributes": {
                  "class": "__className_aaf875"
                },
                "childNodes": [
                  {
                    "id": 28,
                    "type": 2,
                    "tagName": "script",
                    "attributes": {
                      "src": "https://us-assets.i.posthog.com/static/recorder-v2.js?v=1.110.0",
                      "type": "text/javascript"
                    },
                    "childNodes": []
                  },
                  {
                    "id": 29,
                    "type": 2,
                    "tagName": "script",
                    "attributes": {},
                    "childNodes": [
                      {
                        "id": 30,
                        "type": 3,
                        "textContent": "SCRIPT_PLACEHOLDER"
                      }
                    ]
                  },
                  {
                    "id": 31,
                    "type": 2,
                    "tagName": "div",
                    "attributes": {
                      "class": "h-full flex-1 flex-col space-y-8 p-8 md:flex"
                    },
                    "childNodes": [
                      {
                        "id": 32,
                        "type": 2,
                        "tagName": "div",
                        "attributes": {
                          "class": "border-b-8 border-black dark:border-gray-700"
                        },
                        "childNodes": [
                          {
                            "id": 33,
                            "type": 2,
                            "tagName": "div",
                            "attributes": {
                              "class": "flex h-16 items-center px-1 mb-1"
                            },
                            "childNodes": [
                              {
                                "id": 34,
                                "type": 2,
                                "tagName": "a",
                                "attributes": {
                                  "href": "http://localhost:3000/"
                                },
                                "childNodes": [
                                  {
                                    "id": 35,
                                    "type": 2,
                                    "tagName": "img",
                                    "attributes": {
                                      "alt": "Decipher Logo",
                                      "src": "http://localhost:3000/_next/image?url=%2Ficon.png&w=128&q=75",
                                      "class": "rounded-lg mr-4 hover:brightness-125 transition ease-in-out",
                                      "style": "color:transparent;cursor:pointer",
                                      "width": "50",
                                      "height": "50",
                                      "srcset": "http://localhost:3000/_next/image?url=%2Ficon.png&w=64&q=75 1x, http://localhost:3000/_next/image?url=%2Ficon.png&w=128&q=75 2x",
                                      "loading": "lazy",
                                      "decoding": "async",
                                      "data-nimg": "1"
                                    },
                                    "childNodes": []
                                  }
                                ]
                              },
                              {
                                "id": 36,
                                "type": 2,
                                "tagName": "h2",
                                "attributes": {
                                  "class": "text-2xl font-bold tracking-tight"
                                },
                                "childNodes": [
                                  {
                                    "id": 37,
                                    "type": 3,
                                    "textContent": "getdecipher.com"
                                  }
                                ]
                              },
                              {
                                "id": 38,
                                "type": 2,
                                "tagName": "nav",
                                "attributes": {
                                  "class": "flex items-center space-x-4 lg:space-x-6 mx-4"
                                },
                                "childNodes": [
                                  {
                                    "id": 39,
                                    "type": 2,
                                    "tagName": "a",
                                    "attributes": {
                                      "href": "http://localhost:3000/",
                                      "class": "text-sm font-medium transition-colors text-muted-foreground hover:text-primary"
                                    },
                                    "childNodes": [
                                      {
                                        "id": 40,
                                        "type": 3,
                                        "textContent": "Dashboard"
                                      }
                                    ]
                                  },
                                  {
                                    "id": 41,
                                    "type": 2,
                                    "tagName": "a",
                                    "attributes": {
                                      "href": "http://localhost:3000/settings",
                                      "class": "text-sm font-medium transition-colors text-muted-foreground hover:text-primary"
                                    },
                                    "childNodes": [
                                      {
                                        "id": 42,
                                        "type": 3,
                                        "textContent": "Settings"
                                      }
                                    ]
                                  },
                                  {
                                    "id": 43,
                                    "type": 2,
                                    "tagName": "a",
                                    "attributes": {
                                      "href": "https://docs.getdecipher.com/",
                                      "class": "text-sm font-medium transition-colors text-muted-foreground hover:text-primary",
                                      "target": "_blank"
                                    },
                                    "childNodes": [
                                      {
                                        "id": 44,
                                        "type": 3,
                                        "textContent": "Docs"
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "id": 45,
                                "type": 2,
                                "tagName": "div",
                                "attributes": {
                                  "class": "ml-auto flex items-center space-x-4"
                                },
                                "childNodes": [
                                  {
                                    "id": 46,
                                    "type": 2,
                                    "tagName": "button",
                                    "attributes": {
                                      "id": "radix-:R66kq:",
                                      "type": "button",
                                      "class": "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 w-9",
                                      "data-state": "closed",
                                      "aria-expanded": "false",
                                      "aria-haspopup": "menu"
                                    },
                                    "childNodes": [
                                      {
                                        "id": 47,
                                        "type": 2,
                                        "isSVG": true,
                                        "tagName": "svg",
                                        "attributes": {
                                          "fill": "none",
                                          "class": "h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0",
                                          "width": "15",
                                          "xmlns": "http://www.w3.org/2000/svg",
                                          "height": "15",
                                          "viewBox": "0 0 15 15"
                                        },
                                        "childNodes": [
                                          {
                                            "id": 48,
                                            "type": 2,
                                            "isSVG": true,
                                            "tagName": "path",
                                            "attributes": {
                                              "d": "M7.5 0C7.77614 0 8 0.223858 8 0.5V2.5C8 2.77614 7.77614 3 7.5 3C7.22386 3 7 2.77614 7 2.5V0.5C7 0.223858 7.22386 0 7.5 0ZM2.1967 2.1967C2.39196 2.00144 2.70854 2.00144 2.90381 2.1967L4.31802 3.61091C4.51328 3.80617 4.51328 4.12276 4.31802 4.31802C4.12276 4.51328 3.80617 4.51328 3.61091 4.31802L2.1967 2.90381C2.00144 2.70854 2.00144 2.39196 2.1967 2.1967ZM0.5 7C0.223858 7 0 7.22386 0 7.5C0 7.77614 0.223858 8 0.5 8H2.5C2.77614 8 3 7.77614 3 7.5C3 7.22386 2.77614 7 2.5 7H0.5ZM2.1967 12.8033C2.00144 12.608 2.00144 12.2915 2.1967 12.0962L3.61091 10.682C3.80617 10.4867 4.12276 10.4867 4.31802 10.682C4.51328 10.8772 4.51328 11.1938 4.31802 11.3891L2.90381 12.8033C2.70854 12.9986 2.39196 12.9986 2.1967 12.8033ZM12.5 7C12.2239 7 12 7.22386 12 7.5C12 7.77614 12.2239 8 12.5 8H14.5C14.7761 8 15 7.77614 15 7.5C15 7.22386 14.7761 7 14.5 7H12.5ZM10.682 4.31802C10.4867 4.12276 10.4867 3.80617 10.682 3.61091L12.0962 2.1967C12.2915 2.00144 12.608 2.00144 12.8033 2.1967C12.9986 2.39196 12.9986 2.70854 12.8033 2.90381L11.3891 4.31802C11.1938 4.51328 10.8772 4.51328 10.682 4.31802ZM8 12.5C8 12.2239 7.77614 12 7.5 12C7.22386 12 7 12.2239 7 12.5V14.5C7 14.7761 7.22386 15 7.5 15C7.77614 15 8 14.7761 8 14.5V12.5ZM10.682 10.682C10.8772 10.4867 11.1938 10.4867 11.3891 10.682L12.8033 12.0962C12.9986 12.2915 12.9986 12.608 12.8033 12.8033C12.608 12.9986 12.2915 12.9986 12.0962 12.8033L10.682 11.3891C10.4867 11.1938 10.4867 10.8772 10.682 10.682ZM5.5 7.5C5.5 6.39543 6.39543 5.5 7.5 5.5C8.60457 5.5 9.5 6.39543 9.5 7.5C9.5 8.60457 8.60457 9.5 7.5 9.5C6.39543 9.5 5.5 8.60457 5.5 7.5ZM7.5 4.5C5.84315 4.5 4.5 5.84315 4.5 7.5C4.5 9.15685 5.84315 10.5 7.5 10.5C9.15685 10.5 10.5 9.15685 10.5 7.5C10.5 5.84315 9.15685 4.5 7.5 4.5Z",
                                              "fill": "currentColor",
                                              "clip-rule": "evenodd",
                                              "fill-rule": "evenodd"
                                            },
                                            "childNodes": []
                                          }
                                        ]
                                      },
                                      {
                                        "id": 49,
                                        "type": 2,
                                        "isSVG": true,
                                        "tagName": "svg",
                                        "attributes": {
                                          "fill": "none",
                                          "class": "absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100",
                                          "width": "15",
                                          "xmlns": "http://www.w3.org/2000/svg",
                                          "height": "15",
                                          "viewBox": "0 0 15 15"
                                        },
                                        "childNodes": [
                                          {
                                            "id": 50,
                                            "type": 2,
                                            "isSVG": true,
                                            "tagName": "path",
                                            "attributes": {
                                              "d": "M2.89998 0.499976C2.89998 0.279062 2.72089 0.0999756 2.49998 0.0999756C2.27906 0.0999756 2.09998 0.279062 2.09998 0.499976V1.09998H1.49998C1.27906 1.09998 1.09998 1.27906 1.09998 1.49998C1.09998 1.72089 1.27906 1.89998 1.49998 1.89998H2.09998V2.49998C2.09998 2.72089 2.27906 2.89998 2.49998 2.89998C2.72089 2.89998 2.89998 2.72089 2.89998 2.49998V1.89998H3.49998C3.72089 1.89998 3.89998 1.72089 3.89998 1.49998C3.89998 1.27906 3.72089 1.09998 3.49998 1.09998H2.89998V0.499976ZM5.89998 3.49998C5.89998 3.27906 5.72089 3.09998 5.49998 3.09998C5.27906 3.09998 5.09998 3.27906 5.09998 3.49998V4.09998H4.49998C4.27906 4.09998 4.09998 4.27906 4.09998 4.49998C4.09998 4.72089 4.27906 4.89998 4.49998 4.89998H5.09998V5.49998C5.09998 5.72089 5.27906 5.89998 5.49998 5.89998C5.72089 5.89998 5.89998 5.72089 5.89998 5.49998V4.89998H6.49998C6.72089 4.89998 6.89998 4.72089 6.89998 4.49998C6.89998 4.27906 6.72089 4.09998 6.49998 4.09998H5.89998V3.49998ZM1.89998 6.49998C1.89998 6.27906 1.72089 6.09998 1.49998 6.09998C1.27906 6.09998 1.09998 6.27906 1.09998 6.49998V7.09998H0.499976C0.279062 7.09998 0.0999756 7.27906 0.0999756 7.49998C0.0999756 7.72089 0.279062 7.89998 0.499976 7.89998H1.09998V8.49998C1.09998 8.72089 1.27906 8.89997 1.49998 8.89997C1.72089 8.89997 1.89998 8.72089 1.89998 8.49998V7.89998H2.49998C2.72089 7.89998 2.89998 7.72089 2.89998 7.49998C2.89998 7.27906 2.72089 7.09998 2.49998 7.09998H1.89998V6.49998ZM8.54406 0.98184L8.24618 0.941586C8.03275 0.917676 7.90692 1.1655 8.02936 1.34194C8.17013 1.54479 8.29981 1.75592 8.41754 1.97445C8.91878 2.90485 9.20322 3.96932 9.20322 5.10022C9.20322 8.37201 6.82247 11.0878 3.69887 11.6097C3.45736 11.65 3.20988 11.6772 2.96008 11.6906C2.74563 11.702 2.62729 11.9535 2.77721 12.1072C2.84551 12.1773 2.91535 12.2458 2.98667 12.3128L3.05883 12.3795L3.31883 12.6045L3.50684 12.7532L3.62796 12.8433L3.81491 12.9742L3.99079 13.089C4.11175 13.1651 4.23536 13.2375 4.36157 13.3059L4.62496 13.4412L4.88553 13.5607L5.18837 13.6828L5.43169 13.7686C5.56564 13.8128 5.70149 13.8529 5.83857 13.8885C5.94262 13.9155 6.04767 13.9401 6.15405 13.9622C6.27993 13.9883 6.40713 14.0109 6.53544 14.0298L6.85241 14.0685L7.11934 14.0892C7.24637 14.0965 7.37436 14.1002 7.50322 14.1002C11.1483 14.1002 14.1032 11.1453 14.1032 7.50023C14.1032 7.25044 14.0893 7.00389 14.0623 6.76131L14.0255 6.48407C13.991 6.26083 13.9453 6.04129 13.8891 5.82642C13.8213 5.56709 13.7382 5.31398 13.6409 5.06881L13.5279 4.80132L13.4507 4.63542L13.3766 4.48666C13.2178 4.17773 13.0353 3.88295 12.8312 3.60423L12.6782 3.40352L12.4793 3.16432L12.3157 2.98361L12.1961 2.85951L12.0355 2.70246L11.8134 2.50184L11.4925 2.24191L11.2483 2.06498L10.9562 1.87446L10.6346 1.68894L10.3073 1.52378L10.1938 1.47176L9.95488 1.3706L9.67791 1.2669L9.42566 1.1846L9.10075 1.09489L8.83599 1.03486L8.54406 0.98184ZM10.4032 5.30023C10.4032 4.27588 10.2002 3.29829 9.83244 2.40604C11.7623 3.28995 13.1032 5.23862 13.1032 7.50023C13.1032 10.593 10.596 13.1002 7.50322 13.1002C6.63646 13.1002 5.81597 12.9036 5.08355 12.5522C6.5419 12.0941 7.81081 11.2082 8.74322 10.0416C8.87963 10.2284 9.10028 10.3497 9.34928 10.3497C9.76349 10.3497 10.0993 10.0139 10.0993 9.59971C10.0993 9.24256 9.84965 8.94373 9.51535 8.86816C9.57741 8.75165 9.63653 8.63334 9.6926 8.51332C9.88358 8.63163 10.1088 8.69993 10.35 8.69993C11.0403 8.69993 11.6 8.14028 11.6 7.44993C11.6 6.75976 11.0406 6.20024 10.3505 6.19993C10.3853 5.90487 10.4032 5.60464 10.4032 5.30023Z",
                                              "fill": "currentColor",
                                              "clip-rule": "evenodd",
                                              "fill-rule": "evenodd"
                                            },
                                            "childNodes": []
                                          }
                                        ]
                                      },
                                      {
                                        "id": 51,
                                        "type": 2,
                                        "tagName": "span",
                                        "attributes": {
                                          "class": "sr-only"
                                        },
                                        "childNodes": [
                                          {
                                            "id": 52,
                                            "type": 3,
                                            "textContent": "Toggle theme"
                                          }
                                        ]
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": 53,
                        "type": 5,
                        "textContent": "$"
                      },
                      {
                        "id": 54,
                        "type": 2,
                        "tagName": "div",
                        "attributes": {
                          "class": "min-h-screen  p-5"
                        },
                        "childNodes": [
                          {
                            "id": 55,
                            "type": 2,
                            "tagName": "header",
                            "attributes": {
                              "class": "bg-blue-500 text-primary p-4 text-2xl font-bold"
                            },
                            "childNodes": [
                              {
                                "id": 56,
                                "type": 3,
                                "textContent": "CUSTOM APPLICATION [Decipher is recording]"
                              }
                            ]
                          },
                          {
                            "id": 57,
                            "type": 2,
                            "tagName": "main",
                            "attributes": {
                              "class": "mt-5"
                            },
                            "childNodes": [
                              {
                                "id": 58,
                                "type": 2,
                                "tagName": "section",
                                "attributes": {
                                  "class": "mb-5"
                                },
                                "childNodes": [
                                  {
                                    "id": 59,
                                    "type": 2,
                                    "tagName": "h2",
                                    "attributes": {
                                      "class": "text-lg font-semibold mb-3"
                                    },
                                    "childNodes": [
                                      {
                                        "id": 60,
                                        "type": 3,
                                        "textContent": "Actions"
                                      }
                                    ]
                                  },
                                  {
                                    "id": 61,
                                    "type": 2,
                                    "tagName": "button",
                                    "attributes": {
                                      "class": "bg-green-500 hover:bg-green-700 text-primary font-bold py-2 px-4 rounded"
                                    },
                                    "childNodes": [
                                      {
                                        "id": 62,
                                        "type": 3,
                                        "textContent": "Action 1"
                                      }
                                    ]
                                  },
                                  {
                                    "id": 63,
                                    "type": 2,
                                    "tagName": "button",
                                    "attributes": {
                                      "class": "ml-2 bg-blue-500 hover:bg-blue-700 text-primary font-bold py-2 px-4 rounded"
                                    },
                                    "childNodes": [
                                      {
                                        "id": 64,
                                        "type": 3,
                                        "textContent": "Action 2"
                                      }
                                    ]
                                  },
                                  {
                                    "id": 65,
                                    "type": 2,
                                    "tagName": "button",
                                    "attributes": {
                                      "class": "ml-2 bg-yellow-500 hover:bg-yellow-700 text-primary font-bold py-2 px-4 rounded"
                                    },
                                    "childNodes": [
                                      {
                                        "id": 66,
                                        "type": 3,
                                        "textContent": "Stop and Replay"
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": 67,
                        "type": 5,
                        "textContent": "/$"
                      }
                    ]
                  },
                  {
                    "id": 68,
                    "type": 2,
                    "tagName": "script",
                    "attributes": {
                      "src": "http://localhost:3000/_next/static/chunks/webpack.js?v=1712867122159",
                      "async": ""
                    },
                    "childNodes": []
                  },
                  {
                    "id": 69,
                    "type": 2,
                    "tagName": "script",
                    "attributes": {},
                    "childNodes": [
                      {
                        "id": 70,
                        "type": 3,
                        "textContent": "SCRIPT_PLACEHOLDER"
                      }
                    ]
                  },
                  {
                    "id": 71,
                    "type": 2,
                    "tagName": "script",
                    "attributes": {},
                    "childNodes": [
                      {
                        "id": 72,
                        "type": 3,
                        "textContent": "SCRIPT_PLACEHOLDER"
                      }
                    ]
                  },
                  {
                    "id": 73,
                    "type": 2,
                    "tagName": "script",
                    "attributes": {},
                    "childNodes": [
                      {
                        "id": 74,
                        "type": 3,
                        "textContent": "SCRIPT_PLACEHOLDER"
                      }
                    ]
                  },
                  {
                    "id": 75,
                    "type": 2,
                    "tagName": "script",
                    "attributes": {},
                    "childNodes": [
                      {
                        "id": 76,
                        "type": 3,
                        "textContent": "SCRIPT_PLACEHOLDER"
                      }
                    ]
                  },
                  {
                    "id": 77,
                    "type": 2,
                    "tagName": "script",
                    "attributes": {},
                    "childNodes": [
                      {
                        "id": 78,
                        "type": 3,
                        "textContent": "SCRIPT_PLACEHOLDER"
                      }
                    ]
                  },
                  {
                    "id": 79,
                    "type": 2,
                    "tagName": "script",
                    "attributes": {},
                    "childNodes": [
                      {
                        "id": 80,
                        "type": 3,
                        "textContent": "SCRIPT_PLACEHOLDER"
                      }
                    ]
                  },
                  {
                    "id": 81,
                    "type": 2,
                    "tagName": "script",
                    "attributes": {},
                    "childNodes": [
                      {
                        "id": 82,
                        "type": 3,
                        "textContent": "SCRIPT_PLACEHOLDER"
                      }
                    ]
                  },
                  {
                    "id": 83,
                    "type": 2,
                    "tagName": "script",
                    "attributes": {},
                    "childNodes": [
                      {
                        "id": 84,
                        "type": 3,
                        "textContent": "SCRIPT_PLACEHOLDER"
                      }
                    ]
                  },
                  {
                    "id": 85,
                    "type": 2,
                    "tagName": "script",
                    "attributes": {
                      "src": "https://present-narwhal-60.clerk.accounts.dev/npm/@clerk/clerk-js@4/dist/clerk.browser.js",
                      "async": "",
                      "crossorigin": "anonymous",
                      "data-clerk-publishable-key": "pk_test_cHJlc2VudC1uYXJ3aGFsLTYwLmNsZXJrLmFjY291bnRzLmRldiQ"
                    },
                    "childNodes": []
                  },
                  {
                    "id": 86,
                    "type": 2,
                    "tagName": "next-route-announcer",
                    "attributes": {
                      "style": "position: absolute;"
                    },
                    "childNodes": [
                      {
                        "id": 87,
                        "type": 2,
                        "tagName": "div",
                        "isShadow": true,
                        "attributes": {
                          "id": "__next-route-announcer__",
                          "role": "alert",
                          "style": "position: absolute; border: 0px; height: 1px; margin: -1px; padding: 0px; width: 1px; clip: rect(0px, 0px, 0px, 0px); overflow: hidden; white-space: nowrap; overflow-wrap: normal;",
                          "aria-live": "assertive"
                        },
                        "childNodes": []
                      }
                    ],
                    "isShadowHost": true
                  }
                ]
              }
            ]
          }
        ]
      },
      "initialOffset": {
        "top": 0,
        "left": 0
      }
    },
    "type": 2,
    "timestamp": 1712867123188
  },
  {
    "data": {
      "href": "http://localhost:3000/record",
      "width": 1600,
      "height": 1073
    },
    "type": 4,
    "timestamp": 1712867123189
  },
  {
    "data": {
      "node": {
        "id": 88,
        "type": 0,
        "childNodes": [
          {
            "id": 89,
            "name": "html",
            "type": 1,
            "rootId": 88,
            "publicId": "",
            "systemId": ""
          },
          {
            "id": 90,
            "type": 2,
            "rootId": 88,
            "tagName": "html",
            "attributes": {
              "dir": "ltr",
              "lang": "en",
              "class": "dark",
              "style": "color-scheme: dark;"
            },
            "childNodes": [
              {
                "id": 91,
                "type": 2,
                "rootId": 88,
                "tagName": "input",
                "attributes": {
                  "id": "__yoroi_connector_api_injected_type",
                  "type": "hidden",
                  "value": "prod"
                },
                "childNodes": []
              },
              {
                "id": 92,
                "type": 2,
                "rootId": 88,
                "tagName": "head",
                "attributes": {},
                "childNodes": [
                  {
                    "id": 93,
                    "type": 2,
                    "rootId": 88,
                    "tagName": "meta",
                    "attributes": {
                      "charset": "utf-8"
                    },
                    "childNodes": []
                  },
                  {
                    "id": 94,
                    "type": 2,
                    "rootId": 88,
                    "tagName": "meta",
                    "attributes": {
                      "name": "viewport",
                      "content": "width=device-width, initial-scale=1"
                    },
                    "childNodes": []
                  },
                  {
                    "id": 95,
                    "type": 2,
                    "rootId": 88,
                    "tagName": "link",
                    "attributes": {
                      "as": "font",
                      "rel": "preload",
                      "href": "http://localhost:3000/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",
                      "type": "font/woff2",
                      "crossorigin": ""
                    },
                    "childNodes": []
                  },
                  {
                    "id": 96,
                    "type": 2,
                    "rootId": 88,
                    "tagName": "link",
                    "attributes": {
                      "_cssText": "@font-face { font-family: __Inter_aaf875; font-style: normal; font-weight: 100 900; font-display: swap; src: url(\"http://localhost:3000/_next/static/media/ec159349637c90ad-s.woff2\") format(\"woff2\"); unicode-range: U+460-52F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F; }@font-face { font-family: __Inter_aaf875; font-style: normal; font-weight: 100 900; font-display: swap; src: url(\"http://localhost:3000/_next/static/media/513657b02c5c193f-s.woff2\") format(\"woff2\"); unicode-range: U+301, U+400-45F, U+490-491, U+4B0-4B1, U+2116; }@font-face { font-family: __Inter_aaf875; font-style: normal; font-weight: 100 900; font-display: swap; src: url(\"http://localhost:3000/_next/static/media/fd4db3eb5472fc27-s.woff2\") format(\"woff2\"); unicode-range: U+1F00-1FFF; }@font-face { font-family: __Inter_aaf875; font-style: normal; font-weight: 100 900; font-display: swap; src: url(\"http://localhost:3000/_next/static/media/51ed15f9841b9f9d-s.woff2\") format(\"woff2\"); unicode-range: U+370-377, U+37A-37F, U+384-38A, U+38C, U+38E-3A1, U+3A3-3FF; }@font-face { font-family: __Inter_aaf875; font-style: normal; font-weight: 100 900; font-display: swap; src: url(\"http://localhost:3000/_next/static/media/05a31a2ca4975f99-s.woff2\") format(\"woff2\"); unicode-range: U+102-103, U+110-111, U+128-129, U+168-169, U+1A0-1A1, U+1AF-1B0, U+300-301, U+303-304, U+308-309, U+323, U+329, U+1EA0-1EF9, U+20AB; }@font-face { font-family: __Inter_aaf875; font-style: normal; font-weight: 100 900; font-display: swap; src: url(\"http://localhost:3000/_next/static/media/d6b16ce4a6175f26-s.woff2\") format(\"woff2\"); unicode-range: U+100-2AF, U+304, U+308, U+329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF; }@font-face { font-family: __Inter_aaf875; font-style: normal; font-weight: 100 900; font-display: swap; src: url(\"http://localhost:3000/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2\") format(\"woff2\"); unicode-range: U+0-FF, U+131, U+152-153, U+2BB-2BC, U+2C6, U+2DA, U+2DC, U+304, U+308, U+329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }@font-face { font-family: __Inter_Fallback_aaf875; src: local(\"Arial\"); ascent-override: 90.2%; descent-override: 22.48%; line-gap-override: 0%; size-adjust: 107.4%; }.__className_aaf875 { font-family: __Inter_aaf875, __Inter_Fallback_aaf875; font-style: normal; }*, ::before, ::after { box-sizing: border-box; border-width: 0px; border-style: solid; border-color: rgb(229, 231, 235); }::before, ::after { --tw-content: ''; }html, :host { line-height: 1.5; text-size-adjust: 100%; tab-size: 4; font-family: ui-sans-serif, system-ui, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; font-feature-settings: normal; font-variation-settings: normal; -webkit-tap-highlight-color: transparent; }body { margin: 0px; line-height: inherit; }hr { height: 0px; color: inherit; border-top-width: 1px; }abbr:where([title]) { text-decoration: underline dotted; }h1, h2, h3, h4, h5, h6 { font-size: inherit; font-weight: inherit; }a { color: inherit; text-decoration: inherit; }b, strong { font-weight: bolder; }code, kbd, samp, pre { font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; font-feature-settings: normal; font-variation-settings: normal; font-size: 1em; }small { font-size: 80%; }sub, sup { font-size: 75%; line-height: 0; position: relative; vertical-align: baseline; }sub { bottom: -0.25em; }sup { top: -0.5em; }table { text-indent: 0px; border-color: inherit; border-collapse: collapse; }button, input, optgroup, select, textarea { font-family: inherit; font-feature-settings: inherit; font-variation-settings: inherit; font-size: 100%; font-weight: inherit; line-height: inherit; color: inherit; margin: 0px; padding: 0px; }button, select { text-transform: none; }button, [type=\"button\"], [type=\"reset\"], [type=\"submit\"] { appearance: button; background-color: transparent; background-image: none; }progress { vertical-align: baseline; }::-webkit-inner-spin-button, ::-webkit-outer-spin-button { height: auto; }[type=\"search\"] { appearance: textfield; outline-offset: -2px; }::-webkit-search-decoration { appearance: none; }::-webkit-file-upload-button { appearance: button; font: inherit; }summary { display: list-item; }blockquote, dl, dd, h1, h2, h3, h4, h5, h6, hr, figure, p, pre { margin: 0px; }fieldset { margin: 0px; padding: 0px; }legend { padding: 0px; }ol, ul, menu { list-style: none; margin: 0px; padding: 0px; }dialog { padding: 0px; }textarea { resize: vertical; }input::placeholder, textarea::placeholder { opacity: 1; color: rgb(156, 163, 175); }button, [role=\"button\"] { cursor: pointer; }:disabled { cursor: default; }img, svg, video, canvas, audio, iframe, embed, object { display: block; vertical-align: middle; }img, video { max-width: 100%; height: auto; }[hidden] { display: none; }:root { --gradient: #00416A; --background: 216 100% 98.42%; --foreground: 216 10% 0.84%; --muted: 216 10% 92.1%; --muted-foreground: 216 5% 42.1%; --popover: 216 10% 92.1%; --popover-foreground: 216 10% 1.05%; --card: 216 10% 92.1%; --card-foreground: 216 10% 1.05%; --border: 216 15% 89.84%; --input: 216 15% 89.84%; --primary: 216 100% 21%; --primary-foreground: 216 2% 92.1%; --secondary: 216 5% 96.05%; --secondary-foreground: 216 7% 12.1%; --accent: 216 5% 96.05%; --accent-foreground: 216 7% 12.1%; --destructive: 0 84.2% 60.2%; --destructive-foreground: 0 0% 98%; --ring: 216 100% 21%; --radius: 0.5rem; }.dark { --background: 240 10% 3.9%; --foreground: 0 0% 98%; --card: 240 10% 3.9%; --card-foreground: 0 0% 98%; --popover: 240 10% 3.9%; --popover-foreground: 0 0% 98%; --primary: 0 0% 98%; --primary-foreground: 240 5.9% 10%; --secondary: 240 3.7% 15.9%; --secondary-foreground: 0 0% 98%; --muted: 240 3.7% 15.9%; --muted-foreground: 240 5% 64.9%; --accent: 240 3.7% 15.9%; --accent-foreground: 0 0% 98%; --destructive: 0 62.8% 30.6%; --destructive-foreground: 0 0% 98%; --border: 240 3.7% 15.9%; --input: 240 3.7% 15.9%; --ring: 240 4.9% 83.9%; }* { border-color: hsl(var(--border)); }body { background-color: hsl(var(--background)); color: hsl(var(--foreground)); }*, ::before, ::after { --tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgb(59 130 246 / 0.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; }::backdrop { --tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgb(59 130 246 / 0.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; }.sr-only { position: absolute; width: 1px; height: 1px; padding: 0px; margin: -1px; overflow: hidden; clip: rect(0px, 0px, 0px, 0px); white-space: nowrap; border-width: 0px; }.fixed { position: fixed; }.absolute { position: absolute; }.relative { position: relative; }.inset-0 { inset: 0px; }.left-2 { left: 0.5rem; }.left-\\[50\\%\\] { left: 50%; }.right-2 { right: 0.5rem; }.right-4 { right: 1rem; }.top-4 { top: 1rem; }.top-\\[50\\%\\] { top: 50%; }.z-50 { z-index: 50; }.m-4 { margin: 1rem; }.-mx-1 { margin-left: -0.25rem; margin-right: -0.25rem; }.mx-2 { margin-left: 0.5rem; margin-right: 0.5rem; }.mx-4 { margin-left: 1rem; margin-right: 1rem; }.mx-auto { margin-left: auto; margin-right: auto; }.my-1 { margin-top: 0.25rem; margin-bottom: 0.25rem; }.my-2 { margin-top: 0.5rem; margin-bottom: 0.5rem; }.my-2\\.5 { margin-top: 0.625rem; margin-bottom: 0.625rem; }.my-3 { margin-top: 0.75rem; margin-bottom: 0.75rem; }.my-6 { margin-top: 1.5rem; margin-bottom: 1.5rem; }.-ml-3 { margin-left: -0.75rem; }.mb-1 { margin-bottom: 0.25rem; }.mb-2 { margin-bottom: 0.5rem; }.mb-3 { margin-bottom: 0.75rem; }.mb-4 { margin-bottom: 1rem; }.mb-5 { margin-bottom: 1.25rem; }.mb-6 { margin-bottom: 1.5rem; }.me-1 { margin-inline-end: 0.25rem; }.me-2 { margin-inline-end: 0.5rem; }.ml-1 { margin-left: 0.25rem; }.ml-2 { margin-left: 0.5rem; }.ml-3 { margin-left: 0.75rem; }.ml-3\\.5 { margin-left: 0.875rem; }.ml-4 { margin-left: 1rem; }.ml-auto { margin-left: auto; }.mr-1 { margin-right: 0.25rem; }.mr-2 { margin-right: 0.5rem; }.mr-4 { margin-right: 1rem; }.ms-0 { margin-inline-start: 0px; }.mt-2 { margin-top: 0.5rem; }.mt-4 { margin-top: 1rem; }.mt-5 { margin-top: 1.25rem; }.block { display: block; }.inline-block { display: inline-block; }.inline { display: inline; }.flex { display: flex; }.inline-flex { display: inline-flex; }.\\!table { display: table !important; }.table { display: table; }.table-row { display: table-row; }.grid { display: grid; }.hidden { display: none; }.h-10 { height: 2.5rem; }.h-16 { height: 4rem; }.h-2 { height: 0.5rem; }.h-2\\.5 { height: 0.625rem; }.h-24 { height: 6rem; }.h-3 { height: 0.75rem; }.h-3\\.5 { height: 0.875rem; }.h-4 { height: 1rem; }.h-5 { height: 1.25rem; }.h-8 { height: 2rem; }.h-9 { height: 2.25rem; }.h-\\[1\\.2rem\\] { height: 1.2rem; }.h-\\[1px\\] { height: 1px; }.h-\\[60px\\] { height: 60px; }.h-\\[var\\(--radix-select-trigger-height\\)\\] { height: var(--radix-select-trigger-height); }.h-full { height: 100%; }.h-px { height: 1px; }.max-h-96 { max-height: 24rem; }.max-h-\\[300px\\] { max-height: 300px; }.min-h-screen { min-height: 100vh; }.w-1\\/2 { width: 50%; }.w-24 { width: 6rem; }.w-3 { width: 0.75rem; }.w-3\\.5 { width: 0.875rem; }.w-4 { width: 1rem; }.w-4\\/5 { width: 80%; }.w-5 { width: 1.25rem; }.w-64 { width: 16rem; }.w-72 { width: 18rem; }.w-8 { width: 2rem; }.w-9 { width: 2.25rem; }.w-\\[1\\.2rem\\] { width: 1.2rem; }.w-\\[100px\\] { width: 100px; }.w-\\[150px\\] { width: 150px; }.w-\\[160px\\] { width: 160px; }.w-\\[1px\\] { width: 1px; }.w-\\[200px\\] { width: 200px; }.w-\\[450px\\] { width: 450px; }.w-\\[70px\\] { width: 70px; }.w-\\[80px\\] { width: 80px; }.w-full { width: 100%; }.min-w-\\[120px\\] { min-width: 120px; }.min-w-\\[80px\\] { min-width: 80px; }.min-w-\\[8rem\\] { min-width: 8rem; }.min-w-\\[var\\(--radix-select-trigger-width\\)\\] { min-width: var(--radix-select-trigger-width); }.min-w-full { min-width: 100%; }.max-w-\\[400px\\] { max-width: 400px; }.max-w-\\[500px\\] { max-width: 500px; }.max-w-lg { max-width: 32rem; }.max-w-md { max-width: 28rem; }.flex-1 { flex: 1 1 0%; }.shrink-0 { flex-shrink: 0; }.table-fixed { table-layout: fixed; }.caption-bottom { caption-side: bottom; }.translate-x-\\[-50\\%\\] { --tw-translate-x: -50%; transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)); }.translate-y-\\[-50\\%\\] { --tw-translate-y: -50%; transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)); }.translate-y-\\[2px\\] { --tw-translate-y: 2px; transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)); }.rotate-0 { --tw-rotate: 0deg; transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)); }.rotate-90 { --tw-rotate: 90deg; transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)); }.scale-0 { --tw-scale-x: 0; --tw-scale-y: 0; transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)); }.scale-100 { --tw-scale-x: 1; --tw-scale-y: 1; transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)); }.transform { transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)); }@keyframes pulse { \n  50% { opacity: 0.5; }\n}.animate-pulse { animation: 2s cubic-bezier(0.4, 0, 0.6, 1) 0s infinite normal none running pulse; }@keyframes spin { \n  100% { transform: rotate(360deg); }\n}.animate-spin { animation: 1s linear 0s infinite normal none running spin; }.cursor-default { cursor: default; }.cursor-pointer { cursor: pointer; }.select-none { user-select: none; }.flex-row { flex-direction: row; }.flex-col { flex-direction: column; }.flex-col-reverse { flex-direction: column-reverse; }.content-center { align-content: center; }.items-center { align-items: center; }.justify-center { justify-content: center; }.justify-between { justify-content: space-between; }.gap-1 { gap: 0.25rem; }.gap-4 { gap: 1rem; }.-space-x-px > :not([hidden]) ~ :not([hidden]) { --tw-space-x-reverse: 0; margin-right: calc(-1px * var(--tw-space-x-reverse)); margin-left: calc(-1px * calc(1 - var(--tw-space-x-reverse))); }.space-x-1 > :not([hidden]) ~ :not([hidden]) { --tw-space-x-reverse: 0; margin-right: calc(0.25rem * var(--tw-space-x-reverse)); margin-left: calc(0.25rem * calc(1 - var(--tw-space-x-reverse))); }.space-x-2 > :not([hidden]) ~ :not([hidden]) { --tw-space-x-reverse: 0; margin-right: calc(0.5rem * var(--tw-space-x-reverse)); margin-left: calc(0.5rem * calc(1 - var(--tw-space-x-reverse))); }.space-x-4 > :not([hidden]) ~ :not([hidden]) { --tw-space-x-reverse: 0; margin-right: calc(1rem * var(--tw-space-x-reverse)); margin-left: calc(1rem * calc(1 - var(--tw-space-x-reverse))); }.space-x-6 > :not([hidden]) ~ :not([hidden]) { --tw-space-x-reverse: 0; margin-right: calc(1.5rem * var(--tw-space-x-reverse)); margin-left: calc(1.5rem * calc(1 - var(--tw-space-x-reverse))); }.space-y-1 > :not([hidden]) ~ :not([hidden]) { --tw-space-y-reverse: 0; margin-top: calc(0.25rem * calc(1 - var(--tw-space-y-reverse))); margin-bottom: calc(0.25rem * var(--tw-space-y-reverse)); }.space-y-1\\.5 > :not([hidden]) ~ :not([hidden]) { --tw-space-y-reverse: 0; margin-top: calc(0.375rem * calc(1 - var(--tw-space-y-reverse))); margin-bottom: calc(0.375rem * var(--tw-space-y-reverse)); }.space-y-4 > :not([hidden]) ~ :not([hidden]) { --tw-space-y-reverse: 0; margin-top: calc(1rem * calc(1 - var(--tw-space-y-reverse))); margin-bottom: calc(1rem * var(--tw-space-y-reverse)); }.space-y-8 > :not([hidden]) ~ :not([hidden]) { --tw-space-y-reverse: 0; margin-top: calc(2rem * calc(1 - var(--tw-space-y-reverse))); margin-bottom: calc(2rem * var(--tw-space-y-reverse)); }.overflow-auto { overflow: auto; }.overflow-hidden { overflow: hidden; }.overflow-y-auto { overflow-y: auto; }.overflow-x-hidden { overflow-x: hidden; }.truncate { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }.whitespace-nowrap { white-space: nowrap; }.break-words { overflow-wrap: break-word; }.break-all { word-break: break-all; }.rounded { border-radius: 0.25rem; }.rounded-full { border-radius: 9999px; }.rounded-lg { border-radius: var(--radius); }.rounded-md { border-radius: calc(var(--radius) - 2px); }.rounded-sm { border-radius: calc(var(--radius) - 4px); }.rounded-e-lg { border-start-end-radius: var(--radius); border-end-end-radius: var(--radius); }.rounded-s-lg { border-start-start-radius: var(--radius); border-end-start-radius: var(--radius); }.border { border-width: 1px; }.border-b { border-bottom-width: 1px; }.border-b-2 { border-bottom-width: 2px; }.border-b-4 { border-bottom-width: 4px; }.border-b-8 { border-bottom-width: 8px; }.border-e-0 { border-inline-end-width: 0px; }.border-r { border-right-width: 1px; }.border-r-\\[1px\\] { border-right-width: 1px; }.border-t { border-top-width: 1px; }.border-dashed { border-style: dashed; }.border-black { --tw-border-opacity: 1; border-color: rgb(0 0 0 / var(--tw-border-opacity)); }.border-destructive\\/50 { border-color: hsl(var(--destructive) / 0.5); }.border-gray-200 { --tw-border-opacity: 1; border-color: rgb(229 231 235 / var(--tw-border-opacity)); }.border-gray-300 { --tw-border-opacity: 1; border-color: rgb(209 213 219 / var(--tw-border-opacity)); }.border-input { border-color: hsl(var(--input)); }.border-primary { border-color: hsl(var(--primary)); }.border-teal-200 { --tw-border-opacity: 1; border-color: rgb(153 246 228 / var(--tw-border-opacity)); }.border-transparent { border-color: transparent; }.border-violet-200 { --tw-border-opacity: 1; border-color: rgb(221 214 254 / var(--tw-border-opacity)); }.bg-amber-300 { --tw-bg-opacity: 1; background-color: rgb(252 211 77 / var(--tw-bg-opacity)); }.bg-background { background-color: hsl(var(--background)); }.bg-black\\/80 { background-color: rgba(0, 0, 0, 0.8); }.bg-blue-400 { --tw-bg-opacity: 1; background-color: rgb(96 165 250 / var(--tw-bg-opacity)); }.bg-blue-500 { --tw-bg-opacity: 1; background-color: rgb(59 130 246 / var(--tw-bg-opacity)); }.bg-border { background-color: hsl(var(--border)); }.bg-cyan-500 { --tw-bg-opacity: 1; background-color: rgb(6 182 212 / var(--tw-bg-opacity)); }.bg-destructive { background-color: hsl(var(--destructive)); }.bg-gray-500 { --tw-bg-opacity: 1; background-color: rgb(107 114 128 / var(--tw-bg-opacity)); }.bg-gray-700 { --tw-bg-opacity: 1; background-color: rgb(55 65 81 / var(--tw-bg-opacity)); }.bg-gray-800 { --tw-bg-opacity: 1; background-color: rgb(31 41 55 / var(--tw-bg-opacity)); }.bg-green-500 { --tw-bg-opacity: 1; background-color: rgb(34 197 94 / var(--tw-bg-opacity)); }.bg-muted { background-color: hsl(var(--muted)); }.bg-muted\\/50 { background-color: hsl(var(--muted) / 0.5); }.bg-popover { background-color: hsl(var(--popover)); }.bg-primary { background-color: hsl(var(--primary)); }.bg-red-500 { --tw-bg-opacity: 1; background-color: rgb(239 68 68 / var(--tw-bg-opacity)); }.bg-secondary { background-color: hsl(var(--secondary)); }.bg-teal-100 { --tw-bg-opacity: 1; background-color: rgb(204 251 241 / var(--tw-bg-opacity)); }.bg-teal-500 { --tw-bg-opacity: 1; background-color: rgb(20 184 166 / var(--tw-bg-opacity)); }.bg-transparent { background-color: transparent; }.bg-violet-100 { --tw-bg-opacity: 1; background-color: rgb(237 233 254 / var(--tw-bg-opacity)); }.bg-white { --tw-bg-opacity: 1; background-color: rgb(255 255 255 / var(--tw-bg-opacity)); }.bg-yellow-100 { --tw-bg-opacity: 1; background-color: rgb(254 249 195 / var(--tw-bg-opacity)); }.bg-yellow-500 { --tw-bg-opacity: 1; background-color: rgb(234 179 8 / var(--tw-bg-opacity)); }.bg-opacity-50 { --tw-bg-opacity: 0.5; }.fill-current { fill: currentcolor; }.fill-primary { fill: hsl(var(--primary)); }.p-0 { padding: 0px; }.p-1 { padding: 0.25rem; }.p-10 { padding: 2.5rem; }.p-2 { padding: 0.5rem; }.p-4 { padding: 1rem; }.p-5 { padding: 1.25rem; }.p-6 { padding: 1.5rem; }.p-8 { padding: 2rem; }.px-1 { padding-left: 0.25rem; padding-right: 0.25rem; }.px-2 { padding-left: 0.5rem; padding-right: 0.5rem; }.px-2\\.5 { padding-left: 0.625rem; padding-right: 0.625rem; }.px-3 { padding-left: 0.75rem; padding-right: 0.75rem; }.px-4 { padding-left: 1rem; padding-right: 1rem; }.px-5 { padding-left: 1.25rem; padding-right: 1.25rem; }.px-8 { padding-left: 2rem; padding-right: 2rem; }.py-0 { padding-top: 0px; padding-bottom: 0px; }.py-0\\.5 { padding-top: 0.125rem; padding-bottom: 0.125rem; }.py-1 { padding-top: 0.25rem; padding-bottom: 0.25rem; }.py-1\\.5 { padding-top: 0.375rem; padding-bottom: 0.375rem; }.py-2 { padding-top: 0.5rem; padding-bottom: 0.5rem; }.py-2\\.5 { padding-top: 0.625rem; padding-bottom: 0.625rem; }.py-3 { padding-top: 0.75rem; padding-bottom: 0.75rem; }.py-6 { padding-top: 1.5rem; padding-bottom: 1.5rem; }.pl-2 { padding-left: 0.5rem; }.pl-2\\.5 { padding-left: 0.625rem; }.pl-8 { padding-left: 2rem; }.pr-2 { padding-right: 0.5rem; }.pr-2\\.5 { padding-right: 0.625rem; }.pr-6 { padding-right: 1.5rem; }.pr-8 { padding-right: 2rem; }.pt-0 { padding-top: 0px; }.text-left { text-align: left; }.text-center { text-align: center; }.align-middle { vertical-align: middle; }.font-mono { font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; }.text-2xl { font-size: 1.5rem; line-height: 2rem; }.text-lg { font-size: 1.125rem; line-height: 1.75rem; }.text-sm { font-size: 0.875rem; line-height: 1.25rem; }.text-xl { font-size: 1.25rem; line-height: 1.75rem; }.text-xs { font-size: 0.75rem; line-height: 1rem; }.font-bold { font-weight: 700; }.font-medium { font-weight: 500; }.font-normal { font-weight: 400; }.font-semibold { font-weight: 600; }.capitalize { text-transform: capitalize; }.leading-none { line-height: 1; }.leading-tight { line-height: 1.25; }.tracking-tight { letter-spacing: -0.025em; }.tracking-widest { letter-spacing: 0.1em; }.text-accent-foreground { color: hsl(var(--accent-foreground)); }.text-black { --tw-text-opacity: 1; color: rgb(0 0 0 / var(--tw-text-opacity)); }.text-blue-500 { --tw-text-opacity: 1; color: rgb(59 130 246 / var(--tw-text-opacity)); }.text-current { color: currentcolor; }.text-destructive { color: hsl(var(--destructive)); }.text-destructive-foreground { color: hsl(var(--destructive-foreground)); }.text-foreground { color: hsl(var(--foreground)); }.text-gray-500 { --tw-text-opacity: 1; color: rgb(107 114 128 / var(--tw-text-opacity)); }.text-gray-700 { --tw-text-opacity: 1; color: rgb(55 65 81 / var(--tw-text-opacity)); }.text-gray-800 { --tw-text-opacity: 1; color: rgb(31 41 55 / var(--tw-text-opacity)); }.text-gray-900 { --tw-text-opacity: 1; color: rgb(17 24 39 / var(--tw-text-opacity)); }.text-green-600 { --tw-text-opacity: 1; color: rgb(22 163 74 / var(--tw-text-opacity)); }.text-muted-foreground { color: hsl(var(--muted-foreground)); }.text-muted-foreground\\/70 { color: hsl(var(--muted-foreground) / 0.7); }.text-popover-foreground { color: hsl(var(--popover-foreground)); }.text-primary { color: hsl(var(--primary)); }.text-primary-foreground { color: hsl(var(--primary-foreground)); }.text-purple-500 { --tw-text-opacity: 1; color: rgb(168 85 247 / var(--tw-text-opacity)); }.text-secondary-foreground { color: hsl(var(--secondary-foreground)); }.text-white { --tw-text-opacity: 1; color: rgb(255 255 255 / var(--tw-text-opacity)); }.underline-offset-4 { text-underline-offset: 4px; }.opacity-50 { opacity: 0.5; }.opacity-60 { opacity: 0.6; }.opacity-70 { opacity: 0.7; }.shadow { --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1); --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color); box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow); }.shadow-lg { --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1); --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color); box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow); }.shadow-md { --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1); --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color); box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow); }.shadow-sm { --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05); --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color); box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow); }.outline-none { outline: transparent solid 2px; outline-offset: 2px; }.outline { outline-style: solid; }.ring-offset-background { --tw-ring-offset-color: hsl(var(--background)); }.filter { filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow); }.transition { transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms; }.transition-all { transition-property: all; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms; }.transition-colors { transition-property: color, background-color, border-color, text-decoration-color, fill, stroke; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms; }.transition-opacity { transition-property: opacity; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms; }.duration-200 { transition-duration: 200ms; }.ease-in-out { transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); }@keyframes enter { \n  0% { opacity: var(--tw-enter-opacity, 1); transform: translate3d(var(--tw-enter-translate-x, 0), var(--tw-enter-translate-y, 0), 0) scale3d(var(--tw-enter-scale, 1), var(--tw-enter-scale, 1), var(--tw-enter-scale, 1)) rotate(var(--tw-enter-rotate, 0)); }\n}@keyframes exit { \n  100% { opacity: var(--tw-exit-opacity, 1); transform: translate3d(var(--tw-exit-translate-x, 0), var(--tw-exit-translate-y, 0), 0) scale3d(var(--tw-exit-scale, 1), var(--tw-exit-scale, 1), var(--tw-exit-scale, 1)) rotate(var(--tw-exit-rotate, 0)); }\n}.duration-200 { animation-duration: 200ms; }.ease-in-out { animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1); }.file\\:border-0::file-selector-button { border-width: 0px; }.file\\:bg-transparent::file-selector-button { background-color: transparent; }.file\\:text-sm::file-selector-button { font-size: 0.875rem; line-height: 1.25rem; }.file\\:font-medium::file-selector-button { font-weight: 500; }.placeholder\\:text-muted-foreground::placeholder { color: hsl(var(--muted-foreground)); }.hover\\:bg-accent:hover { background-color: hsl(var(--accent)); }.hover\\:bg-accent\\/80:hover { background-color: hsl(var(--accent) / 0.8); }.hover\\:bg-blue-700:hover { --tw-bg-opacity: 1; background-color: rgb(29 78 216 / var(--tw-bg-opacity)); }.hover\\:bg-destructive\\/80:hover { background-color: hsl(var(--destructive) / 0.8); }.hover\\:bg-destructive\\/90:hover { background-color: hsl(var(--destructive) / 0.9); }.hover\\:bg-gray-100:hover { --tw-bg-opacity: 1; background-color: rgb(243 244 246 / var(--tw-bg-opacity)); }.hover\\:bg-green-700:hover { --tw-bg-opacity: 1; background-color: rgb(21 128 61 / var(--tw-bg-opacity)); }.hover\\:bg-muted\\/50:hover { background-color: hsl(var(--muted) / 0.5); }.hover\\:bg-primary\\/80:hover { background-color: hsl(var(--primary) / 0.8); }.hover\\:bg-primary\\/90:hover { background-color: hsl(var(--primary) / 0.9); }.hover\\:bg-red-700:hover { --tw-bg-opacity: 1; background-color: rgb(185 28 28 / var(--tw-bg-opacity)); }.hover\\:bg-secondary\\/80:hover { background-color: hsl(var(--secondary) / 0.8); }.hover\\:bg-yellow-700:hover { --tw-bg-opacity: 1; background-color: rgb(161 98 7 / var(--tw-bg-opacity)); }.hover\\:text-accent-foreground:hover { color: hsl(var(--accent-foreground)); }.hover\\:text-blue-700:hover { --tw-text-opacity: 1; color: rgb(29 78 216 / var(--tw-text-opacity)); }.hover\\:text-gray-700:hover { --tw-text-opacity: 1; color: rgb(55 65 81 / var(--tw-text-opacity)); }.hover\\:text-primary:hover { color: hsl(var(--primary)); }.hover\\:underline:hover { text-decoration-line: underline; }.hover\\:opacity-100:hover { opacity: 1; }.hover\\:brightness-125:hover { --tw-brightness: brightness(1.25); filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow); }.focus\\:border-transparent:focus { border-color: transparent; }.focus\\:bg-accent:focus { background-color: hsl(var(--accent)); }.focus\\:text-accent-foreground:focus { color: hsl(var(--accent-foreground)); }.focus\\:outline-none:focus { outline: transparent solid 2px; outline-offset: 2px; }.focus\\:ring-1:focus { --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color); --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color); box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000); }.focus\\:ring-2:focus { --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color); --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color); box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000); }.focus\\:ring-4:focus { --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color); --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color); box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000); }.focus\\:ring-gray-100:focus { --tw-ring-opacity: 1; --tw-ring-color: rgb(243 244 246 / var(--tw-ring-opacity)); }.focus\\:ring-ring:focus { --tw-ring-color: hsl(var(--ring)); }.focus\\:ring-sky-300:focus { --tw-ring-opacity: 1; --tw-ring-color: rgb(125 211 252 / var(--tw-ring-opacity)); }.focus\\:ring-offset-2:focus { --tw-ring-offset-width: 2px; }.focus-visible\\:outline-none:focus-visible { outline: transparent solid 2px; outline-offset: 2px; }.focus-visible\\:ring-1:focus-visible { --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color); --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color); box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000); }.focus-visible\\:ring-ring:focus-visible { --tw-ring-color: hsl(var(--ring)); }.disabled\\:pointer-events-none:disabled { pointer-events: none; }.disabled\\:cursor-not-allowed:disabled { cursor: not-allowed; }.disabled\\:opacity-50:disabled { opacity: 0.5; }.aria-selected\\:bg-accent[aria-selected=\"true\"] { background-color: hsl(var(--accent)); }.aria-selected\\:text-accent-foreground[aria-selected=\"true\"] { color: hsl(var(--accent-foreground)); }.data-\\[disabled\\]\\:pointer-events-none[data-disabled] { pointer-events: none; }.data-\\[side\\=bottom\\]\\:translate-y-1[data-side=\"bottom\"] { --tw-translate-y: 0.25rem; transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)); }.data-\\[side\\=left\\]\\:-translate-x-1[data-side=\"left\"] { --tw-translate-x: -0.25rem; transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)); }.data-\\[side\\=right\\]\\:translate-x-1[data-side=\"right\"] { --tw-translate-x: 0.25rem; transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)); }.data-\\[side\\=top\\]\\:-translate-y-1[data-side=\"top\"] { --tw-translate-y: -0.25rem; transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)); }.data-\\[state\\=checked\\]\\:bg-primary[data-state=\"checked\"] { background-color: hsl(var(--primary)); }.data-\\[state\\=open\\]\\:bg-accent[data-state=\"open\"] { background-color: hsl(var(--accent)); }.data-\\[state\\=open\\]\\:bg-muted[data-state=\"open\"] { background-color: hsl(var(--muted)); }.data-\\[state\\=selected\\]\\:bg-muted[data-state=\"selected\"] { background-color: hsl(var(--muted)); }.data-\\[state\\=checked\\]\\:text-primary-foreground[data-state=\"checked\"] { color: hsl(var(--primary-foreground)); }.data-\\[state\\=open\\]\\:text-muted-foreground[data-state=\"open\"] { color: hsl(var(--muted-foreground)); }.data-\\[disabled\\]\\:opacity-50[data-disabled] { opacity: 0.5; }.data-\\[state\\=open\\]\\:animate-in[data-state=\"open\"] { animation-name: enter; animation-duration: 150ms; --tw-enter-opacity: initial; --tw-enter-scale: initial; --tw-enter-rotate: initial; --tw-enter-translate-x: initial; --tw-enter-translate-y: initial; }.data-\\[state\\=closed\\]\\:animate-out[data-state=\"closed\"] { animation-name: exit; animation-duration: 150ms; --tw-exit-opacity: initial; --tw-exit-scale: initial; --tw-exit-rotate: initial; --tw-exit-translate-x: initial; --tw-exit-translate-y: initial; }.data-\\[state\\=closed\\]\\:fade-out-0[data-state=\"closed\"] { --tw-exit-opacity: 0; }.data-\\[state\\=open\\]\\:fade-in-0[data-state=\"open\"] { --tw-enter-opacity: 0; }.data-\\[state\\=closed\\]\\:zoom-out-95[data-state=\"closed\"] { --tw-exit-scale: .95; }.data-\\[state\\=open\\]\\:zoom-in-95[data-state=\"open\"] { --tw-enter-scale: .95; }.data-\\[side\\=bottom\\]\\:slide-in-from-top-2[data-side=\"bottom\"] { --tw-enter-translate-y: -0.5rem; }.data-\\[side\\=left\\]\\:slide-in-from-right-2[data-side=\"left\"] { --tw-enter-translate-x: 0.5rem; }.data-\\[side\\=right\\]\\:slide-in-from-left-2[data-side=\"right\"] { --tw-enter-translate-x: -0.5rem; }.data-\\[side\\=top\\]\\:slide-in-from-bottom-2[data-side=\"top\"] { --tw-enter-translate-y: 0.5rem; }.data-\\[state\\=closed\\]\\:slide-out-to-left-1\\/2[data-state=\"closed\"] { --tw-exit-translate-x: -50%; }.data-\\[state\\=closed\\]\\:slide-out-to-top-\\[48\\%\\][data-state=\"closed\"] { --tw-exit-translate-y: -48%; }.data-\\[state\\=open\\]\\:slide-in-from-left-1\\/2[data-state=\"open\"] { --tw-enter-translate-x: -50%; }.data-\\[state\\=open\\]\\:slide-in-from-top-\\[48\\%\\][data-state=\"open\"] { --tw-enter-translate-y: -48%; }:is(.dark .dark\\:-rotate-90) { --tw-rotate: -90deg; transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)); }:is(.dark .dark\\:rotate-0) { --tw-rotate: 0deg; transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)); }:is(.dark .dark\\:scale-0) { --tw-scale-x: 0; --tw-scale-y: 0; transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)); }:is(.dark .dark\\:scale-100) { --tw-scale-x: 1; --tw-scale-y: 1; transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)); }:is(.dark .dark\\:border-destructive) { border-color: hsl(var(--destructive)); }:is(.dark .dark\\:border-gray-700) { --tw-border-opacity: 1; border-color: rgb(55 65 81 / var(--tw-border-opacity)); }:is(.dark .dark\\:border-neutral-800) { --tw-border-opacity: 1; border-color: rgb(38 38 38 / var(--tw-border-opacity)); }:is(.dark .dark\\:bg-black) { --tw-bg-opacity: 1; background-color: rgb(0 0 0 / var(--tw-bg-opacity)); }:is(.dark .dark\\:bg-gray-800) { --tw-bg-opacity: 1; background-color: rgb(31 41 55 / var(--tw-bg-opacity)); }:is(.dark .dark\\:bg-rose-500) { --tw-bg-opacity: 1; background-color: rgb(244 63 94 / var(--tw-bg-opacity)); }:is(.dark .dark\\:text-black) { --tw-text-opacity: 1; color: rgb(0 0 0 / var(--tw-text-opacity)); }:is(.dark .dark\\:text-gray-300) { --tw-text-opacity: 1; color: rgb(209 213 219 / var(--tw-text-opacity)); }:is(.dark .dark\\:text-gray-400) { --tw-text-opacity: 1; color: rgb(156 163 175 / var(--tw-text-opacity)); }:is(.dark .dark\\:text-white) { --tw-text-opacity: 1; color: rgb(255 255 255 / var(--tw-text-opacity)); }:is(.dark .dark\\:hover\\:bg-gray-700:hover) { --tw-bg-opacity: 1; background-color: rgb(55 65 81 / var(--tw-bg-opacity)); }:is(.dark .dark\\:hover\\:text-white:hover) { --tw-text-opacity: 1; color: rgb(255 255 255 / var(--tw-text-opacity)); }:is(.dark .dark\\:focus\\:ring-gray-600:focus) { --tw-ring-opacity: 1; --tw-ring-color: rgb(75 85 99 / var(--tw-ring-opacity)); }@media (min-width: 640px) {\n  .sm\\:flex-row { flex-direction: row; }\n  .sm\\:justify-end { justify-content: flex-end; }\n  .sm\\:space-x-2 > :not([hidden]) ~ :not([hidden]) { --tw-space-x-reverse: 0; margin-right: calc(0.5rem * var(--tw-space-x-reverse)); margin-left: calc(0.5rem * calc(1 - var(--tw-space-x-reverse))); }\n  .sm\\:rounded-lg { border-radius: var(--radius); }\n  .sm\\:text-left { text-align: left; }\n}@media (min-width: 768px) {\n  .md\\:flex { display: flex; }\n  .md\\:max-w-\\[40\\%\\] { max-width: 40%; }\n  .md\\:max-w-\\[60\\%\\] { max-width: 60%; }\n  .md\\:max-w-full { max-width: 100%; }\n  .md\\:flex-\\[2\\] { flex: 2 1 0%; }\n  .md\\:flex-\\[3\\] { flex: 3 1 0%; }\n  .md\\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0px, 1fr)); }\n  .md\\:flex-row { flex-direction: row; }\n}@media (min-width: 1024px) {\n  .lg\\:flex { display: flex; }\n  .lg\\:hidden { display: none; }\n  .lg\\:w-\\[450px\\] { width: 450px; }\n  .lg\\:gap-8 { gap: 2rem; }\n  .lg\\:space-x-6 > :not([hidden]) ~ :not([hidden]) { --tw-space-x-reverse: 0; margin-right: calc(1.5rem * var(--tw-space-x-reverse)); margin-left: calc(1.5rem * calc(1 - var(--tw-space-x-reverse))); }\n  .lg\\:space-x-8 > :not([hidden]) ~ :not([hidden]) { --tw-space-x-reverse: 0; margin-right: calc(2rem * var(--tw-space-x-reverse)); margin-left: calc(2rem * calc(1 - var(--tw-space-x-reverse))); }\n  .lg\\:px-3 { padding-left: 0.75rem; padding-right: 0.75rem; }\n}.\\[\\&\\:has\\(\\[role\\=checkbox\\]\\)\\]\\:pr-0:has([role=\"checkbox\"]) { padding-right: 0px; }.\\[\\&\\>\\[role\\=checkbox\\]\\]\\:translate-y-\\[2px\\] > [role=\"checkbox\"] { --tw-translate-y: 2px; transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)); }.\\[\\&\\>span\\]\\:line-clamp-1 > span { overflow: hidden; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 1; }.\\[\\&\\>svg\\+div\\]\\:translate-y-\\[-3px\\] > svg + div { --tw-translate-y: -3px; transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)); }.\\[\\&\\>svg\\]\\:absolute > svg { position: absolute; }.\\[\\&\\>svg\\]\\:left-4 > svg { left: 1rem; }.\\[\\&\\>svg\\]\\:top-4 > svg { top: 1rem; }.\\[\\&\\>svg\\]\\:text-destructive > svg { color: hsl(var(--destructive)); }.\\[\\&\\>svg\\]\\:text-foreground > svg { color: hsl(var(--foreground)); }.\\[\\&\\>svg\\~\\*\\]\\:pl-7 > svg ~ * { padding-left: 1.75rem; }.\\[\\&\\>tr\\]\\:last\\:border-b-0:last-child > tr { border-bottom-width: 0px; }.\\[\\&_\\[cmdk-group-heading\\]\\]\\:px-2 [cmdk-group-heading] { padding-left: 0.5rem; padding-right: 0.5rem; }.\\[\\&_\\[cmdk-group-heading\\]\\]\\:py-1\\.5 [cmdk-group-heading] { padding-top: 0.375rem; padding-bottom: 0.375rem; }.\\[\\&_\\[cmdk-group-heading\\]\\]\\:text-xs [cmdk-group-heading] { font-size: 0.75rem; line-height: 1rem; }.\\[\\&_\\[cmdk-group-heading\\]\\]\\:font-medium [cmdk-group-heading] { font-weight: 500; }.\\[\\&_\\[cmdk-group-heading\\]\\]\\:text-muted-foreground [cmdk-group-heading] { color: hsl(var(--muted-foreground)); }.\\[\\&_\\[cmdk-group\\]\\:not\\(\\[hidden\\]\\)_\\~\\[cmdk-group\\]\\]\\:pt-0 [cmdk-group]:not([hidden]) ~ [cmdk-group] { padding-top: 0px; }.\\[\\&_\\[cmdk-group\\]\\]\\:px-2 [cmdk-group] { padding-left: 0.5rem; padding-right: 0.5rem; }.\\[\\&_\\[cmdk-input-wrapper\\]_svg\\]\\:h-5 [cmdk-input-wrapper] svg { height: 1.25rem; }.\\[\\&_\\[cmdk-input-wrapper\\]_svg\\]\\:w-5 [cmdk-input-wrapper] svg { width: 1.25rem; }.\\[\\&_\\[cmdk-input\\]\\]\\:h-12 [cmdk-input] { height: 3rem; }.\\[\\&_\\[cmdk-item\\]\\]\\:px-2 [cmdk-item] { padding-left: 0.5rem; padding-right: 0.5rem; }.\\[\\&_\\[cmdk-item\\]\\]\\:py-3 [cmdk-item] { padding-top: 0.75rem; padding-bottom: 0.75rem; }.\\[\\&_\\[cmdk-item\\]_svg\\]\\:h-5 [cmdk-item] svg { height: 1.25rem; }.\\[\\&_\\[cmdk-item\\]_svg\\]\\:w-5 [cmdk-item] svg { width: 1.25rem; }.\\[\\&_p\\]\\:leading-relaxed p { line-height: 1.625; }.\\[\\&_svg\\]\\:invisible svg { visibility: hidden; }.\\[\\&_tr\\:last-child\\]\\:border-0 tr:last-child { border-width: 0px; }.\\[\\&_tr\\]\\:border-b tr { border-bottom-width: 1px; }",
                      "data-precedence": "next_static/css/app/layout.css"
                    },
                    "childNodes": []
                  },
                  {
                    "id": 97,
                    "type": 2,
                    "rootId": 88,
                    "tagName": "link",
                    "attributes": {
                      "as": "script",
                      "rel": "preload",
                      "href": "http://localhost:3000/_next/static/chunks/webpack.js?v=1712867122159",
                      "fetchpriority": "low"
                    },
                    "childNodes": []
                  },
                  {
                    "id": 98,
                    "type": 2,
                    "rootId": 88,
                    "tagName": "script",
                    "attributes": {
                      "src": "http://localhost:3000/_next/static/chunks/main-app.js?v=1712867122159",
                      "async": ""
                    },
                    "childNodes": []
                  },
                  {
                    "id": 99,
                    "type": 2,
                    "rootId": 88,
                    "tagName": "script",
                    "attributes": {
                      "src": "http://localhost:3000/_next/static/chunks/app-pages-internals.js",
                      "async": ""
                    },
                    "childNodes": []
                  },
                  {
                    "id": 100,
                    "type": 2,
                    "rootId": 88,
                    "tagName": "script",
                    "attributes": {
                      "src": "http://localhost:3000/_next/static/chunks/app/layout.js",
                      "async": ""
                    },
                    "childNodes": []
                  },
                  {
                    "id": 101,
                    "type": 2,
                    "rootId": 88,
                    "tagName": "script",
                    "attributes": {
                      "src": "http://localhost:3000/_next/static/chunks/app/record/page.js",
                      "async": ""
                    },
                    "childNodes": []
                  },
                  {
                    "id": 102,
                    "type": 2,
                    "rootId": 88,
                    "tagName": "script",
                    "attributes": {
                      "src": "http://localhost:3000/_next/static/chunks/app/page.js",
                      "async": ""
                    },
                    "childNodes": []
                  },
                  {
                    "id": 103,
                    "type": 2,
                    "rootId": 88,
                    "tagName": "title",
                    "attributes": {},
                    "childNodes": [
                      {
                        "id": 104,
                        "type": 3,
                        "rootId": 88,
                        "textContent": "Decipher - Next Generation Debugging and Error Monitoring"
                      }
                    ]
                  },
                  {
                    "id": 105,
                    "type": 2,
                    "rootId": 88,
                    "tagName": "meta",
                    "attributes": {
                      "name": "description",
                      "content": "Decipher - Next Generation Debugging and Error Monitoring"
                    },
                    "childNodes": []
                  },
                  {
                    "id": 106,
                    "type": 2,
                    "rootId": 88,
                    "tagName": "link",
                    "attributes": {
                      "rel": "icon",
                      "href": "http://localhost:3000/favicon.ico",
                      "type": "image/x-icon",
                      "sizes": "16x16"
                    },
                    "childNodes": []
                  },
                  {
                    "id": 107,
                    "type": 2,
                    "rootId": 88,
                    "tagName": "link",
                    "attributes": {
                      "rel": "icon",
                      "href": "http://localhost:3000/icon.png?bf39a3427b1016ba",
                      "type": "image/png",
                      "sizes": "512x512"
                    },
                    "childNodes": []
                  },
                  {
                    "id": 108,
                    "type": 2,
                    "rootId": 88,
                    "tagName": "meta",
                    "attributes": {
                      "name": "next-size-adjust"
                    },
                    "childNodes": []
                  },
                  {
                    "id": 109,
                    "type": 2,
                    "rootId": 88,
                    "tagName": "script",
                    "attributes": {
                      "src": "http://localhost:3000/_next/static/chunks/polyfills.js",
                      "nomodule": ""
                    },
                    "childNodes": []
                  },
                  {
                    "id": 110,
                    "type": 2,
                    "rootId": 88,
                    "tagName": "style",
                    "attributes": {},
                    "childNodes": [
                      {
                        "id": 111,
                        "type": 3,
                        "rootId": 88,
                        "isStyle": true,
                        "textContent": "* { transition: none 0s ease 0s !important; }"
                      }
                    ]
                  },
                  {
                    "id": 112,
                    "type": 2,
                    "rootId": 88,
                    "tagName": "style",
                    "attributes": {},
                    "childNodes": [
                      {
                        "id": 113,
                        "type": 3,
                        "rootId": 88,
                        "isStyle": true,
                        "textContent": "* { transition: none 0s ease 0s !important; }"
                      }
                    ]
                  }
                ]
              },
              {
                "id": 114,
                "type": 2,
                "rootId": 88,
                "tagName": "body",
                "attributes": {
                  "class": "__className_aaf875"
                },
                "childNodes": [
                  {
                    "id": 115,
                    "type": 2,
                    "rootId": 88,
                    "tagName": "script",
                    "attributes": {
                      "src": "https://us-assets.i.posthog.com/static/recorder-v2.js?v=1.110.0",
                      "type": "text/javascript"
                    },
                    "childNodes": []
                  },
                  {
                    "id": 116,
                    "type": 2,
                    "rootId": 88,
                    "tagName": "script",
                    "attributes": {},
                    "childNodes": [
                      {
                        "id": 117,
                        "type": 3,
                        "rootId": 88,
                        "textContent": "SCRIPT_PLACEHOLDER"
                      }
                    ]
                  },
                  {
                    "id": 118,
                    "type": 2,
                    "rootId": 88,
                    "tagName": "div",
                    "attributes": {
                      "class": "h-full flex-1 flex-col space-y-8 p-8 md:flex"
                    },
                    "childNodes": [
                      {
                        "id": 119,
                        "type": 2,
                        "rootId": 88,
                        "tagName": "div",
                        "attributes": {
                          "class": "border-b-8 border-black dark:border-gray-700"
                        },
                        "childNodes": [
                          {
                            "id": 120,
                            "type": 2,
                            "rootId": 88,
                            "tagName": "div",
                            "attributes": {
                              "class": "flex h-16 items-center px-1 mb-1"
                            },
                            "childNodes": [
                              {
                                "id": 121,
                                "type": 2,
                                "rootId": 88,
                                "tagName": "a",
                                "attributes": {
                                  "href": "http://localhost:3000/"
                                },
                                "childNodes": [
                                  {
                                    "id": 122,
                                    "type": 2,
                                    "rootId": 88,
                                    "tagName": "img",
                                    "attributes": {
                                      "alt": "Decipher Logo",
                                      "src": "http://localhost:3000/_next/image?url=%2Ficon.png&w=128&q=75",
                                      "class": "rounded-lg mr-4 hover:brightness-125 transition ease-in-out",
                                      "style": "color:transparent;cursor:pointer",
                                      "width": "50",
                                      "height": "50",
                                      "srcset": "http://localhost:3000/_next/image?url=%2Ficon.png&w=64&q=75 1x, http://localhost:3000/_next/image?url=%2Ficon.png&w=128&q=75 2x",
                                      "loading": "lazy",
                                      "decoding": "async",
                                      "data-nimg": "1"
                                    },
                                    "childNodes": []
                                  }
                                ]
                              },
                              {
                                "id": 123,
                                "type": 2,
                                "rootId": 88,
                                "tagName": "h2",
                                "attributes": {
                                  "class": "text-2xl font-bold tracking-tight"
                                },
                                "childNodes": [
                                  {
                                    "id": 124,
                                    "type": 3,
                                    "rootId": 88,
                                    "textContent": "getdecipher.com"
                                  }
                                ]
                              },
                              {
                                "id": 125,
                                "type": 2,
                                "rootId": 88,
                                "tagName": "nav",
                                "attributes": {
                                  "class": "flex items-center space-x-4 lg:space-x-6 mx-4"
                                },
                                "childNodes": [
                                  {
                                    "id": 126,
                                    "type": 2,
                                    "rootId": 88,
                                    "tagName": "a",
                                    "attributes": {
                                      "href": "http://localhost:3000/",
                                      "class": "text-sm font-medium transition-colors text-muted-foreground hover:text-primary"
                                    },
                                    "childNodes": [
                                      {
                                        "id": 127,
                                        "type": 3,
                                        "rootId": 88,
                                        "textContent": "Dashboard"
                                      }
                                    ]
                                  },
                                  {
                                    "id": 128,
                                    "type": 2,
                                    "rootId": 88,
                                    "tagName": "a",
                                    "attributes": {
                                      "href": "http://localhost:3000/settings",
                                      "class": "text-sm font-medium transition-colors text-muted-foreground hover:text-primary"
                                    },
                                    "childNodes": [
                                      {
                                        "id": 129,
                                        "type": 3,
                                        "rootId": 88,
                                        "textContent": "Settings"
                                      }
                                    ]
                                  },
                                  {
                                    "id": 130,
                                    "type": 2,
                                    "rootId": 88,
                                    "tagName": "a",
                                    "attributes": {
                                      "href": "https://docs.getdecipher.com/",
                                      "class": "text-sm font-medium transition-colors text-muted-foreground hover:text-primary",
                                      "target": "_blank"
                                    },
                                    "childNodes": [
                                      {
                                        "id": 131,
                                        "type": 3,
                                        "rootId": 88,
                                        "textContent": "Docs"
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "id": 132,
                                "type": 2,
                                "rootId": 88,
                                "tagName": "div",
                                "attributes": {
                                  "class": "ml-auto flex items-center space-x-4"
                                },
                                "childNodes": [
                                  {
                                    "id": 133,
                                    "type": 2,
                                    "rootId": 88,
                                    "tagName": "button",
                                    "attributes": {
                                      "id": "radix-:R66kq:",
                                      "type": "button",
                                      "class": "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 w-9",
                                      "data-state": "closed",
                                      "aria-expanded": "false",
                                      "aria-haspopup": "menu"
                                    },
                                    "childNodes": [
                                      {
                                        "id": 134,
                                        "type": 2,
                                        "isSVG": true,
                                        "rootId": 88,
                                        "tagName": "svg",
                                        "attributes": {
                                          "fill": "none",
                                          "class": "h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0",
                                          "width": "15",
                                          "xmlns": "http://www.w3.org/2000/svg",
                                          "height": "15",
                                          "viewBox": "0 0 15 15"
                                        },
                                        "childNodes": [
                                          {
                                            "id": 135,
                                            "type": 2,
                                            "isSVG": true,
                                            "rootId": 88,
                                            "tagName": "path",
                                            "attributes": {
                                              "d": "M7.5 0C7.77614 0 8 0.223858 8 0.5V2.5C8 2.77614 7.77614 3 7.5 3C7.22386 3 7 2.77614 7 2.5V0.5C7 0.223858 7.22386 0 7.5 0ZM2.1967 2.1967C2.39196 2.00144 2.70854 2.00144 2.90381 2.1967L4.31802 3.61091C4.51328 3.80617 4.51328 4.12276 4.31802 4.31802C4.12276 4.51328 3.80617 4.51328 3.61091 4.31802L2.1967 2.90381C2.00144 2.70854 2.00144 2.39196 2.1967 2.1967ZM0.5 7C0.223858 7 0 7.22386 0 7.5C0 7.77614 0.223858 8 0.5 8H2.5C2.77614 8 3 7.77614 3 7.5C3 7.22386 2.77614 7 2.5 7H0.5ZM2.1967 12.8033C2.00144 12.608 2.00144 12.2915 2.1967 12.0962L3.61091 10.682C3.80617 10.4867 4.12276 10.4867 4.31802 10.682C4.51328 10.8772 4.51328 11.1938 4.31802 11.3891L2.90381 12.8033C2.70854 12.9986 2.39196 12.9986 2.1967 12.8033ZM12.5 7C12.2239 7 12 7.22386 12 7.5C12 7.77614 12.2239 8 12.5 8H14.5C14.7761 8 15 7.77614 15 7.5C15 7.22386 14.7761 7 14.5 7H12.5ZM10.682 4.31802C10.4867 4.12276 10.4867 3.80617 10.682 3.61091L12.0962 2.1967C12.2915 2.00144 12.608 2.00144 12.8033 2.1967C12.9986 2.39196 12.9986 2.70854 12.8033 2.90381L11.3891 4.31802C11.1938 4.51328 10.8772 4.51328 10.682 4.31802ZM8 12.5C8 12.2239 7.77614 12 7.5 12C7.22386 12 7 12.2239 7 12.5V14.5C7 14.7761 7.22386 15 7.5 15C7.77614 15 8 14.7761 8 14.5V12.5ZM10.682 10.682C10.8772 10.4867 11.1938 10.4867 11.3891 10.682L12.8033 12.0962C12.9986 12.2915 12.9986 12.608 12.8033 12.8033C12.608 12.9986 12.2915 12.9986 12.0962 12.8033L10.682 11.3891C10.4867 11.1938 10.4867 10.8772 10.682 10.682ZM5.5 7.5C5.5 6.39543 6.39543 5.5 7.5 5.5C8.60457 5.5 9.5 6.39543 9.5 7.5C9.5 8.60457 8.60457 9.5 7.5 9.5C6.39543 9.5 5.5 8.60457 5.5 7.5ZM7.5 4.5C5.84315 4.5 4.5 5.84315 4.5 7.5C4.5 9.15685 5.84315 10.5 7.5 10.5C9.15685 10.5 10.5 9.15685 10.5 7.5C10.5 5.84315 9.15685 4.5 7.5 4.5Z",
                                              "fill": "currentColor",
                                              "clip-rule": "evenodd",
                                              "fill-rule": "evenodd"
                                            },
                                            "childNodes": []
                                          }
                                        ]
                                      },
                                      {
                                        "id": 136,
                                        "type": 2,
                                        "isSVG": true,
                                        "rootId": 88,
                                        "tagName": "svg",
                                        "attributes": {
                                          "fill": "none",
                                          "class": "absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100",
                                          "width": "15",
                                          "xmlns": "http://www.w3.org/2000/svg",
                                          "height": "15",
                                          "viewBox": "0 0 15 15"
                                        },
                                        "childNodes": [
                                          {
                                            "id": 137,
                                            "type": 2,
                                            "isSVG": true,
                                            "rootId": 88,
                                            "tagName": "path",
                                            "attributes": {
                                              "d": "M2.89998 0.499976C2.89998 0.279062 2.72089 0.0999756 2.49998 0.0999756C2.27906 0.0999756 2.09998 0.279062 2.09998 0.499976V1.09998H1.49998C1.27906 1.09998 1.09998 1.27906 1.09998 1.49998C1.09998 1.72089 1.27906 1.89998 1.49998 1.89998H2.09998V2.49998C2.09998 2.72089 2.27906 2.89998 2.49998 2.89998C2.72089 2.89998 2.89998 2.72089 2.89998 2.49998V1.89998H3.49998C3.72089 1.89998 3.89998 1.72089 3.89998 1.49998C3.89998 1.27906 3.72089 1.09998 3.49998 1.09998H2.89998V0.499976ZM5.89998 3.49998C5.89998 3.27906 5.72089 3.09998 5.49998 3.09998C5.27906 3.09998 5.09998 3.27906 5.09998 3.49998V4.09998H4.49998C4.27906 4.09998 4.09998 4.27906 4.09998 4.49998C4.09998 4.72089 4.27906 4.89998 4.49998 4.89998H5.09998V5.49998C5.09998 5.72089 5.27906 5.89998 5.49998 5.89998C5.72089 5.89998 5.89998 5.72089 5.89998 5.49998V4.89998H6.49998C6.72089 4.89998 6.89998 4.72089 6.89998 4.49998C6.89998 4.27906 6.72089 4.09998 6.49998 4.09998H5.89998V3.49998ZM1.89998 6.49998C1.89998 6.27906 1.72089 6.09998 1.49998 6.09998C1.27906 6.09998 1.09998 6.27906 1.09998 6.49998V7.09998H0.499976C0.279062 7.09998 0.0999756 7.27906 0.0999756 7.49998C0.0999756 7.72089 0.279062 7.89998 0.499976 7.89998H1.09998V8.49998C1.09998 8.72089 1.27906 8.89997 1.49998 8.89997C1.72089 8.89997 1.89998 8.72089 1.89998 8.49998V7.89998H2.49998C2.72089 7.89998 2.89998 7.72089 2.89998 7.49998C2.89998 7.27906 2.72089 7.09998 2.49998 7.09998H1.89998V6.49998ZM8.54406 0.98184L8.24618 0.941586C8.03275 0.917676 7.90692 1.1655 8.02936 1.34194C8.17013 1.54479 8.29981 1.75592 8.41754 1.97445C8.91878 2.90485 9.20322 3.96932 9.20322 5.10022C9.20322 8.37201 6.82247 11.0878 3.69887 11.6097C3.45736 11.65 3.20988 11.6772 2.96008 11.6906C2.74563 11.702 2.62729 11.9535 2.77721 12.1072C2.84551 12.1773 2.91535 12.2458 2.98667 12.3128L3.05883 12.3795L3.31883 12.6045L3.50684 12.7532L3.62796 12.8433L3.81491 12.9742L3.99079 13.089C4.11175 13.1651 4.23536 13.2375 4.36157 13.3059L4.62496 13.4412L4.88553 13.5607L5.18837 13.6828L5.43169 13.7686C5.56564 13.8128 5.70149 13.8529 5.83857 13.8885C5.94262 13.9155 6.04767 13.9401 6.15405 13.9622C6.27993 13.9883 6.40713 14.0109 6.53544 14.0298L6.85241 14.0685L7.11934 14.0892C7.24637 14.0965 7.37436 14.1002 7.50322 14.1002C11.1483 14.1002 14.1032 11.1453 14.1032 7.50023C14.1032 7.25044 14.0893 7.00389 14.0623 6.76131L14.0255 6.48407C13.991 6.26083 13.9453 6.04129 13.8891 5.82642C13.8213 5.56709 13.7382 5.31398 13.6409 5.06881L13.5279 4.80132L13.4507 4.63542L13.3766 4.48666C13.2178 4.17773 13.0353 3.88295 12.8312 3.60423L12.6782 3.40352L12.4793 3.16432L12.3157 2.98361L12.1961 2.85951L12.0355 2.70246L11.8134 2.50184L11.4925 2.24191L11.2483 2.06498L10.9562 1.87446L10.6346 1.68894L10.3073 1.52378L10.1938 1.47176L9.95488 1.3706L9.67791 1.2669L9.42566 1.1846L9.10075 1.09489L8.83599 1.03486L8.54406 0.98184ZM10.4032 5.30023C10.4032 4.27588 10.2002 3.29829 9.83244 2.40604C11.7623 3.28995 13.1032 5.23862 13.1032 7.50023C13.1032 10.593 10.596 13.1002 7.50322 13.1002C6.63646 13.1002 5.81597 12.9036 5.08355 12.5522C6.5419 12.0941 7.81081 11.2082 8.74322 10.0416C8.87963 10.2284 9.10028 10.3497 9.34928 10.3497C9.76349 10.3497 10.0993 10.0139 10.0993 9.59971C10.0993 9.24256 9.84965 8.94373 9.51535 8.86816C9.57741 8.75165 9.63653 8.63334 9.6926 8.51332C9.88358 8.63163 10.1088 8.69993 10.35 8.69993C11.0403 8.69993 11.6 8.14028 11.6 7.44993C11.6 6.75976 11.0406 6.20024 10.3505 6.19993C10.3853 5.90487 10.4032 5.60464 10.4032 5.30023Z",
                                              "fill": "currentColor",
                                              "clip-rule": "evenodd",
                                              "fill-rule": "evenodd"
                                            },
                                            "childNodes": []
                                          }
                                        ]
                                      },
                                      {
                                        "id": 138,
                                        "type": 2,
                                        "rootId": 88,
                                        "tagName": "span",
                                        "attributes": {
                                          "class": "sr-only"
                                        },
                                        "childNodes": [
                                          {
                                            "id": 139,
                                            "type": 3,
                                            "rootId": 88,
                                            "textContent": "Toggle theme"
                                          }
                                        ]
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": 140,
                        "type": 5,
                        "rootId": 88,
                        "textContent": "$"
                      },
                      {
                        "id": 141,
                        "type": 2,
                        "rootId": 88,
                        "tagName": "div",
                        "attributes": {
                          "class": "min-h-screen  p-5"
                        },
                        "childNodes": [
                          {
                            "id": 142,
                            "type": 2,
                            "rootId": 88,
                            "tagName": "header",
                            "attributes": {
                              "class": "bg-blue-500 text-primary p-4 text-2xl font-bold"
                            },
                            "childNodes": [
                              {
                                "id": 143,
                                "type": 3,
                                "rootId": 88,
                                "textContent": "CUSTOM APPLICATION [Decipher is recording]"
                              }
                            ]
                          },
                          {
                            "id": 144,
                            "type": 2,
                            "rootId": 88,
                            "tagName": "main",
                            "attributes": {
                              "class": "mt-5"
                            },
                            "childNodes": [
                              {
                                "id": 145,
                                "type": 2,
                                "rootId": 88,
                                "tagName": "section",
                                "attributes": {
                                  "class": "mb-5"
                                },
                                "childNodes": [
                                  {
                                    "id": 146,
                                    "type": 2,
                                    "rootId": 88,
                                    "tagName": "h2",
                                    "attributes": {
                                      "class": "text-lg font-semibold mb-3"
                                    },
                                    "childNodes": [
                                      {
                                        "id": 147,
                                        "type": 3,
                                        "rootId": 88,
                                        "textContent": "Actions"
                                      }
                                    ]
                                  },
                                  {
                                    "id": 148,
                                    "type": 2,
                                    "rootId": 88,
                                    "tagName": "button",
                                    "attributes": {
                                      "class": "bg-green-500 hover:bg-green-700 text-primary font-bold py-2 px-4 rounded"
                                    },
                                    "childNodes": [
                                      {
                                        "id": 149,
                                        "type": 3,
                                        "rootId": 88,
                                        "textContent": "Action 1"
                                      }
                                    ]
                                  },
                                  {
                                    "id": 150,
                                    "type": 2,
                                    "rootId": 88,
                                    "tagName": "button",
                                    "attributes": {
                                      "class": "ml-2 bg-blue-500 hover:bg-blue-700 text-primary font-bold py-2 px-4 rounded"
                                    },
                                    "childNodes": [
                                      {
                                        "id": 151,
                                        "type": 3,
                                        "rootId": 88,
                                        "textContent": "Action 2"
                                      }
                                    ]
                                  },
                                  {
                                    "id": 152,
                                    "type": 2,
                                    "rootId": 88,
                                    "tagName": "button",
                                    "attributes": {
                                      "class": "ml-2 bg-yellow-500 hover:bg-yellow-700 text-primary font-bold py-2 px-4 rounded"
                                    },
                                    "childNodes": [
                                      {
                                        "id": 153,
                                        "type": 3,
                                        "rootId": 88,
                                        "textContent": "Stop and Replay"
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": 154,
                        "type": 5,
                        "rootId": 88,
                        "textContent": "/$"
                      }
                    ]
                  },
                  {
                    "id": 155,
                    "type": 2,
                    "rootId": 88,
                    "tagName": "script",
                    "attributes": {
                      "src": "http://localhost:3000/_next/static/chunks/webpack.js?v=1712867122159",
                      "async": ""
                    },
                    "childNodes": []
                  },
                  {
                    "id": 156,
                    "type": 2,
                    "rootId": 88,
                    "tagName": "script",
                    "attributes": {},
                    "childNodes": [
                      {
                        "id": 157,
                        "type": 3,
                        "rootId": 88,
                        "textContent": "SCRIPT_PLACEHOLDER"
                      }
                    ]
                  },
                  {
                    "id": 158,
                    "type": 2,
                    "rootId": 88,
                    "tagName": "script",
                    "attributes": {},
                    "childNodes": [
                      {
                        "id": 159,
                        "type": 3,
                        "rootId": 88,
                        "textContent": "SCRIPT_PLACEHOLDER"
                      }
                    ]
                  },
                  {
                    "id": 160,
                    "type": 2,
                    "rootId": 88,
                    "tagName": "script",
                    "attributes": {},
                    "childNodes": [
                      {
                        "id": 161,
                        "type": 3,
                        "rootId": 88,
                        "textContent": "SCRIPT_PLACEHOLDER"
                      }
                    ]
                  },
                  {
                    "id": 162,
                    "type": 2,
                    "rootId": 88,
                    "tagName": "script",
                    "attributes": {},
                    "childNodes": [
                      {
                        "id": 163,
                        "type": 3,
                        "rootId": 88,
                        "textContent": "SCRIPT_PLACEHOLDER"
                      }
                    ]
                  },
                  {
                    "id": 164,
                    "type": 2,
                    "rootId": 88,
                    "tagName": "script",
                    "attributes": {},
                    "childNodes": [
                      {
                        "id": 165,
                        "type": 3,
                        "rootId": 88,
                        "textContent": "SCRIPT_PLACEHOLDER"
                      }
                    ]
                  },
                  {
                    "id": 166,
                    "type": 2,
                    "rootId": 88,
                    "tagName": "script",
                    "attributes": {},
                    "childNodes": [
                      {
                        "id": 167,
                        "type": 3,
                        "rootId": 88,
                        "textContent": "SCRIPT_PLACEHOLDER"
                      }
                    ]
                  },
                  {
                    "id": 168,
                    "type": 2,
                    "rootId": 88,
                    "tagName": "script",
                    "attributes": {},
                    "childNodes": [
                      {
                        "id": 169,
                        "type": 3,
                        "rootId": 88,
                        "textContent": "SCRIPT_PLACEHOLDER"
                      }
                    ]
                  },
                  {
                    "id": 170,
                    "type": 2,
                    "rootId": 88,
                    "tagName": "script",
                    "attributes": {},
                    "childNodes": [
                      {
                        "id": 171,
                        "type": 3,
                        "rootId": 88,
                        "textContent": "SCRIPT_PLACEHOLDER"
                      }
                    ]
                  },
                  {
                    "id": 172,
                    "type": 2,
                    "rootId": 88,
                    "tagName": "script",
                    "attributes": {
                      "src": "https://present-narwhal-60.clerk.accounts.dev/npm/@clerk/clerk-js@4/dist/clerk.browser.js",
                      "async": "",
                      "crossorigin": "anonymous",
                      "data-clerk-publishable-key": "pk_test_cHJlc2VudC1uYXJ3aGFsLTYwLmNsZXJrLmFjY291bnRzLmRldiQ"
                    },
                    "childNodes": []
                  },
                  {
                    "id": 173,
                    "type": 2,
                    "rootId": 88,
                    "tagName": "next-route-announcer",
                    "attributes": {
                      "style": "position: absolute;"
                    },
                    "childNodes": [
                      {
                        "id": 174,
                        "type": 2,
                        "rootId": 88,
                        "tagName": "div",
                        "isShadow": true,
                        "attributes": {
                          "id": "__next-route-announcer__",
                          "role": "alert",
                          "style": "position: absolute; border: 0px; height: 1px; margin: -1px; padding: 0px; width: 1px; clip: rect(0px, 0px, 0px, 0px); overflow: hidden; white-space: nowrap; overflow-wrap: normal;",
                          "aria-live": "assertive"
                        },
                        "childNodes": []
                      }
                    ],
                    "isShadowHost": true
                  }
                ]
              }
            ]
          }
        ]
      },
      "initialOffset": {
        "top": 0,
        "left": 0
      }
    },
    "type": 2,
    "timestamp": 1712867123190
  },
  {
    "data": {
      "adds": [],
      "texts": [],
      "source": 0,
      "removes": [
        {
          "id": 110,
          "parentId": 92
        }
      ],
      "attributes": []
    },
    "type": 3,
    "timestamp": 1712867123190
  },
  {
    "data": {
      "adds": [],
      "texts": [],
      "source": 0,
      "removes": [
        {
          "id": 110,
          "parentId": 92
        }
      ],
      "attributes": []
    },
    "type": 3,
    "timestamp": 1712867123190
  },
  {
    "data": {
      "adds": [],
      "texts": [],
      "source": 0,
      "removes": [
        {
          "id": 112,
          "parentId": 92
        }
      ],
      "attributes": []
    },
    "type": 3,
    "timestamp": 1712867123191
  },
  {
    "data": {
      "adds": [],
      "texts": [],
      "source": 0,
      "removes": [
        {
          "id": 112,
          "parentId": 92
        }
      ],
      "attributes": []
    },
    "type": 3,
    "timestamp": 1712867123191
  },
  {
    "data": {
      "source": 1,
      "positions": [
        {
          "x": 466,
          "y": 237,
          "id": 141,
          "timeOffset": -1
        }
      ]
    },
    "type": 3,
    "timestamp": 1712867123193
  },
  {
    "data": {
      "source": 1,
      "positions": [
        {
          "x": 466,
          "y": 237,
          "id": 141,
          "timeOffset": 0
        }
      ]
    },
    "type": 3,
    "timestamp": 1712867123193
  },
  {
    "data": {
      "adds": [],
      "texts": [],
      "source": 0,
      "removes": [
        {
          "id": 172,
          "parentId": 114
        }
      ],
      "attributes": []
    },
    "type": 3,
    "timestamp": 1712867123240
  },
  {
    "data": {
      "adds": [],
      "texts": [],
      "source": 0,
      "removes": [
        {
          "id": 172,
          "parentId": 114
        }
      ],
      "attributes": []
    },
    "type": 3,
    "timestamp": 1712867123240
  },
  {
    "data": {
      "adds": [
        {
          "node": {
            "id": 175,
            "type": 2,
            "rootId": 88,
            "tagName": "div",
            "attributes": {
              "id": "clerk-components"
            },
            "childNodes": []
          },
          "nextId": null,
          "parentId": 114
        }
      ],
      "texts": [],
      "source": 0,
      "removes": [],
      "attributes": []
    },
    "type": 3,
    "timestamp": 1712867123497
  },
  {
    "data": {
      "adds": [
        {
          "node": {
            "id": 176,
            "type": 2,
            "rootId": 88,
            "tagName": "div",
            "attributes": {},
            "childNodes": []
          },
          "nextId": null,
          "parentId": 132
        },
        {
          "node": {
            "id": 177,
            "type": 2,
            "rootId": 88,
            "tagName": "script",
            "attributes": {
              "src": "https://present-narwhal-60.clerk.accounts.dev/npm/@clerk/clerk-js@4.71.4/dist/userbutton_6670b6_4.71.4.js",
              "charset": "utf-8",
              "data-webpack": "@clerk/clerk-js:chunk-278"
            },
            "childNodes": []
          },
          "nextId": null,
          "parentId": 92
        },
        {
          "node": {
            "id": 178,
            "type": 2,
            "rootId": 88,
            "tagName": "script",
            "attributes": {
              "src": "https://present-narwhal-60.clerk.accounts.dev/npm/@clerk/clerk-js@4.71.4/dist/ui-common_6670b6_4.71.4.js",
              "charset": "utf-8",
              "data-webpack": "@clerk/clerk-js:chunk-65"
            },
            "childNodes": []
          },
          "nextId": 177,
          "parentId": 92
        },
        {
          "node": {
            "id": 179,
            "type": 2,
            "rootId": 88,
            "tagName": "script",
            "attributes": {
              "src": "https://present-narwhal-60.clerk.accounts.dev/npm/@clerk/clerk-js@4.71.4/dist/vendors_6670b6_4.71.4.js",
              "charset": "utf-8",
              "data-webpack": "@clerk/clerk-js:chunk-96"
            },
            "childNodes": []
          },
          "nextId": 178,
          "parentId": 92
        }
      ],
      "texts": [],
      "source": 0,
      "removes": [],
      "attributes": []
    },
    "type": 3,
    "timestamp": 1712867123500
  },
  {
    "data": {
      "adds": [],
      "texts": [],
      "source": 0,
      "removes": [
        {
          "id": 177,
          "parentId": 92
        }
      ],
      "attributes": []
    },
    "type": 3,
    "timestamp": 1712867123502
  },
  {
    "data": {
      "adds": [],
      "texts": [],
      "source": 0,
      "removes": [
        {
          "id": 179,
          "parentId": 92
        }
      ],
      "attributes": []
    },
    "type": 3,
    "timestamp": 1712867123504
  },
  {
    "data": {
      "adds": [],
      "texts": [],
      "source": 0,
      "removes": [
        {
          "id": 178,
          "parentId": 92
        }
      ],
      "attributes": []
    },
    "type": 3,
    "timestamp": 1712867123510
  },
  {
    "data": {
      "adds": [
        {
          "node": {
            "id": 180,
            "type": 2,
            "rootId": 88,
            "tagName": "style",
            "attributes": {
              "data-s": "",
              "_cssText": ".cl-internal-phfxlr { box-sizing: border-box; width: fit-content; font-family: inherit; font-style: normal; }.cl-internal-hrnuj6 { display: flex; flex-flow: row; -webkit-box-align: center; align-items: center; -webkit-box-pack: start; justify-content: flex-start; gap: 0.5rem; }.cl-internal-1cd5e4l { box-sizing: inherit; display: flex; flex-flow: row; -webkit-box-align: center; align-items: center; -webkit-box-pack: start; justify-content: flex-start; gap: 0.5rem; }.cl-internal-17z2axn { border-radius: 50%; }.cl-internal-bc6o5q { margin: 0px; padding: 0px; border: 0px; outline: 0px; user-select: none; cursor: pointer; background-color: unset; color: currentcolor; display: inline-flex; -webkit-box-pack: center; justify-content: center; -webkit-box-align: center; align-items: center; transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform; transition-duration: 100ms; font-family: inherit; font-weight: 400; font-size: 0.875rem; line-height: 1; min-height: unset; letter-spacing: 0.5px; height: unset; width: unset; --accentLightest: hsla(51, 94%, 60.2%, 0.3); --accentLighter: hsla(51, 94%, 51%, 0.3); --accent: hsla(51, 94%, 51%, 1); --accentDark: hsla(51, 94%, 41.25%, 1); --accentDarker: hsla(51, 94%, 31.5%, 1); border-radius: 50%; -webkit-font-smoothing: auto !important; }.cl-internal-bc6o5q:disabled, .cl-internal-bc6o5q[data-disabled] { cursor: not-allowed; pointer-events: none; opacity: 0.5; }.cl-internal-bc6o5q:focus { -webkit-tap-highlight-color: transparent; box-shadow: rgb(252, 236, 149) 0px 0px 0px 3px; transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform; transition-timing-function: ease; transition-duration: 200ms; }.cl-internal-11obatm { flex-shrink: 0; border-radius: 50%; overflow: hidden; width: 2rem; height: 2rem; background-color: rgba(0, 0, 0, 0.24); background-clip: padding-box; position: relative; box-shadow: var(--cl-shimmer-hover-shadow); transition: box-shadow 280ms ease-out 0s; }.cl-internal-euvm4m { display: flex; flex-flow: row; -webkit-box-align: stretch; align-items: stretch; -webkit-box-pack: start; justify-content: flex-start; flex-shrink: 0; border-radius: 50%; overflow: hidden; width: 2rem; height: 2rem; background-color: rgba(0, 0, 0, 0.24); background-clip: padding-box; position: relative; box-shadow: var(--cl-shimmer-hover-shadow); transition: box-shadow 280ms ease-out 0s; }.cl-internal-11ewti4 { box-sizing: inherit; display: flex; flex-flow: row; -webkit-box-align: stretch; align-items: stretch; -webkit-box-pack: start; justify-content: flex-start; flex-shrink: 0; border-radius: 50%; overflow: hidden; width: 2rem; height: 2rem; background-color: rgba(0, 0, 0, 0.24); background-clip: padding-box; position: relative; box-shadow: var(--cl-shimmer-hover-shadow); transition: box-shadow 280ms ease-out 0s; }.cl-internal-1ggvllp { object-fit: cover; }.cl-internal-1bq4uyw { overflow: hidden; background: rgba(160, 254, 254, 0.36); position: absolute; width: 25%; height: 100%; transition: all 280ms ease-out 0s; transform: var(--cl-shimmer-hover-transform, skewX(-45deg) translateX(-300%)); }.cl-internal-1bq4uyw::after { display: block; box-sizing: border-box; content: \"\"; position: absolute; width: 400%; height: 100%; transform: var(--cl-shimmer-hover-after-transform, skewX(45deg) translateX(75%)); transition: all 280ms ease-out 0s; border: 2px solid rgba(160, 254, 254, 0.36); border-radius: 50%; }.cl-internal-1dj0ive { box-sizing: inherit; overflow: hidden; background: rgba(160, 254, 254, 0.36); position: absolute; width: 25%; height: 100%; transition: all 280ms ease-out 0s; transform: var(--cl-shimmer-hover-transform, skewX(-45deg) translateX(-300%)); }.cl-internal-1dj0ive::after { display: block; box-sizing: border-box; content: \"\"; position: absolute; width: 400%; height: 100%; transform: var(--cl-shimmer-hover-after-transform, skewX(45deg) translateX(75%)); transition: all 280ms ease-out 0s; border: 2px solid rgba(160, 254, 254, 0.36); border-radius: 50%; }",
              "data-emotion": "cl-internal"
            },
            "childNodes": []
          },
          "nextId": 93,
          "parentId": 92
        },
        {
          "node": {
            "id": 181,
            "type": 3,
            "rootId": 88,
            "isStyle": true,
            "textContent": ""
          },
          "nextId": null,
          "parentId": 180
        },
        {
          "node": {
            "id": 182,
            "type": 2,
            "rootId": 88,
            "tagName": "span",
            "attributes": {
              "style": "display: none;",
              "aria-hidden": "true"
            },
            "childNodes": []
          },
          "nextId": null,
          "parentId": 176
        },
        {
          "node": {
            "id": 183,
            "type": 2,
            "rootId": 88,
            "tagName": "div",
            "attributes": {
              "id": ":r3:",
              "data-floating-ui-portal": ""
            },
            "childNodes": []
          },
          "nextId": null,
          "parentId": 114
        },
        {
          "node": {
            "id": 184,
            "type": 2,
            "rootId": 88,
            "tagName": "div",
            "attributes": {
              "class": "cl-userButtonBox 🔒️ cl-internal-1cd5e4l"
            },
            "childNodes": []
          },
          "nextId": 182,
          "parentId": 176
        },
        {
          "node": {
            "id": 185,
            "type": 2,
            "rootId": 88,
            "tagName": "button",
            "attributes": {
              "class": "cl-userButtonTrigger 🔒️ cl-internal-bc6o5q",
              "aria-label": "Open user button",
              "aria-controls": ":r2:",
              "aria-expanded": "false",
              "aria-haspopup": "dialog"
            },
            "childNodes": []
          },
          "nextId": null,
          "parentId": 184
        },
        {
          "node": {
            "id": 186,
            "type": 2,
            "rootId": 88,
            "tagName": "div",
            "attributes": {
              "class": "cl-avatarBox cl-userButtonAvatarBox 🔒️ cl-internal-11ewti4"
            },
            "childNodes": []
          },
          "nextId": null,
          "parentId": 185
        },
        {
          "node": {
            "id": 187,
            "type": 2,
            "rootId": 88,
            "tagName": "div",
            "attributes": {
              "class": "cl-internal-1dj0ive"
            },
            "childNodes": []
          },
          "nextId": null,
          "parentId": 186
        },
        {
          "node": {
            "id": 188,
            "type": 2,
            "rootId": 88,
            "tagName": "img",
            "attributes": {
              "alt": "Rohan Das",
              "src": "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18yY2piVXZKU0szNTFYVGpRY29XdFFrT3dqemIifQ?width=160",
              "class": "cl-avatarImage cl-userButtonAvatarImage 🔒️ cl-internal-1ggvllp",
              "title": "Rohan Das",
              "width": "100%",
              "height": "100%",
              "srcset": "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18yY2piVXZKU0szNTFYVGpRY29XdFFrT3dqemIifQ?width=80 1x, https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18yY2piVXZKU0szNTFYVGpRY29XdFFrT3dqemIifQ?width=160 2x",
              "crossorigin": "anonymous"
            },
            "childNodes": []
          },
          "nextId": 187,
          "parentId": 186
        }
      ],
      "texts": [],
      "source": 0,
      "removes": [],
      "attributes": [
        {
          "id": 176,
          "attributes": {
            "class": "cl-rootBox cl-userButton-root 🔒️ cl-internal-phfxlr"
          }
        }
      ]
    },
    "type": 3,
    "timestamp": 1712867123524
  },
  {
    "data": {
      "adds": [],
      "texts": [],
      "source": 0,
      "removes": [
        {
          "id": 182,
          "parentId": 176
        }
      ],
      "attributes": []
    },
    "type": 3,
    "timestamp": 1712867123524
  },
  {
    "data": {
      "source": 1,
      "positions": [
        {
          "x": 407,
          "y": 276,
          "id": 145,
          "timeOffset": -452
        },
        {
          "x": 388,
          "y": 278,
          "id": 145,
          "timeOffset": -400
        },
        {
          "x": 386,
          "y": 278,
          "id": 145,
          "timeOffset": -337
        },
        {
          "x": 358,
          "y": 278,
          "id": 145,
          "timeOffset": -283
        },
        {
          "x": 310,
          "y": 278,
          "id": 145,
          "timeOffset": -233
        },
        {
          "x": 266,
          "y": 282,
          "id": 145,
          "timeOffset": -183
        },
        {
          "x": 207,
          "y": 296,
          "id": 150,
          "timeOffset": -117
        },
        {
          "x": 208,
          "y": 296,
          "id": 150,
          "timeOffset": -51
        }
      ]
    },
    "type": 3,
    "timestamp": 1712867123696
  },
  {
    "data": {
      "source": 1,
      "positions": [
        {
          "x": 407,
          "y": 276,
          "id": 145,
          "timeOffset": -452
        },
        {
          "x": 388,
          "y": 278,
          "id": 145,
          "timeOffset": -400
        },
        {
          "x": 386,
          "y": 278,
          "id": 145,
          "timeOffset": -337
        },
        {
          "x": 358,
          "y": 278,
          "id": 145,
          "timeOffset": -283
        },
        {
          "x": 310,
          "y": 278,
          "id": 145,
          "timeOffset": -233
        }
      ]
    },
    "type": 3,
    "timestamp": 1712867123696
  },
  {
    "data": {
      "source": 1,
      "positions": [
        {
          "x": 209,
          "y": 297,
          "id": 150,
          "timeOffset": -453
        },
        {
          "x": 201,
          "y": 299,
          "id": 150,
          "timeOffset": -403
        }
      ]
    },
    "type": 3,
    "timestamp": 1712867124199
  },
  {
    "data": {
      "source": 1,
      "positions": [
        {
          "x": 201,
          "y": 299,
          "id": 150,
          "timeOffset": -74
        }
      ]
    },
    "type": 3,
    "timestamp": 1712867124700
  },
  {
    "data": {
      "source": 1,
      "positions": [
        {
          "x": 200,
          "y": 300,
          "id": 150,
          "timeOffset": -289
        },
        {
          "x": 195,
          "y": 301,
          "id": 150,
          "timeOffset": -239
        },
        {
          "x": 146,
          "y": 318,
          "id": 148,
          "timeOffset": -172
        },
        {
          "x": 118,
          "y": 327,
          "id": 141,
          "timeOffset": -122
        }
      ]
    },
    "type": 3,
    "timestamp": 1712867125201
  },
  {
    "data": {
      "source": 1,
      "positions": [
        {
          "x": 117,
          "y": 328,
          "id": 141,
          "timeOffset": -444
        },
        {
          "x": 119,
          "y": 320,
          "id": 148,
          "timeOffset": -394
        },
        {
          "x": 124,
          "y": 313,
          "id": 148,
          "timeOffset": -341
        },
        {
          "x": 129,
          "y": 311,
          "id": 148,
          "timeOffset": -77
        }
      ]
    },
    "type": 3,
    "timestamp": 1712867125703
  },
  {
    "data": {
      "source": 1,
      "positions": [
        {
          "x": 135,
          "y": 311,
          "id": 148,
          "timeOffset": -426
        },
        {
          "x": 221,
          "y": 313,
          "id": 150,
          "timeOffset": -362
        },
        {
          "x": 221,
          "y": 313,
          "id": 150,
          "timeOffset": -43
        }
      ]
    },
    "type": 3,
    "timestamp": 1712867126205
  },
  {
    "data": {
      "source": 1,
      "positions": [
        {
          "x": 221,
          "y": 314,
          "id": 150,
          "timeOffset": -438
        },
        {
          "x": 221,
          "y": 314,
          "id": 150,
          "timeOffset": -311
        },
        {
          "x": 224,
          "y": 313,
          "id": 150,
          "timeOffset": -261
        },
        {
          "x": 240,
          "y": 305,
          "id": 150,
          "timeOffset": -195
        },
        {
          "x": 242,
          "y": 303,
          "id": 150,
          "timeOffset": -144
        },
        {
          "x": 243,
          "y": 301,
          "id": 150,
          "timeOffset": -9
        }
      ]
    },
    "type": 3,
    "timestamp": 1712867126706
  },
  {
    "data": {
      "source": 1,
      "positions": [
        {
          "x": 245,
          "y": 300,
          "id": 150,
          "timeOffset": -450
        },
        {
          "x": 231,
          "y": 306,
          "id": 150,
          "timeOffset": -396
        },
        {
          "x": 225,
          "y": 315,
          "id": 150,
          "timeOffset": -331
        },
        {
          "x": 225,
          "y": 315,
          "id": 150,
          "timeOffset": -230
        },
        {
          "x": 215,
          "y": 314,
          "id": 150,
          "timeOffset": -180
        }
      ]
    },
    "type": 3,
    "timestamp": 1712867127209
  },
  {
    "data": {
      "source": 1,
      "positions": [
        {
          "x": 212,
          "y": 313,
          "id": 150,
          "timeOffset": -483
        },
        {
          "x": 208,
          "y": 335,
          "id": 141,
          "timeOffset": -418
        },
        {
          "x": 245,
          "y": 450,
          "id": 141,
          "timeOffset": -353
        },
        {
          "x": 305,
          "y": 464,
          "id": 141,
          "timeOffset": -301
        },
        {
          "x": 297,
          "y": 415,
          "id": 141,
          "timeOffset": -250
        },
        {
          "x": 287,
          "y": 412,
          "id": 141,
          "timeOffset": -200
        },
        {
          "x": 287,
          "y": 415,
          "id": 141,
          "timeOffset": -150
        },
        {
          "x": 287,
          "y": 415,
          "id": 141,
          "timeOffset": -47
        }
      ]
    },
    "type": 3,
    "timestamp": 1712867127712
  },
  {
    "data": {
      "x": 287,
      "y": 415,
      "id": 141,
      "type": 1,
      "source": 2
    },
    "type": 3,
    "timestamp": 1712867127749
  },
  {
    "data": {
      "x": 287,
      "y": 415,
      "id": 141,
      "type": 0,
      "source": 2
    },
    "type": 3,
    "timestamp": 1712867127829
  },
  {
    "data": {
      "x": 287,
      "y": 415,
      "id": 141,
      "type": 2,
      "source": 2
    },
    "type": 3,
    "timestamp": 1712867127831
  },
  {
    "data": {
      "x": 359,
      "y": 501,
      "id": 141,
      "type": 1,
      "source": 2
    },
    "type": 3,
    "timestamp": 1712867128113
  },
  {
    "data": {
      "x": 359,
      "y": 501,
      "id": 141,
      "type": 0,
      "source": 2
    },
    "type": 3,
    "timestamp": 1712867128187
  },
  {
    "data": {
      "x": 359,
      "y": 501,
      "id": 141,
      "type": 2,
      "source": 2
    },
    "type": 3,
    "timestamp": 1712867128188
  },
  {
    "data": {
      "source": 1,
      "positions": [
        {
          "x": 287,
          "y": 417,
          "id": 141,
          "timeOffset": -285
        },
        {
          "x": 321,
          "y": 473,
          "id": 141,
          "timeOffset": -235
        },
        {
          "x": 356,
          "y": 500,
          "id": 141,
          "timeOffset": -185
        },
        {
          "x": 359,
          "y": 501,
          "id": 141,
          "timeOffset": -134
        },
        {
          "x": 360,
          "y": 501,
          "id": 141,
          "timeOffset": -3
        }
      ]
    },
    "type": 3,
    "timestamp": 1712867128213
  },
  {
    "data": {
      "x": 530,
      "y": 494,
      "id": 141,
      "type": 1,
      "source": 2
    },
    "type": 3,
    "timestamp": 1712867128384
  },
  {
    "data": {
      "x": 530,
      "y": 494,
      "id": 141,
      "type": 0,
      "source": 2
    },
    "type": 3,
    "timestamp": 1712867128444
  },
  {
    "data": {
      "x": 530,
      "y": 494,
      "id": 141,
      "type": 2,
      "source": 2
    },
    "type": 3,
    "timestamp": 1712867128445
  },
  {
    "data": {
      "x": 666,
      "y": 433,
      "id": 141,
      "type": 1,
      "source": 2
    },
    "type": 3,
    "timestamp": 1712867128583
  },
  {
    "data": {
      "x": 666,
      "y": 433,
      "id": 141,
      "type": 0,
      "source": 2
    },
    "type": 3,
    "timestamp": 1712867128657
  },
  {
    "data": {
      "x": 666,
      "y": 433,
      "id": 141,
      "type": 2,
      "source": 2
    },
    "type": 3,
    "timestamp": 1712867128658
  },
  {
    "data": {
      "source": 1,
      "positions": [
        {
          "x": 413,
          "y": 502,
          "id": 141,
          "timeOffset": -450
        },
        {
          "x": 517,
          "y": 496,
          "id": 141,
          "timeOffset": -400
        },
        {
          "x": 535,
          "y": 494,
          "id": 141,
          "timeOffset": -234
        },
        {
          "x": 649,
          "y": 438,
          "id": 141,
          "timeOffset": -170
        },
        {
          "x": 683,
          "y": 427,
          "id": 141,
          "timeOffset": -36
        }
      ]
    },
    "type": 3,
    "timestamp": 1712867128713
  },
  {
    "data": {
      "x": 965,
      "y": 379,
      "id": 141,
      "type": 1,
      "source": 2
    },
    "type": 3,
    "timestamp": 1712867128793
  },
  {
    "data": {
      "x": 965,
      "y": 379,
      "id": 141,
      "type": 0,
      "source": 2
    },
    "type": 3,
    "timestamp": 1712867128863
  },
  {
    "data": {
      "x": 965,
      "y": 379,
      "id": 141,
      "type": 2,
      "source": 2
    },
    "type": 3,
    "timestamp": 1712867128864
  },
  {
    "data": {
      "x": 1151,
      "y": 488,
      "id": 141,
      "type": 1,
      "source": 2
    },
    "type": 3,
    "timestamp": 1712867128991
  },
  {
    "data": {
      "x": 1154,
      "y": 508,
      "id": 141,
      "type": 0,
      "source": 2
    },
    "type": 3,
    "timestamp": 1712867129065
  },
  {
    "data": {
      "x": 1154,
      "y": 508,
      "id": 141,
      "type": 2,
      "source": 2
    },
    "type": 3,
    "timestamp": 1712867129065
  },
  {
    "data": {
      "source": 1,
      "positions": [
        {
          "x": 827,
          "y": 385,
          "id": 141,
          "timeOffset": -485
        },
        {
          "x": 965,
          "y": 379,
          "id": 141,
          "timeOffset": -422
        },
        {
          "x": 971,
          "y": 380,
          "id": 141,
          "timeOffset": -335
        },
        {
          "x": 1100,
          "y": 433,
          "id": 141,
          "timeOffset": -269
        },
        {
          "x": 1155,
          "y": 504,
          "id": 141,
          "timeOffset": -201
        },
        {
          "x": 1147,
          "y": 514,
          "id": 141,
          "timeOffset": -136
        },
        {
          "x": 1137,
          "y": 522,
          "id": 141,
          "timeOffset": -86
        },
        {
          "x": 1137,
          "y": 523,
          "id": 141,
          "timeOffset": -21
        }
      ]
    },
    "type": 3,
    "timestamp": 1712867129214
  },
  {
    "data": {
      "source": 1,
      "positions": [
        {
          "x": 836,
          "y": 490,
          "id": 141,
          "timeOffset": -470
        },
        {
          "x": 154,
          "y": 494,
          "id": 141,
          "timeOffset": -420
        },
        {
          "x": 491,
          "y": 561,
          "id": 141,
          "timeOffset": -370
        },
        {
          "x": 1041,
          "y": 571,
          "id": 141,
          "timeOffset": -306
        },
        {
          "x": 497,
          "y": 597,
          "id": 141,
          "timeOffset": -235
        },
        {
          "x": 870,
          "y": 605,
          "id": 141,
          "timeOffset": -170
        },
        {
          "x": 539,
          "y": 623,
          "id": 141,
          "timeOffset": -105
        },
        {
          "x": 774,
          "y": 670,
          "id": 141,
          "timeOffset": -55
        },
        {
          "x": 828,
          "y": 588,
          "id": 141,
          "timeOffset": -3
        }
      ]
    },
    "type": 3,
    "timestamp": 1712867129715
  },
  {
    "data": {
      "source": 1,
      "positions": [
        {
          "x": 513,
          "y": 437,
          "id": 141,
          "timeOffset": -454
        },
        {
          "x": 522,
          "y": 664,
          "id": 141,
          "timeOffset": -404
        },
        {
          "x": 1039,
          "y": 818,
          "id": 141,
          "timeOffset": -337
        },
        {
          "x": 650,
          "y": 581,
          "id": 141,
          "timeOffset": -270
        },
        {
          "x": 894,
          "y": 742,
          "id": 141,
          "timeOffset": -207
        },
        {
          "x": 995,
          "y": 572,
          "id": 141,
          "timeOffset": -154
        },
        {
          "x": 507,
          "y": 318,
          "id": 145,
          "timeOffset": -104
        },
        {
          "x": 917,
          "y": 395,
          "id": 141,
          "timeOffset": -37
        }
      ]
    },
    "type": 3,
    "timestamp": 1712867130216
  },
  {
    "data": {
      "source": 1,
      "positions": [
        {
          "x": 1501,
          "y": 1050,
          "id": 141,
          "timeOffset": -476
        },
        {
          "x": 570,
          "y": 956,
          "id": 141,
          "timeOffset": -422
        },
        {
          "x": 1027,
          "y": 584,
          "id": 141,
          "timeOffset": -358
        },
        {
          "x": 1372,
          "y": 793,
          "id": 141,
          "timeOffset": -305
        },
        {
          "x": 744,
          "y": 816,
          "id": 141,
          "timeOffset": -255
        },
        {
          "x": 945,
          "y": 596,
          "id": 141,
          "timeOffset": -204
        },
        {
          "x": 1448,
          "y": 308,
          "id": 145,
          "timeOffset": -154
        },
        {
          "x": 1168,
          "y": 370,
          "id": 141,
          "timeOffset": -104
        },
        {
          "x": 864,
          "y": 761,
          "id": 141,
          "timeOffset": -39
        }
      ]
    },
    "type": 3,
    "timestamp": 1712867130716
  },
  {
    "data": {
      "x": 650,
      "y": 502,
      "id": 141,
      "type": 1,
      "source": 2
    },
    "type": 3,
    "timestamp": 1712867131153
  },
  {
    "data": {
      "source": 1,
      "positions": [
        {
          "x": 1392,
          "y": 679,
          "id": 141,
          "timeOffset": -490
        },
        {
          "x": 971,
          "y": 558,
          "id": 141,
          "timeOffset": -421
        },
        {
          "x": 1107,
          "y": 610,
          "id": 141,
          "timeOffset": -355
        },
        {
          "x": 998,
          "y": 580,
          "id": 141,
          "timeOffset": -305
        },
        {
          "x": 618,
          "y": 522,
          "id": 141,
          "timeOffset": -241
        },
        {
          "x": 677,
          "y": 512,
          "id": 141,
          "timeOffset": -190
        },
        {
          "x": 669,
          "y": 505,
          "id": 141,
          "timeOffset": -138
        },
        {
          "x": 651,
          "y": 502,
          "id": 141,
          "timeOffset": -88
        },
        {
          "x": 654,
          "y": 521,
          "id": 141,
          "timeOffset": -6
        }
      ]
    },
    "type": 3,
    "timestamp": 1712867131217
  },
  {
    "data": {
      "x": 959,
      "y": 648,
      "id": 141,
      "type": 0,
      "source": 2
    },
    "type": 3,
    "timestamp": 1712867131311
  },
  {
    "data": {
      "x": 959,
      "y": 648,
      "id": 141,
      "type": 2,
      "source": 2
    },
    "type": 3,
    "timestamp": 1712867131312
  },
  {
    "data": {
      "x": 911,
      "y": 574,
      "id": 141,
      "type": 1,
      "source": 2
    },
    "type": 3,
    "timestamp": 1712867131334
  },
  {
    "data": {
      "x": 826,
      "y": 646,
      "id": 141,
      "type": 0,
      "source": 2
    },
    "type": 3,
    "timestamp": 1712867131465
  },
  {
    "data": {
      "x": 826,
      "y": 646,
      "id": 141,
      "type": 2,
      "source": 2
    },
    "type": 3,
    "timestamp": 1712867131465
  },
  {
    "data": {
      "x": 869,
      "y": 584,
      "id": 141,
      "type": 1,
      "source": 2
    },
    "type": 3,
    "timestamp": 1712867131608
  },
  {
    "data": {
      "x": 870,
      "y": 584,
      "id": 141,
      "type": 0,
      "source": 2
    },
    "type": 3,
    "timestamp": 1712867131673
  },
  {
    "data": {
      "x": 870,
      "y": 584,
      "id": 141,
      "type": 2,
      "source": 2
    },
    "type": 3,
    "timestamp": 1712867131675
  },
  {
    "data": {
      "source": 1,
      "positions": [
        {
          "x": 934,
          "y": 675,
          "id": 141,
          "timeOffset": -438
        },
        {
          "x": 808,
          "y": 522,
          "id": 141,
          "timeOffset": -374
        },
        {
          "x": 675,
          "y": 543,
          "id": 141,
          "timeOffset": -322
        },
        {
          "x": 826,
          "y": 646,
          "id": 141,
          "timeOffset": -255
        },
        {
          "x": 873,
          "y": 594,
          "id": 141,
          "timeOffset": -188
        },
        {
          "x": 870,
          "y": 584,
          "id": 141,
          "timeOffset": -55
        }
      ]
    },
    "type": 3,
    "timestamp": 1712867131717
  },
  {
    "data": {
      "x": 1191,
      "y": 575,
      "id": 141,
      "type": 1,
      "source": 2
    },
    "type": 3,
    "timestamp": 1712867131766
  },
  {
    "data": {
      "x": 1197,
      "y": 575,
      "id": 141,
      "type": 0,
      "source": 2
    },
    "type": 3,
    "timestamp": 1712867131847
  },
  {
    "data": {
      "x": 1197,
      "y": 575,
      "id": 141,
      "type": 2,
      "source": 2
    },
    "type": 3,
    "timestamp": 1712867131848
  },
  {
    "data": {
      "x": 451,
      "y": 538,
      "id": 141,
      "type": 1,
      "source": 2
    },
    "type": 3,
    "timestamp": 1712867131943
  },
  {
    "data": {
      "x": 428,
      "y": 547,
      "id": 141,
      "type": 0,
      "source": 2
    },
    "type": 3,
    "timestamp": 1712867132007
  },
  {
    "data": {
      "x": 428,
      "y": 547,
      "id": 141,
      "type": 2,
      "source": 2
    },
    "type": 3,
    "timestamp": 1712867132007
  },
  {
    "data": {
      "x": 467,
      "y": 563,
      "id": 141,
      "type": 1,
      "source": 2
    },
    "type": 3,
    "timestamp": 1712867132103
  },
  {
    "data": {
      "x": 645,
      "y": 621,
      "id": 141,
      "type": 0,
      "source": 2
    },
    "type": 3,
    "timestamp": 1712867132166
  },
  {
    "data": {
      "x": 645,
      "y": 621,
      "id": 141,
      "type": 2,
      "source": 2
    },
    "type": 3,
    "timestamp": 1712867132166
  },
  {
    "data": {
      "source": 1,
      "positions": [
        {
          "x": 1068,
          "y": 575,
          "id": 141,
          "timeOffset": -492
        },
        {
          "x": 1176,
          "y": 575,
          "id": 141,
          "timeOffset": -359
        },
        {
          "x": 578,
          "y": 533,
          "id": 141,
          "timeOffset": -307
        },
        {
          "x": 428,
          "y": 547,
          "id": 141,
          "timeOffset": -173
        },
        {
          "x": 467,
          "y": 563,
          "id": 141,
          "timeOffset": -123
        },
        {
          "x": 645,
          "y": 621,
          "id": 141,
          "timeOffset": -59
        },
        {
          "x": 873,
          "y": 683,
          "id": 141,
          "timeOffset": -8
        }
      ]
    },
    "type": 3,
    "timestamp": 1712867132218
  },
  {
    "data": {
      "x": 911,
      "y": 703,
      "id": 141,
      "type": 1,
      "source": 2
    },
    "type": 3,
    "timestamp": 1712867132255
  },
  {
    "data": {
      "x": 911,
      "y": 703,
      "id": 141,
      "type": 0,
      "source": 2
    },
    "type": 3,
    "timestamp": 1712867132314
  },
  {
    "data": {
      "x": 911,
      "y": 703,
      "id": 141,
      "type": 2,
      "source": 2
    },
    "type": 3,
    "timestamp": 1712867132315
  },
  {
    "data": {
      "x": 998,
      "y": 534,
      "id": 141,
      "type": 1,
      "source": 2
    },
    "type": 3,
    "timestamp": 1712867132416
  },
  {
    "data": {
      "x": 979,
      "y": 534,
      "id": 141,
      "type": 0,
      "source": 2
    },
    "type": 3,
    "timestamp": 1712867132479
  },
  {
    "data": {
      "x": 979,
      "y": 534,
      "id": 141,
      "type": 2,
      "source": 2
    },
    "type": 3,
    "timestamp": 1712867132480
  },
  {
    "data": {
      "x": 938,
      "y": 515,
      "id": 141,
      "type": 1,
      "source": 2
    },
    "type": 3,
    "timestamp": 1712867132567
  },
  {
    "data": {
      "x": 855,
      "y": 508,
      "id": 141,
      "type": 0,
      "source": 2
    },
    "type": 3,
    "timestamp": 1712867132632
  },
  {
    "data": {
      "x": 855,
      "y": 508,
      "id": 141,
      "type": 2,
      "source": 2
    },
    "type": 3,
    "timestamp": 1712867132633
  },
  {
    "data": {
      "source": 1,
      "positions": [
        {
          "x": 926,
          "y": 674,
          "id": 141,
          "timeOffset": -390
        },
        {
          "x": 998,
          "y": 534,
          "id": 141,
          "timeOffset": -324
        },
        {
          "x": 987,
          "y": 534,
          "id": 141,
          "timeOffset": -257
        },
        {
          "x": 938,
          "y": 515,
          "id": 141,
          "timeOffset": -190
        },
        {
          "x": 937,
          "y": 514,
          "id": 141,
          "timeOffset": -125
        },
        {
          "x": 584,
          "y": 468,
          "id": 141,
          "timeOffset": -60
        },
        {
          "x": 273,
          "y": 379,
          "id": 141,
          "timeOffset": -7
        }
      ]
    },
    "type": 3,
    "timestamp": 1712867132719
  },
  {
    "data": {
      "source": 1,
      "positions": [
        {
          "x": 258,
          "y": 367,
          "id": 141,
          "timeOffset": -442
        },
        {
          "x": 265,
          "y": 357,
          "id": 141,
          "timeOffset": -378
        },
        {
          "x": 295,
          "y": 337,
          "id": 141,
          "timeOffset": -327
        },
        {
          "x": 320,
          "y": 318,
          "id": 152,
          "timeOffset": -259
        },
        {
          "x": 320,
          "y": 314,
          "id": 152,
          "timeOffset": -209
        },
        {
          "x": 321,
          "y": 312,
          "id": 152,
          "timeOffset": -110
        }
      ]
    },
    "type": 3,
    "timestamp": 1712867133221
  },
  {
    "data": {
      "source": 1,
      "positions": [
        {
          "x": 312,
          "y": 311,
          "id": 152,
          "timeOffset": -8
        }
      ]
    },
    "type": 3,
    "timestamp": 1712867133721
  },
  {
    "data": {
      "x": 203,
      "y": 303,
      "id": 150,
      "type": 1,
      "source": 2
    },
    "type": 3,
    "timestamp": 1712867133887
  },
  {
    "data": {
      "id": 150,
      "type": 5,
      "source": 2
    },
    "type": 3,
    "timestamp": 1712867133887
  },
  {
    "data": {
      "x": 201,
      "y": 303,
      "id": 150,
      "type": 0,
      "source": 2
    },
    "type": 3,
    "timestamp": 1712867133959
  },
  {
    "data": {
      "x": 201,
      "y": 303,
      "id": 150,
      "type": 2,
      "source": 2
    },
    "type": 3,
    "timestamp": 1712867133959
  },
  {
    "data": {
      "adds": [
        {
          "node": {
            "id": 189,
            "type": 2,
            "rootId": 88,
            "tagName": "div",
            "attributes": {
              "class": "fixed inset-0 bg-opacity-50 flex justify-center items-center"
            },
            "childNodes": []
          },
          "nextId": null,
          "parentId": 141
        },
        {
          "node": {
            "id": 190,
            "type": 2,
            "rootId": 88,
            "tagName": "div",
            "attributes": {
              "class": "bg-blue-400 p-5 rounded-lg"
            },
            "childNodes": []
          },
          "nextId": null,
          "parentId": 189
        },
        {
          "node": {
            "id": 191,
            "type": 2,
            "rootId": 88,
            "tagName": "button",
            "attributes": {
              "class": "mt-4 bg-red-500 hover:bg-red-700 text-primary font-bold py-2 px-4 rounded"
            },
            "childNodes": []
          },
          "nextId": null,
          "parentId": 190
        },
        {
          "node": {
            "id": 192,
            "type": 3,
            "rootId": 88,
            "textContent": "Close"
          },
          "nextId": null,
          "parentId": 191
        },
        {
          "node": {
            "id": 193,
            "type": 2,
            "rootId": 88,
            "tagName": "p",
            "attributes": {},
            "childNodes": []
          },
          "nextId": 191,
          "parentId": 190
        },
        {
          "node": {
            "id": 194,
            "type": 2,
            "rootId": 88,
            "tagName": "h3",
            "attributes": {
              "class": "font-bold"
            },
            "childNodes": []
          },
          "nextId": 193,
          "parentId": 190
        },
        {
          "node": {
            "id": 195,
            "type": 3,
            "rootId": 88,
            "textContent": "Popup"
          },
          "nextId": null,
          "parentId": 194
        },
        {
          "node": {
            "id": 196,
            "type": 3,
            "rootId": 88,
            "textContent": "Action 2 triggered"
          },
          "nextId": null,
          "parentId": 193
        }
      ],
      "texts": [],
      "source": 0,
      "removes": [],
      "attributes": []
    },
    "type": 3,
    "timestamp": 1712867133964
  },
  {
    "data": {
      "source": 1,
      "positions": [
        {
          "x": 237,
          "y": 303,
          "id": 150,
          "timeOffset": -450
        },
        {
          "x": 212,
          "y": 303,
          "id": 150,
          "timeOffset": -396
        },
        {
          "x": 203,
          "y": 303,
          "id": 150,
          "timeOffset": -339
        },
        {
          "x": 216,
          "y": 303,
          "id": 189,
          "timeOffset": -229
        },
        {
          "x": 345,
          "y": 374,
          "id": 189,
          "timeOffset": -164
        },
        {
          "x": 525,
          "y": 485,
          "id": 189,
          "timeOffset": -114
        },
        {
          "x": 691,
          "y": 542,
          "id": 189,
          "timeOffset": -64
        }
      ]
    },
    "type": 3,
    "timestamp": 1712867134225
  },
  {
    "data": {
      "x": 758,
      "y": 578,
      "id": 191,
      "type": 1,
      "source": 2
    },
    "type": 3,
    "timestamp": 1712867134530
  },
  {
    "data": {
      "id": 150,
      "type": 6,
      "source": 2
    },
    "type": 3,
    "timestamp": 1712867134532
  },
  {
    "data": {
      "id": 191,
      "type": 5,
      "source": 2
    },
    "type": 3,
    "timestamp": 1712867134533
  },
  {
    "data": {
      "x": 758,
      "y": 578,
      "id": 191,
      "type": 0,
      "source": 2
    },
    "type": 3,
    "timestamp": 1712867134630
  },
  {
    "data": {
      "x": 758,
      "y": 578,
      "id": 191,
      "type": 2,
      "source": 2
    },
    "type": 3,
    "timestamp": 1712867134631
  },
  {
    "data": {
      "id": 191,
      "type": 6,
      "source": 2
    },
    "type": 3,
    "timestamp": 1712867134633
  },
  {
    "data": {
      "adds": [],
      "texts": [],
      "source": 0,
      "removes": [
        {
          "id": 189,
          "parentId": 141
        }
      ],
      "attributes": []
    },
    "type": 3,
    "timestamp": 1712867134634
  },
  {
    "data": {
      "source": 1,
      "positions": [
        {
          "x": 735,
          "y": 539,
          "id": 190,
          "timeOffset": -502
        },
        {
          "x": 736,
          "y": 531,
          "id": 193,
          "timeOffset": -449
        },
        {
          "x": 737,
          "y": 539,
          "id": 190,
          "timeOffset": -350
        },
        {
          "x": 755,
          "y": 578,
          "id": 191,
          "timeOffset": -286
        },
        {
          "x": 758,
          "y": 578,
          "id": 141,
          "timeOffset": -50
        }
      ]
    },
    "type": 3,
    "timestamp": 1712867134728
  },
  {
    "data": {
      "source": 1,
      "positions": [
        {
          "x": 748,
          "y": 567,
          "id": 141,
          "timeOffset": -501
        },
        {
          "x": 585,
          "y": 459,
          "id": 141,
          "timeOffset": -421
        },
        {
          "x": 483,
          "y": 427,
          "id": 141,
          "timeOffset": -371
        },
        {
          "x": 461,
          "y": 422,
          "id": 141,
          "timeOffset": -318
        },
        {
          "x": 460,
          "y": 421,
          "id": 141,
          "timeOffset": -252
        },
        {
          "x": 448,
          "y": 406,
          "id": 141,
          "timeOffset": -202
        },
        {
          "x": 404,
          "y": 314,
          "id": 152,
          "timeOffset": -151
        }
      ]
    },
    "type": 3,
    "timestamp": 1712867135230
  },
  {
    "data": {
      "x": 395,
      "y": 298,
      "id": 152,
      "type": 1,
      "source": 2
    },
    "type": 3,
    "timestamp": 1712867135241
  },
  {
    "data": {
      "id": 152,
      "type": 5,
      "source": 2
    },
    "type": 3,
    "timestamp": 1712867135242
  },
  {
    "data": {
      "x": 395,
      "y": 298,
      "id": 152,
      "type": 0,
      "source": 2
    },
    "type": 3,
    "timestamp": 1712867135328
  },
  {
    "data": {
      "x": 395,
      "y": 298,
      "id": 152,
      "type": 2,
      "source": 2
    },
    "type": 3,
    "timestamp": 1712867135330
  }
]

export default function Page() {
  return <Replay events={events} />

}