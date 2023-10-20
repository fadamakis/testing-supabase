import supabase from "./supabase.js";

const { error } = await supabase
    .from('tasks')  
    .delete()
    .eq('id', 1)

console.log("error:", error);
