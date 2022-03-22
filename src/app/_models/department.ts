export class Department {
    constructor(public id:number, public name:string,public location:string){
        
    }

    get Id(){
        return this.id;
    }

    set Id(Id:number){
        this.id=Id;
    }

    public get Name():string {
        return this.name + "ay kalam";
    }

    set Name(Name:string){
        this.name=Name;
    }
    get Location(){
        return this.location;
    }

    set Location(Location:string){
        this.location=Location;
    }
}
