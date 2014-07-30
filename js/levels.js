var levels = [];
var commands = [];
var box_size = 60;
var x = 800 / box_size;
var y = 600 / box_size;
var lvls = 2;

for (var i = 1; i <= lvls; i++) {
    levels[i] = [];
    commands[i] = [];
    
    for (var j = 0; j < x; j++) {
        levels[i][j] = [];
    }
}

var v = 'vertical';
var h = 'horizontal';
var tl = 'top-left';
var tr = 'top-right';
var bl = 'bot-left';
var br = 'bot-right';
var m = 'monster';
var t = 'temple';
var p = 'princess';
 
// LEVEL 1 COORDINATES
levels[1][2][0] = v;
levels[1][2][1] = v;
levels[1][2][2] = v;
levels[1][2][3] = v;
levels[1][2][4] = v;
levels[1][2][5] = tr;
levels[1][3][5] = h;
levels[1][4][5] = h;
levels[1][5][5] = h;
levels[1][6][5] = tl;
levels[1][6][4] = v;
levels[1][6][3] = v;
levels[1][6][2] = br;
levels[1][7][2] = h;
levels[1][8][2] = h;
levels[1][9][2] = h;
levels[1][10][2] = h;
levels[1][11][2] = t;

// LEVEL 1 COMMANDS
commands[1].push('moveUp(steps);');
commands[1].push('moveDown(steps);');
commands[1].push('moveLeft(steps);');
commands[1].push('moveRight(steps);');


// LEVEL 2 COORDINATES
levels[2][0][1] = h;
levels[2][1][1] = h;
levels[2][2][1] = bl;
levels[2][2][2] = v;
levels[2][2][3] = v;
levels[2][2][4] = v;
levels[2][2][5] = v;
levels[2][2][6] = v;
levels[2][2][7] = tr;
levels[2][3][7] = h;
levels[2][4][7] = h;
levels[2][5][7] = h;
levels[2][6][7] = h;
levels[2][7][7] = m;
levels[2][8][7] = h;
levels[2][9][7] = tl;
levels[2][9][6] = v;
levels[2][9][5] = v;
levels[2][9][4] = bl;
levels[2][8][4] = h;
levels[2][7][4] = h;
levels[2][6][4] = tr;
levels[2][6][3] = m;
levels[2][6][2] = br;
levels[2][7][2] = h;
levels[2][8][2] = h;
levels[2][9][2] = h;
levels[2][10][2] = h;
levels[2][11][2] = t;

// LEVEL 2 COMMANDS
commands[2].push('moveUp(steps);');
commands[2].push('moveDown(steps);');
commands[2].push('moveLeft(steps);');
commands[2].push('moveRight(steps);');
commands[2].push('jump();');
commands[2].push('attack(attacks);');