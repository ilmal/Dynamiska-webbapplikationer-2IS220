/**
 * Fetches Stryktips data from the specified API endpoint.
 * @returns {Promise<Object>} - A promise that resolves to the fetched data.
 * @throws {Error} - Throws an error if the fetch operation fails.
 */
export async function fetchStryktipsData() {
    const response = await fetch('https://api-internal.azurewebsites.net/strycket2024');
    const data = await response.json();
    return data;
}
