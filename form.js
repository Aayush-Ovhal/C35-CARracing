class Form{

    constructor(){

    }

    display(){
        var title = createElement('h2');
        title.html("CAR RACING GAME made by noob");
        title.position(130,0);

        var input = createInput("name");
        input.position(130,160);

        var button = createButton('Submit');
        button.position(130,250);
        
        var title2 = createElement('h3');
        
        button.mousePressed(function(){
            input.hide();
            button.hide();

            var name = input.value();

            playerCount += 1;

            player.update(name);
            player.updateCount(playerCount);

            title2.html("NOMOSKAR " + name);
            title2.position(130,160);
        })
    }

}