export const store_data = "store_data";

export function storeTextData(searchedText) {
console.log("payloaddd",searchedText)
    return {
        type: store_data,
        payload: searchedText
    }
}