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
}




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
}