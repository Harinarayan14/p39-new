class Hurdles{
    constructor(){
     this.h1 = createSprite(800,50,30,30);
     this.h2 = createSprite(1500,50,30,30);
     this.h3 = createSprite(2200,50,30,30);
     this.h4 = createSprite(2800,50,30,30);
     this.h5 = createSprite(800,250,30,30);
     this.h6 = createSprite(1500,250,30,30);
     this.h7 = createSprite(2200,250,30,30);
     this.h8 = createSprite(2800,250,30,30);
     this.h9 = createSprite(800,450,30,30);
     this.h10= createSprite(1500,450,30,30);
     this.h11 = createSprite(2200,450,30,30);
     this.h12 = createSprite(2800,450,30,30);
     this.h13 = createSprite(800,650,30,30);
     this.h14 = createSprite(1500,650,30,30);
     this.h15 = createSprite(2200,650,30,30);
     this.h16 = createSprite(2800,650,30,30);
    }
    destroy1(){
        if(ath1.collide(this.h1)){
            this.h1.destroy();
            player.distance  = 500;
            player.update();
        }
        if(ath1.collide(this.h2)){
            this.h2.destroy();
            player.distance = 1200;
            player.update();
        }
        if(ath1.collide(this.h3)){
            this.h3.destroy();
            player.distance = 1900;
            player.update();
        }
        if(ath1.collide(this.h4)){
            this.h4.destroy();
            player.distance = 2500;
            player.update();
        }
        if(ath2.collide(this.h5)){
            this.h5.destroy();
            player.distance = 500;
            player.update();
        }
        if(ath2.collide(this.h6)){
            this.h6.destroy();
            player.distance = 1200;
            player.update();
        }
        if(ath2.collide(this.h7)){
            this.h7.destroy();
            player.distance = 1900;
            player.update();
        }
        if(ath2.collide(this.h8)){
            this.h8.destroy();
            player.distance = 2500;
            player.update();
        }
        if(ath3.collide(this.h9)){
            this.h9.destroy();
            player.distance = 500;
            player.update();
        }
        if(ath3.collide(this.h10)){
            this.h10.destroy();
            player.distance = 1200;
            player.update();
        }
        if(ath3.collide(this.h11)){
            this.h11.destroy();
            player.distance = 1900;
            player.update();
        }
        if(ath3.collide(this.h12)){
            this.h12.destroy();
            player.distance = 2500;
            player.update();
        }
        if(ath4.collide(this.h13)){
            this.h13.destroy();
            player.distance = 500;
            player.update();
        }
        if(ath4.collide(this.h14)){
            this.h14.destroy();
            player.distance = 1200;
            player.update();
        }
        if(ath4.collide(this.h15)){
            this.h15.destroy();
            player.distance = 1900;
            player.update();
        }
        if(ath4.collide(this.h16)){
            this.h16.destroy();
            player.distance = 2500;
            player.update();
        }
    }

}