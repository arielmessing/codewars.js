export function calculateYears(principal, interest, tax, desired) {
    let years = 0;
    
    while (principal < desired) {
        principal *= (1 + interest - interest * tax);
        years++;
    }

    return years;
}