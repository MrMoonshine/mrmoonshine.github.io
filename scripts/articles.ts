function setArticles() {
  var inputs:Document[] = document.getElementsByName("articleinput");
  
    var articles: Document[] = document.
    getElementById("articlespace").
    getElementsByTagName("article");
  
  if (inputs.length != articles.length) {
    console.log("Wrong Number Of Articles");
    return;
  }
  
  let myTopic: string;
  //Read Inputs
  for (var a = 0; a < inputs.length; a++){
    if (inputs[a].checked) {
      //set Article Name
      myTopic = inputs[a].value;
    }
  }

  for (const a of articles) {
    a.style.display = "none";
  }

  if (document.getElementsByName(myTopic)[0] == null) {
    alert("This article doesn't exist");
    return;
  }

  document.getElementsByName(myTopic)[0].style.display = "block";
}

function loader() {
  setArticles();
  for (var a = 0; a < document.getElementsByName("articleinput").length; a++){
    document.getElementsByName("articleinput")[a].
      addEventListener("change",setArticles);
  }
}

window.onload = loader;