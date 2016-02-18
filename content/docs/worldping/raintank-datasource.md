+++
date = "2015-07-01T13:27:26-04:00"
title = "Raintank as a Data Source"
description = "How to configure your raintank datasource"
tags = [ "raintank", "worldPing", "datasources" ]
section = ["worldPing"]
+++

Once you have a raintank account, it can be added as a data source to any instance of Grafana. 

![Picture](/img/docs/raintank-datasource.png)

1. `Name`: raintank
1. `Type`: Graphite
1. `URL`: https://app.raintank.io/api/graphite
1. `Access`: proxy
1. `Basic Auth`: Enabled
1. `User`: *username/email*
1. `Password`: *your password*

Note: In order for the dashboards to function properly on import, it's important the datasource name is ***raintank***.

## Raintank dashboards in Grafana

### Export your raintank dashboard

To import a raintank dashboard into your instsance of Grafana, you must first export the dashboard. To export a dashboard, locate the settings menu within the desired dashboard and click the gear icon. The export option will always be available, and will open a browser save-as dialog window. 

![Picture](/img/docs/export.gif)

Alternately, the raw JSON may be accessed directly from within the interface and copy/pasted into an editor of your choice to be saved later. To view this JSON, locate the settings menu within the desired dashboard and click the gear icon. The View JSON option will always be available, and will open the raw JSON in a text area. To copy the entire JSON file, click into the text area, the select all `CTRL`+`A` (PC, Linux) or `⌘`+`A` (Mac).

![Picture](/img/docs/export-2.gif)

### Importing into Grafana

First, log into your Grafana instance. To import the raintank dashboard through the previously saved local JSON file, click the 'Choose file' button in the Import from File section. Note that JSON is not linted or validated prior during upload, so we recommend validating locally if you're editing. 

In a pinch, you can use http://jsonlint.com/, and if you are editing dashboard JSON frequently, there are linter plugins for popular text editors.

