//using Promise
fetch ("dj-insurance-action-v2.json")
            .then (response => response.json())
            .then (parsed => /* parsed contains the parsed json object */);

// or if you can use async / await
let response  = await fetch ("dj-insurance-action-v2.json");
let parsed = await response.json();
