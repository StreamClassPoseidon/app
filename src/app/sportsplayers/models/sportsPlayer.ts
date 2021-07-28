import { Serie } from 'src/app/series/models/serie';

export class SportsPlayer {
  id: string;
  name: string;
  bio: string;
  job: string;
  photo: string;
  series: Serie[];

  constructor(item?: any) {
    this.id = item?.id ?? '';
    this.name = item?.name ?? '';
    this.bio = item?.bio ?? '';
    this.job = item?.job ?? '';
    this.photo = item?.photo ?? '';
    this.series = item?.series ?? '';
  }
}
