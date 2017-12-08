var NumberOfImages = 10;

var images = new BuildArray(NumberOfImages);

// Use the following variables to 
// define your random words:
images[1] = "https://www.cesarsway.com/sites/newcesarsway/files/styles/large_article_preview/public/Common-dog-behaviors-explained.jpg?itok=FSzwbBoi";
images[2] = "http://food.thecookbk.com/wp-content/uploads/2017/04/puppy-1.jpg";
images[3] = "http://diligentdogs.com/wp-content/uploads/2016/06/Diligent-Dogs-Puppy-Training-FI1.png";
images[4] = "https://yt3.ggpht.com/EdjnobpzppDl5pSVU2s2AUIiFS0qBfT8Jdodw-FHMhugJK5zmzWDLkpqDVtpnaLSP66M5F8nqINImLKGtQ=s900-nd-c-c0xffffffff-rj-k-no";
images[5] = "https://www.petmd.com/sites/default/files/shutterstock_88631533-slide1.jpg";
images[6] = "http://africa.cgtn.com/wp-content/photo-gallery/2017/04/20311lpr.jpg";
images[7] = "https://i.kinja-img.com/gawker-media/image/upload/s--4p-SyaD6--/c_scale,fl_progressive,q_80,w_800/txtozmzikrdz1cmswjt4.jpg";
images[8] = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmM0-Ew_MlOSSdwiFH-U2d163zmqxgS3P9BI09tChabt7iOY6r";
images[9] = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWCTVj1vw7addgWtv07R8gw_SCqInMnhYCW-Q7crUkfFGDYk6R";
images[10] = "https://media.fox32chicago.com/media.fox32chicago.com/photo/2017/05/08/puppy_1494290952129_3280047_ver1.0_640_360.jpg";

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
