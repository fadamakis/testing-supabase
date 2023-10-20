import supabase from "./supabase.js";

const { error } = await supabase
  .from("tasks")
  .insert({ title: "Test the API", list_id: 2 });

console.log("error:", error);
