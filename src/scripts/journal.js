// ***********************************************************************************
// Imports data from other files//
// ***********************************************************************************

import API from "./data.js";
import renderDom from "./DOMRenderer.js";

// Grabs the API fetch

API.getJournalEntries()
    .then(entries => renderDom.renderJournalEntries(entries));

    const createJouralEntry = (dateEntry, conceptEntry, entryEntry, moodEntry, filterEntry) => {
        return {
            date: dateEntry,
            concept: conceptEntry,
            entry: entryEntry,
            mood: moodEntry
            // filter: filterEntry
        }
    }

document.getElementById("recordEntry").addEventListener("click", () => {

    const dateCont = document.querySelector("#dateCont").value;
    const conceptCont = document.querySelector("#conceptCont").value;
    const JournalEntryCont = document.querySelector("#JournalEntryCont").value;
    const moodSelectCont = document.querySelector("#moodSelectCont").value;
    
    let newJournalEntry = createJouralEntry(dateCont, conceptCont, JournalEntryCont, moodSelectCont, byMoodCont)
    
    API.saveJournalEntries(newJournalEntry)
    .then(API.getJournalEntries)
    .then(response => renderDom.renderJournalEntries(response))
    
    const byMoodCont = document.querySelector
    ("frustrated", "Brain Dead", "Motivated", "This Some Bull S***");

    console.log(byMoodCont)
});