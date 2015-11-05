+++
date = "2015-07-01T13:27:26-04:00"
title = "Litmus Query Tree"
description = "Breakdown of the Litmus Query Tree"
tags = [ "raintank", "litmus", "collectors" ]
section = ["Litmus"]
+++

You can use the litmus data in your own dashboards, both on the raintank hosted platform as well as your local Grafana instance. 

litmus
	$endpoint
		$collector
			ping
				avg
				loss
				max
				mean
				min
				mdev

				ok_state
				warn_state
				error_state
			dns
				answers
				default
				time
				ttl

				ok_state
				warn_state
				error_state
			http
				connect
				dataLength
				dns
				recv
				send
				statusCode
				throughput
				total
				wait

				ok_state
				warn_state
				error_state
			https
				.connect
				.dataLength
				.dns
				.recv
				.send
				.statusCode
				.throughput
				.total
				.wait

				.ok_state
				.warn_state
				.error_state