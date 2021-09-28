import config from "../../config/config.json";

export async function query(query, params) {
    const subgraphUrl = config.subgraph.url;
    // TODO: use params arg as well
    const data = JSON.stringify({
        query
    });
    

    var options = {
        'method': 'POST',
        'headers': {'Content-Type': 'application/json'},
        'body': data
    }
    
    const response = (await fetch(subgraphUrl, options));
    // TODO: Handle request failures
    return response.json();
}