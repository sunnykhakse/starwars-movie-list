type Rating = {
    Source: string,
    Value: string
}
type Movie = {
    title: string, 
    episode_id: number, 
    opening_crawl: string, 
    director:string, 
    producer: string, 
    release_date: string, 
    average_rating: number,
    characters:string[], 
    planets:string[], 
    starships:string[], 
    vehicles:string[], 
    species:string[], 
    created: string, 
    edited: string, 
    url: string,
    movie_title: string,
    poster:string,
    ratings: Rating[]
}