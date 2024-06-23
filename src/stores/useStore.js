// src/stores/useStore.js

import { defineStore } from 'pinia';

export const useStore = defineStore('main', {
  state: () => ({
    view: 'album', // Set default view to 'album'
    photos: [
      // Contoh data foto, ini bisa diubah sesuai kebutuhan
      { src: 'https://i.pinimg.com/originals/89/06/01/890601614fd06437c65fbdbd5d7df6eb.jpg', alt: 'Photo 1' },
      { src: 'https://i.pinimg.com/originals/25/44/28/254428c1a24086f04af38e5920240ddb.jpg', alt: 'Photo 2' },
      { src: 'https://img.freepik.com/free-photo/wide-angle-shot-of-a-single-tree-growing-under-a-clouded-sky-during-a-sunset-surrounded-by-grass_181624-22807.jpg', alt: 'Photo 3' },
      { src: 'https://2.bp.blogspot.com/-dpPqGyBReuk/Wb6MUb29s5I/AAAAAAAAJNI/YkE_HMb5M6wYfkUymAliHCQkbHitMj2TACLcBGAs/s1600/20170917102022_IMG_9620-01.jpeg', alt: 'Photo 4' },
      { src: 'http://www.infoesztergom.hu/external/uploaded_images/5b2116fea6883.jpg', alt: 'Photo 5' },
      { src: 'https://ogimg.infoglobo.com.br/economia/13519928-9af-bfc/FT1086A/652/x0temp.jpg.pagespeed.ic.xNlHp_nBqG.jpg', alt: 'Photo 6' },
      { src: 'https://thypix.com/wp-content/uploads/2018/05/Sommerlandschaft-Bilder-30.jpg', alt: 'Photo 7' },
      { src: 'https://sfondo.info/i/original/f/5/e/4868.jpg', alt: 'Photo 8' },
      { src: 'http://versek.aranyosiervin.com/wp-content/uploads/2016/10/Hi%C3%BAz.jpg', alt: 'Photo 9' },
      { src: 'https://s7g10.scene7.com/is/image/stena/foto_happy_visuals_1908-1:Large', alt: 'Photo 10' },
    ],
    view: 'albumdua', // Set default view to 'album'
    photos: [
      // Contoh data foto, ini bisa diubah sesuai kebutuhan
      { src: 'https://i.pinimg.com/originals/89/06/01/890601614fd06437c65fbdbd5d7df6eb.jpg', alt: 'Photo 1' },
      { src: 'https://i.pinimg.com/originals/25/44/28/254428c1a24086f04af38e5920240ddb.jpg', alt: 'Photo 2' },
      { src: 'https://img.freepik.com/free-photo/wide-angle-shot-of-a-single-tree-growing-under-a-clouded-sky-during-a-sunset-surrounded-by-grass_181624-22807.jpg', alt: 'Photo 3' },
      { src: 'https://2.bp.blogspot.com/-dpPqGyBReuk/Wb6MUb29s5I/AAAAAAAAJNI/YkE_HMb5M6wYfkUymAliHCQkbHitMj2TACLcBGAs/s1600/20170917102022_IMG_9620-01.jpeg', alt: 'Photo 4' },
      { src: 'http://www.infoesztergom.hu/external/uploaded_images/5b2116fea6883.jpg', alt: 'Photo 5' },
      { src: 'https://ogimg.infoglobo.com.br/economia/13519928-9af-bfc/FT1086A/652/x0temp.jpg.pagespeed.ic.xNlHp_nBqG.jpg', alt: 'Photo 6' },
      { src: 'https://thypix.com/wp-content/uploads/2018/05/Sommerlandschaft-Bilder-30.jpg', alt: 'Photo 7' },
      { src: 'https://sfondo.info/i/original/f/5/e/4868.jpg', alt: 'Photo 8' },
      { src: 'http://versek.aranyosiervin.com/wp-content/uploads/2016/10/Hi%C3%BAz.jpg', alt: 'Photo 9' },
      { src: 'https://s7g10.scene7.com/is/image/stena/foto_happy_visuals_1908-1:Large', alt: 'Photo 10' },
    ],
  }),
  actions: {
    setView(newView) {
      this.view = newView;
    },
    setPhotos(newPhotos) {
      this.photos = newPhotos;
    },
  },
});
