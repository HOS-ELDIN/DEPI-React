const url = "http://localhost:3000/notes";
async function getNotes() {
	const res = await fetch(url, {
		method: "GET",
	});
	const data = await res.json();
	return data;
}

async function renderNotes() {
	const notes = await getNotes();
	const row = document.querySelector(".row");
	notes.forEach((note) => {
		const div = document.createElement("div");
		div.className = `col-lg-3 col-md-6 col-sm-12 my-2`;
		div.innerHTML = `
            <div class="card text-bg-light mb-3" style="max-width: 18rem;">
            <div class="card-header">${note.title}</div>
            <div class="card-body">
                <p class="card-text">${note.desc}</p>
                <button class="btn btn-danger" 
                onclick="deleteNote('${note.id}')"> delete note </button>
                <button class="btn btn-success" onclick="enterEditMode('${note.id}')"> edit note </button>
            </div>
            </div>
        `;
		row.appendChild(div);
	});
}

async function handleSubmit(event) {
	event.preventDefault();
	const titleValue = document.querySelector("#title").value;
	const submitBtn = event.submitter;

	if (submitBtn.id === "edit") {
		const id = submitBtn.getAttribute("data-id");
		console.log("fromedit", id);
		return EditNote(id);
		// return;
	}

	const notes = await getNotes();
	const filtered = notes.filter((note) => titleValue === note.title);

	if (filtered.length > 0 && submitBtn.id === "add") {
		return console.log("already exist");
	}

	addNote();
}

async function addNote() {
	const titleValue = document.querySelector("#title").value;
	const descValue = document.querySelector("#desc").value;

	if (titleValue && descValue) {
		fetch(url, {
			method: "POST",
			body: JSON.stringify({
				title: titleValue,
				desc: descValue,
			}),
			headers: {
				"Content-type": "application/json; charset=UTF-8",
			},
		});
	}
}

function deleteNote(id) {
	fetch(`${url}/${id}`, {
		method: "DELETE",
	});
}

async function getNoteById(id) {
	const res = await fetch(`${url}/${id}`, {
		method: "GET",
	});
	const data = await res.json();
	return data;
}
let addBtn = document.querySelector("#add");
let editBtn = document.querySelector("#edit");
let editMoodControls = document.querySelector("#edit-mood");

async function enterEditMode(id) {
	const noteToEdit = await getNoteById(id);

	let titleField = document.querySelector("#title");
	let descField = document.querySelector("#desc");

	titleField.value = noteToEdit.title;
	descField.value = noteToEdit.desc;

	addBtn.classList.add("d-none");
	editMoodControls.classList.remove("d-none");

	editBtn.setAttribute("data-id", id);
}

function exitEditMood(event) {
    event.preventDefault()
	let titleField = document.querySelector("#title");
	let descField = document.querySelector("#desc");

	titleField.value = "";
	descField.value = "";

	addBtn.classList.remove("d-none");
	editMoodControls.classList.add("d-none");

	editBtn.setAttribute("data-id", "");
}

async function EditNote(id) {
	const titleValue = document.querySelector("#title").value;
	const descValue = document.querySelector("#desc").value;

	if (titleValue && descValue) {
		fetch(`${url}/${id}`, {
			method: "PUT",
			body: JSON.stringify({
				title: titleValue,
				desc: descValue,
			}),
			headers: {
				"Content-type": "application/json; charset=UTF-8",
			},
		});
	}
}

document.addEventListener("DOMContentLoaded", renderNotes);
document.querySelector("form").addEventListener("submit", handleSubmit);
document.querySelector("#cancel").addEventListener("click", exitEditMood);
