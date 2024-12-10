let yPos = 200; // erbij in stap 2
let speed = 4; // erbij in stap 3
let direction = 1; // erbij in stap 4
let radius = 20; // erbij in stap 8

// --- extra
let xPos = 100;
let directionY = 1;
let directionX = 1;

function setup() {
  createCanvas(400, 400);
}

function draw() {
    background(220);

    // 1.
    // cirkel tekenen
    //circle(200, 200, 40)

    // 2.
    // cirkel tekenen die van yPos veranderd
    // -> variable yPos aanmaken bovenin
    // circle(200, yPos, 40);
    // yPos += 4;

    // 3.
    // cirkel tekenen die van yPos veranderd met variabele speed
    // -> variable speed aanmaken bovenin
    // circle(200, yPos, 40);
    // yPos += speed;

    // 4.
    // cirkel tekenen die van yPos veranderd met variabele speed en direction
    // -> variable direction aanmaken bovenin
    // circle(200, yPos, 40);
    // yPos += speed * direction;

    // 5.
    // cirkel tekenen die van yPos veranderd met variabele speed en direction
    // en direction moet omdraaien als cirkel onderaan canvas is
    // circle(200, yPos, 40);
    // yPos += speed * direction;
    // if (yPos > 400) {
    //     direction = -1;
    // }

    // 6.
    // cirkel tekenen die van yPos veranderd met variabele speed en direction
    // en direction moet omdraaien als cirkel onderaan canvas is
    // en ook als ie bovenaan canvas is
    // circle(200, yPos, 40);
    // yPos += speed * direction;
    // if (yPos > 400) {
    //     direction = -1;
    // } else if (yPos < 0) {
    //     direction = 1;
    // }

    // 7.
    // rekening houden met grootte cirkel
    // circle(200, yPos, 40);
    // yPos += speed * direction;
    // if (yPos > 400 - 20) {
    //     direction = -1;
    // } else if (yPos < 0 + 20) {
    //     direction = 1;
    // }

    // 8.
    // refactor, een variabele voor de grootte van de cirkel:
    // de getallen 40 en 20 hebben daar mee te maken:
    // we maker er de radius van
    // -> variabele radius erbij bovenin
    // circle(200, yPos, radius * 2);
    // yPos += speed * direction;
    // if (yPos > 400 - radius) {
    //     direction = -1;
    // } else if (yPos < 0 + radius) {
    //     direction = 1;
    // }

    // 9.
    // nog een kleine refactor
    // er zijn ingebouwde variabelen, zoals height van de canvas
    circle(200, yPos, radius * 2);
    yPos += speed * direction;
    if (yPos > height - radius) {
        direction = -1;
    } else if (yPos < radius) {
        direction = 1;
    }

    // ---------------------------------------------------------------------------
    // nu nog iets verder dan de opdracht op de powerpoint:
    // xPos er ook bij
    // een ook directionY en X, voor meer variatie
    // circle(xPos, yPos, radius * 2);
    // yPos += speed * directionY;
    // xPos += speed * directionX +1;
    // if (yPos > height - radius) {
    //     directionY = -1;
    // } else if (yPos < radius) {
    //     directionY = 1;
    // }
    // if (xPos > width - radius) {
    //     directionX = -1;
    // } else if (xPos < radius) {
    //     directionX = 1;
    // }
}
