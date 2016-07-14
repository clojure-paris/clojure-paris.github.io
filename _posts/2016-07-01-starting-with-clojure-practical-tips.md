---
layout: blog-single
title: "Practical Starter Tips for Clojure"
author: Jérémie Grodziski
permalink: /starting-with-clojure-practical-tips
tags: [clojure,introduction,emacs,vi]
---
In this article, I share my experience of developing with [Clojure](http://clojure.org/) over the last months. I focus on the practical tips that will allow you to start seamlessly on Mac Os X (but should apply with Linux and Windows).

![Clojure logo](/img/clojure-logo.png)

# Clojure Resources

When learning Clojure, first of all: have great resources to rely on and not get lost.

## Books 

If you begins with functional programming I suggest you to start with [Clojure Programming from Christophe Grand, O'Reilly](http://shop.oreilly.com/product/0636920013754.do), once more experienced you can follow with the amazing [Joy of clojure](http://www.manning.com/fogus/) for hindsightful thoughts about programming applied with clojure ([a 2nd edition is out](http://www.manning.com/fogus2/)). For those of you that prefer a more "example oriented" approach, have a look at the nice [Clojure Cookbook](http://clojure-cookbook.com/). If you have a Java/OO background I suggest you to read [Functional Programming for the Java Developer](http://shop.oreilly.com/product/0636920021667.do) and [Functional Programming for the Object Oriented Programmer](https://leanpub.com/fp-oo). Of course, the bible, for more fundamental stuffs: [Structure and Interpretation of Computer Programs](http://mitpress.mit.edu/sicp/) (A good [PDF](https://github.com/sarabander/sicp-pdf) and [EPUB version](https://github.com/sarabander/sicp) are available).

## Cheatsheet and documentation
I tend to have a [Clojure Cheatsheet](http://clojure.org/cheatsheet) and a browser always opened on [clojuredocs.org](http://www.clojuredocs.org). I cloned the [clojuredocs repo](https://github.com/zkim/clojuredocs) so I always access the [clojuredocs](http://www.clojuredocs.org) on my Mac even when I'm offline. You can also access clojuredocs directly from the REPL with [clojuredocs-client](https://github.com/dakrone/clojuredocs-client). You should also have a look at the [Clojure Style Guide](https://github.com/bbatsov/clojure-style-guide).

There is now an up-to-date alternative to ClojureDocs named [Clojure Grimoire](https://www.conj.io/), also [Clojure Grimoire is available offline](https://github.com/arrdem/grimoire). The [Clojure Cheatsheet is even updated to link to Grimoire](https://github.com/jafingerhut/clojure-cheatsheets/blob/master/pdf/cheatsheet-a4-color.pdf?raw=true) instead of ClojureDocs.

## Community news through newsletters and blogs

Clojure is already well-stocked with newsletters: [Clojure Gazette](http://www.clojuregazette.com/), [(def newsletter)](http://defnewsletter.com/), [Read Eval Print &lambda;ove](http://replove.herokuapp.com/) and agreggators: [Planet Clojure](http://planet.clojure.in/) and [Clojurls](http://clojurls.com/).

[Tero Parviainen](https://twitter.com/teropa), that organized [ClojureCup](http://clojurecup.com/), also has [a great list of Clojure resources](https://gist.github.com/teropa/5346635), [another list of clojure resources](https://github.com/matthiasn/Clojure-Resources).

I personaly gave a clojure presentation at the [Lausanne Java User Group](http://jugl.ch/) some times ago, [here are my "Clojure Introduction slides"](https://speakerdeck.com/jgrodziski/an-introduction-to-clojure).

<script async class="speakerdeck-embed" data-id="ee436010883b01318896164c1d05617a" data-ratio="1.41241379310345" src="//speakerdeck.com/assets/embed.js"></script>

## Online resources

[BraveClojure](http://www.braveclojure.com/) has great and detailed articles about Clojure and for exercising you've got [4Clojure](http://www.4clojure.com/) and [ClojureKoans](http://clojurekoans.com/). [Clojure from the ground up](http://aphyr.com/tags/Clojure-from-the-ground-up) is also a good introduction, and [Clojure Distilled](http://yogthos.github.io/ClojureDistilled.html) will introduce you to the mindset needed when using Clojure.
The articles and newsletter from Eric Normand at [Lispcast](http://www.lispcast.com) are top notch too.

## Conferences

Some conferences are entirely dedicated to Clojure: [ClojureWest](http://www.clojurewest.org/) and [clojure/conj](http://clojure-conj.org/) in US, [EuroClojure](http://euroclojure.com/) in Europe. Some have a good inclination towards Clojure like [StrangeLoop](https://thestrangeloop.com/) or [LambdaJam](http://www.lambdajam.com/).

# Common Environment for Clojure Programming

## Java / Clojure / Leiningen
A [JDK](https://jdk8.java.net/), [Clojure](http://clojure.org/getting_started), and [Leiningen](http://leiningen.org/#documentation) if you want your repl loaded with all the classpath dependencies of your project just type ``` lein repl ```.

## Make the non-US keyboard more hacker-friendly
The <kbd>&#x21ea;</kbd> (caps-lock) key is almost unused and as a very convenient and accessible one I suggest you to [remap it](http://www.drbunsen.org/remapping-caps-lock/) to <kbd>ctrl</kbd>. All the non-US keyboard layout are painful for daily use (I use a french one!), especially when you type a lot of <kbd>(</kbd><kbd>)</kbd>, <kbd>{</kbd><kbd>}</kbd> and <kbd>[</kbd><kbd>]</kbd>. Therefore, I installed [KeyRemap4MacBook](http://pqrs.org/macosx/keyremap4macbook/) and assign the <kbd>[</kbd> to a single keystroke on the <kbd>&#x21E7;</kbd> (shift) key. Of cource I assigned <kbd>(</kbd> for the left one, and <kbd>)</kbd> for the right one. The combination of <kbd>&#x21E7;</kbd> of 'alt-shift' but by hitting the 'alt' or 'cmd' key first print me respectively a <kbd>{</kbd> or <kbd>[</kbd> (and so on for the right side <kbd>}</kbd> and <kbd>]</kbd>). Here is [my modified KeyRemap4MacBook private.xml as a gist](https://gist.github.com/jgrodziski/5228788).

## iTerm2
[iTerm2](http://www.iterm2.com) is a terminal emulator for Max OS X with impressive features, [its configurability](http://www.iterm2.com/#/section/features/configurability) is the major one for me.

## tmux
[tmux](http://tmux.sourceforge.net/) is a terminal multiplexer allowing you to manage window and panes in _one_ terminal and in a persistent way (that's to say you can close the terminal window, your session stay alive in the background with the tmux process). The best part of tmux is that it allows to script all my development environment in one command invocation: starting all the databases, the web server, the log tail, a window for the front-end, the backend, the infrastructure, etc..
The [tmux book from pragprog](http://pragprog.com/book/bhtmux/tmux) is a must have to get started.

## zsh

[zsh](http://zsh.sourceforge.net/) is a shell designed for interactive use, hence the shortcuts and auto-completion it provides are simply awesome. Install [oh-my-zsh](https://github.com/robbyrussell/oh-my-zsh) to get a bundle of useful plugins in a seamless installation.

Here are some links to discover the power of zsh: 

* [Tips, tricks and examples for the Z shell](http://grml.org/zsh/zsh-lovers.html)
* [Book From Bash to Z Shell](http://www.bash2zsh.com/)
* [Zsh is your friend](http://mikegrouchy.com/blog/2012/01/zsh-is-your-friend.html).

As a conclusion, here is a great blog post about the [text triumvira that the combination of zsh, tmux and vim is](http://www.drbunsen.org/the-text-triumvirate/).

# Clojure Editor

The very first goal is to have an editor opened in one window and a clojure [REPL](http://en.wikipedia.org/wiki/Read%E2%80%93eval%E2%80%93print_loop) beside, then to send code in the [REPL](http://en.wikipedia.org/wiki/Read%E2%80%93eval%E2%80%93print_loop) for evaluation. That's all I need and it's called REPL-Oriented Development! beside the IDE choice, a good workflow with the REPL is also mandatory, here are some links about the subject: the famous [Clojure Workflow Reloaded](http://thinkrelevance.com/blog/2013/06/04/clojure-workflow-reloaded) based on [tools.namespace](https://github.com/clojure/tools.namespace), [Give your Clojure Workflow more flow](http://z.caudate.me/give-your-clojure-workflow-more-flow/).

There are basically 3 schools of thoughts in 2016 on the editor subject: vim, emacs and Cursive. I personally have gone through all the three.

## The vim School of Thought
Vim is a basic choice with limited features about the language comprehension as vim almost edit text only but also easier to start with.
I don't cover the basics of working with vim as there is plenty of resources on the web, here are some:

* [Everyone who tried to convince me to use vim was wrong](http://yehudakatz.com/2010/07/29/everyone-who-tried-to-convince-me-to-use-vim-was-wrong/)
* [Coming Home to Vim](http://stevelosh.com/blog/2010/09/coming-home-to-vim/)
* [Vim Cookbook](http://www.oualline.com/vim-cook.html)
* [The Zen of vi is that you're speaking a language](http://stackoverflow.com/questions/1218390/what-is-your-most-productive-shortcut-with-vim/1220118#1220118)
* [Surviving Your First Week in Vim](http://vimuniversity.com/samples/surviving-your-first-week-in-vim)
* [Book of the Pragmatic Bookshelf - Practical Vim: Edit Text at the Speed of Thought](http://pragprog.com/book/dnvim/practical-vim)

### Clojure and Vim

Install [VimClojure](https://github.com/vim-scripts/VimClojure) and then <kbd>C-c</kbd> <kbd>C-c</kbd> will send the form under the cursor to the REPL hosted in a [tmux](http://tmux.sourceforge.net/) [pane](http://blog.hawkhost.com/2010/06/28/tmux-the-terminal-multiplexer/). The first time you invoke the command it will ask you the [tmux](http://tmux.sourceforge.net/) window.pane you want your selection to be sent. It's the most simpler and immediate development environment I used myself for some months.
I didn't use the nailgun plugin for interacting with a repl as the level of clojure integration is very low with vim. At that time I prefered to just send basic text to the repl and switch between vim and the repl inside a tmux pane. A better integration and understanding of the edited language is also why I migrate to emacs.

I suggest you to read ["The Text Triumvirate"](http://www.drbunsen.org/text-triumvirate.html), a great blog post about the productive environment resulting from the use of the "vim/tmux/zsh".

## The Emacs School of Thought

I switch from vim to emacs to get a better integration between the Clojure source and the repl. Emacs has a different philosophy compared to Vim, [here is the emacs manual](http://www.gnu.org/software/emacs/manual/) to get through it, and an [Emacs CheatSheet](http://www.ic.unicamp.br/~helio/disciplinas/MC102/Emacs_Reference_Card.pdf) for a reference.

### Starting and Quitting Emacs
Emacs should be started in the background as its initialization is costly.
{% highlight bash %}
$ emacs --daemon
{% endhighlight %}

then start instantaneously emacs with:

{% highlight bash %}
$ emacsclient your_file.clj
{% endhighlight %}

Then to kill softly the daemon:
{% highlight bash %}
$ emacsclient -r "(kill-emacs)"
{% endhighlight %}

### Basic Functions I use with Emacs

1. Start the __cider__ repl: <kbd>M-x</kbd> <kbd>cider-jack-in</kbd> (should auto complete!)
2. Evaluate the entire file: <kbd>C-c</kbd> <kbd>C-k</kbd>

Essential Emacs Functions       | key binding
--------------------------      | ----------------------------------
Undo                            | <kbd>C-x</kbd> <kbd>u</kbd> then <kbd>q</kbd> to quit the undo-tree
Load file                       | <kbd>C-x</kbd> <kbd>f</kbd>
Save file                       | <kbd>C-x</kbd> <kbd>C-s</kbd>
Split window vertically         | <kbd>C-x</kbd> <kbd>3</kbd>
Go to the beginning of the file | <kbd>M-&lt;</kbd>
Go to the end of the file       | <kbd>M-&gt;</kbd>
Move to other window            | <kbd>C-x</kbd> <kbd>o</kbd> (should really work on this for a more straightforward keystroke as this function will be call several times per minutes)


### Interacting with nrepl
#### Install emacs live
I find the "[emacs live](https://github.com/overtone/emacs-live)" bundle to be a good one to start with for clojure development, it bundles the [cider project](https://github.com/clojure-emacs/cider) to boost emacs REPL capabilities.

nREPL Functions                                                                                                                                                                       | key binding
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------| ----------------------------------
Switch the namespace of the repl buffer to the namespace of the current buffer                                                                                                        |<kbd>C-c</kbd><kbd>M-n</kbd> 
Evaluate the form preceding point and display the result in the echo area. If invoked with a prefix argument, insert the result into the current buffer                               |<kbd>C-x</kbd><kbd>C-e</kbd>   
Evaluate the form preceding point and display the result in a popup buffer  																										  |<kbd>C-c</kbd><kbd>C-p</kbd> 
Evaluate the top level form under point and display the result in the echo area.  If invoked with a prefix argument, insert the result into the current buffer.                       |<kbd>C-M-x</kbd> or <kbd>C-c</kbd><kbd>C-c</kbd>
Evaluate the region and display the result in the echo area.                                                                                                                          |<kbd>C-c</kbd><kbd>C-r</kbd>   
Interrupt any pending evaluations.                                                                                                                                                    |<kbd>C-c</kbd><kbd>C-b</kbd>                                                   
Invoke `macroexpand-1` on the form at point and display the result in a macroexpansion buffer. If invoked with a prefix argument, `macroexpand` is used instead of `macroexpand-1`.   |<kbd>C-c</kbd><kbd>C-m</kbd> 
Invoke `clojure.walk/macroexpand-all` on the form at point and display the result in a macroexpansion buffer.|<kbd>C-c</kbd><kbd>M-m</kbd>  
Eval the ns form|<kbd>C-c</kbd><kbd>C-n</kbd>
Select the REPL buffer. With a prefix argument - changes the namespace of the REPL buffer to the one of the currently visited source file.|<kbd>C-c</kbd><kbd>C-z</kbd> 
Clear the entire REPL buffer, leaving only a prompt. Useful if you're running the REPL buffer in a side by side buffer.|<kbd>C-c</kbd><kbd>M-o</kbd>   
Evaluate the current buffer.|<kbd>C-c</kbd><kbd>C-k</kbd>  
Load a file.|<kbd>C-c</kbd><kbd>C-l</kbd> 
Display doc string for the symbol at point. |<kbd>C-c</kbd><kbd>C-d</kbd> 
Display the source for the symbol at point. |<kbd>C-c</kbd><kbd>C-s</kbd>
Display JavaDoc (in your default browser) for the symbol at point.  |<kbd>C-c</kbd><kbd>C-j</kbd> 
Jump to the definition of a symbol                                  |<kbd>M-.</kbd> 
Return to your pre-jump location                                    |<kbd>M-,</kbd> 
Complete the symbol at point. (For `auto-complete` integration, see [`ac-nrepl`](https://github.com/purcell/ac-nrepl))|<kbd>M-TAB</kbd>

I also wrote a [short emacs-lisp function, called nrepl-send-to-repl](https://gist.github.com/jgrodziski/8113761), that send the form under the cursor as text to the repl.

### paredit-mode
At first, I found the paredit-mode to be the most annoying one I ever met until I understood the "way of seeing it": think of the function as moving parens to the left or to the right and not moving the text (see the first two examples below).
The 3 paredit functions I constantly use are the followings:

Paredit Function           | Binding                                | Example
-------------------------- | -------------------------------------- | -------
paredit-forward-slurp-sexp | <kbd>&#x2303;</kbd><kbd>&#x2192;</kbd> | (foo (bar <span style="color: #FF0000">&#124;</span>baz) quux zot) ---> (foo (bar <span style="color: #FF0000">&#124;</span>baz quux) zot)  
paredit-forward-barf-sexp  | <kbd>&#x2303;</kbd><kbd>&#x2190;</kbd> | (foo (bar <span style="color: #FF0000">&#124;</span>baz quux) zot) ---> (foo (bar <span style="color: #FF0000">&#124;</span>baz) quux zot)
paredit-splice-sexp        | <kbd>M-s</kbd> 						| (foo (bar<span style="color: #FF0000">&#124;</span> baz) quux) ---> (foo bar<span style="color: #FF0000">&#124;</span> baz quux)
disable paredit            |                                        |  

In short I constantly move the "end" paren to the right or to the left (I actually seldom move the "start" paren) end remove enclosing parens. The rest "nice-to-have" paredit functions are not as mandatory as that 3 ones and I often replace one paredit function with a sequence of that 3 basic ones (like splitting a (foo bar) into (foo) (bar) just ). Then I sometimes disable paredit to insert or remove a specific paren like any "dumb" editor. Finally, here is the [best paredit explanation](http://danmidwood.com/content/2014/11/21/animated-paredit.html) I stumbled upon.

## Cursive IDE

I've switched to Cursive about one year and a half ago and never look back because of the easiness and user experience it brings along with the Intellij environment. I also switch quite frequently from Java projects to Clojure ones or even mix the two languages in the same project, so Intellij is a very practical decision.


## The outsiders

The community is quite active in the IDE field. Here are some other options you should consider:

* The [Sublime Text](http://www.sublimetext.com/) way, with the [Sublime REPL](http://sublimerepl.readthedocs.org/en/latest/).
* [Light Table](http://www.lighttable.com/): an [innovative IDE](http://www.chris-granger.com/2012/04/12/light-table---a-new-ide-concept/) based on [Bret Victor's ideas](http://worrydream.com/#!/LearnableProgramming), Light Table is now quite mature and should be a major tool to consider for Clojure development, but I have not switched yet. 
* [NightCode](https://nightcode.info/)
* [Eclipse's plugin CounterClockwise](https://code.google.com/p/counterclockwise/)
* [Intellij's plugin LAClojure](https://github.com/JetBrains/la-clojure), the very last plugin for IntelliJ is [Cursive](http://cursiveclojure.com/).

Being an occasional Sublime Text user and a [Light table backer](http://www.kickstarter.com/profile/1546229289), I don't have an opinion about these environments. I'm quite happy with my emacs choice for the moment and should stick with it in the short term.

# Conclusion
This post should give you a good overview of the resources to [get started](http://clojure.org/getting_started) with [Clojure](http://clojure.org/) and what it's like to install and use a Clojure development environment.
