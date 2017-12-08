var NumberOfImages = 10;

var images = new BuildArray(NumberOfImages);

// Use the following variables to 
// define your random words:
images[1] = "https://cmeimg-a.akamaihd.net/640/clsd/getty/c64f76dc20c246ca88ee180fe4b4b781";
images[2] = "http://apopka-1x1yusplq.stackpathdns.com/wp-content/uploads/2017/10/persian-cats-and-kittens-1.jpg";
images[3] = "https://www.rd.com/wp-content/uploads/2016/04/01-cat-wants-to-tell-you-laptop.jpg";
images[4] = "https://cdn.theatlantic.com/assets/media/img/mt/2017/06/shutterstock_319985324/lead_960.jpg?1497799490";
images[5] = "http://sites.psu.edu/siowfa15/wp-content/uploads/sites/29639/2015/10/cat.jpg";
images[6] = "https://www.petmd.com/sites/default/files/cat-stroke-606267548.jpg";
images[7] = "http://s.newsweek.com/sites/www.newsweek.com/files/2016/05/25/saudi-arabia-cat-ban.jpg";
images[8] = "https://s7d1.scene7.com/is/image/PETCO/new-kitten-guide-090517-cat-featured-355w-200h-d";
images[9] = "https://pagez.com/attachments/818/article/0/6becdabb07293ed0b06f628b9d3e0dc3.jpg";
images[10] = "https://i.amz.mshcdn.com/QeSnNurAAVbLYDKbmh4GEjgqzbY=/1200x630/2017%2F05%2F24%2F07%2F10b57942c5d54af69b451223f2fc70ef.5a8f5.jpg";

function BuildArray(size){
this.length = size;
for (var i = 1; i <= size; i++){
this[i] = null;}
return this;
}

function PickRandomImage(frm) {
// Generate a random number between 1 and NumberOfWords
var rnd = Math.ceil(Math.random() * NumberOfImages);

// Display the word inside the text box
frm.ImageBox.src = images[rnd];
}
