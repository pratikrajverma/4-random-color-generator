const wrapper = document.querySelector(".wrapper");
const input = document.querySelector("[data-color]");

function randomcolor()
{
    const totalcolor="0123456789abcdef";
    let color="#";
    for(let i=0;i<6;i++)
    {
        const randomNo = totalcolor[Math.floor(Math.random()*16)];
        color+=randomNo;

    }
    return color;
}




function changecolor()
{

    wrapper.style.backgroundColor=randomcolor();
    input.value=randomcolor();

}
