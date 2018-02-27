// app.js
var gpio = require("pi-gpio");

module.exports = app => {
    app.beforeStart(async () => {



 

        

    });

    const Buzzer = 11
    CL = [0, 131, 147, 165, 175, 196, 211, 248]	//	# Frequency of Low C notes

CM = [0, 262, 294, 330, 350, 393, 441, 495]		//# Frequency of Middle C notes

CH = [0, 525, 589, 661, 700, 786, 882, 990]		//# Frequency of High C notes

song_1 = [	CM[3], CM[5], CM[6], CM[3], CM[2], CM[3], CM[5], CM[6], //# Notes of song1
            CH[1], CM[6], CM[5], CM[1], CM[3], CM[2], CM[2], CM[3], 
            CM[5], CM[2], CM[3], CM[3], CL[6], CL[6], CL[6], CM[1],
            CM[2], CM[3], CM[2], CL[7], CL[6], CM[1], CL[5]	]

beat_1 = [	1, 1, 3, 1, 1, 3, 1, 1, 			//Beats of song 1, 1 means 1/8 beats
            1, 1, 1, 1, 1, 1, 3, 1, 
            1, 3, 1, 1, 1, 1, 1, 1, 
            1, 2, 1, 1, 1, 1, 1, 1, 
            1, 1, 3	]

song_2 = [	CM[1], CM[1], CM[1], CL[5], CM[3], CM[3], CM[3], CM[1], //tes of song2
            CM[1], CM[3], CM[5], CM[5], CM[4], CM[3], CM[2], CM[2], 
            CM[3], CM[4], CM[4], CM[3], CM[2], CM[3], CM[1], CM[1], 
            CM[3], CM[2], CL[5], CL[7], CM[2], CM[1]	]

beat_2 = [	1, 1, 2, 2, 1, 1, 2, 2, 			//# Beats of song 2, 1 means 1/8 beats
            1, 1, 2, 2, 1, 1, 3, 1, 
            1, 2, 2, 1, 1, 2, 2, 1, 
            1, 2, 2, 1, 1, 3 ]

    gpio.open(Buzzer, "output", function(err) {		// Open pin 16 for output
        gpio.write(16, 1, function() {			// Set pin 16 high (1)
            gpio.close(16);						// Close pin 16
        });
    });


console.log(12121)


  }; 