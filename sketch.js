let circlerad = 200
let theta = 45
let originx = 200
let originy = 200
let speedtheta = 1
let sinon = false
let coson = false
let tanon = false
let secon = false
let cscon = false
let coton = false
let sintexton = false
let costexton = false
let tantexton = false
let sectexton = false
let csctexton = false
let cottexton = false
let trigfuncs = [sintexton,costexton,tantexton,sectexton,csctexton,cottexton]
let trigfuncstext = [sintexton,costexton,tantexton,sectexton,csctexton,cottexton]

function study(){
	let randomtrigfunc = Math.floor(Math.random()*6)
	onstuff(6)
	document.getElementById("thebuttons").style.display="none"
	theta=45
	startpause(1)
	document.getElementById("exitstudymode").style.display="block"
	document.getElementById("studymode").style.display="none"
	trigfuncs[randomtrigfunc]=true
}

function exitstudy(){
	onstuff(6)
	document.getElementById("thebuttons").style.display="block"
	startpause(0)
	document.getElementById("exitstudymode").style.display="none"
	document.getElementById("studymode").style.display="block"
}

function draw() {
	background(0)
	noStroke()
	strokeWeight(1)
	unitcircle()
	startlines()
	if (trigfuncs[0]) {
		sine()
	}
	if (trigfuncs[1]) {
		cosine()
	}
	if (trigfuncs[2]) {
		tangent()
	}
	if (trigfuncs[3]) {
		secant()
	}
	if (trigfuncs[4]) {
		cosecant()
	}
	if (trigfuncs[5]) {
		cotangent()
	}
	hypotenuse()
	theta += speedtheta
	if (theta >= 360) {
		theta -= 360
	}
	if(theta<=-360){
		theta+=360
	}
	if(theta<=0){
		theta+=360
	}
	document.getElementById("thetaspeed").innerHTML = "speed theta: "+speedtheta
	document.getElementById("thetaangle").innerHTML = "theta: "+Math.floor(theta)+"°"
}

function startpause(s){
	if(s==0){
		speedtheta=1
		// document.getElementById("thetaangle").innerHTML = ""
	}
	if(s==1){
		speedtheta=0
		document.getElementById("thetaangle").innerHTML = "theta: "+theta+"°"
	}
	if(s==2){
		speedtheta+=0.25
		// document.getElementById("thetaangle").innerHTML = ""
	}
	if(s==3){
		speedtheta-=0.25
		// document.getElementById("thetaangle").innerHTML = ""
	}
}

function onstuff(index) {
	if (index == 0) {
		trigfuncs[0] = !trigfuncs[0]
		trigfuncstext[0] = !trigfuncstext[0]
	}
	if (index == 1) {
		trigfuncs[1] = !trigfuncs[1]
		trigfuncstext[1] = !trigfuncstext[1]
	}
	if (index == 2) {
		trigfuncs[2] = !trigfuncs[2]
		trigfuncs[3] = !trigfuncs[3]
		trigfuncstext[2] = !trigfuncstext[2]
		trigfuncstext[3] = !trigfuncstext[3]
	}
	// if (index == 3) {
	// 	trigfuncs[3] = !trigfuncs[3]
	// }
	if (index == 4) {
		trigfuncs[4] = !trigfuncs[4]
		trigfuncstext[4] = !trigfuncstext[4]
	}
	if (index == 5) {
		trigfuncs[5] = !trigfuncs[5]
		trigfuncstext[5] = !trigfuncstext[5]
	}
	if(index==6){
	trigfuncs[0] = false
	trigfuncs[1] = false
	trigfuncs[2] = false
	trigfuncs[3] = false
	trigfuncs[4] = false
	trigfuncs[5] = false
	trigfuncstext[0] = false
	trigfuncstext[1] = false
	trigfuncstext[2] = false
	trigfuncstext[3] = false
	trigfuncstext[4] = false
	trigfuncstext[5] = false
	}
	if(index==7){
		trigfuncs[0] = true
		trigfuncs[1] = true
		trigfuncs[2] = true
		trigfuncs[3] = true
		trigfuncs[4] = true
		trigfuncs[5] = true
		trigfuncstext[0] = true
		trigfuncstext[1] = true
		trigfuncstext[2] = true
		trigfuncstext[3] = true
		trigfuncstext[4] = true
		trigfuncstext[5] = true
		}
}

function identities(index) {
	if (index == 1) {
		document.getElementById("py1text").innerHTML = "sin²(θ) + cos²(θ) = 1"
		trigfuncs[0] = true
		trigfuncs[1] = true
		trigfuncs[2] = false
		trigfuncs[3] = false
		trigfuncs[4] = false
		trigfuncs[5] = false
		trigfuncstext[0] = true
		trigfuncstext[1] = true
		trigfuncstext[2] = false
		trigfuncstext[3] = false
		trigfuncstext[4] = false
		trigfuncstext[5] = false
	}
	if(index==2){
		document.getElementById("py2text").innerHTML = "tan²(θ) + 1 = sec²(θ)"
		trigfuncs[0] = false
		trigfuncs[1] = false
		trigfuncs[2] = true
		trigfuncs[3] = true
		trigfuncs[4] = false
		trigfuncs[5] = false
		trigfuncstext[0] = false
		trigfuncstext[1] = false
		trigfuncstext[2] = true
		trigfuncstext[3] = true
		trigfuncstext[4] = false
		trigfuncstext[5] = false
	}
	if(index==3){
		document.getElementById("py3text").innerHTML = "cot²(θ) + 1 = csc²(θ)"
		trigfuncs[0] = false
		trigfuncs[1] = false
		trigfuncs[2] = false
		trigfuncs[3] = false
		trigfuncs[4] = true
		trigfuncs[5] = true
		trigfuncstext[0] = false
		trigfuncstext[1] = false
		trigfuncstext[2] = false
		trigfuncstext[3] = false
		trigfuncstext[4] = true
		trigfuncstext[5] = true
	}
}

function ratio(index){
	if(index==1){
		document.getElementById("tantext").innerHTML = "by similar triangles: tan(θ)/1 = sin(θ)/cos(θ)"
		trigfuncs[0] = true
		trigfuncs[1] = true
		trigfuncs[2] = true
		trigfuncs[3] = true
		trigfuncs[4] = false
		trigfuncs[5] = false
		trigfuncstext[0] = true
		trigfuncstext[1] = true
		trigfuncstext[2] = true
		trigfuncstext[3] = true
		trigfuncstext[4] = false
		trigfuncstext[5] = false
	}
	if(index==2){
		document.getElementById("tantext").innerHTML = "by similar triangles: 1/cos = sec/1"
		trigfuncs[0] = false
		trigfuncs[1] = true
		trigfuncs[2] = true
		trigfuncs[3] = true
		trigfuncs[4] = false
		trigfuncs[5] = false
		trigfuncstext[0] = false
		trigfuncstext[1] = true
		trigfuncstext[2] = true
		trigfuncstext[3] = true
		trigfuncstext[4] = false
		trigfuncstext[5] = false
	}
	if(index==3){
		document.getElementById("tantext").innerHTML = "by similar triangles: cot(θ)/1 = 1/tan(θ)"
		trigfuncs[0] = false
		trigfuncs[1] = false
		trigfuncs[2] = true
		trigfuncs[3] = true
		trigfuncs[4] = false
		trigfuncs[5] = true
		trigfuncstext[0] = false
		trigfuncstext[1] = false
		trigfuncstext[2] = true
		trigfuncstext[3] = true
		trigfuncstext[4] = false
		trigfuncstext[5] = true
	}
	if(index==4){
		document.getElementById("tantext").innerHTML = "by similar triangles: csc(θ)/1 = 1/sin(θ)"
		trigfuncs[0] = true
		trigfuncs[1] = false
		trigfuncs[2] = false
		trigfuncs[3] = false
		trigfuncs[4] = true
		trigfuncs[5] = true
		trigfuncstext[0] = true
		trigfuncstext[1] = false
		trigfuncstext[2] = false
		trigfuncstext[3] = false
		trigfuncstext[4] = true
		trigfuncstext[5] = true
	}
}

function setup() {
	createCanvas(400, 400);
	background(0);
	document.getElementById("exitstudymode").style.display="none"
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
	if(trigfuncstext[0]){
		textSize(10)
		fill(255, 0, 0)
		text('sin(θ)', endx, (endy + 200) / 2)
	}
}

function cosine() {
	let linelength = 100
	let endx = originx + cos(-radians(theta)) * linelength
	let endy = originy + sin(-radians(theta)) * linelength
	let startx = 200
	let starty = endy
	stroke(0, 255, 0)
	line(startx, starty, endx, endy)
	if(trigfuncstext[1]){
		textSize(10)
		fill(0, 255, 0)
		text('cos(θ)', (endx + 150) / 2, endy - 5)
	}
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
	if(trigfuncstext[2]){
		textSize(10)
		fill(255, 255, 0)
		text('tan(θ)', endx, (endy + 200) / 2)
	}
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
	if(trigfuncstext[3]){
		textSize(10)
		fill(255, 105, 180)
		text('sec(θ)', (endx + 200) / 2, endy)
	}
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
	if(trigfuncstext[4]){
		textSize(10)
		strokeWeight(1)
		fill(3, 240, 252)
		text('csc(θ)', endx, (endy + 200) / 2)
	}
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
	if(trigfuncstext[5]){
		text('cot(θ)', (startx + 200) / 2, endy)
	}
}