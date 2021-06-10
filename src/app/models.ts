

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
      
      
}
  export class Address{
    id:string;
    country:string;
    region:string;
    cityVillage:string;
    street:string;
    houseDetails:string;
    
  }
  export class TreatmentSession{
    id:string;
     idPatient:string;
     idMainIll:string;
     startSession:string;
     endSession:string;
     idDoctor:string;
    
  
  }
  export class NationCl025{
    id:string;
     codeIll:string;
     nameIll:string;
    
  }

  export class TreatmentStage{
    id:string;
     stageName:string;
     startStage:string;
     endStage:string;
     idSession:string;
  }

  export class Surgery{
    id:string;
     idStage:string;
     idNameIntervention:string;
     DateIntervention:string;
     idMedStaff:string;
  }

  export class NationalCl026{
     id:string;
     codeIntervention:string;
     nameIntervention:string;
  }

  export class Pharmacotherapy{
    id:string;
     idStage:string;
     idNamePill:string;
     dosePill:number;
     unitPill:string;
     datePill:string;
     idMedStaff:string;
  }
  export class Physiotherapy{
    id:string;
     namePhysiotherapy:string;
     valuePhysiotherapy:number;
     unitPhysiotherapy:string;
     datePhysiotherapy:string;
     idStage:string;
     idMedStaff:string;
  }

  export class UltraSoundTherapy{
    id:string;
     idStage:string;
     nameEus:string;
     valueEus:number;
     unitEus:string;
     dateEus:string;
     idMedStaff:string;
  }

  export class State{
    id: string;
     idStage: string;
  }

  export class LabTest{
    id:string;
     idState:string;
     nameTest:string;
     valueTest:number;
     unitTest:string;
     dateTest:string;
     laboratoryName:string;
     idMedStaff:string;
  }

  export class NationalCl027{
     id:string;
     codeTest:string;
     nameTest:string;
  }

  export class Measurement{
    id:string;
     idState:string;
     idCatalogMeasurement:string;
     valueMeasurement:number;
     dateMeasurement:string;
  }

  export class CatalogMeasurement{
     id:string;
     nameMeasurement:string;
     unitMeasurement:string;
  }


  export class MedicalStaff{
    id:string;
     surname:string;
     name:string;
     patronymic:string;
     position:string;
     specialization:string;
     startWork:string;
     phone:string;
  }

  export class NationClPills{
     id:string;
     codePill:string;
     namePill:string;
  }

