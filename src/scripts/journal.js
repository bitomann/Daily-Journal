import API from "./data.js";
import renderDom from "./DOMRenderer.js";

/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.

    Change the fake variable names below to what they should be
    to get the data and display it.
*/
API.getJournalEntries()
    .then(entries => renderDom.renderJournalEntries(entries));


document.getElementById("recordEntry").addEventListener("click", () => {
    event.preventDefault();

    const dateCont = document.querySelector("#dateCont").value;
    const conceptCont = document.querySelector("#conceptCont").value;
    const JournalEntryCont = document.querySelector("#JournalEntryCont").value;
    const moodSelectCont = document.querySelector("#moodSelectCont").value;
    const journalHolder = createJouralEntry(dateCont, conceptCont, JournalEntryCont, moodSelectCont)

    console.log(journalHolder);


    
});

const createJouralEntry = (dateEntry, conceptEntry, entryEntry, moodEntry) => {
    return {
        date: dateEntry,
        concept: conceptEntry,
        entry: entryEntry,
        mood: moodEntry
    }
}
let newJournalEntry = createJouralEntry(dateEntry, conceptEntry, entryEntry, moodEntry)

// console.log()
// const newJournalEntry = createJouralEntry(date[1], date[2], date[2])

// function recordEntry() {
//     console.log("record entry");

//   }