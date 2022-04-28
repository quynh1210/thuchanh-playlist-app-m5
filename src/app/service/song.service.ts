import {Injectable} from '@angular/core';
import {Song} from '../model/song';

@Injectable({
  providedIn: 'root'
})
export class SongService {
  playlist: Song[] = [
    {
      id: 'Amq-qlqbjYA',
      name: 'BLACKPINK - 마지막처럼 (AS IF ITS YOUR LAST)- M/V'
    },
    {
      id: 'uig8BYuZZXE',
      name: 'THẰNG HẦU | DUNG HOANG PHAM | THÁI HOÀNG REMIX'
    },
    {
      id: 'Kma3NpC3JKQ',
      name: 'PHÚC DU feat. @BÍCH PHƯƠNG - từ chối nhẹ nhàng thôi (Official M/V)'
    },
    {
      id: 'HdOCXC8ZwAw',
      name: 'The Same Persons - Versace [NCS Release]'
    },
    {
      id: 'RCQexe2dxJ4',
      name: '2IN1 - Guhancci ft VD | Siêu Phẩm Đã Được Mua Bản Quyền// XHamber Official'
    }
  ];

  constructor() {
  }

  findSongById(id: string | null) {
    return this.playlist.find(item => item.id === id);
  }
}
