export interface Name {
    name?: string;
    discription?: string;
    image?: string;
}

export interface Customer {
    id?: number;
    name?: Name;
    creation_date?: string;
    contract_date?: string;
    discription?: string;
    company?: string;
    status?: string;
    activity?: string;
}