// https://pokeapi.co/api/v2/pokemon/

//https://getbootstrap.com/docs/5.3/getting-started/introduction/

let pokeImg = document.getElementById("pokeImg");
let pokeName = document.getElementById("pokeName");
let pokeType = document.getElementById("pokeType");
let pokeAbilities = document.getElementById("pokeAbilities");
let pokeStat = document.getElementById("pokeStat");
let addBtn = document.getElementById("addBtn");

let pokeNam = "";

const getPoke = async () => {
    const promise = await fetch('https://pokeapi.co/api/v2/pokemon/bulbasaur');
    const data = await promise.json();
    console.log(data);
    return data;
}

const displayPoke = async () => {
    let pokeData = await getPoke();
    let typeArr = pokeData.types;
    let abilityArr = pokeData.abilities;
    let statArr = pokeData.stats;
    statArr.map(st => pokeStat.textContent += st.stat.name + " ");
    abilityArr.map(a => pokeAbilities.textContent += a.ability.name + " ")
    typeArr.map(types => pokeType.textContent += types.type.name + " ");
    pokeName.textContent = pokeData.name;
    pokeImg.src = pokeData.sprites.front_default;
    pokeNam = pokeData.name;
}

displayPoke();

const getLocal = () => {
    if(localStorage.getItem("pokemons") === null){
        return [];
    } else {
        return JSON.parse(localStorage.getItem("pokemons"));
    }
}

const saveToLocalStorage = (poke) => {
    let arr = getLocal();

    if(!arr.includes(poke)){
        arr.push(poke);
    }

    localStorage.setItem("pokemons", JSON.stringify(arr));
}

addBtn.addEventListener('click', () => {
    saveToLocalStorage(pokeNam);
})