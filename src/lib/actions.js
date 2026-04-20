import { revalidatePath } from "next/cache";
import { postTask } from "./tasks";

export const createATask = async (formData) => {
    'use server'

    // const title = formData.get('title');
    // const description = formData.get('description');
    // const priority = formData.get('priority');
    // const status = formData.get('status');
    // const assignedTo = formData.get('assignedTo');

    // const newTask = { title, description, priority, status, assignedTo };

    //  uporer part er another way 
    const newTask = Object.fromEntries(formData.entries());
    console.log("Add a form task: ", newTask);

    const res = await postTask(newTask)

    if (res.ok) {                         //ok come from tasks.js lib folder
        revalidatePath('/tasks');
    }

    return res;
}