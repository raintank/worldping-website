+++
date = "2015-07-01T13:27:26-04:00"
title = "Dashboard - worldPing Endpoint: |--- DNS"
description = "worldPing DNS Dashboard"
tags = [ "raintank", "worldPing", "probes", "dashboards" ]
section = ["worldPing"]
+++

The DNS dashboard accepts **one endpoint** and **multiple probes**, allowing you to isolate and investigate issues down to a single probe or tag group of probes. 


![Picture](/img/docs/worldPing-Endpoint-DNS.png)

1. `Health (Last)`: The health check is the last state of the selected time range. 
2. `Uptime`: This percentage shows the average DNS uptime of the selected time range.
3. `Answers`: This singlestat panel shows average DNS answer across selected probes for the time range.
4. `Latency`: This singlestat panel shows the average latency across selected probes for the time range.
5. `Errors`: To reduce noise, OK states are not shown in this graph, only Errors. In addition to the graph, the legend shows the total errors for each probe for the selected time range. 
6. `Performance`: The DNS performance panel displays latency on a per-probe basis. In addition to the graph, the legend shows average over the time period and current (last value of the selected time period).
