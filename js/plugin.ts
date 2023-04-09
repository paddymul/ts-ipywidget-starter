// Copyright (c) Bloomberg
// Distributed under the terms of the Modified BSD License.

import { Application, IPlugin } from '@lumino/application';

import { Widget } from '@lumino/widgets';

import { IJupyterWidgetRegistry } from '@jupyter-widgets/base';

import { IThemeManager } from '@jupyterlab/apputils';

import * as paddywidget from './paddywidget';

import { MODULE_NAME, MODULE_VERSION } from './version';

const EXTENSION_ID = 'ipydatagrid:plugin';

/**
 * The datagrid plugin.
 */
const datagridPlugin: IPlugin<Application<Widget>, void> = {
  id: EXTENSION_ID,
  requires: [IJupyterWidgetRegistry],
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  optional: [IThemeManager as any],
  activate: activateWidgetExtension,
  autoStart: true,
};

export default datagridPlugin;

/**
 * Activate the widget extension.
 */
function activateWidgetExtension(
  app: Application<Widget>,
  registry: IJupyterWidgetRegistry,
  themeManager: IThemeManager | null,
): void {

  registry.registerWidget({
    name: MODULE_NAME,
    version: MODULE_VERSION,
    exports: {
	...paddywidget,
    },
  });
}
