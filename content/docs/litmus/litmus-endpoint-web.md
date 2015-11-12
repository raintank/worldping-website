+++
date = "2015-07-01T13:27:26-04:00"
title = "Dashboard - Litmus Endpoint: |--- Web"
description = "Litmus Web (HTTP and HTTPS) Dashboard"
tags = [ "raintank", "litmus", "probes", "dashboards" ]
section = ["Litmus"]
+++

The web dashboard accepts **one endpoint** and **multiple probes**, allowing you to isolate and investigate issues down to a single probe or tag group of probes. The dashboard defaults to showing HTTP, but HTTPS may be selected via *Protocol* in the dashboard variables selector.

![Picture](/img/docs/Litmus-Endpoint-Web.png)


1. `Health (Last)`: The health check is the last state of the selected time range. 
2. `Uptime`: This percentage shows the average ping uptime of the selected time range.
3. `Response`: The Web Response singlestat panel shows average packet loss across selected probes for the time range. It also includes a spark line of the response plotted over the time range.  
4. `Throughput`: The Web Throughput singlestat panel shows the average throughput over the selected time range. It also includes a spark line of the throughput plotted over the time range. 
5. `Errors`: This panel shows errors, broken out by individual probe. To reduce noise, OK states are not shown in this graph, only Errors. In addition to the graph, the legend shows the total errors for each probe for the selected time range. 
6. `Response`: This panel breaks down the HTTP and HTTPS connection components **dns**, **connect**, **send**, **wait** and **recv** into a stacked bar chart.
7. `Throughput`: The throughput panel plots the **content size** and **throughput** on the same panel. 
8. `Performance`: The web performance panel is individual probe total response time. In addition to the graph, the legend shows average over the time period and current (last value of the selected time period).