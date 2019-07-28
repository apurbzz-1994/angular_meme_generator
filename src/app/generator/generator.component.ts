import { Component } from '@angular/core';

@Component({
    selector: 'app-generator',
    templateUrl: './generator.component.html',
    styleUrls: ['./generator.component.css']
})

export class GeneratorComponent {
    topText: string = "This is top text";
    bottomText: string = "This is bottom text";
    imageName: string = "Surprised Pikachu";
    colorName: string = "black";

    /*Note: In the event that new memes are to be added,
    the meme names and corresponding file-names need to be in the same order in both arrays.*/ 
    
    //stores names of all the memes
    imageNameList: string[] = ["Surprised Pikachu", "Crying Pepe", "Denerys"];
    //stores file-names of all memes
    imageFileNameList: string[] = ["surprised_pikachu.png", "crying_pepe.jpg", "denerys.png"];


    changeImage(){
        var valueOfSearch: string = "";
        for(var i = 0; i < this.imageNameList.length; i++){
            if(this.imageNameList[i] === this.imageName){
                valueOfSearch = this.imageFileNameList[i];
            }
        }
        //console.log(valueOfSearch);
        //console.log(this.imageName);
        var whole: string = "assets/" + valueOfSearch;
        return whole;
    }


}