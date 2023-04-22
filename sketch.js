let circlerad = 200
let theta = 45
let originx = 200
let originy = 200
let speedtheta = 0.7
let sinon = false
let coson = false
let tanon = false
let secon = false
let cscon = false
let coton = false

function draw() {
	background(0)
	noStroke()
	strokeWeight(1)
	unitcircle()
	startlines()
	if (sinon) {
		sine()
	}
	if (coson) {
		cosine()
	}
	if (tanon) {
		tangent()
	}
	if (secon) {
		secant()
	}
	if (cscon) {
		cosecant()
	}
	if (coton) {
		cotangent()
	}
	hypotenuse()
	theta += speedtheta
	if (theta == 360) {
		theta = 0
	}
}

function onstuff(index) {
	if (index == 0) {
		sinon = !sinon
		console.log(sinon)
	}
	if (index == 1) {
		coson = !coson
	}
	if (index == 2) {
		tanon = !tanon
	}
	if (index == 3) {
		secon = !secon
	}
	if (index == 4) {
		cscon = !cscon
	}
	if (index == 5) {
		coton = !coton
	}
}

function identities(index) {
	if (index == 1) {
		document.getElementById("py1text").innerHTML = "sin²(θ) + cos²(θ) = 1"
		sinon = true
		coson = true
		tanon = false
		secon = false
		cscon = false
		coton = false
	}
	if(index==2){
		document.getElementById("py2text").innerHTML = "tan²(θ) + 1 = sec²(θ)"
		sinon = false
		coson = false
		tanon = true
		secon = true
		cscon = false
		coton = false
	}
	if(index==3){
		document.getElementById("py3text").innerHTML = "cot²(θ) + 1 = cosec²(θ)"
		sinon = false
		coson = false
		tanon = false
		secon = false
		cscon = true
		coton = true
	}
}

function ratio(index){
	if(index==1){
		document.getElementById("tantext").innerHTML = "using similar triangles we can prove that tan(θ)/1 = sin(θ)/cos(θ)"
		sinon = true
		coson = true
		tanon = true
		secon = false
		cscon = false
		coton = false
	}
	if(index==2){
		document.getElementById("sectext").innerHTML = "we can use more similar triangles to prove that h/cos = sec/h and the h is equal to 1"
		sinon = false
		coson = true
		tanon = false
		secon = true
		cscon = false
		coton = false
	}
	if(index==3){
		document.getElementById("cottext").innerHTML = "by similar triangles: cot(θ)/1 = 1/tan(θ)"
		sinon = false
		coson = false
		tanon = true
		secon = false
		cscon = false
		coton = true
	}
}

function setup() {
	createCanvas(400, 400);
	background(0);
}

function startlines() {
	fill(255)
	rect(0, 200, 9000, 2)
	rect(200, 0, 2, 9000)
	fill(255, 255, 0)
}

function unitcircle() {
	fill(255)
	circle(200, 200, circlerad)
	fill(0)
	circle(200, 200, circlerad - 3)
}

function hypotenuse() {
	let linelength = 100
	let endx = originx + cos(-radians(theta)) * linelength
	let endy = originy + sin(-radians(theta)) * linelength
	stroke(255)
	line(originx, originy, endx, endy)
	textSize(10)
	fill(255)
	text('1', (endx + 200) / 2, (endy + 200) / 2)
}

function sine() {
	let linelength = 100
	let endx = originx + cos(-radians(theta)) * linelength
	let endy = originy + sin(-radians(theta)) * linelength
	let startx = endx
	let starty = 200
	stroke(255, 0, 0)
	line(startx, starty, endx, endy)
	textSize(10)
	fill(255, 0, 0)
	text('sin(θ)', endx, (endy + 200) / 2)
}

function cosine() {
	let linelength = 100
	let endx = originx + cos(-radians(theta)) * linelength
	let endy = originy + sin(-radians(theta)) * linelength
	let startx = 200
	let starty = endy
	stroke(0, 255, 0)
	line(startx, starty, endx, endy)
	textSize(10)
	fill(0, 255, 0)
	text('cos(θ)', (endx + 150) / 2, endy - 5)
}

function tangent() {
	let linelength = 1 / cos(-radians(theta)) * 100
	let startx = 200
	let starty = 200
	let endx = startx + cos(-radians(theta)) * linelength
	let endy = starty + sin(-radians(theta)) * linelength
	stroke(255, 255, 0)
	strokeWeight(1)
	line(startx, starty, endx, endy)
	if (theta < 90 && theta > 0 || theta > 180 && theta < 270) {
		strokeWeight(3)
		stroke(255, 255, 0)
		line(startx + circlerad / 2, 200, startx + circlerad / 2, endy)
	}
	else {
		strokeWeight(3)
		stroke(255, 255, 0)
		line(startx + circlerad / 2, 200, startx + circlerad / 2, endy)
	}
	strokeWeight(1)
	textSize(10)
	fill(255, 255, 0)
	text('tan(θ)', endx, (endy + 200) / 2)
	secant()
}

function secant() {
	let linelength = 1 / cos(-radians(theta)) * 100
	let startx = 200
	let starty = 200
	let endx = startx + cos(-radians(theta)) * linelength
	let endy = starty + sin(-radians(theta)) * linelength
	stroke(255, 105, 180)
	strokeWeight(1)
	line(startx, starty, endx, endy)
	textSize(10)
	fill(255, 105, 180)
	text('sec(θ)', (endx + 200) / 2, endy)
}

function cosecant() {
	let linelength = 1 / sin(-radians(theta)) * 100
	let startx = 200
	let starty = 200
	let endx = startx
	let endy = starty + linelength
	stroke(3, 240, 252)
	strokeWeight(2)
	line(startx, starty, endx, endy)
	textSize(10)
	strokeWeight(1)
	fill(3, 240, 252)
	text('csc(θ)', endx, (endy + 200) / 2)
}

function cotangent() {
	let linelength = 1 / tan(-radians(theta)) * 100
	let startx = originx + cos(-radians(theta)) * 100
	let starty = originx + sin(-radians(theta)) * 100
	let endx = 200
	let endy = 200 + (1 / sin(-radians(theta)) * 100)
	stroke(255, 165, 0)
	strokeWeight(1)
	fill(255, 165, 0)
	line(startx, starty, endx, endy)
	text('cot(θ)', (startx + 200) / 2, endy)
}