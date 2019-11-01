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

    const createJouralEntry = (dateEntry, conceptEntry, entryEntry, moodEntry) => {
        return {
            date: dateEntry,
            concept: conceptEntry,
            entry: entryEntry,
            mood: moodEntry
        }
    }

document.getElementById("recordEntry").addEventListener("click", () => {

    const dateCont = document.querySelector("#dateCont").value;
    const conceptCont = document.querySelector("#conceptCont").value;
    const JournalEntryCont = document.querySelector("#JournalEntryCont").value;
    const moodSelectCont = document.querySelector("#moodSelectCont").value;
    
    let newJournalEntry = createJouralEntry(dateCont, conceptCont, JournalEntryCont, moodSelectCont)

    API.saveJournalEntries(newJournalEntry)
        .then(API.getJournalEntries)
        .then(response => renderDom.renderJournalEntries(response))

});

