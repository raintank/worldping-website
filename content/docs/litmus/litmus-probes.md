+++
date = "2015-07-01T13:27:26-04:00"
title = "Dashboard - Litmus Probes"
description = "The Litmus Probe Summary dashboard."
tags = [ "raintank", "litmus", "probes", "dashboards" ]
section = ["Litmus"]
+++

The probe summary accepts **one probe** and **multiple endpoints**. This dashboard is very useful for isolation a single probe and comparing performance of multiple endpoints. 

![Picture](/img/docs/Litmus-Probe-Summary.png)

The summary dashboard will always show all 4 checks: DNS, Ping, HTTP and HTTPS. If a check is not enabled for any of the selected endpoints, the message *No datapoints* will appear. 

1. `Uptime`: The uptime value is the average `ok_state` over the selected time range presented as a percentage. 
2. `Errors`: The error bar displays the OK and Errors over the selected time range. 
3. `Performance by check`: The performance by check panels show data for selected endpoints, on a per endpoint basis, for the selected probe.  

For additional details on a per probe basis, and to view more probes on the same dashboard, many find the the [Endpoint Comparison](/docs/litmus/litmus-endpoint-comparison/) dashboard very useful. 
