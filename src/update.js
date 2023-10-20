import supabase from "./supabase.js";

const { error } = await supabase
    .from('tasks')
    .update({ title: 'Updated Title' })
    .eq('id', 1)

console.log("error:", error);
