enchant();

window.onload = function() {

    game_ = new Game(600, 320); // 表示領域の大きさを設定
    game_.fps = 5;                 // ゲームの進行スピードを設定
    game_.preload('chara1.png','card01.jpg','card02.jpg','card03.jpg','card04.jpg','Quiz1.mp3','Quiz2.mp3');
	game_.score=0;
    game_.onload = function() {     // ゲームの準備が整ったらメインの処理を実行します

	var score = new Label();

 
			var kuma = new Sprite(32, 32);
			kuma.image = game_.assets['chara1.png'];
			kuma.x = 45;
			kuma.y = 50;
			kuma.scaleX = 2;
			kuma.scaleY = 2;
				kuma.addEventListener(Event.ENTER_FRAME, function(){//クマ歩く
				kuma.frame ++;
				if (kuma.frame > 2) {
				kuma.frame = 0;
				}});


		
 // 1マス目の作成
        var sprite1 = new Sprite(110, 110);//大きさの指定
        sprite1.x = 10;
        sprite1.y = 50;//座標を指定（左上になる）
        sprite1.backgroundColor = "#90EE90";// spriteオブジェクトの背景色の指定

        // 2マス目の作成
        var sprite2 = new Sprite(110, 110);
        sprite2.x = 120;
        sprite2.y = 50;
        sprite2.backgroundColor = "#90EE90";

        // 3マス目の作成
        var sprite3 = new Sprite(110, 110);
        sprite3.x = 230;
        sprite3.y = 50;
        sprite3.backgroundColor = "#90EE90";

        // 4マス目の作成
        var sprite4 = new Sprite(110, 110);
        sprite4.x = 340;
        sprite4.y = 50;
        sprite4.backgroundColor = "#90EE90";

        //Canvas要素を使って画像を描画
        // Surfaceオブジェクトの作成
        // Spriteの大きさ以下にすること
        var surface = new Surface(101, 101);
        // Surfaceオブジェクトを各Spriteオブジェクトに代入
        sprite1.image = surface;
        sprite2.image = surface;
        sprite3.image = surface;
        sprite4.image = surface;
        // コンテキストを取得
        context = surface.context;
        // パスの描画の初期化
        context.beginPath();


        //線の描画
        // 描画開始位置の移動
        context.moveTo(10, 10);
        // 指定座標まで直線を描画
        context.lineTo(100,10 );//上線を描画

        context.moveTo(10, 10);
        context.lineTo(10,100 );//左線を描画

        context.moveTo(100, 100);
        context.lineTo(10,100 );//下線を描画\

        context.moveTo(100, 100);
        context.lineTo(100,10 );//右線を描画

        // 描画を行う
        context.stroke();

        game_.rootScene.addChild(sprite1);
        game_.rootScene.addChild(sprite2);
        game_.rootScene.addChild(sprite3);
        game_.rootScene.addChild(sprite4);
		game_.rootScene.addChild(kuma);
       
        /**
        * タイトルシーンを作り、返す関数
        */
		
        var createTitleScene = function() {
            var scene = new Scene();      			// 新しいシーンを作る
			     //クマの表示


            scene.addEventListener(Event.TOUCH_START, function(e) {           // シーンにタッチイベントを設定
                //現在表示しているシーンをゲームシーンに置き換えます
                game_.replaceScene(createGameScene1());
				
            });



            // この関数内で作ったシーンを呼び出し元に返します(return)
            return scene;

        };

		/**
        * ゲームシーン1
        */
      var createGameScene1 = function() {

            var scene = new Scene(); 			// 新しいシーンを作る
			var label1 = new Label('PMとは何の略称でしょう                                                        A.プロデュースマネジメント　　B.パラエディンモンスター　　      C.プロジェクトマネジメント　　  D.ポケットモンスター');
			var label2 = new Label('1');
			var label3 = new Label('2');
			var label4 = new Label('3');
			var label5 = new Label('4');
			score.text = "スコア" + game_.score;
			label1.width = 370;
			label1.x = 10;
			label1.y = 190; 
			label2.font = "32px Palatino";
			label2.x = 55;
			label2.y = 110;
			label3.font = "32px Palation";
			label3.x = 165;
			label3.y = 110;
			label4.font = "32px Palation";
			label4.x = 275;
			label4.y = 110;
			label5.font = "32px Palation";
			label5.x = 385;
			label5.y = 110;
			scene.addChild(score);
			scene.addChild(label1);
			scene.addChild(label2);
			scene.addChild(label3);
			scene.addChild(label4);
			scene.addChild(label5);
			scene.addChild(kuma);
			//カード1作成
	var card1 = new Sprite(35,35);
		card1.x = 1; //x座標を指定
		card1.y = 250; //y座標を指定
		card1.image = game_.assets['card01.jpg'];
		scene.addChild(card1); //画面に画像を表示する
//カード2作成
	var card2 = new Sprite(35,35);
		card2.x = 50; //x座標を指定
		card2.y = 250; //y座標を指定
		card2.image = game_.assets['card02.jpg'];
		scene.addChild(card2); //画面に画像を表示する
//カード3作成
	var card3 = new Sprite(35,35);
		card3.x = 100; //x座標を指定
		card3.y = 250; //y座標を指定
		card3.image = game_.assets['card03.jpg'];
		scene.addChild(card3); //画面に画像を表示する
//カード4作成
	var card4 = new Sprite(35,35);
		card4.x = 150; //x座標を指定
		card4.y = 250; //y座標を指定
		card4.image = game_.assets['card04.jpg'];
		scene.addChild(card4); //画面に画像を表示する
			
			card1.addEventListener(Event.TOUCH_START, function(e) { // シーンにタッチイベントを設定
                //現在表示しているシーンの上にゲームオーバーシーンを重ねて表示させます
				
				game_.assets['Quiz2.mp3'].play();
                game_.replaceScene(createGameScene2());
            });
			card2.addEventListener(Event.TOUCH_START, function(e) { // シーンにタッチイベントを設定
                //現在表示しているシーンの上にゲームオーバーシーンを重ねて表示させます
                game_.replaceScene(createGameScene2());
				game_.assets['Quiz2.mp3'].play();
            });
			card3.addEventListener(Event.TOUCH_START, function(e) { // シーンにタッチイベントを設定
                //現在表示しているシーンの上にゲームオーバーシーンを重ねて表示させます
				game_.score +=1;
                game_.replaceScene(createGameScene2());
				game_.assets['Quiz1.mp3'].play();
            });
			card4.addEventListener(Event.TOUCH_START, function(e) { // シーンにタッチイベントを設定
                //現在表示しているシーンの上にゲームオーバーシーンを重ねて表示させます
                game_.replaceScene(createGameScene2());
				game_.assets['Quiz2.mp3'].play();
            });

            // この関数内で作ったシーンを呼び出し元に返します(return)
            return scene;
			 };

        /**
        * ゲームシーン2
        */
      var createGameScene2 = function() {

            var scene = new Scene(); 			// 新しいシーンを作る
			var label1 = new Label('現在プロジェクトマネジメントにおける知識エリアはいくつあるか  A.10　　B.9　　 C.8　　 D.7');
			var label2 = new Label('2');
			var label3 = new Label('3');
			var label4 = new Label('4');
			var label5 = new Label('5');
			score.text = "スコア" + game_.score;
			label1.width = 370;
			label1.x = 10;
			label1.y = 190; 
			label2.font = "32px Palatino";
			label2.x = 55;
			label2.y = 110;
			label3.font = "32px Palation";
			label3.x = 165;
			label3.y = 110;
			label4.font = "32px Palation";
			label4.x = 275;
			label4.y = 110;
			label5.font = "32px Palation";
			label5.x = 385;
			label5.y = 110;
			scene.addChild(score);
			scene.addChild(label1);
			scene.addChild(label2);
			scene.addChild(label3);
			scene.addChild(label4);
			scene.addChild(label5);
			scene.addChild(kuma);
			//カード1作成
	var card1 = new Sprite(35,35);
		card1.x = 1; //x座標を指定
		card1.y = 250; //y座標を指定
		card1.image = game_.assets['card01.jpg'];
		scene.addChild(card1); //画面に画像を表示する
//カード2作成
	var card2 = new Sprite(35,35);
		card2.x = 50; //x座標を指定
		card2.y = 250; //y座標を指定
		card2.image = game_.assets['card02.jpg'];
		scene.addChild(card2); //画面に画像を表示する
//カード3作成
	var card3 = new Sprite(35,35);
		card3.x = 100; //x座標を指定
		card3.y = 250; //y座標を指定
		card3.image = game_.assets['card03.jpg'];
		scene.addChild(card3); //画面に画像を表示する
//カード4作成
	var card4 = new Sprite(35,35);
		card4.x = 150; //x座標を指定
		card4.y = 250; //y座標を指定
		card4.image = game_.assets['card04.jpg'];
		scene.addChild(card4); //画面に画像を表示する
			
			card1.addEventListener(Event.TOUCH_START, function(e) { // シーンにタッチイベントを設定
                //現在表示しているシーンの上にゲームオーバーシーンを重ねて表示させます
				game_.score +=1;
				game_.assets['Quiz1.mp3'].play();
                game_.replaceScene(createGameScene3());
            });
			card2.addEventListener(Event.TOUCH_START, function(e) { // シーンにタッチイベントを設定
                //現在表示しているシーンの上にゲームオーバーシーンを重ねて表示させます
                game_.replaceScene(createGameScene3());
				game_.assets['Quiz2.mp3'].play();
            });
			card3.addEventListener(Event.TOUCH_START, function(e) { // シーンにタッチイベントを設定
                //現在表示しているシーンの上にゲームオーバーシーンを重ねて表示させます
                game_.replaceScene(createGameScene3());
				game_.assets['Quiz2.mp3'].play();
            });
			card4.addEventListener(Event.TOUCH_START, function(e) { // シーンにタッチイベントを設定
                //現在表示しているシーンの上にゲームオーバーシーンを重ねて表示させます
                game_.replaceScene(createGameScene3());
				game_.assets['Quiz2.mp3'].play();
            });

            // この関数内で作ったシーンを呼び出し元に返します(return)
            return scene;



        };

       /**
        * ゲームシーン3
        */
      var createGameScene3 = function() {

            var scene = new Scene(); 			// 新しいシーンを作る
			var label1 = new Label('一番最近追加された知識エリアはどれか                 A.タイム　 B.人的資源　                                     C.リスク　  D.ステークホルダー');
			var label2 = new Label('3');
			var label3 = new Label('4');
			var label4 = new Label('5');
			var label5 = new Label('6');
			score.text = "スコア" + game_.score;
			label1.x = 10;
			label1.y = 190; 
			label2.font = "32px Palatino";
			label2.x = 55;
			label2.y = 110;
			label3.font = "32px Palation";
			label3.x = 165;
			label3.y = 110;
			label4.font = "32px Palation";
			label4.x = 275;
			label4.y = 110;
			label5.font = "32px Palation";
			label5.x = 385;
			label5.y = 110;
			scene.addChild(score);
			scene.addChild(label1);
			scene.addChild(label2);
			scene.addChild(label3);
			scene.addChild(label4);
			scene.addChild(label5);
			scene.addChild(kuma);
			//カード1作成
	var card1 = new Sprite(35,35);
		card1.x = 1; //x座標を指定
		card1.y = 250; //y座標を指定
		card1.image = game_.assets['card01.jpg'];
		scene.addChild(card1); //画面に画像を表示する
//カード2作成
	var card2 = new Sprite(35,35);
		card2.x = 50; //x座標を指定
		card2.y = 250; //y座標を指定
		card2.image = game_.assets['card02.jpg'];
		scene.addChild(card2); //画面に画像を表示する
//カード3作成
	var card3 = new Sprite(35,35);
		card3.x = 100; //x座標を指定
		card3.y = 250; //y座標を指定
		card3.image = game_.assets['card03.jpg'];
		scene.addChild(card3); //画面に画像を表示する
//カード4作成
	var card4 = new Sprite(35,35);
		card4.x = 150; //x座標を指定
		card4.y = 250; //y座標を指定
		card4.image = game_.assets['card04.jpg'];
		scene.addChild(card4); //画面に画像を表示する
			
			card1.addEventListener(Event.TOUCH_START, function(e) { // シーンにタッチイベントを設定
                //現在表示しているシーンの上にゲームオーバーシーンを重ねて表示させます
				
				game_.assets['Quiz2.mp3'].play();
                game_.replaceScene(createGameScene4());
            });
			card2.addEventListener(Event.TOUCH_START, function(e) { // シーンにタッチイベントを設定
                //現在表示しているシーンの上にゲームオーバーシーンを重ねて表示させます
                game_.replaceScene(createGameScene4());
				game_.assets['Quiz2.mp3'].play();
            });
			card3.addEventListener(Event.TOUCH_START, function(e) { // シーンにタッチイベントを設定
                //現在表示しているシーンの上にゲームオーバーシーンを重ねて表示させます
                game_.replaceScene(createGameScene4());
				game_.assets['Quiz2.mp3'].play();
            });
			card4.addEventListener(Event.TOUCH_START, function(e) { // シーンにタッチイベントを設定
                //現在表示しているシーンの上にゲームオーバーシーンを重ねて表示させます
				game_.score +=1;
                game_.replaceScene(createGameScene4());
				game_.assets['Quiz1.mp3'].play();
            });

            // この関数内で作ったシーンを呼び出し元に返します(return)
            return scene;



        };
        
        
		/**
        * ゲームシーン4
        */
      var createGameScene4 = function() {

            var scene = new Scene(); 			// 新しいシーンを作る
			var label1 = new Label('WBSとは何の略称でしょう                                      A.World Breakdown Structure　                           B.Work Breakdown Structure　                            C.World Breakdown System　                               D.Work Backbone System');
			var label2 = new Label('4');
			var label3 = new Label('5');
			var label4 = new Label('6');
			var label5 = new Label('7');
			score.text = "スコア" + game_.score;
			label1.x = 10;
			label1.y = 190; 
			label2.font = "32px Palatino";
			label2.x = 55;
			label2.y = 110;
			label3.font = "32px Palation";
			label3.x = 165;
			label3.y = 110;
			label4.font = "32px Palation";
			label4.x = 275;
			label4.y = 110;
			label5.font = "32px Palation";
			label5.x = 385;
			label5.y = 110;
			scene.addChild(score);
			scene.addChild(label1);
			scene.addChild(label2);
			scene.addChild(label3);
			scene.addChild(label4);
			scene.addChild(label5);
			scene.addChild(kuma);
			//カード1作成
	var card1 = new Sprite(35,35);
		card1.x = 1; //x座標を指定
		card1.y = 280; //y座標を指定
		card1.image = game_.assets['card01.jpg'];
		scene.addChild(card1); //画面に画像を表示する
//カード2作成
	var card2 = new Sprite(35,35);
		card2.x = 50; //x座標を指定
		card2.y = 280; //y座標を指定
		card2.image = game_.assets['card02.jpg'];
		scene.addChild(card2); //画面に画像を表示する
//カード3作成
	var card3 = new Sprite(35,35);
		card3.x = 100; //x座標を指定
		card3.y = 280; //y座標を指定
		card3.image = game_.assets['card03.jpg'];
		scene.addChild(card3); //画面に画像を表示する
//カード4作成
	var card4 = new Sprite(35,35);
		card4.x = 150; //x座標を指定
		card4.y = 280; //y座標を指定
		card4.image = game_.assets['card04.jpg'];
		scene.addChild(card4); //画面に画像を表示する
			
			card1.addEventListener(Event.TOUCH_START, function(e) { // シーンにタッチイベントを設定
                //現在表示しているシーンの上にゲームオーバーシーンを重ねて表示させます
				game_.assets['Quiz2.mp3'].play();
                game_.replaceScene(createGameScene5());
            });
			card2.addEventListener(Event.TOUCH_START, function(e) { // シーンにタッチイベントを設定
                //現在表示しているシーンの上にゲームオーバーシーンを重ねて表示させます
				game_.score +=1;
                game_.replaceScene(createGameScene5());
				game_.assets['Quiz1.mp3'].play();
            });
			card3.addEventListener(Event.TOUCH_START, function(e) { // シーンにタッチイベントを設定
                //現在表示しているシーンの上にゲームオーバーシーンを重ねて表示させます
                game_.replaceScene(createGameScene5());
				game_.assets['Quiz2.mp3'].play();
            });
			card4.addEventListener(Event.TOUCH_START, function(e) { // シーンにタッチイベントを設定
                //現在表示しているシーンの上にゲームオーバーシーンを重ねて表示させます
				
                game_.replaceScene(createGameScene5());
				game_.assets['Quiz2.mp3'].play();
            });

            // この関数内で作ったシーンを呼び出し元に返します(return)
            return scene;



        };
        
        
        /**
        * ゲームシーン5
        */
      var createGameScene5 = function() {

            var scene = new Scene(); 			// 新しいシーンを作る
			var label1 = new Label('スケジュール管理ツールはどれでしょう                     A.リスクモデル　        B.成果物スコープ　              C.クリティカル・パス　  D.ガントチャート');
			var label2 = new Label('5');
			var label3 = new Label('6');
			var label4 = new Label('7');
			var label5 = new Label('8');
			score.text = "スコア" + game_.score;
			label1.x = 10;
			label1.y = 190; 
			label2.font = "32px Palatino";
			label2.x = 55;
			label2.y = 110;
			label3.font = "32px Palation";
			label3.x = 165;
			label3.y = 110;
			label4.font = "32px Palation";
			label4.x = 275;
			label4.y = 110;
			label5.font = "32px Palation";
			label5.x = 385;
			label5.y = 110;
			scene.addChild(score);
			scene.addChild(label1);
			scene.addChild(label2);
			scene.addChild(label3);
			scene.addChild(label4);
			scene.addChild(label5);
			scene.addChild(kuma);
			//カード1作成
	var card1 = new Sprite(35,35);
		card1.x = 1; //x座標を指定
		card1.y = 250; //y座標を指定
		card1.image = game_.assets['card01.jpg'];
		scene.addChild(card1); //画面に画像を表示する
//カード2作成
	var card2 = new Sprite(35,35);
		card2.x = 50; //x座標を指定
		card2.y = 250; //y座標を指定
		card2.image = game_.assets['card02.jpg'];
		scene.addChild(card2); //画面に画像を表示する
//カード3作成
	var card3 = new Sprite(35,35);
		card3.x = 100; //x座標を指定
		card3.y = 250; //y座標を指定
		card3.image = game_.assets['card03.jpg'];
		scene.addChild(card3); //画面に画像を表示する
//カード4作成
	var card4 = new Sprite(35,35);
		card4.x = 150; //x座標を指定
		card4.y = 250; //y座標を指定
		card4.image = game_.assets['card04.jpg'];
		scene.addChild(card4); //画面に画像を表示する
			
			card1.addEventListener(Event.TOUCH_START, function(e) { // シーンにタッチイベントを設定
                //現在表示しているシーンの上にゲームオーバーシーンを重ねて表示させます
				game_.assets['Quiz2.mp3'].play();
                game_.replaceScene(createGameScene6());
            });
			card2.addEventListener(Event.TOUCH_START, function(e) { // シーンにタッチイベントを設定
                //現在表示しているシーンの上にゲームオーバーシーンを重ねて表示させます
                game_.replaceScene(createGameScene6());
				game_.assets['Quiz2.mp3'].play();
            });
			card3.addEventListener(Event.TOUCH_START, function(e) { // シーンにタッチイベントを設定
                //現在表示しているシーンの上にゲームオーバーシーンを重ねて表示させます
                game_.replaceScene(createGameScene6());
				game_.assets['Quiz2.mp3'].play();
            });
			card4.addEventListener(Event.TOUCH_START, function(e) { // シーンにタッチイベントを設定
                //現在表示しているシーンの上にゲームオーバーシーンを重ねて表示させます
				game_.score +=1;
                game_.replaceScene(createGameScene6());
				game_.assets['Quiz1.mp3'].play();
            });

            // この関数内で作ったシーンを呼び出し元に返します(return)
            return scene;



        };
		
		/**
        * ゲームシーン6
        */
      var createGameScene6 = function() {

            var scene = new Scene(); 			// 新しいシーンを作る
			var label1 = new Label('EVMにおけるコストは何と表現されるか                    A.PV　 B.AC　 C.EV　 D.CV');
			var label2 = new Label('6');
			var label3 = new Label('7');
			var label4 = new Label('8');
			var label5 = new Label('9');
			score.text = "スコア" + game_.score;
			label1.x = 10;
			label1.y = 190; 
			label2.font = "32px Palatino";
			label2.x = 55;
			label2.y = 110;
			label3.font = "32px Palation";
			label3.x = 165;
			label3.y = 110;
			label4.font = "32px Palation";
			label4.x = 275;
			label4.y = 110;
			label5.font = "32px Palation";
			label5.x = 385;
			label5.y = 110;
			scene.addChild(score);
			scene.addChild(label1);
			scene.addChild(label2);
			scene.addChild(label3);
			scene.addChild(label4);
			scene.addChild(label5);
			scene.addChild(kuma);
			//カード1作成
	var card1 = new Sprite(35,35);
		card1.x = 1; //x座標を指定
		card1.y = 250; //y座標を指定
		card1.image = game_.assets['card01.jpg'];
		scene.addChild(card1); //画面に画像を表示する
//カード2作成
	var card2 = new Sprite(35,35);
		card2.x = 50; //x座標を指定
		card2.y = 250; //y座標を指定
		card2.image = game_.assets['card02.jpg'];
		scene.addChild(card2); //画面に画像を表示する
//カード3作成
	var card3 = new Sprite(35,35);
		card3.x = 100; //x座標を指定
		card3.y = 250; //y座標を指定
		card3.image = game_.assets['card03.jpg'];
		scene.addChild(card3); //画面に画像を表示する
//カード4作成
	var card4 = new Sprite(35,35);
		card4.x = 150; //x座標を指定
		card4.y = 250; //y座標を指定
		card4.image = game_.assets['card04.jpg'];
		scene.addChild(card4); //画面に画像を表示する
			
			card1.addEventListener(Event.TOUCH_START, function(e) { // シーンにタッチイベントを設定
                //現在表示しているシーンの上にゲームオーバーシーンを重ねて表示させます
				game_.assets['Quiz2.mp3'].play();
                game_.replaceScene(createGameScene7());
            });
			card2.addEventListener(Event.TOUCH_START, function(e) { // シーンにタッチイベントを設定
                //現在表示しているシーンの上にゲームオーバーシーンを重ねて表示させます
				game_.score +=1;
                game_.replaceScene(createGameScene7());
				game_.assets['Quiz1.mp3'].play();
            });
			card3.addEventListener(Event.TOUCH_START, function(e) { // シーンにタッチイベントを設定
                //現在表示しているシーンの上にゲームオーバーシーンを重ねて表示させます
                game_.replaceScene(createGameScene7());
				game_.assets['Quiz2.mp3'].play();
            });
			card4.addEventListener(Event.TOUCH_START, function(e) { // シーンにタッチイベントを設定
                //現在表示しているシーンの上にゲームオーバーシーンを重ねて表示させます
                game_.replaceScene(createGameScene7());
				game_.assets['Quiz2.mp3'].play();
				
            });

            // この関数内で作ったシーンを呼び出し元に返します(return)
            return scene;



        };
        
        /**
        * ゲームシーン7
        */
      var createGameScene7 = function() {

            var scene = new Scene(); 			// 新しいシーンを作る
			var label1 = new Label('QCDに含まれないものはどれか                            A.価格   B.保守   C.納期   D.品質');
			var label2 = new Label('7');
			var label3 = new Label('8');
			var label4 = new Label('9');
			var label5 = new Label('10');
			score.text = "スコア" + game_.score;
			label1.x = 10;
			label1.y = 190; 
			label2.font = "32px Palatino";
			label2.x = 55;
			label2.y = 110;
			label3.font = "32px Palation";
			label3.x = 165;
			label3.y = 110;
			label4.font = "32px Palation";
			label4.x = 275;
			label4.y = 110;
			label5.font = "32px Palation";
			label5.x = 385;
			label5.y = 110;
			scene.addChild(score);
			scene.addChild(label1);
			scene.addChild(label2);
			scene.addChild(label3);
			scene.addChild(label4);
			scene.addChild(label5);
			scene.addChild(kuma);
			//カード1作成
	var card1 = new Sprite(35,35);
		card1.x = 1; //x座標を指定
		card1.y = 250; //y座標を指定
		card1.image = game_.assets['card01.jpg'];
		scene.addChild(card1); //画面に画像を表示する
//カード2作成
	var card2 = new Sprite(35,35);
		card2.x = 50; //x座標を指定
		card2.y = 250; //y座標を指定
		card2.image = game_.assets['card02.jpg'];
		scene.addChild(card2); //画面に画像を表示する
//カード3作成
	var card3 = new Sprite(35,35);
		card3.x = 100; //x座標を指定
		card3.y = 250; //y座標を指定
		card3.image = game_.assets['card03.jpg'];
		scene.addChild(card3); //画面に画像を表示する
//カード4作成
	var card4 = new Sprite(35,35);
		card4.x = 150; //x座標を指定
		card4.y = 250; //y座標を指定
		card4.image = game_.assets['card04.jpg'];
		scene.addChild(card4); //画面に画像を表示する
			
			card1.addEventListener(Event.TOUCH_START, function(e) { // シーンにタッチイベントを設定
                //現在表示しているシーンの上にゲームオーバーシーンを重ねて表示させます
				game_.assets['Quiz2.mp3'].play();
                game_.replaceScene(createGameScene8());
                
            });
			card2.addEventListener(Event.TOUCH_START, function(e) { // シーンにタッチイベントを設定
                //現在表示しているシーンの上にゲームオーバーシーンを重ねて表示させます
                game_.score +=1;
                game_.replaceScene(createGameScene8());
				game_.assets['Quiz1.mp3'].play();
				
            });
			card3.addEventListener(Event.TOUCH_START, function(e) { // シーンにタッチイベントを設定
                //現在表示しているシーンの上にゲームオーバーシーンを重ねて表示させます
                game_.replaceScene(createGameScene8());
				game_.assets['Quiz2.mp3'].play();
            });
			card4.addEventListener(Event.TOUCH_START, function(e) { // シーンにタッチイベントを設定
                //現在表示しているシーンの上にゲームオーバーシーンを重ねて表示させます
                game_.replaceScene(createGameScene8());
				game_.assets['Quiz2.mp3'].play();
				
            });

            // この関数内で作ったシーンを呼び出し元に返します(return)
            return scene;



        };
        
       /**
        * ゲームシーン8
        */
      var createGameScene8 = function() {

            var scene = new Scene(); 			// 新しいシーンを作る
			var label1 = new Label('PMで管理するべき資源はどれ                                               A.情熱・希望・速さ　  B.ヒト・モノ・カネ　　 　　　　　           　    C.情報・コスト・人    D.モノ・情報・速さ');
			var label2 = new Label('8');
			var label3 = new Label('9');
			var label4 = new Label('10');
			var label5 = new Label('GOAL');
			score.text = "スコア" + game_.score;
			label1.width = 360;
			label1.x = 10;
			label1.y = 190; 
			label2.font = "32px Palatino";
			label2.x = 55;
			label2.y = 110;
			label3.font = "32px Palation";
			label3.x = 165;
			label3.y = 110;
			label4.font = "32px Palation";
			label4.x = 275;
			label4.y = 110;
			label5.font = "32px Palation";
			label5.x = 355;
			label5.y = 110;
			scene.addChild(score);
			scene.addChild(label1);
			scene.addChild(label2);
			scene.addChild(label3);
			scene.addChild(label4);
			scene.addChild(label5);
			scene.addChild(kuma);
			//カード1作成
	var card1 = new Sprite(35,35);
		card1.x = 1; //x座標を指定
		card1.y = 250; //y座標を指定
		card1.image = game_.assets['card01.jpg'];
		scene.addChild(card1); //画面に画像を表示する
//カード2作成
	var card2 = new Sprite(35,35);
		card2.x = 50; //x座標を指定
		card2.y = 250; //y座標を指定
		card2.image = game_.assets['card02.jpg'];
		scene.addChild(card2); //画面に画像を表示する
//カード3作成
	var card3 = new Sprite(35,35);
		card3.x = 100; //x座標を指定
		card3.y = 250; //y座標を指定
		card3.image = game_.assets['card03.jpg'];
		scene.addChild(card3); //画面に画像を表示する
//カード4作成
	var card4 = new Sprite(35,35);
		card4.x = 150; //x座標を指定
		card4.y = 250; //y座標を指定
		card4.image = game_.assets['card04.jpg'];
		scene.addChild(card4); //画面に画像を表示する
			
			card1.addEventListener(Event.TOUCH_START, function(e) { // シーンにタッチイベントを設定
                //現在表示しているシーンの上にゲームオーバーシーンを重ねて表示させます
				game_.assets['Quiz2.mp3'].play();
                game_.replaceScene(createGameScene9());
            });
			card2.addEventListener(Event.TOUCH_START, function(e) { // シーンにタッチイベントを設定
                //現在表示しているシーンの上にゲームオーバーシーンを重ねて表示させます
                game_.score +=1;
                game_.replaceScene(createGameScene9());
				game_.assets['Quiz1.mp3'].play();
				
            });
			card3.addEventListener(Event.TOUCH_START, function(e) { // シーンにタッチイベントを設定
                //現在表示しているシーンの上にゲームオーバーシーンを重ねて表示させます
                game_.replaceScene(createGameScene9());
				game_.assets['Quiz2.mp3'].play();
				
            });
			card4.addEventListener(Event.TOUCH_START, function(e) { // シーンにタッチイベントを設定
                //現在表示しているシーンの上にゲームオーバーシーンを重ねて表示させます
                game_.replaceScene(createGameScene9());
				game_.assets['Quiz2.mp3'].play();
            });

            // この関数内で作ったシーンを呼び出し元に返します(return)
            return scene;



        };

/**
        * ゲームシーン9
        */
      var createGameScene9 = function() {

            var scene = new Scene(); 			// 新しいシーンを作る
			var label1 = new Label('PJ憲章はどの知識エリアに属すか                           A.スコープマネジメント　                                      B.人的資源マネジメント　                                    C.リスクマネジメント　                                          D.プロジェクト統合マネジメント');
			var label2 = new Label('9');
			var label3 = new Label('10');
			var label4 = new Label('GOAL');
			var label5 = new Label('そして');
			score.text = "スコア" + game_.score;
			label1.x = 10;
			label1.y = 190; 
			label2.font = "32px Palatino";
			label2.x = 55;
			label2.y = 110;
			label3.font = "32px Palation";
			label3.x = 165;
			label3.y = 110;
			label4.font = "32px Palation";
			label4.x = 245;
			label4.y = 110;
			label5.font = "32px Palation";
			label5.x = 350;
			label5.y = 110;
			scene.addChild(score);
			scene.addChild(label1);
			scene.addChild(label2);
			scene.addChild(label3);
			scene.addChild(label4);
			scene.addChild(label5);
			scene.addChild(kuma);
			//カード1作成
	var card1 = new Sprite(35,35);
		card1.x = 1; //x座標を指定
		card1.y = 280; //y座標を指定
		card1.image = game_.assets['card01.jpg'];
		scene.addChild(card1); //画面に画像を表示する
//カード2作成
	var card2 = new Sprite(35,35);
		card2.x = 50; //x座標を指定
		card2.y = 280; //y座標を指定
		card2.image = game_.assets['card02.jpg'];
		scene.addChild(card2); //画面に画像を表示する
//カード3作成
	var card3 = new Sprite(35,35);
		card3.x = 100; //x座標を指定
		card3.y = 280; //y座標を指定
		card3.image = game_.assets['card03.jpg'];
		scene.addChild(card3); //画面に画像を表示する
//カード4作成
	var card4 = new Sprite(35,35);
		card4.x = 150; //x座標を指定
		card4.y = 280; //y座標を指定
		card4.image = game_.assets['card04.jpg'];
		scene.addChild(card4); //画面に画像を表示する
			
			card1.addEventListener(Event.TOUCH_START, function(e) { // シーンにタッチイベントを設定
                //現在表示しているシーンの上にゲームオーバーシーンを重ねて表示させます
				game_.assets['Quiz2.mp3'].play();
                game_.replaceScene(createGameScene10());
            });
			card2.addEventListener(Event.TOUCH_START, function(e) { // シーンにタッチイベントを設定
                //現在表示しているシーンの上にゲームオーバーシーンを重ねて表示させます
                game_.replaceScene(createGameScene10());
				game_.assets['Quiz2.mp3'].play();
            });
			card3.addEventListener(Event.TOUCH_START, function(e) { // シーンにタッチイベントを設定
                //現在表示しているシーンの上にゲームオーバーシーンを重ねて表示させます
                game_.replaceScene(createGameScene10());
				game_.assets['Quiz2.mp3'].play();
            });
			card4.addEventListener(Event.TOUCH_START, function(e) { // シーンにタッチイベントを設定
                //現在表示しているシーンの上にゲームオーバーシーンを重ねて表示させます
				game_.score +=1;
                game_.replaceScene(createGameScene10());
				game_.assets['Quiz1.mp3'].play();
				
            });

            // この関数内で作ったシーンを呼び出し元に返します(return)
            return scene;



        };
        
/**
        * ゲームシーン10
        */
      var createGameScene10 = function() {

            var scene = new Scene(); 			// 新しいシーンを作る
			var label1 = new Label('次の内ステークホルダーに含まれないものはどれか　                A.顧客　 B.資源　　C.債権者　　D.地域社会');
			var label2 = new Label('10');
			var label3 = new Label('GOAL');
			var label4 = new Label('そして');
			var label5 = new Label('伝説へ');
			score.text = "スコア" + game_.score;
			label1.width = 370;
			label1.x = 10;
			label1.y = 190; 
			label2.font = "32px Palatino";
			label2.x = 53;
			label2.y = 110;
			label3.font = "32px Palation";
			label3.x = 135;
			label3.y = 110;
			label4.font = "32px Palation";
			label4.x = 242;
			label4.y = 110;
			label5.font = "32px Palation";
			label5.x = 350;
			label5.y = 110;
			scene.addChild(score);
			scene.addChild(label1);
			scene.addChild(label2);
			scene.addChild(label3);
			scene.addChild(label4);
			scene.addChild(label5);
			scene.addChild(kuma);
			//カード1作成
	var card1 = new Sprite(35,35);
		card1.x = 1; //x座標を指定
		card1.y = 250; //y座標を指定
		card1.image = game_.assets['card01.jpg'];
		scene.addChild(card1); //画面に画像を表示する
//カード2作成
	var card2 = new Sprite(35,35);
		card2.x = 50; //x座標を指定
		card2.y = 250; //y座標を指定
		card2.image = game_.assets['card02.jpg'];
		scene.addChild(card2); //画面に画像を表示する
//カード3作成
	var card3 = new Sprite(35,35);
		card3.x = 100; //x座標を指定
		card3.y = 250; //y座標を指定
		card3.image = game_.assets['card03.jpg'];
		scene.addChild(card3); //画面に画像を表示する
//カード4作成
	var card4 = new Sprite(35,35);
		card4.x = 150; //x座標を指定
		card4.y = 250; //y座標を指定
		card4.image = game_.assets['card04.jpg'];
		scene.addChild(card4); //画面に画像を表示する
			
			card1.addEventListener(Event.TOUCH_START, function(e) { // シーンにタッチイベントを設定
                //現在表示しているシーンの上にゲームオーバーシーンを重ねて表示させます
				game_.assets['Quiz2.mp3'].play();
                game_.replaceScene(createGameScene11());
            });
			card2.addEventListener(Event.TOUCH_START, function(e) { // シーンにタッチイベントを設定
                //現在表示しているシーンの上にゲームオーバーシーンを重ねて表示させます
                
				game_.score +=1;game_.replaceScene(createGameScene11());
				game_.assets['Quiz1.mp3'].play();
            });
			card3.addEventListener(Event.TOUCH_START, function(e) { // シーンにタッチイベントを設定
                //現在表示しているシーンの上にゲームオーバーシーンを重ねて表示させます
                game_.replaceScene(createGameScene11());
				game_.assets['Quiz2.mp3'].play();
				
            });
			card4.addEventListener(Event.TOUCH_START, function(e) { // シーンにタッチイベントを設定
                //現在表示しているシーンの上にゲームオーバーシーンを重ねて表示させます
                game_.replaceScene(createGameScene11());
				game_.assets['Quiz2.mp3'].play();
            });

            // この関数内で作ったシーンを呼び出し元に返します(return)
            return scene;
        };    
      var createGameScene11 = function() {

            var scene = new Scene(); 			// 新しいシーンを作る
			var label1 = new Label('ゴール！！あなたは10問中'+game_.score +'問正解しました。おめでとうございます🎉PM基礎知識のマスターです!!');
			var label2 = new Label('ゴール！！あなたは10問中'+game_.score +'問正解しました。満点まであと一歩');
			var label3 = new Label('ゴール！！あなたは10問中'+game_.score +'問正解しました。ある程度PM知識が身に付きました。');
			var label8 = new Label('ゴール！！あなたは10問中'+game_.score +'問正解です。もう少し頑張りましょう。');
			var label9 = new Label('ゴール！！あなたは10問中'+game_.score +'問正解です。残念、この問題を何度も解きなおしてください。');
			var label4 = new Label('GOAL');
			var label5 = new Label('そして');
			var label6 = new Label('伝説へ');
			var label7 = new Label('..........');
			label1.width = 370;
			label1.x = 10;
			label1.y = 190; 
			label2.width = 370;
			label2.x = 10;
			label2.y = 190; 
			label3.width = 370;
			label3.x = 10;
			label3.y = 190;
						
			label8.width = 370;
			label8.x = 10;
			label8.y = 190;
			label9.width = 370;
			label9.x = 10;
			label9.y = 190;
			label4.font = "32px Palatino";
			label4.x = 25;
			label4.y = 110;
			label5.font = "32px Palation";
			label5.x = 135;
			label5.y = 110;
			label6.font = "30px Palation";
			label6.x = 240;
			label6.y = 110;
			label7.font = "32px Palation";
			label7.x = 360;
			label7.y = 110;
			if(game_.score == 10){ 
			scene.addChild(label1);
			}else if(game_.score >= 8){
			scene.addChild(label2);
			}else if(game_.score >= 6){
			scene.addChild(label3);
			}else if(game_.score >= 4){
			scene.addChild(label8);
			}else {
			scene.addChild(label9);}
			
			scene.addChild(kuma);
			scene.addChild(label4);
			scene.addChild(label5);
			scene.addChild(label6);
			scene.addChild(label7);

			
			

            // この関数内で作ったシーンを呼び出し元に返します(return)
            return scene;



        };   		
        

        
        // ゲームの_rootSceneをタイトルシーンに置き換えます

        game_.replaceScene(createTitleScene());
        // このようにcreateTitleScene() と書くと、シーンが関数内で作成されて
        // createTitleScene()と書かれた場所に代入されます

    }

    game_.start(); // ゲームをスタートさせます

};
