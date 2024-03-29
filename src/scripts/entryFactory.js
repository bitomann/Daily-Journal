const entryManager = {

  makeJournalEntryComponent(journalEntry) {
    
    return `
      <section>
        <h3>${journalEntry.concept}</h3>
        <p>${journalEntry.entry}</p>
        <p>${journalEntry.mood}</p>
        <p>${journalEntry.date}</p>
        <p>${journalEntry.filter}</p>

      </section>
    `
  }
};

export default entryManager;