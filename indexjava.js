const textButton = document.getElementById('textButton');
const backButton = document.getElementById('backButton');

const mainElement = document.getElementById("main");
const signElement = document.getElementById("sign");
const tag1Element = document.getElementById("tag1");
const tag2Element = document.getElementById("tag2");
const tag3Element = document.getElementById("tag3");

const body = document.body;

var eng = true;
var bak = true;

const sweText1 = 'Jag heter Oskar Ternström, jag går under taggen "WarMole" på de flesta onlineplattformar. Jag bor och studerar för närvarande i Sverige. Jag läser just nu till gymnasieingenjör i Helsingborg. Jag skulle se mig själv som en nyfiken person, jag tycker om att både utforska och forska i olika ämnen och/eller aktiviteter. Att djupdyka i obskyra ämnen eller tankar är något jag älskar att göra. Det mesta av min fritid spenderar jag antingen med vänner eller spelar mina favoritspel online, mina favoriter är både skräck och pusselspel. Jag har sysslat med flera hobbyer men har ännu inte satt tänderna i något. Jag har vanligtvis massor av idéer eller projekt som jag skulle älska att prova men antingen har jag inte resurser eller kunskap för att förverkliga dem.';
const sweText2 = 'Välkommen';
const sweText3 = 'Socialer';
const sweText4 = '| Om Mig';
const sweText5 = '| Projekt';
const engText1 = 'My name is Oskar Ternström, I go by the tag "WarMole" on most online platforms. I currently live and study in Sweden. I am currently studdying to become a high school engineer in Helsingborg. I would see myself as a curious person, I enjoy both exploring and researching different topics and or activites. Getting to deep dive in obscure topics or thoughts is something I love doing. Most of my freetime I spend either with friends or playing my favorite online games, my favorites are the genres horror and puzzle games. I have dabbled in multiple hobbies but have yet to stick my teeth in anything. I usualy have lots of ideas or projects that I would love to attempt but either do not have the resources or knowledge to make them a reality.';
const engText2 = 'Welcome';
const engText3 = 'Socials';
const engText4 = '| About Me';
const engText5 = '| Projects'; 

textButton.addEventListener("click", alpha);

function alpha(){
	if (eng == true)
	{
		mainElement.textContent = sweText1;
		signElement.textContent = sweText2;
		tag1Element.textContent = sweText3;
		tag2Element.textContent = sweText4;
		tag3Element.textContent = sweText5;
		eng = false;
	}
	else
	{
		mainElement.textContent = engText1;
		signElement.textContent = engText2;
		tag1Element.textContent = engText3;
		tag2Element.textContent = engText4;
		tag3Element.textContent = engText5;
		eng = true;
	}
}

backButton.addEventListener("click", beta);

function beta() {
	if (bak == true){
		body.style.backgroundImage = "url('mountain.jpg')";
		bak = false;
	}
	else{
		body.style.backgroundImage = "url('fog2.jpg')";
		bak = true;
	}
}