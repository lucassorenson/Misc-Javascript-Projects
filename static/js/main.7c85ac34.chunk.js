(this["webpackJsonpmisc-javascript-projects"]=this["webpackJsonpmisc-javascript-projects"]||[]).push([[0],{10:function(e,t,o){e.exports=o(18)},15:function(e,t,o){},16:function(e,t,o){},18:function(e,t,o){"use strict";o.r(t);var a=o(0),n=o.n(a),i=o(9),r=o.n(i),s=(o(15),o(16),o(17),o(2)),h=o(3),u=o(5),l=o(4),d=o(1),c=o(6),m=o(7),y=function(e){function t(e){var o;return Object(s.a)(this,t),(o=Object(u.a)(this,Object(l.a)(t).call(this,e))).getColor=function(){return"hsl(".concat(Math.ceil(359*Math.random()),", 100%, 90%)")},o.getQuote=function(){var e=Math.round(Math.random()*(m.quotes.length-1)),t=o.getColor();o.setState({currentQuote:m.quotes[e].quote,currentAuthor:m.quotes[e].author}),document.getElementById("quote-box").style.backgroundColor=t,document.getElementById("quote-box").style.boxShadow="7px 7px ".concat(t,", 10px 10px black")},o.state={currentQuote:null,currentAuthor:null},o.getQuote=o.getQuote.bind(Object(d.a)(o)),o.getColor=o.getColor.bind(Object(d.a)(o)),o}return Object(c.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.getQuote()}},{key:"render",value:function(){return n.a.createElement("div",{id:"quote-box",className:"project"},n.a.createElement("h2",null,"Random Quote Machine"),n.a.createElement("div",{id:"text-row"},n.a.createElement("h3",{id:"text"},this.state.currentQuote)),n.a.createElement("div",{id:"author-row"},n.a.createElement("h4",{id:"author"},"-",this.state.currentAuthor)),n.a.createElement("div",{id:"button-row"},n.a.createElement("button",{onClick:this.getQuote,id:"new-quote",className:"btn btn-danger"},"New Quote"),n.a.createElement("button",{className:"btn btn-primary"},n.a.createElement("a",{href:"https://www.twitter.com/intent/tweet?text=".concat(this.state.currentQuote,"%0A-").concat(this.state.currentAuthor),rel:"noopener noreferrer",target:"_blank"},"Tweet Quote"))))}}]),t}(n.a.Component),g=function(e){function t(e){var o;return Object(s.a)(this,t),(o=Object(u.a)(this,Object(l.a)(t).call(this,e))).state={isBreak:!1,sessionLength:25,breakLength:5,timeLeft:1500,isRunning:!1},o.audioRef=n.a.createRef(),o.handleStartStop=o.handleStartStop.bind(Object(d.a)(o)),o.decrementBreak=o.decrementBreak.bind(Object(d.a)(o)),o.incrementBreak=o.incrementBreak.bind(Object(d.a)(o)),o.decrementSession=o.decrementSession.bind(Object(d.a)(o)),o.incrementSession=o.incrementSession.bind(Object(d.a)(o)),o.startTimer=o.startTimer.bind(Object(d.a)(o)),o.stopTimer=o.stopTimer.bind(Object(d.a)(o)),o.tick=o.tick.bind(Object(d.a)(o)),o.reset=o.reset.bind(Object(d.a)(o)),o}return Object(c.a)(t,e),Object(h.a)(t,[{key:"decrementBreak",value:function(){this.state.breakLength>1&&this.setState({breakLength:this.state.breakLength-1,timeLeft:this.state.isBreak?60*(this.state.breakLength-1):this.state.timeLeft})}},{key:"incrementBreak",value:function(){this.state.breakLength<60&&this.setState({breakLength:this.state.breakLength+1,timeLeft:this.state.isBreak?60*(this.state.breakLength+1):this.state.timeLeft})}},{key:"decrementSession",value:function(){this.state.sessionLength>1&&this.setState({sessionLength:this.state.sessionLength-1,timeLeft:this.state.isBreak?this.state.timeLeft:60*(this.state.sessionLength-1)})}},{key:"incrementSession",value:function(){this.state.sessionLength<60&&this.setState({sessionLength:this.state.sessionLength+1,timeLeft:this.state.isBreak?this.state.timeLeft:60*(this.state.sessionLength+1)})}},{key:"reset",value:function(){this.stopTimer(),this.setState({isBreak:!1,sessionLength:25,breakLength:5,timeLeft:1500,isRunning:!1}),this.audioRef.current.pause(),this.audioRef.current.load()}},{key:"tick",value:function(){this.setState({timeLeft:this.state.timeLeft-1}),this.state.timeLeft<0&&(this.stopTimer(),this.audioRef.current.play(),this.setState({isBreak:!this.state.isBreak}),this.setState({timeLeft:this.state.isBreak?60*this.state.breakLength:60*this.state.sessionLength}),this.startTimer())}},{key:"startTimer",value:function(){this.interval=setInterval(this.tick,1e3)}},{key:"stopTimer",value:function(){clearInterval(this.interval)}},{key:"handleStartStop",value:function(){this.state.isRunning?this.stopTimer():this.startTimer(),this.setState({isRunning:!this.state.isRunning})}},{key:"render",value:function(){var e=Math.floor(this.state.timeLeft/60),t=this.state.timeLeft%60,o=(e<10?"0"+e:e)+":"+(t<10?"0"+t:t);return n.a.createElement("div",{id:"clock-body",className:"project"},n.a.createElement("h2",null,"Pomodoro Clock"),n.a.createElement("div",{id:"control-time-left"},"   ",n.a.createElement("div",null,"   ",n.a.createElement("button",{className:"btn btn-primary",onClick:this.decrementBreak},"  -  "),n.a.createElement("div",{className:"timer-control-label"},n.a.createElement("div",null,"Break Length"),n.a.createElement("div",null,this.state.breakLength)),n.a.createElement("button",{className:"btn btn-primary",onClick:this.incrementBreak},"  +  ")),n.a.createElement("div",null,"    ",n.a.createElement("button",{className:"btn btn-primary",onClick:this.decrementSession},"  -  "),n.a.createElement("div",{className:"timer-control-label"},n.a.createElement("div",null,"Session Length"),n.a.createElement("div",null,this.state.sessionLength)),n.a.createElement("button",{className:"btn btn-primary",onClick:this.incrementSession},"  +  "))),n.a.createElement("div",null,"   ",n.a.createElement("div",null,this.state.isBreak?"Break":"Session"),n.a.createElement("div",null,o)),n.a.createElement("div",null,"   ",n.a.createElement("button",{className:"btn btn-info",onClick:this.handleStartStop},this.state.isRunning?"Stop":"Start"),n.a.createElement("button",{className:"btn btn-danger",onClick:this.reset},"Reset")),n.a.createElement("audio",{id:"beep",ref:this.audioRef,src:"http://www.pacdv.com/sounds/interface_sound_effects/sound98.wav"}))}}]),t}(n.a.Component);n.a.Component;var b=function(){return n.a.createElement("div",{id:"App"},n.a.createElement("h1",null,"Miscellaneous JavaScript Projects"),n.a.createElement(y,null),n.a.createElement(g,null),n.a.createElement("footer",null,n.a.createElement("strong",null,"Created by ",n.a.createElement("a",{href:"https://www.lucassorenson.github.io",target:"_blank"},"Lucas Sorenson"))))};r.a.render(n.a.createElement(b,null),document.getElementById("root"))},7:function(e){e.exports=JSON.parse('{"quotes":[{"quote":"Life isn\u2019t about getting and having, it\u2019s about giving and being.","author":"Kevin Kruse"},{"quote":"Whatever the mind of man can conceive and believe, it can achieve.","author":"Napoleon Hill"},{"quote":"Strive not to be a success, but rather to be of value.","author":"Albert Einstein"},{"quote":"Two roads diverged in a wood, and I\u2014I took the one less traveled by, And that has made all the difference.","author":"Robert Frost"},{"quote":"I attribute my success to this: I never gave or took any excuse.","author":"Florence Nightingale"},{"quote":"You miss 100% of the shots you don\u2019t take.","author":"Wayne Gretzky"},{"quote":"I\u2019ve missed more than 9000 shots in my career. I\u2019ve lost almost 300 games. 26 times I\u2019ve been trusted to take the game winning shot and missed. I\u2019ve failed over and over and over again in my life. And that is why I succeed.","author":"Michael Jordan"},{"quote":"The most difficult thing is the decision to act, the rest is merely tenacity.","author":"Amelia Earhart"},{"quote":"Every strike brings me closer to the next home run.","author":"Babe Ruth"},{"quote":"Definiteness of purpose is the starting point of all achievement.","author":"W. Clement Stone"},{"quote":"We must balance conspicuous consumption with conscious capitalism.","author":"Kevin Kruse"},{"quote":"Life is what happens to you while you\u2019re busy making other plans.","author":"John Lennon"},{"quote":"We become what we think about.","author":"Earl Nightingale"},{"quote":"Twenty years from now you will be more disappointed by the things that you didn\u2019t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails.  Explore, Dream, Discover.","author":"Mark Twain"},{"quote":"Life is 10% what happens to me and 90% of how I react to it.","author":"Charles Swindoll"},{"quote":"The most common way people give up their power is by thinking they don\u2019t have any.","author":"Alice Walker"},{"quote":"The mind is everything. What you think you become.","author":"Buddha"},{"quote":"The best time to plant a tree was 20 years ago. The second best time is now.","author":"Chinese Proverb"},{"quote":"An unexamined life is not worth living.","author":"Socrates"},{"quote":"Eighty percent of success is showing up.","author":"Woody Allen"},{"quote":"Your time is limited, so don\u2019t waste it living someone else\u2019s life.","author":"Steve Jobs"},{"quote":"Winning isn\u2019t everything, but wanting to win is.","author":"Vince Lombardi"},{"quote":"I am not a product of my circumstances. I am a product of my decisions.","author":"Stephen Covey"},{"quote":"Every child is an artist.  The problem is how to remain an artist once he grows up.","author":"Pablo Picasso"},{"quote":"You can never cross the ocean until you have the courage to lose sight of the shore.","author":"Christopher Columbus"},{"quote":"I\u2019ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.","author":"Maya Angelou"},{"quote":"Either you run the day, or the day runs you.","author":"Jim Rohn"},{"quote":"Whether you think you can or you think you can\u2019t, you\u2019re right.","author":"Henry Ford"},{"quote":"The two most important days in your life are the day you are born and the day you find out why.","author":"Mark Twain"},{"quote":"Whatever you can do, or dream you can, begin it.  Boldness has genius, power and magic in it.","author":"Johann Wolfgang von Goethe"},{"quote":"The best revenge is massive success.","author":"Frank Sinatra"},{"quote":"People often say that motivation doesn\u2019t last. Well, neither does bathing.  That\u2019s why we recommend it daily.","author":"Zig Ziglar"},{"quote":"Life shrinks or expands in proportion to one\u2019s courage.","author":"Anais Nin"},{"quote":"If you hear a voice within you say \u201cyou cannot paint,\u201d then by all means paint and that voice will be silenced.","author":"Vincent Van Gogh"},{"quote":"There is only one way to avoid criticism: do nothing, say nothing, and be nothing.","author":"Aristotle"},{"quote":"Ask and it will be given to you; search, and you will find; knock and the door will be opened for you.","author":"Jesus"},{"quote":"The only person you are destined to become is the person you decide to be.","author":"Ralph Waldo Emerson"},{"quote":"Go confidently in the direction of your dreams.  Live the life you have imagined.","author":"Henry David Thoreau"},{"quote":"When I stand before God at the end of my life, I would hope that I would not have a single bit of talent left and could say, I used everything you gave me.","author":"Erma Bombeck"},{"quote":"Few things can help an individual more than to place responsibility on him, and to let him know that you trust him.","author":"Booker T. Washington"},{"quote":"Certain things catch your eye, but pursue only those that capture the heart.","author":" Ancient Indian Proverb"},{"quote":"Believe you can and you\u2019re halfway there.","author":"Theodore Roosevelt"},{"quote":"Everything you\u2019ve ever wanted is on the other side of fear.","author":"George Addair"},{"quote":"We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light.","author":"Plato"},{"quote":"Teach thy tongue to say, \u201cI do not know,\u201d and thous shalt progress.","author":"Maimonides"},{"quote":"Start where you are. Use what you have.  Do what you can.","author":"Arthur Ashe"},{"quote":"When I was 5 years old, my mother always told me that happiness was the key to life.  When I went to school, they asked me what I wanted to be when I grew up.  I wrote down \u2018happy\u2019.  They told me I didn\u2019t understand the assignment, and I told them they didn\u2019t understand life.","author":"John Lennon"},{"quote":"Fall seven times and stand up eight.","author":"Japanese Proverb"},{"quote":"When one door of happiness closes, another opens, but often we look so long at the closed door that we do not see the one that has been opened for us.","author":"Helen Keller"},{"quote":"Everything has beauty, but not everyone can see.","author":"Confucius"},{"quote":"How wonderful it is that nobody need wait a single moment before starting to improve the world.","author":"Anne Frank"},{"quote":"When I let go of what I am, I become what I might be.","author":"Lao Tzu"},{"quote":"Life is not measured by the number of breaths we take, but by the moments that take our breath away.","author":"Maya Angelou"},{"quote":"Happiness is not something readymade.  It comes from your own actions.","author":"Dalai Lama"},{"quote":"If you\u2019re offered a seat on a rocket ship, don\u2019t ask what seat! Just get on.","author":"Sheryl Sandberg"},{"quote":"First, have a definite, clear practical ideal; a goal, an objective. Second, have the necessary means to achieve your ends; wisdom, money, materials, and methods. Third, adjust all your means to that end.","author":"Aristotle"},{"quote":"If the wind will not serve, take to the oars.","author":"Latin Proverb"},{"quote":"You can\u2019t fall if you don\u2019t climb.  But there\u2019s no joy in living your whole life on the ground.","author":"Unknown"},{"quote":"We must believe that we are gifted for something, and that this thing, at whatever cost, must be attained.","author":"Marie Curie"},{"quote":"Too many of us are not living our dreams because we are living our fears.","author":"Les Brown"},{"quote":"Challenges are what make life interesting and overcoming them is what makes life meaningful.","author":"Joshua J. Marine"},{"quote":"If you want to lift yourself up, lift up someone else.","author":"Booker T. Washington"},{"quote":"I have been impressed with the urgency of doing. Knowing is not enough; we must apply. Being willing is not enough; we must do.","author":"Leonardo da Vinci"},{"quote":"Limitations live only in our minds.  But if we use our imaginations, our possibilities become limitless.","author":"Jamie Paolinetti"},{"quote":"You take your life in your own hands, and what happens? A terrible thing, no one to blame.","author":"Erica Jong"},{"quote":"What\u2019s money? A man is a success if he gets up in the morning and goes to bed at night and in between does what he wants to do.","author":"Bob Dylan"},{"quote":"I didn\u2019t fail the test. I just found 100 ways to do it wrong.","author":"Benjamin Franklin"},{"quote":"In order to succeed, your desire for success should be greater than your fear of failure.","author":"Bill Cosby"},{"quote":"A person who never made a mistake never tried anything new.","author":" Albert Einstein"},{"quote":"The person who says it cannot be done should not interrupt the person who is doing it.","author":"Chinese Proverb"},{"quote":"There are no traffic jams along the extra mile.","author":"Roger Staubach"},{"quote":"It is never too late to be what you might have been.","author":"George Eliot"},{"quote":"You become what you believe.","author":"Oprah Winfrey"},{"quote":"I would rather die of passion than of boredom.","author":"Vincent van Gogh"},{"quote":"A truly rich man is one whose children run into his arms when his hands are empty.","author":"Unknown"},{"quote":"It is not what you do for your children, but what you have taught them to do for themselves, that will make them successful human beings.","author":"Ann Landers"},{"quote":"If you want your children to turn out well, spend twice as much time with them, and half as much money.","author":"Abigail Van Buren"},{"quote":"Build your own dreams, or someone else will hire you to build theirs.","author":"Farrah Gray"},{"quote":"The battles that count aren\u2019t the ones for gold medals. The struggles within yourself\u2013the invisible battles inside all of us\u2013that\u2019s where it\u2019s at.","author":"Jesse Owens"},{"quote":"Education costs money.  But then so does ignorance.","author":"Sir Claus Moser"},{"quote":"I have learned over the years that when one\u2019s mind is made up, this diminishes fear.","author":"Rosa Parks"},{"quote":"It does not matter how slowly you go as long as you do not stop.","author":"Confucius"},{"quote":"If you look at what you have in life, you\u2019ll always have more. If you look at what you don\u2019t have in life, you\u2019ll never have enough.","author":"Oprah Winfrey"},{"quote":"Remember that not getting what you want is sometimes a wonderful stroke of luck.","author":"Dalai Lama"},{"quote":"You can\u2019t use up creativity.  The more you use, the more you have.","author":"Maya Angelou"},{"quote":"Dream big and dare to fail.","author":"Norman Vaughan"},{"quote":"Our lives begin to end the day we become silent about things that matter.","author":"Martin Luther King Jr."},{"quote":"Do what you can, where you are, with what you have.","author":"Teddy Roosevelt"},{"quote":"If you do what you\u2019ve always done, you\u2019ll get what you\u2019ve always gotten.","author":"Tony Robbins"},{"quote":"Dreaming, after all, is a form of planning.","author":"Gloria Steinem"},{"quote":"It\u2019s your place in the world; it\u2019s your life. Go on and do all you can with it, and make it the life you want to live.","author":"Mae Jemison"},{"quote":"You may be disappointed if you fail, but you are doomed if you don\u2019t try.","author":"Beverly Sills"},{"quote":"Remember no one can make you feel inferior without your consent.","author":"Eleanor Roosevelt"},{"quote":"Life is what we make it, always has been, always will be.","author":"Grandma Moses"},{"quote":"The question isn\u2019t who is going to let me; it\u2019s who is going to stop me.","author":"Ayn Rand"},{"quote":"When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.","author":"Henry Ford"},{"quote":"It\u2019s not the years in your life that count. It\u2019s the life in your years.","author":"Abraham Lincoln"},{"quote":"Change your thoughts and you change your world.","author":"Norman Vincent Peale"},{"quote":"Either write something worth reading or do something worth writing.","author":"Benjamin Franklin"},{"quote":"Nothing is impossible, the word itself says, \u201cI\u2019m possible!\u201d","author":"\u2013Audrey Hepburn"},{"quote":"The only way to do great work is to love what you do.","author":"Steve Jobs"},{"quote":"If you can dream it, you can achieve it.","author":"Zig Ziglar"}]}')}},[[10,1,2]]]);
//# sourceMappingURL=main.7c85ac34.chunk.js.map