# Angular Calendar

**Overview**

This is a project that represents a calendar built in Angular with the use of ngrx as a state control model.

**Functions**<br /><br >
*1. Month Selection* <br />
The user can select the month given the current year; the calendar will adjust itself to show the correct number of weeks and days.
The days corresponding to another month will be faded (grey) and the user wont be able to add events on them.
The default month its always gonna be the current one.

<img src="https://i.postimg.cc/vbvgJxDF/Screen-Shot-2020-09-23-at-20-30-53.png"/>
<img src="https://i.postimg.cc/xTsdcHbX/Screen-Shot-2020-09-23-at-20-31-02.png"/>

<br />

*2. Add an event* <br />
To create a event, you should select the corresponding date. On the opening modal, the user is gonna be able to select an initial and final hour for the event, an title and a color and the city.
<br />Notes:<br />
* The calendar does not identify if the initial hour is greater than the final (which would be considered wrong). The user should pay attention to that.
* The weather API's return is based on the city choosen by the user. Make sure you insert the right city name. 
* The weather API takes a few miliseconds to return the data.
* The 'Save' button will enable once all the fields are filled. <br />
<img src="https://i.postimg.cc/FztzpQVw/Screen-Shot-2020-09-23-at-20-42-13.png" /> <br />

*3. Edit existing event*<br />
If the user decide to change any information on a previous added event, he/she should click on the event card on the corresponding date.
<img src="https://i.postimg.cc/wMWPH94G/Screen-Shot-2020-09-23-at-21-08-09.png" /><br />
Once selected, a modal with the information from the event will open. <br /><br />
<img src="https://i.postimg.cc/8cHGv8KR/Screen-Shot-2020-09-23-at-21-07-16.png"/><br /><br />

*4. Delete an event*<br />
On the edit modal the user will also be able to delete the event by clicking on the garbage can icon located next to the buttons. <br /><br />

*5. Delete all the events* <br />

The user can also delete all of the events on an given date by clicking the 'x' located on the date.
<img src="https://i.postimg.cc/7LYKHF0v/Screen-Shot-2020-09-23-at-21-16-28.png" /><br /><br />

**BONUS**<br />
From the bonus list, the project has:<br />
-  "Expand the calendar to support more than the current month." <br />
- "Functionality to delete one or ALL the reminders for a specific day" <br />


**Future Improvements** <br />
* Not letting the user choose a initial hour greater than the final
* Adding toaster to show notifications
* Ordering the events
* Handling the overflow
* Allowing the duplication of a given event
