let persone = [
	{
		nome: "Camilla",
		anni: 65,
		lavoro: "developer"
	},
	{
		nome: "Chiara",
		anni: 22,
		lavoro: "dj"
	},
	{
		nome: "Emmanuele",
		anni: 13,
		lavoro: "studente"
	},
	{
		nome: "Stefano",
		anni: 17,
		lavoro: "developer"
	},
	{
		nome: "Anna",
		anni: 25,
		lavoro: "studente"
	},
	{
		nome: "Gabriele",
		anni: 16,
		lavoro: "panettiere"
	}
]

let adulti = persone.filter(persona => persona.anni > 18)

console.log(adulti)

let developer = persone.filter(persona => persona.lavoro === "developer")

console.log(developer)
