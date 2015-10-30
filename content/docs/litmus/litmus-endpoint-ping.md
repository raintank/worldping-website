+++
date = "2015-07-01T13:27:26-04:00"
title = "Dashboard - Litmus Endpoint: |--- Ping"
description = "Deatiled breakdown of the raintank global footprint"
tags = [ "raintank", "litmus", "collectors" ]
section = ["Litmus"]
+++

The ping dashboard accepts a single endpoint and multiple collectors, allowing you to isolate and investigate issues down to a single collector or tag group of collectors. 

![Picture](/img/docs/Litmus-Endpoint-Ping.png)

Over the selected time range:

1. `Health (Last)`: The health check is the last state of the selected time range. 
2. `Uptime`:  This percentage will show the average ping uptime.
3. `Packet Loss`: The packet loss singlestat panel shows average packet loss across all selected collectors for the time range. 
4. `Latency`: The latency singlestat panel shows the average latency across all selected collectors for the time range. 
5. `Errors`: This graph shows errors, broken out by individual collector. OK states are not shown in this graph, only Error states. 
6. `Performance Range and Loss`: The ping performance and loss graph shows the range of ping responses, very much like smokeping. 
7. `Performance`: The ping performance panel is individual collector latency. In addition to the graph, the legend shows average over the time period and current (last value of the time period).
