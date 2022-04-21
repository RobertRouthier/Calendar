# Calendar

This assignment was made using JQuery;

Once all starter code was transferred over, I linked all sheets together;

First action on the page was to create the rows in html until I got the look I wanted.

Once I got the look I moved that code to my JS page to dynamically create all rows using a for loop;

I put all the times into an array for my for loop to run through;

This I stuck into a function "timeBlocks";

The styling was already created so I made sure the values of row plus time was equal to said class;

I set up functionality of the save button with querySelectorAll then ran a for loop to make this functionality available for all of the save buttons;

I set up my click event to save to local storage;

The click event saves both the time and the task input to the text area;

Once my content was saving to local storage, I used get item so my tasks show up when the page loads;
