index-compressor.js
==============

[![NPM version](https://img.shields.io/npm/v/index-compressor.svg)]()
[![npm](https://img.shields.io/npm/dt/index-compressor.svg)]()
[![Travis](https://img.shields.io/travis/khrome/index-compressor.svg)]()

An NPM for compressing arrays of objects containing many repeated values... the sort of thing you might import from a CSV.

Usage
-----
First include the module:

    var Index = require('./index-compressor');

Then to compress an array of objects:

    var compressed = Index.compress(objectArray);

given an array like this:

    [{"title":"Black Sun", "genre":"fiction", "author":"Edward Abbey"},
    {"title":"Desert Solitaire", "genre":"nonfiction", "author":"Edward Abbey"},
    {"title":"The Monkey Wrench Gang", "genre":"fiction", "author":"Edward Abbey"},
    {"title":"Cosmic Banditos", "genre":"fiction", "author":"Allan Weisbecker"},
    {"title":"In Search of Captain Zero", "genre":"nonfiction", "author":"Allan Weisbecker"},
    {"title":"Why Can't You Get Along With Anyone?", "genre":"nonfiction", "author":"Allan Weisbecker"},
    {"title":"The Cosmic Connection", "genre":"nonfiction", "author":"Carl Sagan"},
    {"title":"Contact", "genre":"fiction", "author":"Carl Sagan"},
    {"title":"The Unbearable Lightness of Being", "genre":"nonfiction", "author":"Milan Kundera"},
    {"title":"Valis", "genre":"fiction", "author":"Philip K Dick"},
    {"title":"Do Androids Dream of Electric Sheep?", "genre":"fiction", "author":"Philip K Dick"},
    {"title":"Neuromancer", "genre":"fiction", "author":"William Gibson"},
    {"title":"Idoru", "genre":"fiction", "author":"William Gibson"},
    {"title":"Elric", "genre":"fiction", "author":"Michael Moorcock"},
    {"title":"Cerebus", "genre":"fiction", "author":"Dave Sim"},
    {"title":"Go Rin No Sho", "genre":"nonfiction", "author":"Miyamato Musashi"},
    {"title":"Brave New World", "genre":"fiction", "author":"Aldous Huxley"}]
    
You get out an object like this:
    
    {
        "data":[
            ["0","1","2"],["3","4","2"],["5","1","2"],["6","1","7"],["8","4","7"],
            ["9","4","7"],["10","4","11"],["12","1","11"],["13","4","14"],
            ["15","1","16"],["17","1","16"],["18","1","19"],["20","1","19"],
            ["21","1","22"],["23","1","24"],["25","4","26"],["27","1","28"]
        ],
        "map":[
            "Black Sun","fiction","Edward Abbey","Desert Solitaire","nonfiction",
            "The Monkey Wrench Gang","Cosmic Banditos","Allan Weisbecker",
            "In Search of Captain Zero","Why Can't You Get Along With Anyone?",
            "The Cosmic Connection","Carl Sagan","Contact","The Unbearable Lightness of Being",
            "Milan Kundera","Valis","Philip K Dick","Do Androids Dream of Electric Sheep?",
            "Neuromancer","William Gibson","Idoru","Elric","Michael Moorcock","Cerebus",
            "Dave Sim","Go Rin No Sho","Miyamato Musashi","Brave New World","Aldous Huxley"
        ],
        "keys":[
            "title",
            "genre",
            "author"
        ]
    }
    
Then to go back in the other direction:

    var inflatedArray = Index.inflate(compressed);

Testing
-------

Run the tests at the project root with:

    mocha

Enjoy,

-Abbey Hawk Sparrow