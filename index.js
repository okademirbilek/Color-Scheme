const colorContainer=document.getElementById("color-container")
const getColorBtn=document.getElementById("get-color-btn")
const form =document.getElementById("form")
const colorInput=document.getElementById("color")
const schemeInput=document.getElementById("scheme")
let colorSchemeArray=[]



function renderColor(){
    // console.log(colorSchemeArray)
     let html = ""
     colorSchemeArray[0].map(color => {
         html += `
            <div class="single-color-container">
                <div class="single-color" style="background-color:${color.hex.value};"></div>
                <div class="hex-value">${color.hex.value}</div>
            </div>
         `
         
     }) 
        
    
    colorContainer.innerHTML = html
}

fetch("https://www.thecolorapi.com/scheme?hex=0047AB&mode=analogic&count=5")
    .then(response => response.json())
    .then(data => {
        colorSchemeArray.push(data.colors)
        renderColor()
    })
  
  
  form.addEventListener("submit",function(e){
    console.log("heloo")
    e.preventDefault()
    //deleting # from the string
    const colorInputValue = colorInput.value.slice(1)
    const schemeInputValue = schemeInput.value
    console.log(colorInputValue,schemeInputValue)
    
    fetch(`https://www.thecolorapi.com/scheme?hex=${colorInputValue}&mode=${schemeInputValue}&count=5`)
        .then(res => res.json())
        .then(post => {
            colorSchemeArray.unshift(post.colors)
            renderColor()
            form.reset()
        })
    
})
