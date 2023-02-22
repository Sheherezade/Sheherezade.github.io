var tipButtons = document.querySelectorAll(".tip-button");
function coinAudio() {
    var t = document.getElementById("coinAudio");
    t && t.play()
}
tipButtons.forEach((t=>{
    var e = t.querySelector(".coin");
    e.maxMoveLoopCount = 90,
    t.addEventListener("click", (()=>{
        if (/Android|webOS|BlackBerry/i.test(navigator.userAgent))
            return !0;
        t.clicked || (t.classList.add("clicked"),
        setTimeout((()=>{
            e.sideRotationCount = 90 * Math.floor(5 * Math.random()),
            e.maxFlipAngle = (Math.floor(4 * Math.random()) + 3) * Math.PI,
            t.clicked = !0,
            o(),
            coinAudio()
        }
        ), 50))
    }
    ));
    var o = ()=>{
        e.moveLoopCount = 0,
        i()
    }
      , i = ()=>{
        e.moveLoopCount++;
        var o = e.moveLoopCount / e.maxMoveLoopCount;
        e.angle = -e.maxFlipAngle * Math.pow(o - 1, 2) + e.maxFlipAngle,
        e.style.setProperty("--coin-y-multiplier", -11 * Math.pow(2 * o - 1, 4) + 11),
        e.style.setProperty("--coin-x-multiplier", o),
        e.style.setProperty("--coin-scale-multiplier", .6 * o),
        e.style.setProperty("--coin-rotation-multiplier", o * e.sideRotationCount),
        e.style.setProperty("--front-scale-multiplier", Math.max(Math.cos(e.angle), 0)),
        e.style.setProperty("--front-y-multiplier", Math.sin(e.angle)),
        e.style.setProperty("--middle-scale-multiplier", Math.abs(Math.cos(e.angle), 0)),
        e.style.setProperty("--middle-y-multiplier", Math.cos((e.angle + Math.PI / 2) % Math.PI)),
        e.style.setProperty("--back-scale-multiplier", Math.max(Math.cos(e.angle - Math.PI), 0)),
        e.style.setProperty("--back-y-multiplier", Math.sin(e.angle - Math.PI)),
        e.style.setProperty("--shine-opacity-multiplier", 4 * Math.sin((e.angle + Math.PI / 2) % Math.PI) - 3.2),
        e.style.setProperty("--shine-bg-multiplier", -40 * (Math.cos((e.angle + Math.PI / 2) % Math.PI) - .5) + "%"),
        e.moveLoopCount < e.maxMoveLoopCount ? (e.moveLoopCount === e.maxMoveLoopCount - 6 && t.classList.add("shrink-landing"),
        window.requestAnimationFrame(i)) : (t.classList.add("coin-landed"),
        e.style.setProperty("opacity", 0),
        setTimeout((()=>{
            t.classList.remove("clicked", "shrink-landing", "coin-landed"),
            setTimeout((()=>{
                e.style.setProperty("--coin-x-multiplier", 0),
                e.style.setProperty("--coin-scale-multiplier", 0),
                e.style.setProperty("--coin-rotation-multiplier", 0),
                e.style.setProperty("--shine-opacity-multiplier", .4),
                e.style.setProperty("--shine-bg-multiplier", "50%"),
                e.style.setProperty("opacity", 1),
                setTimeout((()=>{
                    t.clicked = !1
                }
                ), 300)
            }
            ), 300)
        }
        ), 1500))
    }
}
));
