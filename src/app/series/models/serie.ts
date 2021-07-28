export class Serie {
  id: string;
  title: string;
  description: string;
  photo: string;
  episodes: [];
  sportsPlayerId: string;
  categoryId: string;
  sportsPlayerName: string;
  sportPlayerPhoto: string;

  constructor(item?: any) {
    this.id = item?.id ?? '';
    this.title = item?.title ?? '';
    this.description = item?.description ?? '';
    this.photo = item?.photo ?? '';
    this.episodes = item?.episodes ?? [];
    this.sportsPlayerId = item?.sportsPlayerId ?? '';
    this.categoryId = item?.categoryId ?? '';
    this.sportsPlayerName = item?.sportsPlayer?.name ?? '';
    this.sportPlayerPhoto = item?.sportsPlayer?.photo ?? '';
  }
}
