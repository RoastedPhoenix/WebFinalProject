/**
 * Created by josh on 5/27/15.
 */
var gamenotover = true;
var xvm = 2.5;
var yvm = 2.5;
var randminusx = 0;
var randminusy = 0;
var white_cell_exist = false;
var wvxa = -1;
var wvya = -1.337;
var wvxb = -1;
var wvyb = -1.337;
var rand1 = 0;
var rand2 = 0;
var xrand = 0;
var yrand = 0;
var a_speed = 2.5;
var peanut_butter = 1;
var score = 0;
$('#score').html(score);
function Virus(xi, yi)
{
    this.x = xi;
    this.y = yi;
    this.vx = 0;
    this.vy = 0;

    this.draw = function(brush) {
        brush.beginPath();
        brush.arc(this.x, this.y, 11, 0, 2 * Math.PI);
        brush.closePath();
        brush.fill();

    };
    this.move = function()
    {
        var tx = this.x + this.vx;
        var ty = this.y + this.vy;


        $(window).keydown(function(event) {
            if (event.keyCode == 65) {
                a.vx = -a_speed;
            } else if (event.keyCode == 68) {
                a.vx = a_speed;
            }

            if (event.keyCode == 87) {
                a.vy = -a_speed;
            } else if (event.keyCode == 83) {
                a.vy = a_speed;
            }
        });

        $(window).keyup(function(event) {
            if (event.keyCode == 65) {
                a.vx = 0;
            }
            if (event.keyCode == 68) {
                a.vx = 0;
            }

            if (event.keyCode == 87) {
                a.vy = 0;
            }
            if (event.keyCode == 83) {
                a.vy = 0;
            }
        });

        if(tx >= 0 && tx < 1337 && (ty >= 650 || ty <= 0))
        {
            if(this.y < 300)
            {
                this.y = 640;
            }
            else
            {
                this.y = 10;
            }
        }
        if(ty >= 0 && ty < 650 && (tx >= 1337 || tx <= 0))
        {
            if(this.x < 1000)
            {
                this.x = 1327;
            }
            else
            {
                this.x = 10;
            }
        }




        this.x += this.vx;
        this.y += this.vy;


    }
}

function Cell(xi, yi)
{
    this.x = xi;
    this.y = yi;
    this.vx = -1;
    this.vy = -2;

    this.draw = function(brush) {
        brush.beginPath();
        brush.arc(this.x, this.y, 44, 0, 2 * Math.PI);
        brush.closePath();
        brush.fill();

    };
    this.move = function()
    {

        var tx = this.x + this.vx;
        var ty = this.y + this.vy;
        if(tx >= 44 && tx < 1249 && (ty >= 606 || ty <= 44))
        {
            this.vy *= -1;
        }
        if(ty >= 44 && ty < 562 && (tx >= 1293 || tx <= 44))
        {
            this.vx *= -1;

        }

        var nx = this.x;
        var ny = this.y;
        var x1 = this.x - 44;
        var x2 = this.x + 44;
        var y1 = this.y - 44;
        var y2 = this.y + 44;

        if(a.x > x1 && a.x < x2)
        {
            if(a.y > y1 && a.y < y2)
            {
                b = new Infected_Cell(nx, ny);
                a.x = nx;
                a.y = ny;
                a.vx = 0;
                a.vy = 0;
                a_speed = 1.5;
                d = new White_Cell_a(600, 111, wvxa, wvya);
                e = new White_Cell_b(720, 360, wvxb, wvyb);
                white_cell_exist = true;
                score = 10;
                $('#score').html(score);
            draw();
            }

        }



        this.x += this.vx;
        this.y += this.vy;


    }
}

function White_Cell_a(xi, yi, wvxm, wvym)
{
    this.x = xi;
    this.y = yi;
    this.vx = wvxm;
    this.vy = wvym;
    this.draw = function(brush) {
        brush.beginPath();
        brush.arc(this.x, this.y, 44, 0, 2 * Math.PI);
        brush.closePath();
        brush.fill();

    };
    this.move = function()
    {

        var tx = this.x + this.vx;
        var ty = this.y + this.vy;
        if(tx >= 44 && tx < 1249 && (ty >= 606 || ty <= 44))
        {
            this.vy *= -1;
        }
        if(ty >= 44 && ty < 562 && (tx >= 1293 || tx <= 44))
        {
            this.vx *= -1;

        }

        if((ty < 0) && (white_cell_exist))
        {
            this.y += 92;
        }

        if((ty > 650) && (white_cell_exist))
        {
            this.y += -92;
        }

        if((tx < 0) && (white_cell_exist))
        {
            this.x += 90;
        }

        if((tx > 1337) && (white_cell_exist))
        {
            this.x += -90;
        }

        x1 = this.x - 44;
        x2 = this.x + 44;
        y1 = this.y - 44;
        y2 = this.y + 44;

        if(c.x > x1 && c.x < x2)
        {
            if(c.y > y1 && c.y < y2)
            {
                score += 10;
                $('#score').html(score);
                c = new Virus_Minion(-100, -100, 0, 0);
                randminusx = Math.random();
                randminusy = Math.random();
                if(randminusx > 0.5)
                {
                    wvxa *= -1;
                }
                if(randminusy > 0.5)
                {
                    wvya *= -1;
                }
                rand1 = Math.random();
                rand2 = Math.random();
                xrand = Math.random() * 100;
                yrand = Math.random() * 100;
                wvxa *= 1.075;
                wvya *= 1.075;
                if(rand1 > 0.5)
                {
                    if (rand2 < 0.5)
                    {
                        d = new White_Cell_a(700 + xrand, 300 + yrand, wvxa, wvya);
                        d.move();
                    }

                    else
                    {
                        d = new White_Cell_a(700 + xrand, 300 - yrand, wvxa, wvya);
                        d.move();
                    }
                }
                else if(rand2 < 0.5)
                {
                    d = new White_Cell_a(700 - xrand, 300 + yrand, wvxa, wvya);
                    d.move();
                }
                else
                {
                    d = new White_Cell_a(700 - xrand, 300 - yrand, wvxa, wvya);
                    d.move();
                }


            }

        }



        this.x += this.vx;
        this.y += this.vy;


    }
}

function White_Cell_b(xi, yi, wvxm, wvym)
{
    this.x = xi;
    this.y = yi;
    this.vx = wvxm;
    this.vy = wvym;
    this.draw = function(brush) {
        brush.beginPath();
        brush.arc(this.x, this.y, 44, 0, 2 * Math.PI);
        brush.closePath();
        brush.fill();

    };
    this.move = function()
    {

        var tx = this.x + this.vx;
        var ty = this.y + this.vy;
        if(tx >= 44 && tx < 1249 && (ty >= 606 || ty <= 44))
        {
            this.vy *= -1;
        }
        if(ty >= 44 && ty < 562 && (tx >= 1293 || tx <= 44))
        {
            this.vx *= -1;

        }

        if((ty < 0) && (white_cell_exist))
        {
            this.y += 92;
        }

        if((ty > 650) && (white_cell_exist))
        {
            this.y += -92;
        }

        if((tx < 0) && (white_cell_exist))
        {
            this.x += 90;
        }

        if((tx > 1337) && (white_cell_exist))
        {
            this.x += -90;
        }

        x1 = this.x - 44;
        x2 = this.x + 44;
        y1 = this.y - 44;
        y2 = this.y + 44;
        rand1 = Math.random();
        rand2 = Math.random();
        xrand = Math.random() * 10;
        yrand = Math.random() * 10;

        if(c.x > x1 && c.x < x2)
        {
            if(c.y > y1 && c.y < y2)
            {
                score += 10;
                $('#score').html(score);
                c = new Virus_Minion(-100, -100, 0, 0);
                if(randminusx > 0.5)
                {
                    wvxa *= -1;
                }
                if(randminusy > 0.5)
                {
                    wvya *= -1;
                }
                rand1 = Math.random();
                rand2 = Math.random();
                xrand = Math.random() * 100;
                yrand = Math.random() * 100;
                wvxb *= 1.075;
                wvyb *= 1.075;
                if(rand1 > 0.5)
                {
                    if (rand2 < 0.5)
                    {
                        e = new White_Cell_b(700 + xrand, 300 + yrand, wvxb, wvyb);
                        e.move();
                    }

                    else
                    {
                        e = new White_Cell_b(700 + xrand, 300 - yrand, wvxb, wvyb);
                        e.move();
                    }
                }
                else if(rand2 < 0.5)
                {
                    e = new White_Cell_b(700 - xrand, 300 + yrand, wvxb, wvyb);
                    e.move();
                }
                else
                {
                    e = new White_Cell_b(700 - xrand, 300 - yrand, wvxb, wvyb);
                    e.move();
                }
            }

        }



        this.x += this.vx;
        this.y += this.vy;


    }
}

function Infected_Cell(xi, yi)
{
    this.x = xi;
    this.y = yi;
    this.vx = 0;
    this.vy = 0;

    this.draw = function(brush) {
        brush.beginPath();
        brush.arc(this.x, this.y, 44, 0, 2 * Math.PI);
        brush.closePath();
        brush.fill();

    };
    this.move = function()
    {
        var tx = this.x + this.vx;
        var ty = this.y + this.vy;



        $(window).keydown(function(event) {
            if (event.keyCode == 65) {
                b.vx = -1.5;
                a.x = b.x;
                peanut_butter = 1;
                xvm = -2.5;
            } else if (event.keyCode == 68) {
                b.vx = 1.5;
                a.x = b.x;
                peanut_butter = 1;
                xvm = 2.5;
            }

            if (event.keyCode == 87) {
                b.vy = -1.5;
                a.y = b.y;
                peanut_butter = 2;
                yvm = -2.5;
            } else if (event.keyCode == 83) {
                b.vy = 1.5;
                a.y = b.y;
                peanut_butter = 2;
                yvm = 2.5;
            }
        });

        $(window).keyup(function(event) {
            if (event.keyCode == 65) {
                b.vx = 0;
            }
            if (event.keyCode == 68) {
                b.vx = 0;
            }

            if (event.keyCode == 87) {
                b.vy = 0;
            }
            if (event.keyCode == 83) {
                b.vy = 0;
            }
        });
        $(window).keyup(function(event) {

            if (event.keyCode == 32)
            {
                if(peanut_butter == 1) {
                    c = new Virus_Minion(b.x, b.y, xvm, 0);
                    c.draw();
                    c.move();
                }
                else
                {
                    c = new Virus_Minion(b.x, b.y, 0, yvm);
                    c.draw();
                    c.move();
                }

            }
        });


        if(tx >= 0 && tx < 1337 && (ty >= 650 || ty <= 0))
        {
            if(this.y < 300)
            {
                this.y = 640;
            }
            else
            {
                this.y = 10;
            }
        }
        if(ty >= 0 && ty < 650 && (tx >= 1337 || tx <= 0))
        {
            if(this.x < 1000)
            {
                this.x = 1327;
            }
            else
            {
                this.x = 10;
            }
        }
        x1 = this.x - 44;
        x2 = this.x + 44;
        y1 = this.y - 44;
        y2 = this.y + 44;
        if(d.x > x1 && d.x < x2)
        {
            if(d.y > y1 && d.y < y2)
            {
                gamenotover = false;
            }

        }

        if(e.x > x1 && e.x < x2)
        {
            if(e.y > y1 && e.y < y2)
            {
                gamenotover = false;
            }

        }

        this.x += this.vx;
        this.y += this.vy;


    }
}

function Virus_Minion(xi, yi, xm, ym)
{
    this.x = xi;
    this.y = yi;
    this.vx = xm;
    this.vy = ym;


    this.draw = function(brush) {
        brush.beginPath();
        brush.arc(this.x, this.y, 11, 0, 2 * Math.PI);
        brush.closePath();
        brush.fill();

    };
    this.move = function()
    {
        var tx = this.x + this.vx;
        var ty = this.y + this.vy;



        if(tx >= 0 && tx < 1337 && (ty >= 650 || ty <= 0))
        {
            this.y = -100;
            this.x = -100;
        }
        if(ty >= 0 && ty < 650 && (tx >= 1337 || tx <= 0))
        {
            this.x = -100;
            this.y = -100;
        }




        this.x += this.vx;
        this.y += this.vy;


    }
}

function draw() {
    var canvas = document.getElementById('canvas');
    var brush = canvas.getContext('2d');
    if(gamenotover) {
        brush.fillStyle = 'darkblue';
        brush.fillRect(0, 0, 1337, 650);
        brush.fillStyle = 'crimson';
        a.draw(brush);
        a.move();
        brush.fillStyle = 'lime';
        b.draw(brush);
        b.move();
        brush.fillStyle = 'crimson';
        c.draw(brush);
        c.move();
        brush.fillStyle = 'white';
        d.draw(brush);
        d.move();
        e.draw(brush);
        e.move();
    }
    else
    {
        brush.fillStyle = 'red';
        brush.fillRect(0, 0, 1337, 650);
    }



    window.requestAnimationFrame(draw);
}
a = new Virus(256, 311);
b = new Cell(500, 500);
c = new Virus_Minion(-100, -100, 0, 0);
d = new White_Cell_a(-1000, -1000, wvxa, wvya);
e = new White_Cell_b(-1000, -1000, wvxb, wvyb);
draw();

