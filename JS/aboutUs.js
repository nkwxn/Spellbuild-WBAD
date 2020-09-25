// Run coding untuk video About Us
let imgIndx;
function hoverMediaImage(imgIndx) {
  let i = imgIndx - 1;
  const titleVids = new Array(
    "Introduction",
    "Movement",
    "Gauntlet",
    "Interact, Slots and Inventory",
    "Levitate",
    "Attacks",
    "Runes",
    "Classes"
  );
  const vidSource = new Array(
    "001-Intro.mp4",
    "002-Movement.mp4",
    "003-Gauntlet.mp4",
    "004-Interact, Slots. Inventory.mp4",
    "005-Levitate.mp4",
    "006-Attacks.mp4",
    "007-Runes.mp4",
    "008-Classes.mp4"
  );
  const vidDesc = new Array(
    "Spellbuild is a fantasy-magical battle royale. You are a wizard, known as the breaker. Your goal is to gather power and exile all of the other breakers.",
    "Spellbuild uses standard action games primary movement, which is W A S D and SPACE. You can review and customize keybinds in the options menu.",
    "Your instruments of destruction called Gauntlets. Each gauntlets offers differ reliable scaling benefits and unique attributes that are modified by rarities. You start with a common gauntlet for each class and you can equip any other elements on your second-hand. ",
    "You can use F to interact with items, and basic numbers as the hotkey of your inventory. But, you can open the inventory with TAB to drop a range of items and see the progress of your current class.",
    "You can hold the SPACEBAR to levitate yourself. This action consumes a percentage of your 'mana'. 'mana' is multi-system resource, your 'mana' will replenish overtime but if it is exshausted completely, you will get a penalty while your character recharges.",
    "Each gauntlets have uniques abilities. Mouse 1 and 2 cast your spells, spells is a projectile that expands mana. Meanwhile Q and E activates your sorceries, sorceries is a reliable power that can be cast whenever charged. Their damage, cooldown and effect are consistent across all gauntlet rarities. However, spells are benefit from higher gauntlet rarity as their damage increases and mana cost decreases.",
    "Runes are powerful tools that are also cooldown-based. Runes are triangle-shaped and you can find it out on the open and through chests. The rarity on runes are fixed, this influences on how frequent you will find the runes. Mastering runes will differs between the victory and defeat.",
    "The class you selected augments your breaker with passive abilities. Each class has 4 skills, the first is unlocked immediately and the rest unlocks progressively. Every class offers unique skills expression that can be tailored into your preference with secondary gauntlet and gear. The battlefield around you constantly changing, you can create devastating combos with your spells and sorceries. Gauntlet stands on their own, but when paired with class architype their true potential manifests."
  );
  document.getElementById("noHover").style.display = "none";
  document.getElementById("imgHovered").style.display = "block";
  document
    .getElementById("hvrdVideo")
    .setAttribute("src", "images/videoAboutUs/" + vidSource[i]);
  document.getElementById("hvrdTitle").innerHTML = titleVids[i];
  document.getElementById("hvrdDesc").innerHTML = vidDesc[i];
}