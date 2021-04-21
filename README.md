### Notice: worldPing has reached End-Of-Life (EOL) on April 1, 2021

Everything you love about worldPing is now available with the new synthetic monitoring feature in Grafana Cloud, plus you’ll get reduced complexity and all the benefits of Grafana Cloud. 

Take the first step to get started with synthetic monitoring by signing up for a Grafana Cloud account. [Get started for free.](https://go2.grafana.com/worldPing-EOL-grafana-cloud.html?pg=plugins-wp&plcmt=body-txt)

# worldPing Website
based on raintank website

Prerequisites for new setups:
- Run `npm install`
- Make sure Hugo is installed. You can verify Hugo is installed by typing `which hugo` from the command line. If hugo is not found, please install: https://gohugo.io/overview/installing/

Quick build instructions:

1. Run `grunt connect` to start the server
2. In a separate terminal, run `grunt watch dev` to compile into `build/dev/'
3. Open http://127.0.0.1:1342/ in a browser (or whatever the port specified in gruntfile.js)
4. Shake vigorously. Pour. Enjoy.

**Pushing to dev**
worldping-staging.raintank.io

1. ssh into the box
2. pull the latest commits from github: `cd /var/local/worldping-staging && git pull`
4. reprocess the assets, placing them in build/dist: `grunt`
5. restart application: `service worldping-staging restart`


**Pushing to production**
worldping.raintank.io

1. ssh into the box
2. pull the latest commits from github: `cd /var/local/worldping-website && git pull`
4. reprocess the assets, placing them in build/dist: `grunt`
5. restart application: `service worldping restart`
