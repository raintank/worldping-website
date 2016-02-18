+++
date = "2015-07-01T13:27:26-04:00"
title = "Dashboard - worldPing Events"
description = "worldPing Event dashboard"
tags = [ "raintank", "worldPing", "probes", "dashboards" ]
section = ["worldPing"]
+++

The worldPing Events dashboard provides the raw log data returned from each probe. This dashboard can be filered by endpoint, probe, protocol and severity (OK + ERROR). Each time a probe reports an error, a record will be added, however OKs will only be added when a probe returns to an OK state. 

The event dashboard is particularly useful for seeing the raw events reported from the probe.

![Picture](/img/docs/worldPing-Events.png)

1. `Template Variables`: The template variables available to the Events dashboard are **endpoint**, **probe**, **monitor type** (also known as check type), and **severity** (OKs and Errors).
1. `Time`: The time of reported state change. 
1. `Endpoint`: The endpoint related to the event. 
1. `Probe`: The probe reporting the event. 
1. `Monitor Type`: The monitor type (check) that the event is related to. 
1. `Message`: The raw message from sent from the probe. 