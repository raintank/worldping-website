+++
date = "2015-07-01T13:27:26-04:00"
title = "Dashboard - Litmus: Endpoint Summary"
description = "Litmus Endpoint Summary Dashboard"
tags = [ "raintank", "litmus", "probes", "dashboards" ]
section = ["Litmus"]
+++

The summary dashboard provide a top level view of a single endpoint, showing uptime percentages, error counts and response times per probe. If a check is not enabled, the message *No Datapoints* will appear. 

![Picture](/img/docs/Litmus-Endpoint-Summary.png)

1. `Uptime`: The uptime values are the average `ok_state` over the selected time range. 
2. `Errors`: The error bars show the OK and Errors over the selected time range. 
3. `Performance by check`: The performance by check panels show data for selected probes, on a per probe basis, for the selected endpoint. 
4. `No Data`: When a check is not enabled on an endpoint and data does not exist for the selected time range, the panels will show No Data messages: *N/A* on SingleStat panels and *No datapoints* on graph panels. If you believe your check should have data, first be sure the proper time range is selected. 
5. `Drill down`: To view more detail on a check, click the drilldown icon to view associated dashboards. On click, the current variables and time range will be carried to the next dashboard.  