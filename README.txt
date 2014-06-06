Here's what you're building:

The web page will display selectors allowing you to use the "point buy" system in pathfinder to add and remove the six core attributes of a PC.  You should be able to click buttons to allow you to add and remove ranks in each attribute, and it should consistently charge / refund points for each stat.

Basic acceptance criteria:

    Do not define any css or js in your html.  Try to define as little styling in your js as possible (for this assignment, you shouldn't need to do any, but I might be wrong).
    Only 1 namespaced variable in the global scope is allowed (I'll explain more on this if need be).
    Do not use any magic strings / magic numbers / etc (I'll explain what this means if need be).  I'm not a super strong stickler on this convention in general, but for this assignment I will be.
    Do not reference any elements by id.
    Do not allow a function to be more than 30 lines of code, and do not allow a line to be more than 120 characters.  Break and wrap strings appropriately, and if you absolutely must go over one of these dimensions, go over in height.
    The code should be 100% self consistent.  That is to say that if you reduce the number of points available by raising a stat, reducing that stat should raise the number of points available by the same amount.
    The markup should have reasonable default values so that the page is usable immediately when dom ready.
    No functions should need to execute on page load.  Variables will, of course, be defined as the script that contains them is read.
    You should give some sort of indicator as to how many points remain (or are overspent).
    No external libraries can be used.  This code should work without a web server or internet connection.  Of course, you may use the internet to complete this assignment :)
    Don't let a js file be more than 200 lines of code.  Break functions off into logical pieces, and load each file separately with html scripts.

Bonus points (do this only after you've built the above, and only if you want to):

    Support different races and their bonuses.  Humans, etc will need to have the means to select a stat, and changing from human to elf will have to clear that bonus stat.
    Support manually entering specific stats and spending points as the user types them or on blur or enter.  If on enter, allow the user to immediately focus on the next stat (str->dex, con-> int, cha->str, etc).
    Support additional stats gained by level.  Do this by allowing the user to enter their level, and select their lvl 4, 8, 12, etc bonus.
    Support additional stats gained by gear.  Do this by allowing the user to equip a list of arbitrary gear that you define that has special properties.  The user shouldn't need to see the specific stats modified; the modification should just happen upon equip / removal.
