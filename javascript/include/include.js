
let hello="Hello222"

// Grave Accent를 활용한 HTML embeding
let html = `
<style>
.myDiv {
  border: 5px outset blue;
  background-color: lightblue;
  text-align: center;
}
</style>

<div class="myDiv">
  <h2>This is a heading in a div element</h2>
  <p>This is some text in a div element.</p>
</div>
`

function supportsImports() {
  // not support in Chrome 
  return 'import' in document.createElement('link');
}

function addJsc() {
  var head= document.getElementsByTagName('head')[0];
  var script= document.createElement('script');
  script.type= 'text/javascript';
  script.src= 'helper.js';
   head.appendChild(script)
}




window.addEventListener('load', () => {

  document.body.innerHTML = html; 
  if(supportsImports()) {
    console.log("Surpporting...")
  }else { 
    console.log("Not Surpporting...")
  }

  addJsc();



  // not working in Chrome 
  //let content = document.querySelector('link[rel="import"]').import; 
  //console.log(content);


})




