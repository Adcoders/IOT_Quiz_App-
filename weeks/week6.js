const week6Data = [
  {
    question:
      "Python is popular for embedded application development as it is a very lightweight programming language.",
    options: ["True", "False"],
    answer: "True",
  },
  {
    question: "Adafruit provides a library to work with DHT22 Sensor.",
    options: ["True", "False"],
    answer: "True",
  },
  {
    question:
      "Consider the following piece of Python code. What is the output?\n\nx = [4, 5, 6]\ny = [str(x[0] + 1), str(len(x) * 2) + '&Code']\nz = y[1].split('&')\nprint(z[1])",
    options: ["5", "12", "Code", "&Code"],
    answer: "Code",
  },
  {
    question:
      "To indicate different blocks of code, Python follows rigid indentation.",
    options: ["True", "False"],
    answer: "True",
  },
  {
    question:
      "What is the output of the following line of code in Python?\n\n>>> print “Hi, Welcome to python!”",
    options: [
      "Hi, Welcome to python!",
      "“Hi, Welcome to python!”",
      "Hi, Welcome to python",
      "None of these",
    ],
    answer: "Hi, Welcome to python!",
  },
  {
    question:
      "During remote server access by a Raspberry Pi, where the Raspberry Pi acts as a client, the client needs the following?",
    options: [
      "Only IP address of server",
      "Only port number",
      "Both server IP address and port number",
      "Client’s IP address",
    ],
    answer: "Both server IP address and port number",
  },
  {
    question:
      "State whether the following command to install the PIL library is correct or not.\n\nsudo pip install pillow",
    options: ["Correct", "Incorrect"],
    answer: "Correct",
  },
  {
    question:
      "What is the purpose of the 'w' mode in the open() function in Python?",
    options: [
      "To read a file",
      "To write data to a file, overwriting existing content",
      "To append data to a file",
      "To open a file in read and write mode",
    ],
    answer: "To write data to a file, overwriting existing content",
  },
  {
    question:
      "What will be the output of the given Python program when reading from the file?\n\nwith open('PythonProgram.txt', 'w') as file:\n    file.write('Writing data')\nwith open('PythonProgram.txt', 'r') as file:\n    f = file.read()\n    print('Reading from the file\\n')\n    print(f)",
    options: [
      "Writing data",
      "Reading from the file\nWriting data",
      "Error: File not found",
      "None of the above",
    ],
    answer: "Reading from the file\nWriting data",
  },
  {
    question: "Can we configure Raspberry Pi as a File Server?",
    options: ["Yes", "No"],
    answer: "Yes",
  },
  {
    question:
      "Which command is used to configure the Raspberry Pi for the camera module?",
    options: [
      "sudo camera-config",
      "sudo raspi-config",
      "sudo enable-camera",
      "sudo pi-setup",
    ],
    answer: "sudo raspi-config",
  },
  {
    question:
      "What is the final step after enabling the camera in the Raspberry Pi configuration?",
    options: [
      "Restart the camera service",
      "Run a camera test command",
      "Reboot the Raspberry Pi",
      "Reinstall the Raspberry Pi OS",
    ],
    answer: "Reboot the Raspberry Pi",
  },
  {
    question: "Which command Exits the nano editor?",
    options: ["Ctrl + X", "Ctrl + O", "Ctrl + K", "None of these"],
    answer: "Ctrl + X",
  },
  {
    question:
      "In a temperature-controlled fan system using a relay, when should the fan turn on?",
    options: [
      "When the relay is manually triggered",
      "When the surrounding temperature is lower than a predefined threshold",
      "When the surrounding temperature exceeds a predefined threshold",
      "When the battery voltage drops below a certain level",
    ],
    answer: "When the surrounding temperature exceeds a predefined threshold",
  },
  {
    question:
      "What does the following line of code do?\n\nraspistillcapture -o image.jpg",
    options: [
      "Captures video feed",
      "Captures still image",
      "Both (a) and (b)",
      "None of these",
    ],
    answer: "None of these",
  },
  ];