import billboard

#takes a date as 'YYYY-MM-DD', and number of songs to return up to 100
def initPlaylist(date, num_songs):
    if num_songs < 1 or num_songs > 100:
        return
    chart = billboard.ChartData('hot-100', date, True)
    chart = chart[:num_songs]
    

    songs = []
    for entry in chart:
        song = {}
        song['title'] = entry.title
        song['artist'] = entry.artist
        song['spotifyID'] = entry.spotifyID
        song['votes'] = 0
        songs.append(song)
    
    return songs


