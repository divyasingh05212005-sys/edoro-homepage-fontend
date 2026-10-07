//slider
var img = ["i1.png", "i2.png", "i3.png", "i4.png","i5.png","i6.png","i7.png","i8.png","i9.png","i10.png","i11.png","i12.png","i13.png","i14.png","i15.png"];
var i = 0;
function slide() {
    //alert("hii hii");
    var div = document.getElementById("slider");
    //alert(div);
    div.style.backgroundImage = "url('img/" + img[i] + "')";
    i++;
    if (i >= img.length) {
        i = 0;
    }
    window.setTimeout(slide, 2000);
}
window.onload = slide;
