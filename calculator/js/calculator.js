document.addEventListener("DOMContentLoaded", () => {
  // Hiding alert for incorrect input
  document.getElementById("alert").style.display = "none";

  // Taking first input from user
  let num1 = "";
  document.getElementById("num1").addEventListener("keyup", (event) => {
    num1 = event.target.value;
  });

  // Taking second input from user
  let num2 = "";
  document.getElementById("num2").addEventListener("keyup", (event) => {
    num2 = event.target.value;
  });

  // Taking operation sign
  let sign = "";
  document.getElementById("operation").addEventListener("change", (event) => {
    sign = event.target.value;
  });

  // Result
  let result = 0;

  // Calculate result
  document.getElementById("calBtn").addEventListener("click", () => {
    if (
      !(!isNaN(parseFloat(num1)) && isFinite(num1)) ||
      !(!isNaN(parseFloat(num2)) && isFinite(num2))
    ) {
      document.getElementById("alert").style.removeProperty("display");
      document.getElementById("error").innerText = "Please Enter Number!";
    } else if (!sign) {
      document.getElementById("alert").style.removeProperty("display");
      document.getElementById("error").innerText = "Select an Operation!";
    } else {
      if ("add" === sign) {
        result = parseFloat(num1) + parseFloat(num2);
      } else if ("sub" === sign) {
        result = parseFloat(num1) - parseFloat(num2);
      } else if ("mul" === sign) {
        result = parseFloat(num1) * parseFloat(num2);
      } else if ("div" === sign) {
        result = parseFloat(num1) / parseFloat(num2);
      }

      // Showing result
      document.getElementById("result").innerText = result.toFixed(2);
    }
  });

  // Remove Alert Box
  document.getElementById("alertBtn").addEventListener("click", () => {
    document.getElementById("alert").style.display = "none";
  });
});
