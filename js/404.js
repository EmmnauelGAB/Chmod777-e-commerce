document.addEventListener("DOMContentLoaded",(function(){[].slice.call(document.querySelectorAll("[data-bss-tooltip]")).map((function(e){return new bootstrap.Tooltip(e)}))}),!1),document.querySelectorAll(".datepicker").forEach((function(e){new Pikaday({field:e})}));