var nav = document.getElementsByClassName("nav-button");
var content_names = ["wods", "timers", "random", "stats"];

function toggleDiv(div_name) {
  for (i = 0; i < content_names.length; i++) {
    var style = 'col nav-button',
        display = 'none';
    if (content_names[i] === div_name) {
      style = 'col nav-button selected',
      display = 'flex';
    }
    document.getElementById('n_'+content_names[i]).className = style;
    document.getElementById(content_names[i]).style.display = display;
  }
}

for (i = 0; i < nav.length; i++) {
  nav[i].onclick = function(e) {
    toggleDiv(this.id.replace('n_', ''));
  };
 }

