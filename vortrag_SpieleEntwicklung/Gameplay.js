"use strict";

document.addEventListener("DOMContentLoaded", (_) => {
    const spaceShip = document.getElementById("shuttle");
    const gun = document.getElementsByClassName("shuttleGun");
    const battlefield = document.getElementById("container")
    console.log(gun + spaceShip)
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
    var nIntervId2 = setInterval(function () {

        const newEnemy = document.createElement("div")
        const newEnemyCore = document.createElement("div");
        const newEnemyCockpit = document.createElement("div");
        const newEnemyHull = document.createElement("div");
        newEnemy.classList.add("enemy");
        newEnemyCockpit.classList.add("enemyCickpit");
        newEnemyHull.classList.add("enemyHull");
        newEnemyCore.classList.add("enemyCore");
        battlefield.appendChild(newEnemy);
        document.createElement(newEnemy);
        newEnemy.appendChild(newEnemyCore);
        document.createElement(newEnemyCore);
        newEnemy.appendChild(newEnemyCockpit);
        document.createElement(newEnemyCockpit);
        newEnemy.appendChild(newEnemyHull);
        document.createElement(newEnemyHull);
       
        console.log("spawn")
    }, 5000);

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
            case "Space":

                shoot(gun, battlefield)

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
})

function shoot(gun, battlefield) {
    console.log(gun)

    const newShot = document.createElement("div");
    newShot.classList.add("shuttleProjectile");
    console.log("shoot")
    battlefield.appendChild(newShot);
    const gunTop = gun.style.top;
    gunTop = 'auto|length|%|initial|inherit';
    newShot.style.top = gunTop
    const gunLeft = gun.style.left;
    gunLeft = 'auto|length|%|initial|inherit';
    newShot.style.left = gunLeft;
    document.createElement(newShot);






}

function move(node, x, y) {
    //console.log(`move ${node.getAttribute("id")} by (${x},${y})`);
    const xOffset = extractNumPart(node.style.left);
    const yOffset = extractNumPart(node.style.top);
    const newXOffset = xOffset + x;
    const newYOffset = yOffset + y;
    if (newXOffset >= 0 && newXOffset <= 7000) {
        node.style.left = `${newXOffset}px`;
    }
    if (newYOffset >= 0 && newYOffset <= 460) {
        node.style.top = `${newYOffset}px`;
    }
}

function extractNumPart(pxIndication) {
    return Number.parseInt(pxIndication.match(/^[0-9]+/)[0]);
}