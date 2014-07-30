
function moveUp(steps) {
    
    var pos = getKnightPos();
    var knight = $('.game .knight');
    if (steps === undefined) {
        steps = 1;
    } else {
        steps = Math.floor(steps);
    }

    var clear_path = true;
    
    for (var i = 1; i <= steps; i++) {
        if(checkCoordinates(pos['x'], pos['y'] - i) === false) {
            clear_path = false;
        }
    }

    if (clear_path === true) {
        pos['y'] -= steps;

        var top = parseInt(knight.css('top').slice(0, -2));

        knight.animate({
            top: top - (box_size * steps)
        });

        var pos_str = pos['x'] + '-' + pos['y'];
        knight.attr('pos', pos_str);
    }
}

function moveDown(steps) {

    var pos = getKnightPos();
    var knight = $('.game .knight');
    if (steps === undefined) {
        steps = 1;
    } else {
        steps = Math.floor(steps);
    }

    var clear_path = true;
    
    for (var i = 1; i <= steps; i++) {
        if(checkCoordinates(pos['x'], pos['y'] + i) === false) {
            clear_path = false;
        }
    }

    if (clear_path === true) {
        pos['y'] += steps;

        var top = parseInt(knight.css('top').slice(0, -2));

        knight.animate({
            top: top + (box_size * steps)
        });

        var pos_str = pos['x'] + '-' + pos['y'];
        knight.attr('pos', pos_str);
    }
}

function moveLeft(steps) {

    var pos = getKnightPos();
    var knight = $('.game .knight');
    if (steps === undefined) {
        steps = 1;
    } else {
        steps = Math.floor(steps);
    }

    var clear_path = true;
    
    for (var i = 1; i <= steps; i++) {
        if(checkCoordinates(pos['x'] - i, pos['y']) === false) {
            clear_path = false;
        }
    }

    if (clear_path === true) {
        pos['x'] -= steps;

        var left = parseInt(knight.css('left').slice(0, -2));

        knight.animate({
            left: left - (box_size * steps)
        });

        var pos_str = pos['x'] + '-' + pos['y'];
        knight.attr('pos', pos_str);
    }
}

function moveRight(steps) {

    var pos = getKnightPos();
    var knight = $('.game .knight');
    if (steps === undefined) {
        steps = 1;
    } else {
        steps = Math.floor(steps);
    }

    var clear_path = true;
    
    for (var i = 1; i <= steps; i++) {
        if(checkCoordinates(pos['x'] + i, pos['y']) === false) {
            clear_path = false;
        }
    }

    if (clear_path === true) {
        pos['x'] += steps;

        var left = parseInt(knight.css('left').slice(0, -2));

        knight.animate({
            left: left + (box_size * steps)
        });

        var pos_str = pos['x'] + '-' + pos['y'];
        knight.attr('pos', pos_str);
        checkPossition(pos['x'], pos['y']);
    }
}