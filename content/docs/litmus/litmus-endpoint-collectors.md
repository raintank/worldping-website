+++
date = "2015-07-01T13:27:26-04:00"
title = "Dashboard - Litmus Collectors"
description = "Deatiled breakdown of the raintank global footprint"
tags = [ "raintank", "litmus", "collectors" ]
section = ["Litmus"]
+++

The collector summary accepts one collector and multiple endpoints. This dashboard is very useful for isolation a single collector and comparing performance of multiple endpoints. 

![Picture](/img/docs/Litmus-Collector-Summary.png)

The summary dashboard will always show all 4 checks: DNS, Ping, HTTP and HTTPS:

1. `Uptime`: The uptime value is the average `ok_state` over the selected time range. 
2. `Errors`: The error bar shows the OK and Errors over the selected time range. 
3. `Performance by check`: 

For additional details on a per collector basis, and to view more collectors on the same dashboard, many find the the [Endpoint Comparison](/docs/litmus/litmus-endpoint-comparison/) dashboard very useful. 
