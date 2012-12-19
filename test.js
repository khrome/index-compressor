var should = require("should");
var JSONIndex = require('./index-compressor');

describe('WhereParser', function(){
    var original;
    var compressed;
    var inflated;
    
    it('compresses an array', function(done){
        original = [
            {
                "title":"Black Sun", 
                "genre":"fiction", 
                "author":"Edward Abbey"
            },
            {
                "title":"Desert Solitaire",
                "genre":"nonfiction",
                "author":"Edward Abbey"
            },
            {
                "title":"The Monkey Wrench Gang",
                "genre":"fiction",
                "author":"Edward Abbey"
            },
            {
                "title":"Cosmic Banditos",
                "genre":"fiction",
                "author":"Allan Weisbecker"
            },
            {
                "title":"In Search of Captain Zero",
                "genre":"nonfiction",
                "author":"Allan Weisbecker"
            },
            {
                "title":"Why Can't You Get Along With Anyone?",
                "genre":"nonfiction",
                "author":"Allan Weisbecker"
            },
            {
                "title":"The Cosmic Connection",
                "genre":"nonfiction",
                "author":"Carl Sagan"
            },
            {
                "title":"Contact",
                "genre":"fiction",
                "author":"Carl Sagan"
            },
            {
                "title":"The Unbearable Lightness of Being",
                "genre":"nonfiction",
                "author":"Milan Kundera"
            },
            {
                "title":"Valis",
                "genre":"fiction",
                "author":"Philip K Dick"
            },
            {
                "title":"Do Androids Dream of Electric Sheep?",
                "genre":"fiction",
                "author":"Philip K Dick"
            },
            {
                "title":"Neuromancer",
                "genre":"fiction",
                "author":"William Gibson"
            },
            {
                "title":"Idoru",
                "genre":"fiction",
                "author":"William Gibson"
            },
            {
                "title":"Elric",
                "genre":"fiction",
                "author":"Michael Moorcock"
            },
            {
                "title":"Cerebus",
                "genre":"fiction",
                "author":"Dave Sim"
            },
            {
                "title":"Go Rin No Sho",
                "genre":"nonfiction",
                "author":"Miyamato Musashi"
            },
            {
                "title":"Brave New World",
                "genre":"fiction",
                "author":"Aldous Huxley"
            }
        ]
        compressed = JSONIndex.compress(original);
        done();
    });
    
    it('decompresses a compressed array successfully', function(done){
        inflated = JSONIndex.inflate(compressed);
        //compression actually worked?
        JSON.stringify(inflated).length.should.be.above(JSON.stringify(compressed).length);
        //inflated data stringifies to the same length
        JSON.stringify(original).should.equal(JSON.stringify(inflated));
        done();
    });
});