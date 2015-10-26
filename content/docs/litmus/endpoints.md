+++
date = "2015-07-01T13:27:26-04:00"
title = "Endpoints"
description = "The basics of an endpoint in Litmus"
tags = [ "raintank", "litmus", "endpoint" ]
section = ["Litmus"]
+++

In Litmus, an endpoint is anything you'd like to monitor. If an endpoint is not publicly accessible, you may add <a href="#">Private Collectors</a> to reach the endpoint behind your firewall or internal network. 


## Endpoint Auto-discover

The auto-discover functionality will attempt to contact your endpoint from the server and return sensible defaults for your configuration. 

If HTTP and HTTPS are detected, only the HTTPS check will be enabled. 