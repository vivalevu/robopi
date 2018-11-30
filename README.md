<h1 align="center">
<br>
  <img src="https://i.imgur.com/gyzQgQR.jpg" alt="RasPI_ArdiunoUno" width="400"></a>
  <br>
  RPi-ArdiunoUno-Robot
  <br>
</h1>
<h5 align="center">Robot drone remotely controlled over the web</h5>

---
# Introduction 
IoT Raspberry Pi Robot controlled by using implementing API calls that will communicate from the RPi to the ArdiunoUno via serial communication. I am using nodeJS for its robust features and packages that are avaliable. Using Express to create APIs to call functions that send data from the RPi to ArdiunoUno, I am able to drive the drone forward, reverse, left, and right. 

You can simply control the by using WASD key event triggers where I created keydown / keyup event listeners that triggers XMLHTTPRequest connections.

# Plans
Next commit will have WebCamera feature where stream connection is started by clicking on button at index page. 

The gameplan is to start the cameraPI at boot startup where video is capture is saved in short segments of files in a playlist file - M3U format. The playlist is updated with the new file name and the client always polls this playlist and downloads the most recent file. The images are merged in a seamelessly video on the client-side.

This method is chosen for its low latency as realtime control is necessary for this feature.

First we need to have the camera started on the system and have a stream of images stored into a temporary folder by using raspistill. Raspistill will start taking images in jpeg format and save them into a designated folder. This will be implemented by using a bash script to start rolling the camera. I will need  to create two bash scripts to start and to stop the camera. I would eventually use Grunt to start any bash scripts before deploying the webserver. 
