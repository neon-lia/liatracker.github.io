window.addEventListener('load', (event) => {
    import { createClient } from '@supabase/supabase-js'
    const supabaseUrl = 'https://oaknbxjzuvjlwpuggcji.supabase.co'
    const supabaseKey = sb_publishable_HfOAPoqY387Nkffk993Ccg_IiuXPtyH
    const supabase = createClient(supabaseUrl, supabaseKey)
});


function loadData() {
    return "Hello";
    
    let { data: Food, error } = await supabase
        .from('Food')
        .select('Name')
    document.getElementById("foodOutput").innerHTML = "Test";
}

