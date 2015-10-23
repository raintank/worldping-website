+++
date = "2015-07-01T13:27:26-04:00"
title = "welcome"
categories = [ "Questions" ]
+++

## Installation
Head to [grafana.org](http://docs.grafana.org/installation/) and [download](http://grafana.org/download/)
the latest release.

If you have any problems please read the [troubleshooting guide](http://docs.grafana.org/installation/troubleshooting/).

## Documentation & Support
Be sure to read the [getting started guide](http://docs.grafana.org/guides/gettingstarted/) and the other feature guides.

## Run from master
If you want to build a package your self, or contribute. Here is a guide for how to do that. You can always find
the latest master builds [here](http://grafana.org/download/builds)

### Dependencies

- Go 1.4
- NodeJS

### Setting up the code directories for the raintank version.

```
go get github.com/grafana/grafana
go get github.com/raintank/grafana
cd $GOPATH/src/github.com/grafana/
mv grafana grafana-upstream
ln -s $GOPATH/src/github.com/raintank/grafana .
```

### Building the backend

Note that we need to use the `github.com/grafana/grafana` directory because that's what the import path is.
If you so desire, you can switch back and forth between raintank version and upstream version by adding a remote
and switching branches.  But if you followed the above instructions, this will by default let you work with the raintank version:

```
cd $GOPATH/src/github.com/grafana/grafana
go run build.go setup            (only needed once to install godep)
godep restore                    (will pull down all golang lib dependencies in your current GOPATH)
go build .
```

### Building frontend assets

To build less to css for the frontend you will need a recent version of of node (v0.12.0),
npm (v2.5.0) and grunt (v0.4.5). Run the following:

```
npm install
npm install -g grunt-cli
grunt
```

### Recompile backend on source change
To rebuild on source change (requires that you executed godep restore)
```
go get github.com/Unknwon/bra
bra run
```

### Running
```
./grafana
```

Open grafana in your browser (default http://localhost:3000) and login with admin user (default user/pass = admin/admin).

### Dev config

Create a custom.ini in the conf directory to override default configuration options.
You only need to add the options you want to override. Config files are applied in the order of:

1. grafana.ini
2. dev.ini (if found)
3. custom.ini

## Create a pull request
Before or after you create a pull request, sign the [contributor license agreement](http://grafana.org/docs/contributing/cla.html).
## Contribute
If you have any idea for an improvement or found a bug do not hesitate to open an issue.
And if you have time clone this repo and submit a pull request and help me make Grafana
the kickass metrics & devops dashboard we all dream about!

Before creating a pull request be sure that "grunt test" runs without any style or unit test errors, also
please [sign the CLA](http://grafana.org/docs/contributing/cla.html)

## License

Grafana is distributed under Apache 2.0 License.
Work in progress Grafana 2.0 (with included Grafana backend)
