# Shallomium Group Technical Challenge

As part of a team of 8, we were challenged to bring to life a project that entailed services in the AWS cloud. Here's a summary:

An otherworldly and highly fatal material was discovered, and had to be stored in a safe environment, called Vaulticore where temperature, humidity and internal air quality should be constantly kept at an optimum, else, the world will burn! So yeah, we had to save the world basically.

Our job was to monitor the environment constantly, and visualize the results on a webapp. How did we achieve this?

## Project Details:

The Shallomium sensor was read through AWS IoT Core, and we subscribed to the MQTT topic. With that topic, we created an IoT pipeline that processed the data and stored in an IoT data store.

A lambda function was then configured to read the data from data store and load it to a DynamoDB table, where our webapp could read from.

Our webapp was hosted on EC2 instances (in a VPC) deployed in an autoscaling group for high availability, placed behind an application load balancer for traffic routing. We applied TLS certificates stored in amazon certificate manager to our load balancer listeners, so that our users will access our webapp via HTTPs traffic.

We had a AWS WAF IPSet rule configured to block certain IP addresses from reaching our load balancers, that way we had extra security against attacks. We used Route 53 DNS routing policy, to host our domain name and route traffic to our load balancer.

## Conclusion

In the end, we had a highly available, secure and scalable webapp that showed the state of the Vaulticore environment every 2 minutes. Check out the architecture to get a better understanding of the project.

## Contributors:

- Charity Francis
- Sunday Goodnews
- Daniel Clement
- Solomon Ebigwei
- Onyedika Igwegbe
- Muchiri Nga'nga
- Gabriel Ayetor
- Chris Okolo
