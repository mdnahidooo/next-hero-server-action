export const createATask = async(formData) => {
    'use server'

    const name = formData.get('name');
    console.log("Add a task with name: ", name);
    console.log("Add a form task: ", formData);
}