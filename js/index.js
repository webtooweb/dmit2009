import { getToDoData } from './lib/firebase/api';
import { toDoItemTemplate } from './templates/toDoItem';

async function appInit() {
    const appData = await getToDoData();

    // Getting the first 10 to-do items
    const toDoItems = Object.values(appData).slice(0, 10).map((obj) => {
        return `
            <div class="bg-white shadow-md p-4 rounded-md mb-4">
                <h2 class="text-lg font-semibold">${obj.todo}</h2>
				<hr class="my-4 border-gray-300">
                <p class="text-sm text-gray-600">Category: ${obj.category}</p>
				<hr class="my-4 border-gray-300">
                <p class="text-sm text-gray-600">Status: ${obj.status}</p>
				<hr class="my-4 border-gray-300">
                <p class="text-sm text-gray-600">Start: ${obj.start}</p>
				<hr class="my-4 border-gray-300">
                <p class="text-sm text-gray-600">Finish: ${obj.finish}</p>
            </div>
        `;
    });

    // Appending the generated markup to the DOM
    const rootElement = document.querySelector('#root');
    toDoItems.forEach((markup) => {
        rootElement.insertAdjacentHTML('beforeend', markup);
    });
}

appInit();