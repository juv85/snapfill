import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";

@Injectable({
    providedIn: 'root'
})

export class FaceSnapsService {
    faceSnaps: FaceSnap[] = [
        {
            id: 1,
            title: 'Yumeko',
            description: 'Gambling School',
            createdDate: new Date(),
            snaps: 0,
            image: '../../assets/Yumeko.jpg',
        },
        {
            id: 2,
            title: 'Mieruko Chan',
            description: 'Best horror-comedy show',
            image: '../../assets/mieruko 2.jpg',
            createdDate: new Date(),
            snaps: 0,
            location: 'Kyoto',
        },
        {
            id: 3,
            title: 'Toru',
            description: 'Miss Kobayashi san\'s maid!',
            image: '../../assets/toru.jpg',
            createdDate: new Date(),
            snaps: 0
        }];

    getAllFaceSnap(): FaceSnap[] {
        return this.faceSnaps;
    }

    getFaceSnapById(faceSnapId: number): FaceSnap {
        const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
        if (!faceSnap) {
            throw new Error('FaceSnap not Found!');
        } else {
            return faceSnap;
        }
    }

    snapFaceSnapById(faceSnapId:number, snapType: 'snap'|'unsnap'):void {
        const faceSnap = this.getFaceSnapById(faceSnapId);
        snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
    }
}
