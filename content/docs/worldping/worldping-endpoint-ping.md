+++
date = "2015-07-01T13:27:26-04:00"
title = "Dashboard - worldPing Endpoint: |--- Ping"
description = "worldPing Ping Dashboard"
tags = [ "raintank", "worldPing", "probes", "dashboards" ]
section = ["worldPing"]
+++

The ping dashboard accepts **one endpoint** and **multiple probes**, allowing you to isolate and investigate issues down to a single probe or tag group of probes. 

![Picture](/img/docs/worldPing-Endpoint-Ping.png)

Over the selected time range:

1. `Health (Last)`: The health check is the last state of the selected time range. 
2. `Uptime`:  This percentage shows the average ping uptime of the selected time range.
3. `Packet Loss`: The packet loss singlestat panel shows average packet loss across all selected probes for the time range. 
4. `Latency`: The latency singlestat panel shows the average latency across all selected probes for the time range. 
5. `Errors`: This panel shows errors, broken out by individual probe. To reduce noise, OK states are not shown in this graph, only Errors. In addition to the graph, the legend shows the total errors for each probe for the selected time range. 
6. `Performance Range and Loss`: The ping performance and loss graph shows the range of ping responses, very much like smokeping. 
7. `Performance`: The ping performance panel is individual probe latency. In addition to the graph, the legend shows average over the time period and current (last value of the selected time period).
