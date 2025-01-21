export interface Office {
    id: number,
    price: number,
    duration: number,
    name: string,
    slug: string,
    address: string,
    city: City,
    thumbnail: string,
    images: Image[],
    benefits: Benefit[],
    about: string,
}

interface Image {
    id: number,
    image: string,
}

interface Benefit {
    id: number,
    name: string,
}


export interface City {
    id: number,
    name: string,
    slug: string,
    image: string,
    officeSpaces_count: number,
    officeSpaces: Office[],
}

export interface BookingDetails {
    id: number,
    name: string,
    phone_number: string,
    booking_trx_id: string,
    is_paid: boolean,
    duration: number,
    total_amount: number,
    started_at: string,
    ended_at: string,
    office: Office,
}