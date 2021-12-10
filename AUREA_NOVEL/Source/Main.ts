namespace Aurea_Novel {
  export import f = FudgeCore;
  export import fS = FudgeStory;

  console.log("AUREA_NOVEL starting");
  export let transition = {
    clock: {
      duration: 1,
      alpha: "./Images/Transitions/puzzle.png",
      edge: 1
    }
  };

  export let sound = {
    // Music
    backgroundTheme: "",

    // Sound
    click: ""

  };

  export let location = {
    bedroom: {
      name: "bedroom",
      background: "./Images/Backgrounds/Bedroom_Night.png"
    }
  };

  export let characters = {
    narrator: {
      name: "narrator"
    },
    you: {
      name: "you",
      origin: fS.ORIGIN.CENTER,
      pose: {
        // Pfad als String angeben
        angry: "./Images/Backgrounds/Bedroom_Night.png",
        happy: "./Images/Backgrounds/Bedroom_Night.png",
        upset: "./Images/Backgrounds/Bedroom_Night.png"
      }
    }
  };

  export let dataForSave = {

  };

  export function fromLeftToRight(): fS.AnimationDefinition {
    return {
      start: {
        translation: fS.positions.bottomleft,
        rotation: -20, scaling: new fS.Position(0.5, 1.5), color: fS.Color.CSS("white", 0)
      }, end: {
        translation: fS.positions.topright, rotation: 20, scaling: new fS.Position(1.5, 0.5), color: fS.Color.CSS("red", 1)
      },
      duration: 1,
      playmode: fS.ANIMATION_PLAYMODE.PLAYONCE
    };
  }

  window.addEventListener("load", start);
  function start(_event: Event): void {
    let scenes: fS.Scenes = [
      { scene: SevdaTest, name: "Scene" }
    ];



    let uiElement: HTMLElement = document.querySelector("[type=interface]");
    dataForSave = fS.Progress.setData(dataForSave, uiElement);


    // start the sequence
    fS.Progress.go(scenes);
  }
}