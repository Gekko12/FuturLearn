$("#profileImage").click(function (e) {
  $("#imageUpload").click();
});

function fasterPreview(uploader) {
  if (uploader.files && uploader.files[0]) {
    $('#profileImage').attr('src',
      window.URL.createObjectURL(uploader.files[0]));
  }
}

$("#imageUpload").change(function () {
  fasterPreview(this);
});

function add_item() {
  let item = document.getElementById("box");
  let list_item = document.getElementById("list_item");
  if (item.value != "") {
    let make_li = document.createElement("LI");
    make_li.appendChild(document.createTextNode(item.value));
    list_item.appendChild(make_li);
    item.value = ""
    make_li.onclick = function () {
      this.parentNode.removeChild(this);
    }
  }
  else {
    alert("plz add a value to item");
  }
}