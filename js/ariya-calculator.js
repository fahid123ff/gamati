// card-1
function calculateTriangleArea(){
    const baseField = document.getElementById('triangle-base');
    const baseValueText = baseField.value;
    const base = parseFloat(baseValueText);
    console.log(base);


    // get triangle hight 
    const hightField = document.getElementById('triangle-hight');
    const hightValueText = hightField.value;
    const hight = parseFloat(hightValueText);
    console.log(hight);


    const area = 0.5 * base * hight;
    console.log(area)

    // show area
  const areaSpan = document.getElementById('triangle-area');
  areaSpan.innerText = area;

  // 
  addToCalculationEntry('trangle', area);
}


// card-2

function calculaterectangleArea(){
    const widthFild = document.getElementById('rectangle-width');
    const widthValueText = widthFild.value;
    const width = parseFloat(widthValueText);
    console.log(width);

    const hightField = document.getElementById('rectangle-hight');
    const  hightValueText = hightField.value;
    const hight = parseFloat(hightValueText);
    console.log(hight);

    const area = width * hight;
    console.log(area);

    const areaSpan = document.getElementById('rectangle-area');
    areaSpan.innerText = area;

    // 
    addToCalculationEntry('Rectangle', area);
}


// card-3 parallelogram

// reusable function 
function calculateParallelogramArea(){
  const base = getInputValue('parallelogram-base');
  console.log(base);

  const hight = getInputValue('parallelogram-hight');
  console.log(hight);

  const area = base * hight;
  console.log(area);

  setElementInnerText('parallelogram-area', area);

  // add to calculation 
  addToCalculationEntry('Parallelogram', area);
}


// card-4 Ellipse
function calculateellipseArea(){
  const majorRadious = getInputValue('ellipse-major-radious');
  const minorRadious = getInputValue('ellipse-minor-redious');
  const area = 3.1416 * majorRadious * minorRadious;
   
  setElementInnerText('ellipse-area', area);

  // 
  addToCalculationEntry('elipse', area);
}


// reuseable get input value field in number
function getInputValue(fieldId){
  const inputField = document.getElementById(fieldId);
  const inputValueText = inputField.value;
  const value = parseFloat(inputValueText);
  return value;
}

// reusble set span , p. div, etc text 
function setElementInnerText(elementId, area){
  const element  = document.getElementById(elementId);
  element.innerText = area;
}






// add to calculation entry 
function addToCalculationEntry(areaType, area){
  console.log(areaType + ' ' + area);
   const calculationEntry = document.getElementById('calculation-entry');

   const count = calculationEntry.childElementCount;

  const p = document.createElement('p');
  p.classList.add('my-4')
  p.innerHTML = `${count + 1 }.  ${areaType} ${area} cm<sup>2</suo> <button class="btn btn-sm btn-success">Convart  </button>`;

  calculationEntry.appendChild(p);
}