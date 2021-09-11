# Simple web server that outputs the IP addresses of the source and destination

A simple web server that outputs the IP addresses of the source and destination, very useful for testing loadbalancer to show real requests. Recommended to run on server

# Installing & Running
To install and run simply follow these steps:

1)  Clone this repo

2)  Open your terminal and run `node index.js`

3)  Your server is now available at `http://ip-server:4000/`

# Run With Docker
To run with docker follow these steps:

1)  build the image: `docker build -f Dockerfile-alpine -t <docker username>/web-app .`
2)  run the image: `docker run -p 80:4000 <docker username>/web-app`
3)  Your server is now available at `http://ip-server/`
