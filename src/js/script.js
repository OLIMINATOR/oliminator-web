const api_url = "https://api.lanyard.rest/v1/users/466260717629079563";
async function getINFO() {
    const response = await fetch(api_url);
    const data = await response.json();
    //console.log(data);
    alert(
        data.data.discord_user.username +
            "#" +
            data.data.discord_user.discriminator
    );
}

const mc_api_url =
    "https://api.mojang.com/users/profiles/minecraft/oliver90001";
async function mcINFO() {
    const response = await fetch(mc_api_url);
    const data = await response.json();
    console.log(data);
    document.getElementById("uuid").innerHTML = data.id;
    //data.id.
}
mcINFO();

function sendEmail() {
    window.location = "mailto:xyz@yourapplicationdomain.com";
}
