+++
date = "2015-07-01T13:27:26-04:00"
title = "Dashboard - Litmus Events"
description = "Deatiled breakdown of the raintank global footprint"
tags = [ "raintank", "litmus", "collectors" ]
section = ["Litmus"]
+++

The Litmus Events dashboard provides the raw log data returned from each collector. This dashboard can be filered by endpoint, collector, protocol and severity (OK + ERROR). Each time a collector reports an error, a record will be added, however OKs will only be added when a collector returns to an OK state. 

The event dashboard is particularly useful for seeing the raw events reported from the collector.

![Picture](/img/docs/Litmus-Events.png)

1. `Template Variables`: The template varibales available to the Events dashboard are **endpoint**, **collector**, **monitor type** (also known as check type), and **severity** (OKs and Errors).
1. `Time`: The time of reported state change. 
1. `Endpoint`: The endpoint 
1. `Collector`: The collector reporting the event. 
1. `Monitor Type`: The monitor type (check) that the event is related to. 
1. `Message`: The raw message from sent from the collector. 