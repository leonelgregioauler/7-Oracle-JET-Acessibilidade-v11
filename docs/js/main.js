/**
 * @license
 * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
'use strict';

/**
 * Example of Require.js boostrap javascript
 */


(function () {
    // The "oj_whenReady" global variable enables a strategy that the busy context whenReady,
    // will implicitly add a busy state, until the application calls applicationBootstrapComplete
    // on the busy state context.
    window["oj_whenReady"] = true;

    requirejs.config(
    {
      baseUrl: 'js',

      paths:
      /* DO NOT MODIFY
      ** All paths are dynamicaly generated from the path_mappings.json file.
      ** Add any new library dependencies in path_mappings json file
      */
// injector:mainReleasePaths

{
  "knockout":"libs/knockout/knockout-3.5.1.debug",
  "jquery":"libs/jquery/jquery-3.6.0",
  "jqueryui-amd":"libs/jquery/jqueryui-amd-1.13.0",
  "hammerjs":"libs/hammer/hammer-2.0.8",
  "ojdnd":"libs/dnd-polyfill/dnd-polyfill-1.0.2",
  "ojs":"libs/oj/v11.1.5/debug",
  "ojL10n":"libs/oj/v11.1.5/ojL10n",
  "ojtranslations":"libs/oj/v11.1.5/resources",
  "persist":"libs/persist/debug",
  "text":"libs/require/text",
  "signals":"libs/js-signals/signals",
  "touchr":"libs/touchr/touchr",
  "preact":"libs/preact/dist/preact.umd",
  "preact/hooks":"libs/preact/hooks/dist/hooks.umd",
  "preact/debug":"libs/preact/debug/dist/debug.umd",
  "preact/devtools":"libs/preact/devtools/dist/devtools.umd",
  "proj4":"libs/proj4js/dist/proj4-src",
  "css":"libs/require-css/css",
  "ojcss":"libs/oj/v11.1.5/debug/ojcss",
  "ojs/ojcss":"libs/oj/v11.1.5/debug/ojcss",
  "css-builder":"libs/require-css/css-builder",
  "normalize":"libs/require-css/normalize",
  "ojs/normalize":"libs/require-css/normalize",
  "jet-composites":"jet-composites"
}

// endinjector
    }
  );
}());

/**
 * Load the application's entry point file
 */
require(['./root']);
