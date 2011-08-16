/*
**	CONFIGURATION OBJECT
**
*/



/*** CONSTANTS ***/



var configConstructor = function() {
	
	relaxEnable = function() {
		clearInterval( bigInterval );
		bigInterval = window.setInterval( "aquarium.updateRelaxMode()", 2000 );
		document.getElementById( "statusEvent" ).style.backgroundPosition = "38px";
		document.getElementById( "statusEventIcon" ).style.background = "url(gfx/interface/alertLightIcon5.png)";
		document.getElementById( "statusEventIcon" ).style.display = "block";
	};

	relaxDisable = function() {
		clearInterval( bigInterval );
		bigInterval = window.setInterval( "aquarium.update()", 2000 );
		document.getElementById( "statusEvent" ).style.backgroundPosition = "0";	
		document.getElementById( "statusEventIcon" ).style.display = "none";	
	};
	
	this.relaxChange = function() {
		if( document.getElementById( "confRelaxMode" ).checked == true )
			relaxEnable();
		else
			relaxDisable();
		this.saveGame();
	};
	

	/*** NEW GAME ***/
	
	this.newGame = function() {
		fishShop.clearDerliveryTimer();
		fishShop.init();

		aquarium.resetAquarium();
		aquarium.addFish( 1, 0.9999 );
		//aquarium.addFish( 1, 0.9999 );
		
		computeBreedingRate();
		computeFishNumComfort();
		
		window.clearInterval( smallInterval );
		window.clearInterval( bigInterval );
		smallInterval	= window.setInterval( "aquarium.moveFish()", 128 );
		bigInterval		= window.setInterval( "aquarium.update()", 2000 );
		
		document.getElementById( "confRelaxMode" ).checked = false;
		
		updateBuyButtons();
		this.saveGame();
	}	
	
	
	// widget.preferenceForKey( "firstRun" );
	// widget.setPreferenceForKey( "value", "key" )
		
	this.checkFirstTime = function() {
		var firstRun = widget.preferenceForKey( "firstRun" );
		if( firstRun == "" ) {
			widget.setPreferenceForKey( "1", "firstRun" );
			return true;
		}
		else {
			return false;
		}
	}
	
	
	this.saveGame = function() {
		//dbg( "saving..." );
		aquarium.saveAquarium();
		fishShop.save();
	}
	
	this.loadGame = function() {
		//dbg( "loading..." );
		aquarium.loadAquarium();
		fishShop.load();
	}

	

	
	
	
	
	
}



var config = new configConstructor();

