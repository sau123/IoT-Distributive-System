# IoT-Distributive-System

######Installation :  
You would require :  

1. **Eclipse** or any IDE to run this project. I used Eclipse-Mars 4.5.0 version.  
2. An account on **MongoLab** to set up MongoDB & store/retrieve the values in JSON format.  
3. **Postman** extension : To test your APIs. You don't require it as such. But I would recommend it.
4. **AngularJS**, You can also use HTML too instead, but AngularJS makes it much simpler.    
  
  
This project implements the Open Mobile Alliance(OMA) Lightweight machine to machine(LWM2M) specifications :  
#####1) BootStrap :  
This is the first step of the IoT distributive system, where all the devices are boostrapped to the MongodB. Only devices which are bootstrapped can be registered.

#####2) Registration 
    a) Register  
    b) Update   
    c) Delete  
    
#####3) Device Management  
    a) Create  
    b) Read  
    c) Discover  
    d) Write  
    e) Write Attributes  
    f) Execute   
    g) Create Object (Eg. Security Object, GPS Object)  
    h) Delete Object  
    
#####4) Information Reporting  
    a) Observe   
    b) Notify   
    c) Cancel Observation  
      
      
The IoT system consists of following devices :
  1. Refrigerator  
  2. Air Conditioner  
  3. Smart Door Locks  
  4. Thermostat  
  
These devices send their current attributes like temperature, pressure, voltage etc to the server on interval of 5 secs. 
These data would be used to optimize the power comsumption of the devices or to check if all the door locks are locked.  

Here, there are 4 complete different scenarios which implements the functionalities according to the OMA LWM2M specifications.  

Scenario | Description
 -------------------|-----------------
Energy Management | This tab of the website displays the current attribute values of the devices. It displays the last 5 attribute values of each IoT devices and makes a decision whether to optimize it.
Location Management   | Displays the current location of all the devices. Since the project didn't consist of actual devices, the latitude and longitude of the device are hardcoded.
Security Management   | Implemented the Messaging IaaS to get a message incase of security breach.   
Efficiency Management | Optimizes the attribute values of the devices like temperature, voltage, pressure if they are above their respective threshold value. If the user wish to, he can change the current values of the device to optimal values and the same is reflected in the MongoDB,

