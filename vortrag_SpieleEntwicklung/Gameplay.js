"use strict";

document.addEventListener("DOMContentLoaded", (_) => {
    const spaceShip = document.getElementById("shuttle");
    const offset = 5;
    let direction = 0;
    var nIntervId = setInterval(function () {
        if (direction == 1) {
            move(spaceShip, 0, -offset);
        }
        if (direction == 2) {
            move(spaceShip, offset, 0);
        }
        if (direction == 3) {
            move(spaceShip, 0, offset);
        }
        if (direction == 4) {
            move(spaceShip, -offset, 0);
        }
        if (direction == 0) {
            return;
        }
    }, 10);

    document.addEventListener("keydown", (e) => {
        switch (e.code) {
            case "ArrowUp":

                direction = 1;

                break;
            case "ArrowRight":

                direction = 2;

                break;
            case "ArrowDown":
                console.log("keydown")

                direction = 3;

                break;
            case "ArrowLeft":

                direction = 4;

                break;
        }
    });
    document.addEventListener("keyup", (e) => {
        switch (e.code) {
            case "ArrowUp":
                direction = 0;
                break;
            case "ArrowRight":
                direction = 0;
                break;
            case "ArrowDown":
                direction = 0;
                break;
            case "ArrowLeft":
                direction = 0;
                break;
        }
    });

});




function move(node, x, y) {
    //console.log(`move ${node.getAttribute("id")} by (${x},${y})`);
    const xOffset = extractNumPart(node.style.left);
    const yOffset = extractNumPart(node.style.top);
    const newXOffset = xOffset + x;
    const newYOffset = yOffset + y;
    // 700 = container width - face width
    if (newXOffset >= 0 && newXOffset <= 7000) {
        node.style.left = `${newXOffset}px`;
    }
    // 300 = container height - face height
    if (newYOffset >= 0 && newYOffset <= 460) {
        node.style.top = `${newYOffset}px`;
    }
}

function extractNumPart(pxIndication) {
    return Number.parseInt(pxIndication.match(/^[0-9]+/)[0]);
}