Source Code
UPDATED

<body>
    <script>
        let player = {
            speed: 100
            , x: 100
            , y: 100
        }
        document.addEventListener("DOMContentLoaded", build);
        document.addEventListener("keydown", function (e) {
            let key = e.key;
            if (key === 'ArrowLeft') {
                player.x -= player.speed;
            }
            if (key === 'ArrowRight') {
                player.x += player.speed;
            }
            if (key === 'ArrowDown') {
                player.y += player.speed;
            }
            if (key === 'ArrowUp') {
                player.y -= player.speed;
            }
            player.el.style.left = player.x + "px";
            player.el.style.top = player.y + "px";
        })
 
        function build() {
            player.el = document.createElement("div");
            player.x = 100;
            player.y = 100;
            player.el.style.position = "absolute";
            player.el.style.width = "100px";
            player.el.style.height = "100px";
            player.el.style.backgroundColor = "red";
            player.el.style.top = player.y + "px";
            player.el.style.left = player.x + "px";
            document.body.appendChild(player.el);
        }
    </script>
</body>
 
PREVIOUS VERSION

let player = {
    speed: 100
    , x: 100
    , y: 100
}
window.addEventListener('DOMContentLoaded', build);
document.addEventListener('keydown', function (e) {
    let key = e.keyCode;
    console.log(key);
    if (key === 37) {
        player.x -= player.speed
    }
    if (key === 38) {
        player.y -= player.speed
    }
    if (key === 39) {
        player.x += player.speed
    }
    if (key === 40) {
        player.y += player.speed
    }
    player.el.style.left = player.x + "px";
    player.el.style.top = player.y + "px";
})
 
function build() {
    player.el = document.createElement('div');
    player.x = 100;
    player.y = 100;
    player.el.style.position = "absolute";
    player.el.style.width = "100px";
    player.el.style.height = "100px";
    player.el.style.backgroundColor = "red";
    player.el.style.top = player.x + "px";
    player.el.style.left = player.y + "px";
    document.body.appendChild(player.el);
}
 
 
 