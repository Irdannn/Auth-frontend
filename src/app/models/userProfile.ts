export class UserProfile{
    id : number;
    id_user:number;
    name: string;
    alamat: string;
    tempatLahir: string;
    tanggalLahir: "dd-MM-yyyy";
    pendidikanTerakhir: string;
    pekerjaan: string;
    penghasilan: number;
    noHp: string;
    role: string;
    email: string;
    bio: string;

    constructor(){
        this.id= 0;
        this.id_user=0;
        this.name="";
        this.alamat="";
        this.tanggalLahir="dd-MM-yyyy";
        this.tempatLahir="";
        this.pendidikanTerakhir="";
        this.pekerjaan="";
        this.penghasilan=0;
        this.noHp="";
        this.role="";
        this.email="";
        this.bio="";
    }
}