export class Limb {
    count: number = 0; //This will be the number of likes
    name: string = 'My Name';
    timeStamp: any = '1/01/00 00:00 AM';
    content: string;
    limbId: number;
    media: any = "/assets/images/cat.png";
    likes: number;
}

export class User {
    username: string; //This will be the number of likes
    firstName: string;
    lastName: string;
    email: string;
    bdate: string;
    profilePic: string;
    coverPic: string;
    limbCount: number;
    likedLimbCount: number;
}
