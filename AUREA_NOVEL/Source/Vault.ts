namespace AUREA_NOVEL {

    export async function SelectItem(item: fS.ItemDefinition): Promise<void> {
        fS.Inventory.add(item);
    }
    export async function DenySelection(): Promise<void> {
        await fS.Speech.tell(characters.narrator, "Für den weiteren Verlauf der Geschichte ist es sinnvoll das Angebot anzunehmen!");
    }

    export async function Vault(): fS.SceneReturn {
        console.log("Start Vault Sequenz");

        if (dataForSave.choice.selectEvil) {
            fS.Sound.play(sound.glade, 0.2, true);
            await fS.Location.show(locations.vault);

            await fS.Character.show(characters.du, characters.du.pose.idle, fS.positionPercent(10, 80));
            await fS.Character.show(characters.illusion, characters.illusion.pose.idle, fS.positionPercent(70, 80));
            await fS.update(transitions.clock.duration, transitions.clock.alpha, transitions.clock.edge);
            await fS.Speech.tell(characters.du, "Was? Wo? Wie? Wo bin ich jetzt schon wieder?");
            await fS.Speech.tell(characters.illusion, `Hallo ${characters.du.name} ich heiße ${characters.illusion.name} und bin der ehrwürdige Diener ${characters.goma.name}s und bin gekommen um dir deine Bestimmung zu offenbaren.`);
            await fS.Speech.tell(characters.du, "Was?");
            await fS.Speech.tell(characters.du, "Ich verstehe nicht.");
            await fS.Speech.tell(characters.du, "Wieso ich?");
            await fS.Speech.tell(characters.illusion, `Alles zu seiner Zeit ${characters.du.name}`);
            await fS.Speech.tell(characters.illusion, "Bevor du erfährst was du machen musst, teile ich dir mit auf wessen Hilfe zu zählen kannst.");

            await fS.Speech.tell(characters.illusion, `Zunächst haben wir da ${characters.crystal.name}.`);


            fS.Text.setClass("item-definition");
            fS.Text.addClass("aurea-information");
            fS.Text.addClass("select");
            fS.Text.print(`
                    <div class="page-wrapper">
                        <div class="image-wrapper">  
                            <img src="${items.crystal_sheet.image}" />
                        </div>
                    </div>
            `);
            const pageSelect = { select: "Auswählen", deny: "Ablehnen" };
            let response: string = await fS.Menu.getInput(pageSelect, "select");
            switch (response) {
                case pageSelect.select:
                    SelectItem(items.crystal_sheet);
                    await fS.Speech.tell(characters.illusion, "Sehr gut. Dann machen wir mal weiter.");
                    break;
                default:
                    DenySelection();
                    break;
            }
            fS.Text.close();
            await fS.Speech.tell(characters.illusion, `Als nächstes haben wir den Drachen ${characters.sebu.name}.`);
            fS.Text.setClass("item-definition");
            fS.Text.addClass("aurea-information");
            fS.Text.addClass("select");
            fS.Text.print(`
                    <div class="page-wrapper">
                        <div class="image-wrapper">  
                            <img src="${items.sebu_sheet.image}" />
                        </div>
                    </div>
            `);
            response = await fS.Menu.getInput(pageSelect, "select");
            switch (response) {
                case pageSelect.select:
                    SelectItem(items.sebu_sheet);
                    await fS.Speech.tell(characters.illusion, "Sehr gut. Das wären alle.");
                    break;
                default:
                    await fS.Speech.tell(characters.narrator, "Damit du zumindest einen Aurea im Invenatr hast wird dir bei der zweiten Wahl der Character hinzugefügt.");
                    SelectItem(items.sebu_sheet);
                    await fS.Speech.tell(characters.illusion, "Sehr gut. Das wären alle.");
                    break;
            }
            fS.Text.close();
            await fS.Speech.tell(characters.illusion, "In unserem Land der Aurea haben abtrünnige beschlossen, die Macht des Landes zu stürzen.");
            await fS.Speech.tell(characters.illusion, "Deine Aufgabe wird dabei sein, dass du uns und Goma helfen musst. Bist du dabei?");
            await fS.Speech.tell(characters.du, "Okey?");
            await fS.Speech.tell(characters.du, "Wieso wurde ich dann gefangen genommen?");
            await fS.Speech.tell(characters.du, "Ich werde mein bestes geben! Wann und wo findet der Kampf statt?");
            await fS.Speech.tell(characters.illusion, "Genau jetzt.");
            fS.Character.hideAll();
            fS.Speech.hide();

        } else {
            return "glade";
        }
    }
}
                        // <div class="flex-wrapper" >
                        //     <div class="content-part">
                        //       <h1>${items.handy.name}</h1>
                        //        <span>${items.handy.description}</span>
                        //     </div>
                        //     <div class="image-part">
                        //        <div class="item-image-wrapper">
                        //           <img class="item-image" src="${items.handy.image}" />
                        //         </div>
                        //     </div>
                        //   </div>