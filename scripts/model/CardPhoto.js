export default class Photo {
    constructor(media, name) {
        this._name = name[0].name
        this._pathMedia = media.image
        this._tag = "img"
        this._title = media.title
        this._likes = Number(media.likes)
        this._pathName = this.name.split(/-| /).join("")
        this._path = `../assets/Sample_Photos/${this._pathName}/${this._pathMedia}`
        this._id = media.id
        this._date = media.date
        this._userLike = false
    
    }
    
    get path(){
        return this._path
    }
    get pathName(){
        return this._pathName
    }
    get name() {
        return this._name
    }
    get tag(){
        return this._tag
    }
    get title(){
        return this._title
    }
    get likes(){
        return this._likes
    }
    get id(){
        return this._id
    }

    toggleLike(e) {
        if (this._userLike) {
            this._likes -= 1

        } else {
            this._likes += 1
        }
        this._userLike = !this._userLike
        e.currentTarget.querySelector("span").textContent = this._likes
      
        
    }
}
