import API from "./data.js";
import render from "./DOMRenderer.js";

/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.

    Change the fake variable names below to what they should be
    to get the data and display it.
*/
API.getJournalEntries()
    .then(entries => renderDom.renderJournalEntries(entries));

    const createJouralEntry = (dateEntry, conceptEntry, entryEntry, moodEntry) => {
        return {
            date: dateEntry,
            concept: conceptEntry,
            entry: entryEntry,
            mood: moodEntry
        }
    }

document.getElementById("recordEntry").addEventListener("click", () => {
    // event.preventDefault();

    const dateCont = document.querySelector("#dateCont").value;
    const conceptCont = document.querySelector("#conceptCont").value;
    const JournalEntryCont = document.querySelector("#JournalEntryCont").value;
    const moodSelectCont = document.querySelector("#moodSelectCont").value;
    let newJournalEntry = createJouralEntry(dateCont, conceptCont, JournalEntryCont, moodSelectCont)

    API.saveJournalEntries(newJournalEntry)
        .then(API.getJournalEntries)
        .then(render.renderDom)(entryManager);
    // const journalHolder = createJournalEntry(dateCont, conceptCont, JournalEntryCont, moodSelectCont)

    // console.log(journalHolder);

        // .then(response => response.json());

    console.log(newJournalEntry)
    
});



// console.log()
// const newJournalEntry = createJouralEntry(date[1], date[2], date[2])

// function recordEntry() {
//     console.log("record entry");

//   }