export default function promedioRating(arr) {
    if (arr.length > 0) {
        let sum = 0
        arr.map((e) => sum += e.ratings);
        return Math.round(sum / arr.length);
    }
    return 1;
}
