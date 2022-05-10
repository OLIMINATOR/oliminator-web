!async function(){const n=await fetch("https://api.mojang.com/users/profiles/minecraft/oliver90001"),e=await n.json();console.log(e),document.getElementById("uuid").innerHTML=e.id}();
