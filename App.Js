
    // convert number to string
    var number = (number)
    var stringNumber = number + '';

    // splite string by character.split('')
    var numberArray = stringNumber.split('');

    // reverse list
    var reversedArray = number.reverse();

    // map to integer with parseInt()
    reversedArray.map(function(number) {
        return parseInt(number);
    });


    sally = {name: 'Sally'. age:18} ;
    sally.name
    sally.age


    var barcelonaPlayers = players.filter(function(player) {
        return player.club === 'FC Barcelona';
    });


    players.map(function(player) {
        return player.name;
    }

    var total = marks.reduce(function(acc, mark) {
        acc + mark.mark;
    }, 0);


    var person = {
        name:"Bob",
        greet:function() {
            console.log("Hi my mane is Bob");
        }
    }

    person.greet();