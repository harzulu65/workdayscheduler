# Calendar

## 05 Third-Party APIs: Work Day Scheduler

Create a simple calendar application that allows the user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.
You'll need to use the Moment.js library to work with date and time. Be sure to read the documentation carefully and concentrate on using Moment.js in the browser.

## User Story

AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively

## Acceptance Criteria

GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist

## Overview

This task at my Coding Boot Camp was an interesting one, we needed to reference times and dates from Moment.js and comply with the acceptance criteria.

I started by working on the HTML side, very simple, trying to leave everything to the script.

I followed on the script by adding most of the "workable" components in the page, great exercise. I focus on the overall logic first, I mean, the overall functioning, it took me some time by getting all the possibilities, again good mental exercise. Some cases I worked on paper but most of time working on the code itself. If I get one of my important output in this task, it should be that I need to work more on paper before getting into coding. I realized this comes with time as I come more efficient in the knwoledge of all tools.

## Plan

I started by getting data from moment.js, date and time and asigning that to some variables.

Then, I setup the loading of the page first, initially I did everything without using localStorage, I used arrays to test everything related to dynamic data.

At the same time, I used some CSS commands to visualize depending on the task's objectives.

At last I worked on click events. Once all these was almost final, I worked on the local Storage.

Adjustments took more than I expected, many options coming from the user input or no user input data made it a little demanding, trying to figure out the conditions, it was not demanding on the conding side but some how demanding on the mental side, trying to figure out hout to handle the different situtations.

## Testing

I suggest for testing, make sure that the Local Storage is empty, this will give a better impression on how the app works, if it has some data, it wouldn't be as testing it from scratch. I will try to make sure that the data in GitHub is empty.
