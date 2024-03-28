const songs = [
  { name: "want it all", singer: "Burna and Polo G", duration: 4.34 },
  { name: "Onyeka", singer: "Burna", duration: 3.23 },
  { name: "Over dem all", singer: "Davido", duration: 2.33 },
  { name: "Alliance", singer: "Fally Ipupa", duration: 4.43 },
  { name: "Olandi", singer: "Innos's B", duration: 5.23 },
  { name: "Egwu", singer: "Imole", duration: 2.23 },
];

const [, { singer: s ,  name: n ,  duration: d }] = songs;
console.log(`ArtistName: ${n}, SongtName: ${s}, SongDuration: ${d}`);