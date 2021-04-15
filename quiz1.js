var quiz = {
    // (A) PROPERTIES 
    // (A1) QUESTIONS & ANSWERS
    // Q = QUESTION, O = OPTIONS, A = CORRECT ANSWER
    data: [
    {
      q : "What is the minimum age for driving a motorcycle without gear?",
      o : [
        "16 years",
        "18 years",
        "21 years",
        "17 years"
      ],
      a : 0 // arrays start with 0
    },
    {
      q : "What should you do when you see a traffic sign of a school nearby?",
      o : [
        "Stop the vehicle",
        "Slow down and proceed carefully",
        "Press horn and proceed in the same speed",
        "Proceed at the same speed"
      ],
      a : 1
    },
    {
      q : "Before you overtake a vehicle what should you keep in mind?",
      o : [
        "The road ahead should be clearly visible and overtaking should be safe",
        "The road is not safe",
        "There are no vehicles ahead",
        "The speed of you vehicle"
      ],
      a : 0
    },
    {
      q : "If a driver sees the sign for ‘slippery road ahead’, he/she must",
      o : [
        "Drive faster",
        "Change gear and reduce speed",
        "Apply brake but proceed in the same speed",
        "Stop the vehicle"
      ],
      a : 1
    },
    {
      q : "A passenger may not be carried on a motorcycle unless it has…?",
      o : [
        "Mudguards",
        "A large engine",
        "Wide tires",
        "Proper foot rests"
      ],
      a : 3
    },
    {
      q : "Overspeeding is...",
      o : [
        "Not an offence and can be neglected",
        "Is an offence but no charges are pressed against you",
        "an offence that could lead to your driving licence being cancelled or suspended",
        "Safe"
      ],
      a : 2
    },
    {
      q : "In case you see a vehicle that has met with an accident with injured passengers inside, you should",
      o : [
        "Stop your vehicle and report the matter to the nearest police station",
        "Take the vehicle to the closest police station and report the accident",
        "Take measures to secure medical attention to those injured and report the accident to the closest police station within a period of 24 hours",
        "Continue driving"
      ],
      a : 2
    },
    {
      q : "The only vehicle which is allowed to drive at a speed of 60km/ hour is",
      o : [
        "Motor car",
        "Heavy bus/trucks",
        "Motorcycles",
        "All of the above"
      ],
      a : 0
    },
    {
      q : "The only vehicle which is allowed to drive at a speed of 60km/ hour is",
      o : [
        "Suppose you are driving on a road with two lanes. The vehicle to the front of you is driving slowly and the road ahead is clear and safe to overtake. What should you do?",
        "Overtake the vehicle from the right side of the vehicle ahead",
        "Overtake if the road is wide enough ",
        "All of the above"
      ],
      a : 1
    },
    {
      q : "If you see a yellow light at the traffic signal, you should",
      o : [
        "Reduce your vehicle speed and proceed with caution",
        "Slow the vehicle",
        "Stop the vehicle",
        "Speed up"
      ],
      a : 0
    },
    {
      q : "Be careful while overtaking vehicles marked with ‘L’( learner driver) because",
      o : [
        "You might crash into them",
        "You might crash into people on the road",
        "The learner driver might get nervous and make a mistake",
        "They might speed up"
      ],
      a : 2
    },
    {
      q : "If a vehicle is parked on the side of a road at night",
      o : [
        "The vehicle should be locked",
        "Park light should remain on",
        "All of the above",
      ],
      a : 2
    },
    {
      q : "You should never try to overtake a cyclist when",
      o : [
        "Driving on a narrow road and just before you are about to turn left",
        "On a crowded street",
        "They are slowing down",
        "All of the above"
      ],
      a : 0
    },
    {
      q : "Fog lamps should be used when",
      o : [
        "There is mist",
        "At night",
        "When the vehicle opposite is not using the dim light",
        "All of the above"
      ],
      a : 0
    },
    {
      q : "If an ambulance is approaching",
      o : [
        "No preference should be given",
        "Provide passage if there are no vehicles on the other side",
        "Allow free passage by moving to the side of the road",
        "Continue driving in the same lane"
      ],
      a : 2
    },
    {
      q : "When you are moving off from behind a parked car, you should",
      o : [
        "Give a signal, check your rear and side mirrors to back out carefully",
        "Move your vehicle as soon as possible",
        "Just give signals and proceed to move",
        "Use your horn"
      ],
      a : 0
    },
    {
      q : "When should you stop your vehicle?",
      o : [
        "When approaching the red traffic light",
        "When signaled by a police officer or involved in an accident",
        "When you are involved in an accident",
        "All of the above"
      ],
      a : 3
    },
    {
      q : "From which of these vehicles may a passenger disembark while it is still moving?",
      o : [
        "A public transport vehicle",
        "None of them",
        "A medium-sized passenger vehicle",
        "A motorized rickshaw"
      ],
      a : 1
    },
    {
      q : "What distance should you keep from the vehicle in front when driving at 45 km/h?",
      o : [
        "3 seconds",
        "1 second",
        "4 seconds",
        "2 seconds"
      ],
      a : 3
    },
    {
      q : "What signals should you make if you are going straight across at a roundabout?",
      o : [
        "Nothing on entry, left on exit",
        "Left on entry, nothing on exit",
        "Nothing on entry, right on exit",
        "Left on entry, right on exit"
      ],
      a : 0
    },
    {
      q : "Traveling at 60 km/h, how far will your vehicle travel in a single second?",
      o : [
        "16.6 m",
        "12.2 m",
        "13.8 m",
        "4.3 m"
      ],
      a : 0
    },
    {
      q : "A PUCC (Pollution Under Control Certificate) is valid for how long from the date of issue?",
      o : [
        "Twenty months",
        "Four months",
        "Twelve months",
        "Eight months"
      ],
      a : 2
    },
    {
      q : "You are parking your vehicle facing downhill. How should you set your wheels?",
      o : [
        "Turned away from the curb or edge of the road",
        "Facing straight downhill",
        "Turned towards the curb or edge of the road",
        "However they were positioned when you stopped"
      ],
      a : 2
    },
    {
      q : "If you're involved in a motor accident, how long do you have to report it to the nearest police station?",
      o : [
        "72 hours",
        "48 hours",
        "24 hours",
        "12 hours"
      ],
      a : 2
    },
    {
      q : "You are driving on a dark road at night when you see another vehicle approaching. What should you do?",
      o : [
        "Switch to high beam headlights",
        "Switch to low beam headlights",
        "Turn off your headlights",
        "Sound your horn long and hard"
      ],
      a : 1
    },
    {
      q : "If you drive while drunk, you can face a term of imprisonment of up to…?",
      o : [
        "One months",
        "Four months",
        "Six months",
        "Three months"
      ],
      a : 2
    },
    {
      q : "You see a blind person holding up their white cane at the roadside. What should you do?",
      o : [
        "Shout a warning from your window",
        "Stop and let them cross",
        "Move to the other side of the road to avoid them",
        "Accelerate to get past them quickly"
      ],
      a : 1
    },
    {
      q : "If an ambulance or fire service vehicle approaches you from behind with siren on or lights flashing, what must you do?",
      o : [
        "Slow down and activate your hazard lights",
        "Maintain your current course and speed",
        "Accelerate",
        "Pull over as soon as it is safe to do so"
      ],
      a : 3
    },
    {
      q : "What color are the number plates for private car and motorised two-wheeler owners?",
      o : [
        "Black letters, white background",
        "Black letters, yellow background",
        "Yellow letters, black background",
        "White letters, blue background"
      ],
      a : 0
    },
    {
      q : "When pulling away from the curb, what should you do?",
      o : [
        "Pull out at the sharpest angle possible",
        "Wait for a gap in the traffic then pull away with caution",
        "Pull out as quickly as possible",
        "Sound your horn as a warning"
      ],
      a : 1
    },
    {
      q : "You see a pedestrian waiting at a crossing ahead. You should…?",
      o : [
        "Hoot to warn them not to cross",
        "Come to a complete stop and wait for them to cross",
        "Speed up to be past as quickly as possible",
        "Slow down and wave them across"
      ],
      a : 1
    }
    
    ],
  
    // (A2) HTML ELEMENTS
    hWrap: null, // HTML quiz container
    hQn: null, // HTML question wrapper
    hAns: null, // HTML answers wrapper
  
    // (A3) GAME FLAGS
    now: 0, // current question
    score: 0, // current score
  
    // (B) INIT QUIZ HTML
    init: function(){
      // (B1) WRAPPER
      quiz.hWrap = document.getElementById("quizWrap");
  
      // (B2) QUESTIONS SECTION
      quiz.hQn = document.createElement("div");
      quiz.hQn.id = "quizQn";
      quiz.hWrap.appendChild(quiz.hQn);
  
      // (B3) ANSWERS SECTION
      quiz.hAns = document.createElement("div");
      quiz.hAns.id = "quizAns";
      quiz.hWrap.appendChild(quiz.hAns);
  
      // (B4) GO!
      quiz.draw();
    },
  
    // (C) DRAW QUESTION
    draw: function(){
      // (C1) QUESTION
      quiz.hQn.innerHTML = quiz.data[quiz.now].q;
  
      // (C2) OPTIONS
      quiz.hAns.innerHTML = "";
      for (let i in quiz.data[quiz.now].o) {
        let radio = document.createElement("input");
        radio.type = "radio";
        radio.name = "quiz";
        radio.id = "quizo" + i;
        quiz.hAns.appendChild(radio);
        let label = document.createElement("label");
        label.innerHTML = quiz.data[quiz.now].o[i];
        label.setAttribute("for", "quizo" + i);
        label.dataset.idx = i;
        label.addEventListener("click", quiz.select);
        quiz.hAns.appendChild(label);
      }
    },
    
    // (D) OPTION SELECTED
    select: function(){
      // (D1) DETACH ALL ONCLICK
      let all = quiz.hAns.getElementsByTagName("label");
      for (let label of all) {
        label.removeEventListener("click", quiz.select);
      }
  
      // (D2) CHECK IF CORRECT
      let correct = this.dataset.idx == quiz.data[quiz.now].a;
      if (correct) { 
        quiz.score++; 
        this.classList.add("correct");
      } else {
        this.classList.add("wrong");
      }
    
      document.getElementById("scoreBox").innerHTML = quiz.score+"/"+(quiz.now+1);

      // (D3) NEXT QUESTION OR END GAME
      quiz.now++;
      setTimeout(function(){
        if (quiz.now < quiz.data.length) { quiz.draw(); } 
        else {
          quiz.hQn.innerHTML = `You have answered ${quiz.score} of ${quiz.data.length} correctly.`;
          quiz.hAns.innerHTML = "";
        }
      }, 1000);
    }
  };
  window.addEventListener("load", quiz.init);