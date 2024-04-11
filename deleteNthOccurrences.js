export function deleteNth(arr, n) {
    const occurrences = {};
    return arr.filter(x => {
            occurrences[x] = (occurrences[x] || 0) + 1;

            return occurrences[x] <= n;
        });


    // const occurrences = {};
    // return arr.map(x => {
    //         occurrences[x] = (! occurrences[x]) ? 1 : occurrences[x] + 1;

    //         return [x, occurrences[x]];
    //     })
    //     .filter(x => x[1] <= n)
    //     .map(x => x[0]);


    // let occurrences = {};
    // let result = [];
    // arr.forEach(element => {
    //     occurrences[element] = (! occurrences[element]) ? 1 : occurrences[element] + 1;

    //     if (occurrences[element] <= n)
    //         result.push(element);
    // });

    // return result;
}