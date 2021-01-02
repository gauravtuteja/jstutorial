$('.slider').owlCarousel({
    loop:true,
    margin:0,
    autoplay:false,
    nav : true,
    navText: ["<img src='Images/gauravjewellers/leftarrow.png'>","<img src='Images/gauravjewellers/leftarrow.png'>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

var title = document.title = "Gaurav Jewellers";
var df = document.createDocumentFragment("");



//.......................header section starts.............................
var header = document.createElement("header");
header.id = "hdr";
//main div in header
var maindiv = document.createElement("div");

//adding class to maindiv
maindiv.className = "container maindiv flex";

//appending maindiv to header
header.appendChild(maindiv);

//div element
var div1 = document.createElement("div");

//adding class to div
div1.className = "first";

//appending div1 to maindiv
maindiv.appendChild(div1);

var ul = document.createElement("ul");
ul.innerHTML = "<li></li><li>";
ul.className = "flex";

//first li Content
var anchor = document.createElement("a");
anchor.href = "www.instagram.com";
ul.firstChild.appendChild(anchor);

var img = document.createElement("img");
img.setAttribute("src", "Images/gauravjewellers/insta.png");
anchor.appendChild(img);// first li Child

//second li content
var cloneA = anchor.cloneNode(false);
cloneA.href = "www.facebook.com";
ul.lastChild.appendChild(cloneA);

var cloneIMG = img.cloneNode(false);
cloneIMG.setAttribute("src", "images/gauravjewellers/other.png");
cloneA.appendChild(cloneIMG);//second li child

//appending ul in div
div1.appendChild(ul);

//second div in maindiv section

var div2 = document.createElement("div");
div2.className = "second flex";
var logo = img.cloneNode(false);
logo.setAttribute("src", "images/gauravjewellers/logo.png")
//appending logo in div2
div2.appendChild(logo);

//appending div2 in maindiv
maindiv.appendChild(div2);

//div3 in header
var div3 = document.createElement("div");
div3.className = "third flex";

var p = document.createElement("p");
p.textContent = "Today's Gold Rates";
//appending p in div3
div3.appendChild(p);

var cloneP = p.cloneNode(false);
cloneP.textContent = "Contact Us";
//appending cloneP in div3
div3.appendChild(cloneP);

//appending div3 in maindiv
maindiv.appendChild(div3);

//appending header in df
df.appendChild(header);

var carousel = document.getElementById("carousel");
//appending df in body beofre carousel
document.body.insertBefore(df, carousel);
//.................................header section ends................................
console.log(document.body);
//..................................Menu Section Starts................................
var menu = document.createElement("section");
menu.className = "menu";

//creating div in menu section...
var mdiv = document.createElement("div");
mdiv.className = "container";
//append div to section
menu.appendChild(mdiv);

//ul under div
var ulclone = ul.cloneNode(false);
ulclone.innerHTML = "<li></li><li></li><li></li><li></li><li></li><li></li><li></li>";

//appending ul to div
mdiv.appendChild(ulclone);

var a1 = anchor.cloneNode(false);
a1.href ="#";
a1.textContent = "New Arrivals";
ulclone.childNodes[0].appendChild(a1);

var a2 = anchor.cloneNode(false);
a2.href ="#";
a2.textContent = "Collection";
ulclone.childNodes[1].appendChild(a2);

var a3 = anchor.cloneNode(false);
a3.href ="#";
a3.textContent = "About Us";
ulclone.childNodes[2].appendChild(a3);

var a4 = anchor.cloneNode(false);
a4.href ="#";
a4.textContent = "Our Store";
ulclone.childNodes[3].appendChild(a4);

var a5 = anchor.cloneNode(false);
a5.href ="#";
a5.textContent = "Media Room";
ulclone.childNodes[4].appendChild(a5);

var a6 = anchor.cloneNode(false);
a6.href ="#";
a6.textContent = " Events";
ulclone.childNodes[5].appendChild(a6);

var a7 = anchor.cloneNode(false);
a7.href ="#";
a7.textContent = "Blog";
ulclone.childNodes[6].appendChild(a7);
//append menu to df
df.appendChild(menu);

//appending df to body
document.body.insertBefore(df, carousel);
console.log(menu);
//.......................................Menu Section Ends.....................

//........................statement section begin.........................
var statement = document.createElement("section");
statement.className = "statement";

var stdiv = document.createElement("div");
stdiv.className = "container flex";
    
var stdiv1 = document.createElement("div");
stdiv1.className = "sttmtimg";

var stdiv2 = document.createElement("div");
stdiv2.className = "sttmttxt"
//appedning both above divs in stdiv...
stdiv.appendChild(stdiv1);
stdiv.appendChild(stdiv2);

var cloneIMG1 = img.cloneNode(false);
cloneIMG1.setAttribute("src", "images/gauravjewellers/statement.png");
//appending cloneIMG1 in stdiv1...
stdiv1.appendChild(cloneIMG1);

var h2 = document.createElement("h2");
var span = document.createElement("span");
span.textContent = "Statement";
h2.textContent = "of your fashion";

var p = document.createElement("p");
p.textContent = "Having embarked on a retail journey for more than half a century ago, gaurav Jewellers has made a strong presence in MEERUT since 1955. Assured purity, high ethical standards, customer satisfaction, fine craftsmanship combined with a reasonable price range have been the key factors in making gaurav JEWELLERS, a cognizant of art of jewellery making.";

//appending h2 in stdiv2
stdiv2.appendChild(h2);
h2.insertAdjacentElement("afterbegin", span);

//appending p in stdiv2
stdiv2.appendChild(p);

var button = document.createElement("button");
button.textContent = "Read More";
button.className = "btn";
//appending button in stdiv2...
stdiv2.appendChild(button);

var cloneIMG2 = img.cloneNode(false);
cloneIMG2.setAttribute("src","./images/gauravjewellers/bottom.png")

stdiv2.appendChild(cloneIMG2);

//appending stdiv in statement...
statement.appendChild(stdiv);

//appending statement in body...
document.body.appendChild(statement);

//.......................featured collection section.......................
var collection = document.createElement("section");
collection.className = "collection";

var cdiv = document.createElement("div");

var h2clone = h2.cloneNode(false);
h2clone.textContent = "Featured Collection";

//appending h2clone in cdiv....
cdiv.appendChild(h2clone);

//appending cdiv in collection....
collection.appendChild(cdiv);

//.............................................................................................

cdiv1 = cdiv.cloneNode(false);
cdiv1.className = "featured flex";
console.log(cdiv1);
// three childs of cdiv1.....
var cdiv1fc = cdiv.cloneNode(false);
cdiv1fc.className = "cdiv1fc flex"
var cdiv1sc = cdiv.cloneNode(false);
cdiv1sc.className = "cdiv1sc"
var cdiv1tc = cdiv.cloneNode(false);
cdiv1tc.className = "cdiv1tc flex"

//appending above three in cdiv1....
cdiv1.appendChild(cdiv1fc);
cdiv1.appendChild(cdiv1sc);
cdiv1.appendChild(cdiv1tc);

//making two divs for cdiv1fc...............
var fcfc = cdiv.cloneNode(false);
fcfc.className = "sets"
var fcsc = cdiv.cloneNode(false);
fcsc.className = "bracelets"

//contents of above two divs.............
var setsimg = img.cloneNode(false);
setsimg.setAttribute("src","./Images/gauravjewellers/collection1.jpg");

fcfc.appendChild(setsimg);

var divinsets = cdiv.cloneNode(false);
divinsets.className = "divinsets"
var h2insets = h2.cloneNode(false);
h2insets.textContent = "Timaniya Sets";
var btninsets = button.cloneNode(false);
btninsets.textContent = "view collection"
divinsets.appendChild(h2insets);
divinsets.appendChild(btninsets);
fcfc.appendChild(divinsets);

var braceletsimg = img.cloneNode(false);
braceletsimg.setAttribute("src","./Images/gauravjewellers/collection2.jpg");

fcsc.appendChild(braceletsimg);

var divinbracelets = cdiv.cloneNode(false);
divinbracelets.className = "divinbracelets"
var h2inbracelets = h2.cloneNode(false);
h2inbracelets.textContent = "Bracelets";
var btninbracelets = btninsets.cloneNode(true);
divinbracelets.appendChild(h2inbracelets);
divinbracelets.appendChild(btninbracelets);
fcsc.appendChild(divinbracelets);

//appending both in cdiv1fc....
cdiv1fc.appendChild(fcfc);
cdiv1fc.appendChild(fcsc);

//content of cdiv1sc....
var cdiv1scimg =img.cloneNode(false);
cdiv1scimg.setAttribute("src","./Images/gauravjewellers/collection3.jpg");
//appending cdiv1scimg in cdiv1sc....
cdiv1sc.appendChild(cdiv1scimg);

var divincdiv1sc = cdiv.cloneNode(false);
divincdiv1sc.className = "divincdiv1sc"
var h2incdiv1sc = h2.cloneNode(false);
h2incdiv1sc.textContent = "Bridal Collection";
var btnincdiv1sc = btninsets.cloneNode("True");
divincdiv1sc.appendChild(h2incdiv1sc);
divincdiv1sc.appendChild(btnincdiv1sc);
cdiv1sc.appendChild(divincdiv1sc);

//making two divs for cdiv3fc...............
var tcfc = cdiv.cloneNode(false);
tcfc.className = "bangles";
var tcsc = cdiv.cloneNode(false);
tcsc.className = "pendants";

//contents of above two divs.............
var banglesimg = img.cloneNode(false);
banglesimg.setAttribute("src","./Images/gauravjewellers/collection4.jpg");

tcfc.appendChild(banglesimg);

var divinbangles = cdiv.cloneNode(false);
divinbangles.className = "divinbangles"
var h2inbangles = h2.cloneNode(false);
h2inbangles.textContent = "Bangles";
var btninbangles = btninsets.cloneNode(true);
divinbangles.appendChild(h2inbangles);
divinbangles.appendChild(btninbangles);
tcfc.appendChild(divinbangles);

var pendantsimg = img.cloneNode(false);
pendantsimg.setAttribute("src","./Images/gauravjewellers/collection5.jpg");
tcsc.appendChild(pendantsimg);

var divinpendants = cdiv.cloneNode(false);
divinpendants.className = "divinpendants"
var h2inpendants = h2.cloneNode(false);
h2inpendants.textContent = "Pendants";
var btninpendants = btninsets.cloneNode(true);
divinpendants.appendChild(h2inpendants);
divinpendants.appendChild(btninpendants);
tcsc.appendChild(divinpendants);

//appending both in cdiv1fc....
cdiv1tc.appendChild(tcfc);
cdiv1tc.appendChild(tcsc);

//appending cdiv1 in collection......
collection.appendChild(cdiv1);

//appending collection in body...
document.body.appendChild(collection);

//..................................our collection section...............................

var gjcollection = document.createElement("section");
gjcollection.className = "gjcollection";

var gjh2 = h2.cloneNode(false);
gjh2.textContent = "Our Collection";
gjcollection.appendChild(gjh2);

var gjp = p.cloneNode(false);
gjp.className = "container gjp";
gjp.textContent = "Our love for exclusive designer pieces, divine devotion for perfection, passion for fine craftsmanship and years of guaranteed product quality has helped us earn an envious reputation of being a jewellery brand synonymous with setting high standards for style, quality, detailing, design and elegance.";
gjcollection.appendChild(gjp);

var gjdiv = cdiv.cloneNode(false);
gjdiv.className = "gjdiv";
var gjimg = cloneIMG2.cloneNode(true);

gjdiv.appendChild(gjimg);
gjcollection.appendChild(gjdiv);
//appending gjcollection in body...
document.body.appendChild(gjcollection);

// gjcarousel...............................

$('#gjcarousel').owlCarousel({
    margin:20,
    loop:false,
    dots:false,
    autoplay:false,
    nav:true,
    navText:["<img src='Images/gauravjewellers/leftarrow.png'>","<img src='Images/gauravjewellers/leftarrow.png'>"],
    responsive:{
        0:{
            items:3
        },
        600:{
            items:4
        },
        1000:{
            items:4
        }
    }
}) 
 var carousel2 = document.getElementById("carousel2");

 console.log(carousel2);

 gjcollection.appendChild(carousel2);

var gjcarousel = document.getElementById("gjcarousel");
var item = gjcarousel.getElementsByClassName("item");
var len =item.length;

for ( i=0; i<len; i++)
    {
    var line = document.createElement("img");
    var gold = document.createElement("a");
    
    line.setAttribute("src","./Images/gauravjewellers/line.png");
    line.classList = "line";
    gold.setAttribute("href","#")
    item[i].appendChild(line);
    item[i].appendChild(gold);
};

 var itemh2 = document.getElementsByClassName("line")
    itemh2[0].nextElementSibling.textContent = "Gold";
    itemh2[1].nextElementSibling.textContent = "Diamond";
    itemh2[2].nextElementSibling.textContent = "Polki";
    itemh2[3].nextElementSibling.textContent = "Kundan";
    itemh2[4].nextElementSibling.textContent = "Shreeman";

//........................................subscribe section.............................
var subscribe = document.createElement("section");
subscribe.className = "subscribe";
var subdiv = cdiv.cloneNode(false);
subdiv.className = "container subdiv";

//subdiv contents......

var subdivh2 = h2.cloneNode(false);
subdivh2.textContent = "Stay in the know";

var subdivp = p.cloneNode(false);
subdivp.textContent = "Trust us, you'll want to hear what we have to say";

subdiv.appendChild(subdivh2);
subdiv.appendChild(subdivp);

//......subdiv2.....
var subdiv2 = cdiv.cloneNode(false);
subdiv2.className = "subdiv2 flex";

var input = document.createElement("input");
input.placeholder = "Your Email Address";
input.type = "email";

var subbtn = button.cloneNode(false);
subbtn.textContent = "Subscribe";

subdiv2.appendChild(input);
subdiv2.appendChild(subbtn);

subscribe.appendChild(subdiv);
subscribe.appendChild(subdiv2);
document.body.appendChild(subscribe);

//......................footer section..........................................
var footer = document.createElement("footer");
footer.className = "footer";

var fcont = cdiv.cloneNode(false);
fcont.className = "container";

footer.appendChild(fcont);

var fdiv = cdiv.cloneNode(false);
fdiv.className = "fdiv flex";

for (var i = 0; i <= 3; i++)
    {
    var fdivul = document.createElement("ul");

    fdiv.appendChild(fdivul);
   }

var childs = fdiv.childNodes

//fdiv1c content.........
childs[0].className = "fdiv1c";

for (var i = 0; i <= 8; i++)
    {
    var list1 = document.createElement("li");
    childs[0].appendChild(list1);
   }

//fdiv2c content.........
childs[1].className = "fdiv2c";
for (var i = 0; i <= 5; i++)
    {
    var list2 = document.createElement("li");

    childs[1].appendChild(list2);
   }
//fdiv3c content.........
childs[2].className = "fdiv3c";
for (var i = 0; i <= 3; i++)
    {
    var list3 = document.createElement("li");

    childs[2].appendChild(list3);
   }
//fdiv4c content.........
childs[3].className = "fdiv4c";
for (var i = 0; i <= 3; i++)
    {
    var list4 = document.createElement("li");

    childs[3].appendChild(list4);
    }
// h4 in every first li......
for(i=0; i<=3; i++){
    var childs = fdiv.childNodes;
    var h4 = document.createElement("h4");

    childs[i].firstChild.appendChild(h4);
}
    childs[0].firstChild.childNodes[0].textContent = "About Us";
    childs[1].firstChild.childNodes[0].textContent = "Our Collection";
    childs[2].firstChild.childNodes[0].textContent = "Media Room";
    childs[3].firstChild.childNodes[0].textContent = "Contact Us";

    //anchor tags in other li's.....
for(i =1 ; i <= 8; i++){

    var insert = fdiv.childNodes[0].childNodes;
    var anc = document.createElement("a");
    anc.href = "#";

    insert[i].appendChild(anc);
}
console.log(insert[1].firstChild);
insert[1].firstChild.textContent = "gaurav Jewellers";
insert[2].firstChild.textContent = "Our Journey";
insert[3].firstChild.textContent = "Mission & Vision";
insert[4].firstChild.textContent = "Expertise";
insert[5].firstChild.textContent = "Careers";
insert[6].firstChild.textContent = "Our Store";
insert[7].firstChild.textContent = "Event";
insert[8].firstChild.textContent = "Blog";

for(i =1 ; i <= 5; i++){

    var insert1 = fdiv.childNodes[1].childNodes;
    var anc1 = anc.cloneNode(false);

    insert1[i].appendChild(anc1);
}
insert1[1].firstChild.textContent = "Gold";
insert1[2].firstChild.textContent = "Diamond";
insert1[3].firstChild.textContent = "Polki";
insert1[4].firstChild.textContent = "Kundan";
insert1[5].firstChild.textContent = "Shreeman";

for(i =1 ; i <= 3; i++){

    var insert2 = fdiv.childNodes[2].childNodes;
    var anc2 = anc.cloneNode(false);

    insert2[i].appendChild(anc2);
}
insert2[1].firstChild.textContent = "Press Release";
insert2[2].firstChild.textContent = "Media Coverage";
insert2[3].firstChild.textContent = "Ads Campaigns";

for(i =1 ; i <= 3; i++){

    var insert3 = fdiv.childNodes[3].childNodes;
    var anc3 = anc.cloneNode(false);

    insert3[i].appendChild(anc3);
}
insert3[1].firstChild.innerHTML = '<i class="fas fa-phone-alt"></i> 0121-2668632';
insert3[1].firstChild.className = "contact";
insert3[2].firstChild.innerHTML = '<i class="fas fa-envelope"></i><span> Abu Plaza, Abu Lane, Meerut <br>Uttar Pradesh<br> 250001</span>';
insert3[2].firstChild.className = "address";
insert3[3].firstChild.innerHTML = '<i class="fas fa-map-marker-alt"></i> <span>info@gauravjewellers.com</span>';
insert3[3].firstChild.className = "email";

fcont.appendChild(fdiv);
document.body.appendChild(footer);

