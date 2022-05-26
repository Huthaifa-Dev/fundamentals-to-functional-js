// Create an object using bracket and dot notation that represents the characters and related data you may find in a game of Clue.

var game = {};

game.murderer = '??';

game['weapons'] = [
    {type:'lasers', location:'lab'},
    {type:'spoun', location:'kitchen'},
    {type:'coffee machine',location:''}
];

game.rooms = [];
