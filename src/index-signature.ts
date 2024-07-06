class SeatAssignment {
    // A1, A2, ...
    // Mosh, John, ...

    // Index Signature
    [seatNumber: string]: string
}

let seats = new SeatAssignment()
seats.A1 = 'Mosh'
seats['A2'] = 'John'
