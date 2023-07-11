function solve(input) {
    let numberOfSongs = input.shift();
    let searchType = input.pop();

    class Song{
        constructor(artist, name, length) {
            this.artist = artist;
            this.name = name;
            this.length = length;
        }
    }

    let songs = [];
    for (let i = 0; i < numberOfSongs; i++) {
        let info = input[i].split("_");
        let artist = info[0];
        let name = info[1];
        let length = info[2];

        let song = new Song(artist,name,info);
        songs.push(song);
    }
    if(searchType === "all") {
        songs.forEach(s => console.log(s.name));
    } else {
        let filteredSongs = songs.filter(s => s.artist === searchType);
        filteredSongs.forEach(s => console.log(s.name));
    }

}


solve([3,'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']);
solve([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater']);
solve([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']);