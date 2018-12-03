function triangle(){
  var side1 = document.getElementById("length1").value;
  var side2 = document.getElementById("length2").value;
  var side3 = document.getElementById("length3").value;

  if (side1 == side2 && side2 == side3 && side3 == side1) {
    alert("Equilateral Triangle");

  } else if (side1 || side2 || side2 == side3 || side1) {
    alert("Isosceles Triangle");

  } else if ((side1 + side2 > side3 || side2 + side3 > side1 || side3 + side1 > side2) & (side1 != side2 && side2 != side3 && side3 != side1)) {
    alert("Scalene Triangle");
  }
}
function reload(){
  location.reload();
}
