export class Patient{
    id:string;
    surname: string;
    name:string;
    patronymic:string;
    dateBirth:Date;
    gender:string;
    bloodType:string;
    phone:string;
    email: string;
    country:string;
    region:string;
    street:string;
    houseDetails:string;
    socialStatus:string;
    maritalStatus:string;
}
export class Analyze{
    patientId:string;
    test:string;
}