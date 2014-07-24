<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <meta charset="UTF-8">
        <link rel="stylesheet" href="css/main.css">
        <title>Monty Projects - Have some sense of humor</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <script src="js/MastersOfVector3D/Vec3.js"></script>
        <script src="js/MastersOfVector3D/Camera3D.js"></script>
        <script src="js/MastersOfVector3D/Space2D.js"></script>
        <script src="js/MastersOfVector3D/Space3D.js"></script>
        <script src="js/MastersOfVector3D/Graphics3DContext.js"></script>
        <script src="js/MastersOfVector3D/Scene.js"></script>    

        <script src="js/Paddle.js"></script>
        <script src="js/Arena.js"></script>
        <script src="js/Ball.js"></script>
        <script src="js/Missile.js"></script>
        <script src="js/main.js"></script>
    </head>
    <body bgcolor = "#000">

        <header>
            <h1>
                Monty's Projects
            </h1>
        </header>
        <nav>
            <ul>
                <li>
                    <a href = "scoreboard/leaderboard-index.php" >Scoreboard</a>
                </li>
                <!-- li>
                    <a href = "SonS/view/front.php" >Somebody on Something</a>
                </li -->

            </ul>

        </nav>
    <main>
        <article>
            I'm Daniel "Monty" Monteiro, from Niterói, Rio de Janeiro, Brazil.
            I've been fascinated with Game Development since I first saw a computer playing games. I knew I had to learn how to do it.
            This collection of pages try to show you have well I have performed since then.



            I used to work professionally as a game developer, doing mostly Android, iOS and J2ME code. Did some Actionscript 3 coding sometimes too. Now I decided it was for the best to change into some other fields...

            2012-2014 - Ostrich Design Bureau

        </article>
    </main>

    <canvas id="drawarea"  style = 'position:absolute;top:0;left:0;width:100%;height:100%;z-index:-1;' >
        Sorry, but your browser can't play this game.
    </canvas>

    <script>


        var canvas = document.getElementById("drawarea");

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        var ctx = canvas.getContext("2d");


        var body = document.body,
                html = document.documentElement;

        var height = Math.max(body.scrollHeight, body.offsetHeight,
                html.clientHeight, html.scrollHeight, html.offsetHeight);

        var width = Math.max(body.scrollWidth, body.offsetWidth,
                html.clientWidth, html.scrollWidth, html.offsetWidth);


        main(canvas, ctx, {
            name: "Monty Projects"
        }, width, height);
    </script>
</body>
</html>
