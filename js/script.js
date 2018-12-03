function triangle() {
  var side1 = parseInt(document.getElementById("length1").value);
  var side2 = parseInt(document.getElementById("length2").value);
  var side3 = parseInt(document.getElementById("length3").value);

  if (side1 > 0 && side2 > 0 && side3 > 0)
  {
      if (side1 == side2 && side2 == side3 && side3 == side1)
        {
          alert("Equilateral Triangle");
        } else if (side1 + side2 <= side3 || side2 + side3 <= side1 || side3 + side1 <= side2){
          alert("Triangel CANNOT be created!");
        }
         else if (side1 == side2 || side2 == side3 || side3 == side1){
          alert("Isosceles Triangle");
        }
      else if(side1 != side2 && side2 != side3 && side3 != side1){
          alert("Scalene Triangle");
        }
  } else{
      alert("Value has to be greater than zero");
    }
}

  function reload() {
    location.reload();
  }
