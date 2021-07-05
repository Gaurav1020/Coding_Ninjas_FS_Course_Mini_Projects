Comments are added for reference at every setup process, which might make the code look cumbersome but helps to understand the purpose of every line.
Setup steps and commands are at the bottom of index.js
For the tasks which are too big to be accomodated in the table window, a hidden scrollbar is present so the entire description CAN be read.
****Mongodb MUST be installed and configured correctly to use the application.(version 4.0.25 used so 4.0.25 or later versions preferred)****
Chrome browser preferred for one or more css properties to work properly (such as hidden scrollbar in description window)
Tuple update feature not implemented.
The list is designed to show the tasks in ordered manner with respect to due dates entered in ascending order to highlight urgent tasks at the top of the list.
Task categories are made easier to distinguish between by adding dynamic css properties using javascript.
No special software is required other than Mongodb v4.0.35 or later and Chrome.
Reminder: Setup procedure is also commented at the bottom of index.js from where the application is to be instantiated. Also make sure the terminal is in the correct directory i.e. inside ToDo directory.

If any dependency is missing:
**npm init
**npm install ejs
**npm install express
**npm install nodemon
**npm install mongoose

On terminal to start the server:
nodemon index.js

On Web browser{preferrably chrome}
localhost:8001