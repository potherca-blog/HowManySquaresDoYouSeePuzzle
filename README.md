# How Many Squares Do You See? A Puzzle.

There's a puzzle that's been circulating the web that shows you the image below 
and postulates the question "How many squares do you see?"

![squares][how_many_squares_img]


As just answering without explaining seemed a bit lame I decided I'd rather 
document my answer. As a webdeveloper I obviously broke out the old HTML/JS/CSS 
and banged a simple [Canvas][1] animation together.

Depending on your browser [YMMV][2]

To make things even more interesting (and as I was building the animation an JsFiddle anyway) 
I decided to put the code on Github and make use of [the JsFiddle read-github API][3] to display the result.  
Sadly that will not allow you to share just a result page. Luckily I am a madman and trivia like reality usually
doesn't stop me...

In this case that meant writing a *very* thin layer of JS to read the demo files from the repo and 
post these to JsFiddle in an iframe. As a bonus I made use of the service Github offers to host pages 
and, making use of [another madman's work][4], I also added nice ribbons to allow visitors to navigate to
both the code on JsFiddle (so they can play with it online) and the git repo (so they can fork the hell out of it).

I hope you like it.

[how_many_squares_img]: ./fiddles/HowManySquaresDoYouSee/how-many-squares.png  "How Many Squares Do You See?"
[1]: http://diveintohtml5.info/canvas.html
[2]: http://en.wiktionary.org/wiki/your_mileage_may_vary
[3]: http://doc.jsfiddle.net/use/github_read.html
[4]: http://blog.terrenceryan.com/github-ribbons-in-css/


