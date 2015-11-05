+++
date = "2015-07-01T13:27:26-04:00"
title = "Dashboard - Litmus Endpoint: |--- DNS"
description = "Deatiled breakdown of the raintank global footprint"
tags = [ "raintank", "litmus", "collectors" ]
section = ["Litmus"]
+++

The DNS dashboard accepts a single endpoint and multiple collectors, allowing you to isolate and investigate issues down to a single collector or tag group of collectors. 


![Picture](/img/docs/Litmus-Endpoint-DNS.png)

1. `Health (Last)`: The health check is the last state of the selected time range. 
2. `Uptime`: This percentage shows the average DNS uptime of the selected time range.
3. `Answers`: This singlestat panel shows average DNS answer across selected collectors for the time range.
4. `Latency`: This singlestat panel shows the average latency across selected collectors for the time range.
5. `Errors`: To reduce noise, OK states are not shown in this graph, only Errors. In addition to the graph, the legend shows the total errors for each collector for the selected time range. 
6. `Performance`: The DNS performance panel displays latency on a per-collector basis. In addition to the graph, the legend shows average over the time period and current (last value of the selected time period).
