


const entryFactory = {

  makeJournalEntryComponent(journalEntry) {
    
    return `
      <section>
        <h3>${journalEntry.concept}</h3>
        <p>${journalEntry.entry}</p>
        <p>${journalEntry.mood}</p>
        <p>${journalEntry.date}</p>
      </section>
    `
  }
};

export default entryFactory;