// fetches data from API server and 

const API = {
  getJournalEntries () {
      return fetch("http://localhost:3000/entries")
          .then(response => response.json());
  },

  saveJournalEntries: (newJournalEntry) => {

    return fetch("http://localhost:3000/entries", { 
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(newJournalEntry)

  })
}};

export default API;