const week5Data = [
  {
    question: "Which of the following is/are current challenges in IoT?",
    options: [
      "a. Large scale of co-operation",
      "b. Global heterogeneity",
      "c. Both (a) and (b)",
      "d. Neither (a) nor (b)",
    ],
    answer: "c. Both (a) and (b)",
  },
  {
    question:
      "Statement: “Interoperability is not a characteristic of a product or system.”",
    options: ["a. True", "b. False"],
    answer: "b. False",
  },
  {
    question: "Interoperability is required because",
    options: [
      "a. There are different programming languages",
      "b. There are different communication protocols",
      "c. Both (a) and (b)",
      "d. Neither (a) nor (b)",
    ],
    answer: "c. Both (a) and (b)",
  },
  {
    question:
      "Statement: “Use of different programming languages such as JavaScript, Python, JAVA, and others is an example of heterogeneity in IoT. This brings in the need for interoperability.”",
    options: ["a. False", "b. True"],
    answer: "b. True",
  },
  {
    question:
      "Statement: “The interoperability between devices and device users in terms of message formats is called Systematic Interoperability.”",
    options: ["a. True", "b. False"],
    answer: "b. False",
  },
  {
    question: "What is the full form of UMB in IoT interoperability?",
    options: [
      "a. Universal Meta Bridge",
      "b. Universal Main Bridge",
      "c. Universal Main Bracket",
      "d. None of these",
    ],
    answer: "d. None of these",
  },
  {
    question: "Arduino is an open-source electronic programmable board.",
    options: ["a. True", "b. False"],
    answer: "a. True",
  },
  {
    question:
      "Additional electronic circuits are essential to load a program into the Arduino controller board.",
    options: ["a. True", "b. False"],
    answer: "b. False",
  },
  {
    question: "Arduino UNO has _________ number of Digital I/O pins.",
    options: ["a. 8", "b. 13", "c. 14", "d. None of these"],
    answer: "c. 14",
  },
  {
    question:
      "What does the following code do?\n\n\tint ledPin = 13;\nvoid setup() {\npinMode(ledPin, OUTPUT);\nfor (int i = 0; i < 3; i++) {\ndigitalWrite(ledPin, HIGH);\ndelay(1000);\ndigitalWrite(ledPin, LOW);\ndelay(500);\n}\n}\nvoid loop() {\n// Do nothing\n}",
    options: [
      "a) Blink 3 times with 1000ms ON and 500ms OFF",
      "b) Blink 3 times with 500ms ON and 500ms OFF",
      "c) Blink 3 times with 1000ms ON and 1000ms OFF",
      "d) Stay ON continuously",
    ],
    answer: "a) Blink 3 times with 1000ms ON and 500ms OFF",
  },
  {
    question: "How many types of loops will you find in Arduino Programming?",
    options: ["a. 1", "b. 2", "c. 3", "d. 4"],
    answer: "c. 3",
  },
  {
    question: "Choose the right option for if/conditional operator.",
    options: [
      "a. Val = (condition)?(Statement 1):(Statement 2)",
      "b. Val = (condition)?(Statement 2):(Statement 1)",
      "c. Val = (condition):(Statement 1)?(Statement 2)",
      "d. Val = (condition):(Statement 2)?(Statement 1)",
    ],
    answer: "a. Val = (condition)?(Statement 1):(Statement 2)",
  },
  {
    question:
      "What is the purpose of calling dht.begin(); in the setup() function?",
    options: [
      "A) To initialize the Serial Monitor",
      "B) To start communication with the DHT sensor",
      "C) To set the temperature and humidity values to zero",
      "D) To define the data pin for the sensor",
    ],
    answer: "B) To start communication with the DHT sensor",
  },
  {
    question:
      "What function is used to read the humidity value from the DHT sensor?",
    options: [
      "A) dht.getHumidity();",
      "B) dht.readTemp();",
      "C) dht.readHumidity();",
      "D) dht.getTemperature();",
    ],
    answer: "C) dht.readHumidity();",
  },
  {
    question:
      "What function is used to set the servo motor to a specific angle?",
    options: [
      "A) ServoDemo.move()",
      "B) ServoDemo.rotate()",
      "C) ServoDemo.write()",
      "D) ServoDemo.setAngle()",
    ],
    answer: "C) ServoDemo.write()",
  },
];
