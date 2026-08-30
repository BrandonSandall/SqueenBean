(function () {
  var row = document.querySelector(".row");
  if (!row) return;

  function columnCount() {
    var w = window.innerWidth;
    if (w >= 1200) return 5;
    if (w >= 900) return 4;
    if (w >= 600) return 3;
    return 2;
  }

  function layout() {
    var items = Array.prototype.slice.call(row.querySelectorAll("img, video"));
    var n = columnCount();
    var existing = row.querySelectorAll(".column");
    if (existing.length === n && items.length && items[0].parentNode && items[0].parentNode.className === "column") {
      return;
    }
    var i, col, cols;
    while ((col = row.querySelector(".column"))) {
      row.removeChild(col);
    }
    cols = [];
    for (i = 0; i < n; i++) {
      col = document.createElement("div");
      col.className = "column";
      row.appendChild(col);
      cols.push(col);
    }
    for (i = 0; i < items.length; i++) {
      cols[i % n].appendChild(items[i]);
    }
  }

  layout();
  var t;
  window.addEventListener("resize", function () {
    clearTimeout(t);
    t = setTimeout(layout, 150);
  });
})();
