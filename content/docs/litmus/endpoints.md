+++
date = "2015-07-01T13:27:26-04:00"
title = "Endpoints"
description = "The basics of an endpoint in Litmus"
tags = [ "raintank", "litmus", "endpoint" ]
section = ["Litmus"]
+++

In Litmus, an endpoint is anything you'd like to monitor. If an endpoint is not publicly accessible, you may add [Private Collectors](/private-collectors) to reach endpoints behind your firewall or internal network. 


## Endpoint Auto-discover

The auto-discover functionality will attempt to contact your endpoint from the server and return sensible defaults for your configuration. Auto-discover will check DNS, Ping, HTTP and HTTPS. If HTTP and HTTPS are detected, only the HTTPS check will be enabled. 

## Monitoring Footprint

### Dynamic Footprint
Dynamic footprints are selected on a per tag basis, and will always monitor your endpoint from all collectors the selected tag group(s). As you add or remove collectors from the tag group, 

### Static Footprint
A Static footprint will allow your monitoring footprint to remain the same, only monitoring from the specific individual collectors. At the moment, there is no ability to bulk-update static footprints across multiple checks. If you have a number of checks & endpoints to update manually, please [contact us](mailto:hello@raintank.io) and we can take care of it for you.