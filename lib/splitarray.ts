export default function splitArray<T>(array: T[], x: number): T[][] {
    if (x <= 0) throw new Error("Number of subarrays must be greater than 0");

    const result: T[][] = [];
    const subArraySize = Math.ceil(array.length / x);

    for (let i = 0; i < array.length; i += subArraySize) {
        result.push(array.slice(i, i + subArraySize));
    }

    return result;
}
