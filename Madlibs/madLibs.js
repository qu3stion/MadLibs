function madLibs(){


  let player = prompt('Would you like Story One or Story Two? (type "1" or "2")');
    if (player == 1) {

      let adj = prompt("type an adjective: ")
      let place = prompt("type a general place: ")
      let vehicle = prompt("type a vehicle name (plural): ")
      let game = prompt("type the name of a game: ")
      let noun = prompt("type a plural noun: ")
      let verb1 = prompt("type an 'ing' verb: ")
      let verb2 = prompt("type another 'ing' verb: ")
      let food = prompt("type a food name (plural): ")
      let sport = prompt("type the name of a sport: ")
      let verb3 = prompt("type another 'ing' verb: ")
      let emote = prompt("type an emotion: ")
      let num = prompt("type a number: ")


      let story1 = `A vacation is when you take a trip to some ${adj} place near an amazing ${place}.
      A good vacation place is one where you can ride ${vehicle} or play ${game} or go hunting for ${noun}.
      I like to spend my time ${verb1} or ${verb2}. When parents go on a vacation, they spend their time eating three ${food} a day.
      Usually, fathers play ${sport}, and mothers spend their time ${verb3}.
      Adults need vacations more than kids because adults are always very ${emote} because they have to work ${num}
      hours every day all year just to afford their vacations!`;

      console.log(story1);
  } else if (player == 2) {
    // same for story2
      let adj1 = prompt("Type an adjective: ")
      let place1 = prompt("Type a famous place: ")
      let noun1 = prompt("Type a plural noun: ")
      let adj2 = prompt("Type another adjective: ")
      let food = prompt("Type a food (plural): ")
      let emote = prompt("Type an emotion: ")
      let verb = prompt("Type an 'ing' verb: ")
      let place2 = prompt("Type a common place: ")
      let adj3 = prompt("Type another adjective: ")
      let noun2 = prompt("Type a common place: ")
      let adj4 = prompt("Type another adjective: ")
      let noun3 = prompt("Type another noun: ")
      let fam = prompt("Type a family member: ")
      let adj5 = prompt("Type another adjective: ")

      let story2 = `Today we took a ${adj1} fieldtrip to ${place1}. They're famous for making ${noun1} and for cooking ${adj1} ${food}.
      Eating all that food made me feel ${emote}. Next we enjoyed the local tradition of ${verb} in the middle of the ${place2}!
      Finally, we went shopping for souvenirs. I bought a ${adj3} ${noun2} for myself, and a ${adj4} ${noun3} for my favorite ${fam}.
      I'll definitely never forget this ${adj5} trip!`

      console.log(story2);
 } else {
    return madLibs
 }

}
madLibs()
