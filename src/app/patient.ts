

export class Patient {
      id:string;
      surname: string;
      name:string;
      patronymic:string;
      dateBirth:Date;
      gender:string;
      bloodType:string;
      phone:string;
      email: string;
      idAddress: string;
      socialStatus:string;
      maritalStatus:string;
      constructor( id:string,
        surname: string,
        name:string,
        patronymic:string,
        dateBirth:Date,
        gender:string,
        bloodType:string,
        phone:string,
        email: string,
        idAddress: string,
        socialStatus:string,
        maritalStatus:string,
        ){
        this.id = id;
        this.surname = surname;
        this.patronymic = patronymic;
        this.name = name;
        this.dateBirth = dateBirth;
        this.gender = gender;
        this.bloodType = bloodType;
        this.phone = phone;
        this.email = email;
        this.idAddress = idAddress;
        this.socialStatus = socialStatus;
        this.maritalStatus = maritalStatus;
        
      }
      
}
  export class Address{
    id:string;
    country:string;
    region:string;
    cityVillage:string;
    street:string;
    houseDetails:string;
    constructor(
    id:string,
    country:string,
    region:string,
    cityVillage:string,
    street:string,
    houseDetails:string,
    ){
      this.id = id;
      this.country = country;
      this.region = region;
      this.cityVillage = cityVillage;
      this.street = street;
      this.houseDetails = houseDetails;
    }
  }
  export class TreatmentSession{
    id:string;
    idPatient:string;
    idMainIll:string;
    startSession:string;
    endSession:string;
    idDoctor:string;
    
    constructor(id:string,
      idPatient:string,
      idMainIll:string,
      startSession:string,
      endSession:string,
      idDoctor:string,
      ){
      this.id = id;
      this.endSession = endSession;
      this.idDoctor = idDoctor;
      this.idPatient = idPatient;
      this.idMainIll = idMainIll;
      this.startSession = startSession;
      

    }
  }
  export class NationCl025{
    id:string;
    codeIll:string;
    nameIll:string;
    constructor(
      id:string,
    codeIll:string,
    nameIll:string,
    ){
      this.id = id;
      this.codeIll= codeIll;
      this.nameIll = nameIll;
    }
  }

  export class TreatmentStage{
    id:string;
    stageName:string;
    startStage:string;
    endStage:string;
    idSession:string;
    
    constructor(id:string,
      stageName:string,
      startStage:string,
      endStage:string,
      idSession:string,
      ){
      this.id = id;
      this.stageName = stageName;
      this.startStage = startStage;
      this.endStage = endStage;
      this.idSession = idSession;
      

    }
  }