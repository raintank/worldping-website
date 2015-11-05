+++
date = "2015-07-01T13:27:26-04:00"
title = "Litmus: Types of Checks"
description = "The basics of an endpoint in Litmus"
tags = [ "raintank", "litmus", "endpoint" ]
section = ["Litmus"]
+++

## DNS

During auto-discover, we will attempt to determine the authoritative nameservers for the selected endpoint. The DNS check will then contact the first responding nameserver and upon successful connection, report an OK state. Once a the first listed nameserver successfully answers, the check is complete. 

The collected stats for DNS are **answers**, **time** and **TTL**.

## Ping

During auto-discover, we will verify that your endpoint allows ICMP checks, and configure sensible defaults for basic ping monitoring. 

The collected stats for Ping are **avg**, **loss**, **min**, **max**, **mean**, and **mdev**.

## Web (HTTP & HTTPS)

During auto-discover, we will parse the path and port information, and look for a successful connection to your endpoint. For Content Match, only `regexp` is supported. For full details of capabilities, refer to the great resource at: [https://golang.org/pkg/regexp/syntax/](https://golang.org/pkg/regexp/syntax/)

The collected stats for web checks HTTP and HTTPS are **connect**, **data length**, **DNS**, **recv**, **send**, **status code**, **throughput**, **total**, and **wait**.