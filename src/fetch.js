import supabase from "./supabase.js";

const { data, error } = await supabase.from("lists").select();

console.log('data:', data);
console.log('error:', error);
